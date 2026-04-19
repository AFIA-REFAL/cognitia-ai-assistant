import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { Groq } from 'groq-sdk';

dotenv.config();

const app = express();

// 1. Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5174"
}));

app.use(express.json());

// 2. MongoDB Schema & Model
const ChatSchema = new mongoose.Schema({
  userQuery: { type: String, required: true },
  aiResponse: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', ChatSchema);

// 3. MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 4. Groq AI Setup
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// 5. AI Route
app.post('/ask', async (req, res) => {
  const { query } = req.body;

  // Validation
  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    // Call Groq
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: query
        }
      ],
      model: "llama-3.1-8b-instant"
    });

    // FIXED: correct response extraction
    const responseText = completion?.choices?.[0]?.message?.content;

    if (!responseText) {
      throw new Error("Groq returned empty response");
    }

    // Save chat to MongoDB
    const savedChat = await Chat.create({
      userQuery: query,
      aiResponse: responseText
    });

    // Response to frontend
    res.json({
      answer: responseText,
      id: savedChat._id
    });

  } catch (error) {
    console.error("❌ AI Route Error:", error.message);

    res.status(500).json({
      error: "AI request failed",
      details: error.message
    });
  }
});

// 6. Optional: Get chat history (useful for frontend)
app.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chats" });
  }
});

// 7. Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 CORS allowed for: ${process.env.FRONTEND_URL || "http://localhost:5174"}`);
});

export default app;
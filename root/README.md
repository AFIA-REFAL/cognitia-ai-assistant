# 🤖  AI Chat Assistant (Round 2)

It is a full-stack AI-powered chat application built using the MERN-inspired architecture with seamless integration of the Groq LLM API.  
It demonstrates clean separation of frontend and backend, real-time API communication, and persistent chat logging.


##  🚀 Features

- 💬 Single-turn AI conversation (ask → response)
- 🧠 Powered by Groq’s `llama-3.1-8b-instant` model
- 💾 Stores all queries & responses in MongoDB Atlas
- 🔗 Fully decoupled frontend & backend architecture
- ⚡ Fast Vite-based React frontend
- 🌐 Ready for deployment on Vercel



## 🛠 Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | React + Vite      |
| Backend    | Node.js + Express |
| Database   | MongoDB Atlas     |
| AI Model   | Groq SDK          |
| API Comm   | Axios             |



## 📁 Project Structure


root/
│
├── frontend/ # React + Vite client
├── backend/ # Express API server
└── README.md




## ⚙️ Local Setup

### 1️⃣ Backend Setup

```bash
cd backend
npm install

Create .env file:

MONGODB_URI=your_mongodb_atlas_uri
GROQ_API_KEY=your_groq_api_key
FRONTEND_URL=http://localhost:5174

Run server:

npm start
2️⃣ Frontend Setup
cd frontend
npm install

Create .env file:

VITE_BACKEND_URL=http://localhost:5000

Run frontend:

npm run dev
🤖 COGNITIA – Round 2 Project Submission
Full-Stack Conversational AI Application
📌 Project Overview

This project is a full-stack AI-powered chat application built using a MERN-inspired architecture. It enables users to interact with an AI assistant by submitting a single query and receiving a generated response.

The system integrates the Groq API using the llama-3.1-8b-instant model and stores all interactions in MongoDB Atlas.

The architecture follows a clean separation between frontend and backend, ensuring scalability, maintainability, and independent deployment.

🎯 Objective

The application fulfills the following requirements:

Accept a user query
Send the query to an AI model via API
Display the response in a clean UI
Store both query and response in the database
🛠 Tech Stack
Backend
Node.js
Express.js
Groq SDK (LLM Integration)
MongoDB Atlas (Database)
Frontend
React (with Vite)
Axios (API communication)
📁 Project Structure
root/
│
├── frontend/     # React + Vite client
├── backend/      # Express API server
└── README.md
⚙️ Setup Instructions
1️⃣ Backend Setup
cd backend
npm install

Create a .env file:

MONGODB_URI=your_mongodb_atlas_uri
GROQ_API_KEY=your_groq_api_key
FRONTEND_URL=http://localhost:5173

Run the backend server:

npm start
2️⃣ Frontend Setup
cd frontend
npm install

Create a .env file:

VITE_BACKEND_URL=http://localhost:5000

Run the frontend:

npm run dev
⚡ Functional Requirements Implemented
Accepts one question at a time
Returns one AI-generated response
No continuous conversation (single-turn interaction only)
Stores:
User query
AI response
🌐 Deployment
Frontend (Vercel)
Deployed as a separate project
URL: https://cognitia-ai-assistant-w6sr.vercel.app
Backend (Vercel)
Deployed independently
URL: https://cognitia-ai-assistant.vercel.app
Repository
GitHub: https://github.com/AFIA-REFAL/cognitia-ai-assistant

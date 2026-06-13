# Cognitia AI Assistant

A simple AI-powered conversational assistant with a React frontend and an Express backend.

## Live Deployment

- Backend deployment: [Error](https://cognitia-ai-assistant-7kd2v38u4-24wh1a0577-9783s-projects.vercel.app/)
- Frontend deployment: [AI Assistant](https://cognitia-ai-assistant-w6sr.vercel.app/)

## Overview

This project includes:

- `root/backend`: Node.js + Express API server
- `root/frontend`: React app built with Vite
- MongoDB for chat persistence
- Groq AI for generating responses

## Features

- Send queries from the frontend to the backend
- Generate AI responses using Groq chat completions
- Save user queries and AI responses in MongoDB
- Fetch chat history from the backend

## Tech Stack

- Frontend: React, Vite, Axios
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas
- AI: Groq SDK

## Project Structure

```
root/
  backend/
    package.json
    server.js
    .env
  frontend/
    package.json
    vite.config.js
    src/
      app.jsx
      main.jsx
      app.css
```

## Local Setup

1. Install dependencies for backend and frontend:

```bash
cd root/backend
npm install
cd ../frontend
npm install
```

2. Create environment files:

- `root/backend/.env`
  - `MONGODB_URI` - MongoDB connection string
  - `GROQ_API_KEY` - Groq API key
  - `FRONTEND_URL` - frontend origin (e.g. `http://localhost:5173`)

- `root/frontend/.env`
  - `VITE_BACKEND_URL=http://localhost:5000`

3. Run backend and frontend:

```bash
cd root/backend
npm start

cd ../frontend
npm run dev
```

4. Open the frontend app at:

```text
http://localhost:5173
```

## Notes

- If you see CORS issues, verify `FRONTEND_URL` in `root/backend/.env` matches the frontend origin.
- The backend route for AI requests is `POST /ask`.


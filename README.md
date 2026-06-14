# Cognitia AI Assistant

An AI-powered conversational assistant built with React, Express, MongoDB, and Groq AI.
  
## Live Demo

* Frontend: https://cognitia-ai-assistant-w6sr.vercel.app
* Backend API: https://cognitia-ai-assistant-7kd2v38u4-24wh1a0577-9783s-projects.vercel.app

## Overview

Cognitia AI Assistant enables users to interact with an AI chatbot through a modern web interface. User conversations are stored in MongoDB and AI responses are generated using Groq's language models.

## Features

* AI-powered chat interface
* Real-time responses using Groq AI
* MongoDB chat history storage
* RESTful Express backend
* Responsive React frontend

## Tech Stack

### Frontend

* React
* Vite


### Backend

* Node.js
* Mongoose

### Database

* MongoDB Atlas

### AI Integration

* Groq SDK

## Project Structure

```text
Root/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── .env
└── frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── App.css
```

## Local Setup

### 1. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Configure Environment Variables

Backend (`backend/.env`)

```env
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
FRONTEND_URL=http://localhost:5173
```

Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:5000
```

### 3. Start the Application

Backend:

```bash
cd backend
npm start
```

Frontend:

```bash
cd frontend
npm run dev
```

### 4. Open in Browser

```text
http://localhost:5173
```

## API Endpoint

### Generate AI Response

```http
POST /ask
```

### Fetch Chat History

```http
GET /history
```

## Notes

* Ensure MongoDB Atlas is accessible from your deployment environment.
* Verify CORS settings if frontend requests fail.
* Make sure environment variables are configured correctly on Vercel.

## Author

Developed as a full-stack AI assistant project using React, Express, MongoDB, and Groq AI.

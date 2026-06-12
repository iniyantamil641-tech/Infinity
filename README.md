# INFINITY — The AI Career Accelerator

**INFINITY** is a premium, high-fidelity platform designed to optimize your professional growth through AI-driven coaching, strategic planning, and automated career roadmaps.

![INFINITY Hero Banner](./client/public/hero_neural_nexus.png)

## 🌌 Core Features

- **🧠 Neural Command Center**: Performance analytics and dynamic momentum tracking based on your professional trajectory.
- **💬 AI Communication Coach**: Real-time tone analysis and sentiment interception for emails, Slack, and professional messages.
- **⚡ AI Code Oracle**: Intelligent technical refinement, bug detection, and instant refactors in 30+ programming languages.
- **🎯 Autonomous Career Roadmap**: Predictive execution and real-time skill acquisition visualization with deep gap analysis.
- **📄 Neural Resume Scanning**: Deep-parsing and gap-closure strategies tailored for specific job descriptions.
- **📅 Strategic Planner**: High-density daily and weekly alignment.

## 🚀 Smart Onboarding
1. **Neural Synchronization**: Connects with LinkedIn, GitHub, and your professional portfolio.
2. **Tone Calibration**: Learns your writing style and nuance through a 5-minute diagnostic chat.
3. **Goal Rendering**: Defines your North Star and autonomously generates a path to get there.

## 🛠️ Tech Stack & Deployment

This project uses a modern monorepo architecture separating the Vite-React frontend and the FastAPI/Python backend.

### Frontend (Vercel)
The frontend is built with React, Vite, and customized CSS (Glassmorphism & Neon aesthetics) for blazing-fast global delivery.
```bash
cd client
npm install
npm run dev
```

### Backend (FastAPI / Local)
The neural engine is powered by Python and FastAPI with SQLite storage.
```bash
cd server
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

## 🌐 Production Vercel Configuration
The included `vercel.json` is optimized to deploy the Vite frontend and proxy `/api` traffic to your production backend. 

---
> [!NOTE]
> Engineered for ambitious professionals aiming to bridge the gap between effort and actual impact.

# Expnza - Personal Spending Tracker

A full-stack web application for tracking personal expenses and income, built with React, Node.js, Express, and MongoDB.

## 🚀 Live Demo

- **Frontend**: [https://expnza-frontend.onrender.com](https://expnza-frontend.onrender.com)
- **Backend API**: [https://expnza-backend.onrender.com](https://expnza-backend.onrender.com)

## 🔍 Demo Account

For quick testing without registration:

**Email:** `demo@expnza.com`  
**Password:** `demo1234`

## ✨ Features

- 📊 Track expenses and income with detailed categories
- 📈 Visual charts and analytics (pie charts, line charts, bar charts)
- 💰 Financial overview dashboard
- 📥 Download data as Excel files
- 🔐 User authentication with JWT
- 📱 Responsive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- React 19.1.1
- Vite 7.1.2
- Tailwind CSS 4.1.12
- React Router 7.8.1
- Recharts 3.1.2
- Axios 1.11.0

### Backend

- Node.js with Express 5.1.0
- MongoDB with Mongoose 8.17.2
- JWT Authentication
- ExcelJS 4.4.0 for Excel exports
- Multer for file uploads

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB

### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
# PORT=8000

npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🚢 Deployment

- Backend deployed on Render (Web Service)
- Frontend deployed on Render (Static Site)
- Database hosted on MongoDB Atlas

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

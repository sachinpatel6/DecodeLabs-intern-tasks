# Know Your Rights India

A responsive full-stack educational website designed to make basic legal rights and constitutional protections in India easier to understand for everyday citizens.

Built during the **Decode Labs Full Stack Development Internship**, this repository contains all three internship projects:

- **Project 1:** Responsive Frontend
- **Project 2:** Backend REST API
- **Project 3:** MongoDB CRUD Integration

---

## 🌐 Live Demo

https://know-your-rights-india.netlify.app

---

# Project Overview

Many people are unaware of their legal rights and protections under Indian law. This project provides simplified information about:

- Fundamental Rights
- Daily Legal Protections
- Hidden Laws
- Frequently Asked Questions (FAQ)

The application uses a responsive frontend with a backend REST API and MongoDB database to deliver and manage data efficiently.

---

# Repository Structure

```
DecodeLabs-intern-tasks/
│
├── pr-1responsive frontend/          → Project 1: Responsive Frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── pr-2backend API/                  → Project 2: Backend REST API
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   └── data/
│
└── pr-3MongoDB CURD/                 → Project 3: MongoDB CRUD Integration
    ├── server.js
    ├── package.json
    ├── package-lock.json
    ├── models/
    │   └── Feedback.js
    ├── routes/
    │   └── rights.js
    ├── data/
    │   └── rightsData.js
    └── .gitignore
```

---

# Features

## Project 1 (Frontend)

- Responsive Design
- Modern UI
- Mobile Friendly Layout
- English / Hindi Language Toggle
- Fundamental Rights Section
- Daily Protection Rights
- Hidden Laws Section
- Interactive FAQ
- Smooth Navigation

---

## Project 2 (Backend API)

- Express.js REST API
- Dynamic Content Loading
- API Endpoints
- JSON Data Handling

---

## Project 3 (MongoDB CRUD)

- MongoDB Atlas Integration
- Mongoose Schema
- Feedback Storage
- Create Feedback
- Read Feedback
- Update Feedback
- Delete Feedback
- Environment Variables (.env)
- Postman API Testing

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

---

# API Endpoints

### Rights

```
GET /api/rights/basics
GET /api/rights/daily
GET /api/rights/hidden
GET /api/rights/faq
```

### Feedback CRUD

```
POST   /api/rights/feedback
GET    /api/rights/feedback
PUT    /api/rights/feedback/:id
DELETE /api/rights/feedback/:id
```

---

# Run Project Locally

## Backend

```bash
cd "pr-3MongoDB CURD"
npm install
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## Frontend

Open:

```
index.html
```

using **Live Server** in VS Code.

---

# Author

**Sachin Patel**

Full Stack Development Intern @ Decode Labs

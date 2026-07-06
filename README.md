# Know Your Rights India

A responsive full-stack educational website designed to make basic legal rights and constitutional protections in India easier to understand for everyday citizens.

Built during the **Decode Labs Full Stack Development Internship**, this repository contains all four internship projects:

- **Project 1:** Responsive Frontend
- **Project 2:** Backend REST API
- **Project 3:** MongoDB CRUD API
- **Project 4:** Full Stack Integration (Frontend + Backend + MongoDB)

---

# 🌐 Live Demo

https://know-your-rights-india.netlify.app

---

# Project Overview

Many people are unaware of their legal rights and protections under Indian law. This project provides simplified information about:

- Fundamental Rights
- Daily Legal Protections
- Hidden Laws
- Frequently Asked Questions (FAQ)
- Feedback System

The final version integrates a responsive frontend with a Node.js backend and MongoDB Atlas database to provide dynamic legal information and store user feedback.

---

# Repository Structure

```text
DecodeLabs-intern-tasks/

├── pr-1responsive frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── pr-2backend API/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   └── data/
│
├── pr-3MongoDB CURD/
│   ├── models/
│   ├── routes/
│   ├── data/
│   ├── server.js
│   └── package.json
│
└── pr-4FullStack Integration/
    ├── frontend/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    │
    └── backend/
        ├── data/
        ├── models/
        ├── routes/
        ├── server.js
        ├── package.json
        └── package-lock.json
```

---

# Features

## Project 1 - Responsive Frontend

- Responsive Design
- Mobile Friendly Layout
- Modern UI
- English / Hindi Language Toggle
- Smooth Navigation

---

## Project 2 - Backend API

- Express.js REST API
- Dynamic JSON Data
- REST Endpoints
- API Integration

---

## Project 3 - MongoDB CRUD

- MongoDB Atlas
- Mongoose Models
- CRUD Operations
- Feedback Storage

---

## Project 4 - Full Stack Integration

- Responsive Frontend
- Express.js Backend
- MongoDB Atlas Integration
- Feedback Form Connected to Database
- English / Hindi Translation
- Dynamic API Data
- Input Validation
- REST API
- Mobile Responsive Design

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

---

# API Endpoints

## Rights

```http
GET /api/rights/basics
GET /api/rights/daily
GET /api/rights/hidden
GET /api/rights/faq
```

## Feedback

```http
POST   /api/rights/feedback
GET    /api/rights/feedback
PUT    /api/rights/feedback/:id
DELETE /api/rights/feedback/:id
```

---

# Run Project Locally

## Backend

```bash
cd "pr-4FullStack Integration/backend"
npm install
npm start
```

Server:

```text
http://localhost:5000
```

---

## Frontend

Open:

```text
pr-4FullStack Integration/frontend/index.html
```

using **Live Server** in VS Code.

---

# Author

**Sachin Patel**

Full Stack Development Intern @ Decode Labs

const express = require("express");
const router = express.Router();
const { basicsData, dailyData, hiddenData, faqData } = require("../data/rightsData");

// In-memory storage for feedback messages submitted by users.
// (This resets every time the server restarts - that's fine for a learning project.)
const feedbackList = [];


// GET /api/rights/basics

router.get("/basics", (req, res) => {
  res.status(200).json(basicsData);
});


// GET /api/rights/daily

router.get("/daily", (req, res) => {
  res.status(200).json(dailyData);
});


// GET /api/rights/hidden

router.get("/hidden", (req, res) => {
  res.status(200).json(hiddenData);
});


// GET /api/rights/faq

router.get("/faq", (req, res) => {
  res.status(200).json(faqData);
});


// POST /api/rights/feedback
// User submits a question or comment about a right.

router.post("/feedback", (req, res) => {
  const { name, message } = req.body;

  // Basic validation - never trust the client.
  if (!name || !message) {
    return res.status(400).json({
      error: "Both 'name' and 'message' fields are required."
    });
  }

  if (message.trim().length < 5) {
    return res.status(400).json({
      error: "Message is too short. Please write at least 5 characters."
    });
  }

  const newFeedback = {
    id: feedbackList.length + 1,
    name,
    message,
    submittedAt: new Date().toISOString()
  };

  feedbackList.push(newFeedback);

  res.status(201).json({
    success: true,
    message: "Thank you, your feedback has been received.",
    data: newFeedback
  });
});


// GET /api/rights/feedback
// (just to view what has been submitted so far - useful while testing)

router.get("/feedback", (req, res) => {
  res.status(200).json(feedbackList);
});

module.exports = router;

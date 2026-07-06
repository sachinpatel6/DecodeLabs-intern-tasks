const Feedback = require("../models/Feedback");
const express = require("express");
const router = express.Router();
const { basicsData, dailyData, hiddenData, faqData } = require("../data/rightsData");

// In-memory storage for feedback messages submitted by users.
// (This resets every time the server restarts - that's fine for a learning project.)


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

// POST /api/rights/feedback
// Ab MongoDB mein save hoga
router.post("/feedback", async (req, res) => {
  const { name, message } = req.body;

  // Validation
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

  try {
    // MongoDB mein save karo
    const newFeedback = new Feedback({ name, message });
    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: "Thank you, your feedback has been received.",
      data: newFeedback
    });
  } catch (err) {
    res.status(500).json({
      error: "Something went wrong while saving feedback."
    });
  }
});

// GET /api/rights/feedback
// Ab MongoDB se read karega
router.get("/feedback", async (req, res) => {
  try {
    const allFeedback = await Feedback.find().sort({ submittedAt: -1 });
    res.status(200).json(allFeedback);
  } catch (err) {
    res.status(500).json({
      error: "Could not fetch feedback."
    });
  }
});


// GET /api/rights/feedback
// (just to view what has been submitted so far - useful while testing)



module.exports = router;

// PUT /api/rights/feedback/:id
// Existing feedback update karega

router.put("/feedback/:id", async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after", runValidators: true }
    );

    if (!updatedFeedback) {
      return res.status(404).json({
        error: "Feedback not found."
      });
    }

    res.status(200).json({
      success: true,
      data: updatedFeedback
    });

  } catch (err) {
    res.status(500).json({
      error: "Could not update feedback."
    });
  }
});

// DELETE /api/rights/feedback/:id

router.delete("/feedback/:id", async (req, res) => {

  try {

    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!deletedFeedback) {
      return res.status(404).json({
        error: "Feedback not found."
      });
    }

    res.status(200).json({
      success: true,
      message: "Feedback deleted successfully."
    });

  } catch (err) {
    res.status(500).json({
      error: "Could not delete feedback."
    });
  }

});
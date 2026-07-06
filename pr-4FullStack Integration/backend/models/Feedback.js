const mongoose = require("mongoose");

// Schema = database ka blueprint
// Ye define karta hai ki feedback ka data kaisa store hoga
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // name khali nahi ho sakta
  },
  message: {
    type: String,
    required: true,
    minlength: 5    // kam se kam 5 characters
  },
  submittedAt: {
    type: Date,
    default: Date.now  // automatically current time save hoga
  }
});

// Model banao schema se
const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
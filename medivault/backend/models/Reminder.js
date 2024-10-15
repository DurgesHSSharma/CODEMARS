const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  medication: { type: String, required: true },
  time: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Reminder", reminderSchema);

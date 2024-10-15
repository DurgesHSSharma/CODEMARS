const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Appointment", appointmentSchema);

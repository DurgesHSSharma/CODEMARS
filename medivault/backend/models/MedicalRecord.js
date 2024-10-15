const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  type: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);

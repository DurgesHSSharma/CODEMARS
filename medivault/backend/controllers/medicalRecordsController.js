const MedicalRecord = require("../models/MedicalRecord");

exports.uploadMedicalRecord = async (req, res) => {
  const { fileUrl, type, userId } = req.body;
  try {
    const newRecord = await MedicalRecord.create({ fileUrl, type, userId });
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find({ userId: req.params.userId });
    res.json(records);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

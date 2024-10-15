// backend/routes/medicalRecords.js

const express = require('express');
const router = express.Router();
const MedicalRecord = require('../models/MedicalRecord'); // Assuming you have a MedicalRecord model

// API to fetch all medical records
router.get('/', async (req, res) => {
  try {
    const records = await MedicalRecord.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API to create a new medical record
router.post('/', async (req, res) => {
  const record = new MedicalRecord({
    patientId: req.body.patientId, // Assuming you have patientId in the request body
    documentType: req.body.documentType, // e.g., Lab Report, Prescription, etc.
    date: req.body.date,
    details: req.body.details, // Other relevant information
  });

  try {
    const newRecord = await record.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// API to update a medical record by ID
router.put('/:id', async (req, res) => {
  try {
    const record = await MedicalRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ message: 'Record not found' });

    record.documentType = req.body.documentType || record.documentType;
    record.date = req.body.date || record.date;
    record.details = req.body.details || record.details;

    const updatedRecord = await record.save();
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// API to delete a medical record by ID
router.delete('/:id', async (req, res) => {
  try {
    const record = await MedicalRecord.findById(req.params.id);
    if (!record) return res.status(404).json({ message: 'Record not found' });

    await record.remove();
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

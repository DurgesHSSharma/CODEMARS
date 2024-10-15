// backend/routes/reminders.js

const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder'); // Assuming you have a Reminder model

// API to fetch all reminders
router.get('/', async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API to create a new reminder
router.post('/', async (req, res) => {
  const reminder = new Reminder({
    userId: req.body.userId, // Assuming you have userId in the request body
    medication: req.body.medication,
    time: req.body.time, // Time for the reminder
    notes: req.body.notes, // Any additional notes
  });

  try {
    const newReminder = await reminder.save();
    res.status(201).json(newReminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// API to update a reminder by ID
router.put('/:id', async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) return res.status(404).json({ message: 'Reminder not found' });

    reminder.medication = req.body.medication || reminder.medication;
    reminder.time = req.body.time || reminder.time;
    reminder.notes = req.body.notes || reminder.notes;

    const updatedReminder = await reminder.save();
    res.json(updatedReminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// API to delete a reminder by ID
router.delete('/:id', async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) return res.status(404).json({ message: 'Reminder not found' });

    await reminder.remove();
    res.json({ message: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

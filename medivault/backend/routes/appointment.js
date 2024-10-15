const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Appointment model

// API to fetch all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);  // Respond with the list of appointments
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API to create a new appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    doctor: req.body.doctor,
    date: req.body.date,
    location: req.body.location,
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);  // Respond with the newly created appointment
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

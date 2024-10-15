const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  const { doctor, date, location, userId } = req.body;
  try {
    const newAppointment = await Appointment.create({ doctor, date, location, userId });
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

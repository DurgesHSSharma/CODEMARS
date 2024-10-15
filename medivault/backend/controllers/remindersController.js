const Reminder = require("../models/Reminder");

exports.createReminder = async (req, res) => {
  const { medication, time, userId } = req.body;
  try {
    const newReminder = await Reminder.create({ medication, time, userId });
    res.status(201).json(newReminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.params.userId });
    res.json(reminders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

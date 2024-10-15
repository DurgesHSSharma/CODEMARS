import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchReminders = async () => {
      const res = await axios.get(`/api/reminders/${localStorage.getItem('userId')}`);
      setReminders(res.data);
    };
    fetchReminders();
  }, []);

  return (
    <div>
      <h2>Your Medication Reminders</h2>
      <ul>
        {reminders.map(reminder => (
          <li key={reminder._id}>
            {reminder.medication} - {reminder.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminders;

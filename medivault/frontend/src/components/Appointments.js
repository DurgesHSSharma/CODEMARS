import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await axios.get(`/api/appointments/${localStorage.getItem('userId')}`);
      setAppointments(res.data);
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            {appointment.doctor} - {appointment.date} at {appointment.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;

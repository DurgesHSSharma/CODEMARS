import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <Link to="/appointments">View Appointments</Link>
        <br />
        <Link to="/medical-records">View Medical Records</Link>
        <br />
        <Link to="/reminders">View Reminders</Link>
      </div>
    </div>
  );
};

export default Dashboard;

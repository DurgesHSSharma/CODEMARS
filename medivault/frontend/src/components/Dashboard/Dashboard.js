import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="side-panel">
        <h2>User Name</h2>
        <ul>
          <li>Dashboard (Home)</li>
          <li>Medical Records</li>
          <li>Appointments</li>
          <li>Family Profiles</li>
          <li>Reminders</li>
          <li>Help</li>
          <li><a href="/">Log Out</a></li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <header>
          <h1>Welcome Ayush Kumar!</h1>
          <button className="upload-btn">Upload Document</button>
          <button className="book-btn">Book Appointment</button>
        </header>

        <section className="health-overview">
          <div className="overview-card">
            <h2>Overview of Your Health</h2>
            <p>Checkup Schedule</p>
            <p>Upcoming: Dental Checkup with Dr. Priya Sharma - Oct 20, 2024</p>
          </div>
        </section>

        <section className="appointments-section">
          <h2>Upcoming Appointments</h2>
          <div className="appointment">
            <h3>Doctor: Palak</h3>
            <p>Date: 11/12/2024</p>
            <p>Location: Vishnu Garden</p>
          </div>
          {/* Add more appointments here */}
        </section>

        <section className="recent-documents">
          <h2>Recent Medical Documents</h2>
          <div className="documents-grid">
            <div className="document">LAB REPORTS</div>
            <div className="document">PRESCRIPTIONS</div>
            <div className="document">X-RAYS</div>
            <div className="document">MEDICAL BILLS</div>
          </div>
        </section>

        <section className="reminders-section">
          <h2>Medication Reminders</h2>
          <div className="reminder">Blood Pressure Measure - 07:30 AM</div>
          {/* Add more reminders here */}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;

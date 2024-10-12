import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="logo">HealthTrack</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login">Login/Register</a></li>
          </ul>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-text">All Your Health Records in One Place.</h1>
          <p className="hero-description">
            Access your health data, book appointments, and manage your family's care—hassle-free.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="../assets/ss.png" alt="Health Records Demo" className="image-fade-in" />
        </div>
      </main>
    </div>
  );
}

export default Home;

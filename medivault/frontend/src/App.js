import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home'; // Import the Home component
import PrivateRoute from './utils/PrivateRoute';
import Appointments from './components/Appointments';
import MedicalRecords from './components/MedicalRecords';
import Reminders from './components/Reminders';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page as the primary route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Wrap protected routes inside PrivateRoute */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} /> {/* Updated */}
            <Route path="/medical-records" element={<MedicalRecords />} /> {/* Updated */}
            <Route path="/reminders" element={<Reminders />} /> {/* Updated */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


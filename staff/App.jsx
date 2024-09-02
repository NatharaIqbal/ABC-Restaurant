import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StaffLogin from './staff/StaffLogin';
import StaffDashboard from './staff/StaffDashboard';
import Home from './Home'; // Your main app component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/staff/login" element={<StaffLogin />} />
                <Route path="/staff/dashboard" element={<StaffDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;

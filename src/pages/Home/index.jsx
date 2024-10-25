import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../Login';
import Reviews from '../Reviews/Reviews';
import ReviewPosts from '../Reviews/ReviewPosts';
import MyNavbar from '../../components/Navbar';
import Dashboard from '../Dashboard';
import Footer from '../../components/Footer';



function HomeWrapper() {
  return (
    <Router>
      <MyNavbar /> {/* Navbar */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/register" element={<Login />} /> {/* Register Page, reutilizando o Login */}
        <Route path="/reviews" element={<Reviews />} /> {/* Reviews Page */}
        <Route path="/reviews/:reviewId/posts" element={<ReviewPosts />} /> {/* Show Posts in Reviews Page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
      </Routes>
      <Footer /> {/* Footer */}
    </Router>
  );
}

export default HomeWrapper;
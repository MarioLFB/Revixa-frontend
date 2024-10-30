import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../Login';
import Register from '../Register';
import Reviews from '../Reviews/Reviews';
import ReviewPosts from '../Reviews/ReviewPosts';
import MyNavbar from '../../components/Navbar';
import Dashboard from '../Dashboard';
import Footer from '../../components/Footer';
import AccountSettings from '../AccountSettings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomeWrapper() {
  return (
    <Router>
      <MyNavbar /> {/* Navbar component */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/register" element={<Register />} /> {/* Register Page using the Register component */}
        <Route path="/reviews" element={<Reviews />} /> {/* Reviews Page */}
        <Route path="/reviews/:reviewId/posts" element={<ReviewPosts />} /> {/* Displays posts in Reviews Page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
        <Route path="/account-settings" element={<AccountSettings />} /> {/* Account Settings Page */}
      </Routes>
      <Footer /> {/* Footer component */}
    </Router>
  );
}

export default HomeWrapper;

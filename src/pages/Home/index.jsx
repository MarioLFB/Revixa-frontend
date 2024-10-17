import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../Login';
import Reviews from '../Reviews/Reviews';
import ReviewPosts from '../Reviews/ReviewPosts';



function HomeWrapper() {
  return (
    <Router> {/* Definindo o roteamento */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/reviews" element={<Reviews />} /> {/* Reviews Page */}
        <Route path="/reviews/:reviewId/posts" element={<ReviewPosts />} /> {/* Show Posts in Reviews Page */}
      </Routes>
    </Router>
  );
}

export default HomeWrapper;
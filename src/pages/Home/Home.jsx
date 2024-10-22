import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Reviews from '../Reviews/Reviews';

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-4">
      <h1>Revixa Home Page</h1>
      <Reviews />
      {user ? (
        <div>
        </div>
      ) : (
        <h2>Please log in to view or create posts.</h2>
      )}
    </div>
  );
}

export default Home;

import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Reviews from '../Reviews/Reviews';

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-4">
      <h1>Revixa Home Page</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <Reviews />
        </div>
      ) : (
        <h2>Please log in to access the content.</h2>
      )}
    </div>
  );
}

export default Home;

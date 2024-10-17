import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Login from '../Login';
import Reviews from '../Reviews/Reviews';

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Revixa Home Page</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
          <Reviews />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;

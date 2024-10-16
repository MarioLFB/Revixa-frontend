import React, { useContext } from 'react';
import AuthContext, { AuthProvider } from '../../context/AuthContext';
import Login from '../Login';
import Reviews from '../../components/Reviews';


function Home() {
  const { user, login, logout } = useContext(AuthContext);

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


function HomeWrapper() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default HomeWrapper;
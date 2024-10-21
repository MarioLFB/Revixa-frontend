import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function MyNavbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">Revixa</Link>
          </Navbar.Brand>
          <div className="ml-auto">
            {user ? (
              <>
                <span className="navbar-text me-3">Hello, {user.username}</span>
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">Revixa</Link>
          </Navbar.Brand>
          <div className="ml-auto">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;

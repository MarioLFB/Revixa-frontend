import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import styled from 'styled-components';


const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(270deg, #FFDB73, #FE824D, #FF6347, #FFA07A);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: none;
  font-family: 'Pacifico', sans-serif;
`;

const LoginButton = styled(Link)`
  background-color: #ff7f50; /* Cor laranja */
  color: white; /* Texto branco */
  padding: 10px 20px;
  border-radius: 5px; /* Bordas ligeiramente arredondadas para manter o botão retangular */
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    background-color: #e67345; /* Cor laranja mais escura no hover */
    color: white;
  }
`;

function MyNavbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand>
            <Logo to="/" className="navbar-brand">Revixa</Logo>
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
              <LoginButton to="/login">
                Login
              </LoginButton>
            )}
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;

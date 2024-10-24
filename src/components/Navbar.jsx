import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(270deg, #ffdb73, #fe824d, #ff6347, #ffa07a);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: none;
  font-family: "Pacifico", sans-serif;
  padding: 5rem;
`;

function MyNavbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand>
          <Logo to="/" className="navbar-brand">
            Revixa
          </Logo>
        </Navbar.Brand>
        <div className="ms-auto me-5">
          {user ? (
            <>
              <span className="navbar-text me-3 p-5">Hello, {user.username}</span>
              <PrimaryButton as="button" onClick={logout}>
                Logout
              </PrimaryButton>
            </>
          ) : (
            <PrimaryButton to="/login">Login</PrimaryButton>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

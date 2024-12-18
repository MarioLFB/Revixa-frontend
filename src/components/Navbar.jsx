import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleShowLogoutModal = () => setShowLogoutModal(true);
  const handleCloseLogoutModal = () => setShowLogoutModal(false);

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand>
            <Logo to="/" className="navbar-brand">
              Revixa
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {user ? (
                <>
                  <span className="navbar-text me-3">Hello, {user.username}</span>
                  <PrimaryButton to="/account-settings" className="me-2 mb-2">
                    User Account
                  </PrimaryButton>
                  <PrimaryButton as="button" className="mb-2" onClick={handleShowLogoutModal}>
                    Logout
                  </PrimaryButton>
                </>
              ) : (
                <PrimaryButton to="/login">Login</PrimaryButton>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogoutModal} onHide={handleCloseLogoutModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogoutModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmLogout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyNavbar;

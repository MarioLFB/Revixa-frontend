import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
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

const CenteredContainer = styled.div`
  background-color: #ff7f50;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
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
        <Container fluid className="justify-content-between">
          <Navbar.Brand>
            <Logo to="/" className="navbar-brand">
              Revixa
            </Logo>
          </Navbar.Brand>

          {user && (
            <CenteredContainer>
              <CenteredLink to="/account-settings">User Account</CenteredLink>
            </CenteredContainer>
          )}

          <div className="d-flex align-items-center">
            {user ? (
              <>
                <span className="navbar-text me-3 p-5">
                  Hello, {user.username}
                </span>
                <PrimaryButton as="button" onClick={handleShowLogoutModal}>
                  Logout
                </PrimaryButton>
              </>
            ) : (
              <PrimaryButton to="/login">Login</PrimaryButton>
            )}
          </div>
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

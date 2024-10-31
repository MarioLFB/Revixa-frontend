import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {
  getUserProfile,
  updateEmail,
  updatePassword,
} from "../../services/user";
import styled from "styled-components";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const UserInfo = styled.div`
  margin-bottom: 30px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

const UserInfoItem = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Form = styled.form`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ff7f50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #e67345;
    color: white;
  }
`;

function AccountSettings() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserProfile();
        setUserData(data);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <p>You need to be logged in to access this page.</p>;
  }

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateEmail(email);
      toast.success("Email updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Failed to update email.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("The new password must be at least 6 characters long.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
    setShowPasswordModal(true);
  };

  const handlePasswordUpdateConfirm = async () => {
    setShowPasswordModal(false);
    try {
      await updatePassword(currentPassword, newPassword);
      toast.success("Password updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Failed to update password.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <Container>
      <Title>Account Settings</Title>

      {userData ? (
        <UserInfo>
          <h2>Your Information</h2>
          <UserInfoItem>
            <strong>Username:</strong> {userData.username}
          </UserInfoItem>
          <UserInfoItem>
            <strong>Email:</strong> {userData.email}
          </UserInfoItem>
        </UserInfo>
      ) : (
        <p>Loading user data...</p>
      )}

      <Form onSubmit={handleEmailUpdate}>
        <h2>Update Email</h2>
        <Label htmlFor="email">New Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit">Update Email</SubmitButton>
      </Form>

      <Form onSubmit={handlePasswordUpdate}>
        <h2>Update Password</h2>
        <Label htmlFor="currentPassword">Current Password:</Label>
        <Input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <Label htmlFor="newPassword">New Password:</Label>
        <Input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">Update Password</SubmitButton>
      </Form>

      <Modal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Password Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to update your password?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowPasswordModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handlePasswordUpdateConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AccountSettings;

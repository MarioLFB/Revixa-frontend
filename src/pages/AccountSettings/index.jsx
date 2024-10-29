import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { getUserProfile, updateEmail } from "../../services/user";
import styled from "styled-components";

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
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");

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

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setEmailError("");
    setEmailSuccess("");

    try {
      await updateEmail(email);
      setEmailSuccess("Email updated successfully!");
    } catch (error) {
      console.error("Error updating email:", error);
      setEmailError("Failed to update email.");
    }
  };

  if (!user) {
    return <p>You need to be logged in to access this page.</p>;
  }

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
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        {emailSuccess && <p style={{ color: "green" }}>{emailSuccess}</p>}
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
    </Container>
  );
}

export default AccountSettings;

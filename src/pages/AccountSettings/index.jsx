import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
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

function AccountSettings() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>You need to be logged in to access this page.</p>;
  }

  return (
    <Container>
      <Title>Account Settings</Title>
      <p>Loading user data...</p>
    </Container>
  );
}

export default AccountSettings;
import React from 'react';
import styled from 'styled-components';

const Page404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ff7f50;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #ff7f50;
  background-color: #fff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f6e5d3;
    color: #ff7f50;
  }
`;

const Page404 = () => {
  return (
    <Page404Container>
      <Heading>404</Heading>
      <Message>Oops! Page not found.</Message>
      <Button href="/">Go Back Home</Button>
    </Page404Container>
  );
};

export default Page404;

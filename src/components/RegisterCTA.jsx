import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const CTAContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: linear-gradient(270deg, #ffdb73, #fe824d, #ff6347, #ffa07a);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-top: 20px;
`;

const TextContent = styled.div`
  flex: 1;
  text-align: center;
  
  h2 {
    font-family: 'Pacifico', sans-serif;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 20px;
  }
`;

const RegisterCTA = () => {
  return (
    <CTAContainer>
      <TextContent>
        <h2>Join Revixa Today</h2>
        <p>
          Share your knowledge and experience. Help others choose the best frameworks
          for their projects.
        </p>
        <PrimaryButton as={Link} to="/register">
          Sign up now
        </PrimaryButton>
      </TextContent>
    </CTAContainer>
  );
};

export default RegisterCTA;

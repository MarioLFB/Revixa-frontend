import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterSection = styled.div`
  margin: 10px 0;
`;

const SocialLinks = styled.div`
  margin: 15px 0;
  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #ff7f50;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <p>&copy; {new Date().getFullYear()} Revixa. All rights reserved.</p>
      </FooterSection>

      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialLinks>
      
      <FooterSection>
        <p>Contact us at: support@revixa.com</p>
      </FooterSection>
    </FooterWrapper>
  );
};

export default Footer;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryButton = styled(Link)`
  background-color: #ff7f50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  border: none;
  display: inline-block;

  &:hover {
    background-color: #e67345;
    color: white;
    text-decoration: none;
  }
`;

export default PrimaryButton;

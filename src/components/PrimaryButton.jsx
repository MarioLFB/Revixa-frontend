import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: #ff7f50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: #e67345;
  }
`;

export default PrimaryButton;

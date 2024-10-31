import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Form } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import PrimaryButton from "../../components/PrimaryButton";
import { toast } from "react-toastify";

const moveGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const RegisterWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #ffdb73, #fe824d, #ff6347, #ffa07a);
  background-size: 400% 400%;
  animation: ${moveGradient} 15s ease infinite;
`;

const FormContainer = styled.div`
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Pacifico", sans-serif;
  font-size: 3rem;
  color: #333;
`;

const StyledLink = styled(Link)`
  color: #333;
  font-family: "Pacifico", sans-serif;
  text-decoration: none;
`;

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!username || !email || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-center",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    try {
      await register({ username, email, password });
      navigate("/dashboard");
    } catch (err) {
      console.error("Error in handleSubmit:", err);

      let errorMessage = "Registration error. Please try again.";

      if (err.response && err.response.data) {
        const errorData = err.response.data;

        if (errorData.username) {
          errorMessage = `Username error: ${errorData.username[0]}`;
        } else if (errorData.email) {
          errorMessage = `Email error: ${errorData.email[0]}`;
        }
      } else if (err.message) {
        errorMessage = err.message;
      }

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterWrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title className="mb-4">Register</Title>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <PrimaryButton as="button" type="submit" disabled={loading}>
            {loading ? "Processing..." : "Register"}
          </PrimaryButton>

          <div className="mt-4">
            <StyledLink to="/login">Already have an account? Log in</StyledLink>
          </div>
        </Form>
      </FormContainer>
    </RegisterWrapper>
  );
}

export default Register;

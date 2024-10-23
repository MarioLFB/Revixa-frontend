import React from "react";
import Reviews from "../Reviews/Reviews";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, #FF7F50, #FFA500); /* Gradiente mais alaranjado */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Dashboard() {
  return (
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
        <Reviews />
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;

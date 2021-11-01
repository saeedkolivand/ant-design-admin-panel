import React from "react";
import "./dashboard.style.scss";
import { Row } from "antd";
import Container from "../../components/container/Container";

const Dashboard = () => {
  return (
    <Container classNames="داشبورد">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} />
    </Container>
  );
};

export default Dashboard;

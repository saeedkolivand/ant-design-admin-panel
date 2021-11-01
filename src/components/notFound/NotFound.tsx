import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import Container from "../container/Container";

const NotFound: React.FC = () => {
  return (
    <Container>
      <div className="center-align p-2">
        <Result
          status="404"
          title="404"
          extra={
            <Link to="/">
              <Button type="primary">Return to Dashboard</Button>
            </Link>
          }
        />
      </div>
    </Container>
  );
};

export default NotFound;

import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Space, Spin } from "antd";
import React, { useState } from "react";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values: { username: string; password: string }) => {
    setLoading(true);
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);
    localStorage.setItem("access_token", "access_token");
    localStorage.setItem("access_token", "access_token");
    localStorage.setItem("refresh_token", "refresh_token");

    localStorage.setItem("expires_in", "expires_in");

    if (window.location.pathname.search("/login") > -1) {
      window.location.pathname = "/";
    } else {
      window.location.reload();
    }
  };

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmit} style={{ marginTop: "10ch" }}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
          hasFeedback
        >
          <Input className="login-form-inputs" placeholder="Username" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
          <Input.Password
            className="login-form-inputs"
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <div>
          <Space
            // align={"center"}
            direction="vertical"
            className="button-wrapper"
          >
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="main-button"
            >
              Login
            </Button>
            <Button
              type="text"
              onClick={() => navigate("/forgot-password")}
              className="secondary-button"
            >
              Forgot Password
            </Button>
          </Space>
        </div>
      </Form>
    </Spin>
  );
};

import { Button, Form, Input, Space } from "antd";
import React from "react";

interface FirstStepInterface {
  toNextStep: () => void;
  setEmail: (email: string) => void;
}

export const FirstStep: React.FC<FirstStepInterface> = (props) => {
  const { toNextStep, setEmail } = props;

  return (
    <Form onFinish={(values) => console.log(values)}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
        className="form-inputs"
        hasFeedback
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Space direction="vertical" className="button-wrapper">
        <Button type="text" className="secondary-button">
          Login
        </Button>
        <Button type="primary" htmlType="submit" className="main-button">
          Forgot Password
        </Button>
      </Space>
    </Form>
  );
};

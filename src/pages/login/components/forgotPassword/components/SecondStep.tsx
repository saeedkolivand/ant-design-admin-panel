import { Button, Form, Input, Space } from "antd";
import React from "react";

interface SecondStepInterface {
  email: string;
  toNextStep: () => void;
  setOtpCode: (otpCode: string) => void;
}

export const SecondStep: React.FC<SecondStepInterface> = (props) => {
  const { email, toNextStep, setOtpCode } = props;

  const handleSubmit = (values: { otp: string } | any) => {
    setOtpCode(values.otp);
    toNextStep();
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
        initialValue={email}
        className="form-inputs"
        hasFeedback
      >
        <Input placeholder="Email" disabled />
      </Form.Item>
      <Form.Item
        name="otp"
        rules={[{ required: true }]}
        className="form-inputs"
        hasFeedback
      >
        <Input type="otp" placeholder="Verify Code" />
      </Form.Item>

      <Space
        // align={"center"}
        direction="vertical"
        className="button-wrapper"
      >
        <Button type="primary" htmlType="submit" className="main-button">
          Next
        </Button>
      </Space>
    </Form>
  );
};

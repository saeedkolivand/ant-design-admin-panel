import { Button, Form, Input, Space } from "antd";
import React, { useState } from "react";

interface ThirdStepInterface {
  email: string;
  otpCode: string;
  toPrevStep: () => void;
}

export const ThirdStep: React.FC<ThirdStepInterface> = (props) => {
  const { email, otpCode, toPrevStep } = props;
  const [loading, setLoading] = useState(false);

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
        initialValue={email}
        className="form-inputs"
        hasFeedback
      >
        <Input disabled={loading} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="newPassword"
        rules={[{ required: true }]}
        className="form-inputs"
        hasFeedback
      >
        <Input.Password placeholder="New Password" disabled={loading} />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["newPassword"]}
        hasFeedback
        className="form-inputs"
        rules={[
          {
            required: true,
            message: "Enter your password again!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Password does not match!"));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Retype Password" disabled={loading} />
      </Form.Item>

      <Space direction="vertical" className="button-wrapper">
        <Button
          type="primary"
          htmlType="submit"
          className="main-button"
          loading={loading}
        >
          Reset Password
        </Button>
      </Space>
    </Form>
  );
};

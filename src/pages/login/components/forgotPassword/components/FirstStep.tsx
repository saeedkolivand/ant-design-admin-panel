import { Button, Form, Input, message, Space } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleForgetPass } from "../../../login.api";

interface FirstStepInterface {
  toNextStep: () => void;
  setEmail: (email: string) => void;
}

export const FirstStep: React.FC<FirstStepInterface> = (props) => {
  const { toNextStep, setEmail } = props;
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (values: object | any) => {
    setEmail(values.username);
    setLoading(true);
    handleForgetPass(values)
      .then((r) => {
        // @ts-ignore
        if (r.data.message) {
          // @ts-ignore
          message.info(r.data.message);
          toNextStep();
        }
      })
      .catch((error) => {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          message.error(error.response.data.message);
        }
      })
      .finally(() => setLoading(false));
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
        className="form-inputs"
        hasFeedback
      >
        <Input disabled={loading} placeholder="Email" />
      </Form.Item>

      <Space direction="vertical" className="button-wrapper">
        <Button
          type="text"
          onClick={() => history.push("/login")}
          className="secondary-button"
        >
          Login
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className="main-button"
          loading={loading}
        >
          Forgot Password
        </Button>
      </Space>
    </Form>
  );
};

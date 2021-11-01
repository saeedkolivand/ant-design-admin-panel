import React from "react";
import "./login.style.scss";
import { useHistory } from "react-router-dom";
import { isLogin } from "./login.utils";
import { LoginForm } from "./components/LoginForm";
import LoginBackground from "../../assets/login/bg.svg";

const Login = () => {
  const history = useHistory();

  if (isLogin()) {
    history.push("/");
  }

  return (
    <div>
      <div className="login">
        <div className="login-holder">
          <img className="login-holder--info" src={LoginBackground} alt="bg" />
        </div>
        <div className="form">
          <div className="form-title">
            <div className="form-title--text">Login to your Account</div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

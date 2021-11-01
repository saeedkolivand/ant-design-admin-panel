import "./header.style.scss";
import React from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Col, Dropdown, Layout, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import { HeaderTypes } from "./header.types";

const Header: React.FC<HeaderTypes> = (props) => {
  const { collapsed, toggle } = props;

  const { profileReducer } = useSelector((state: any) => state);

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "./login";
  };

  return (
    <Layout.Header className="site-layout-background">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
        width: 100,
      })}
      <Col md={21} xs={21} lg={23} className="sign-out-wrapper">
        <Row>
          <Dropdown
            className="mr-3"
            // style={{ marginRight: window.outerWidth < 480 ? "1rem" : "unset" }}
            overlay={
              <Menu inlineIndent={24}>
                <Menu.Item danger>
                  <div style={{ color: "red" }} onClick={handleLogout}>
                    Logout
                  </div>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <Button className="profile-btn">
              {window.outerWidth > 768 ? (
                <div className="profile">
                  Hello
                  {", "}
                  {profileReducer.data.username
                    ? profileReducer.data.username
                    : "User"}
                </div>
              ) : (
                ""
              )}

              <DownOutlined style={{ marginTop: "1ch" }} />
            </Button>
          </Dropdown>
        </Row>
      </Col>
    </Layout.Header>
  );
};

export default Header;

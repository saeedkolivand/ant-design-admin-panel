import React from "react";
import { BarsOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import { DropOptionInterface } from "./dropOption.types";

const DropOption: React.FC<DropOptionInterface> = (props) => {
  const {
    menuOptions = [],
    buttonStyle,
    record,
    fetchData,
    otherActionCustom,
  } = props;

  const handleMenuClick = (event: { key: any }) => {
    menuOptions.forEach((item) => {
      if (item.key === event.key) {
        item.func(record, fetchData, otherActionCustom);
      }
    });
  };

  const menu = menuOptions.map((item) => (
    <Menu.Item key={item.key}>{item.name}</Menu.Item>
  ));

  return (
    <Dropdown
      overlay={<Menu onClick={handleMenuClick}>{menu}</Menu>}
      trigger={["click"]}
    >
      <Button style={{ border: "none", ...buttonStyle }}>
        <BarsOutlined style={{ marginRight: 2 }} />
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropOption;

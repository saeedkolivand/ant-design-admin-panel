import { Button, ConfigProvider, Form, Modal, Tree } from "antd";
import React, { useEffect, useState } from "react";
import { getPrivilegesChildren } from "../../../privileges/privileges.action";

const ShowPrivilegesInTable = (props: { rolePermissions: any }) => {
  const { rolePermissions } = props;

  const [permissions, setPermissions] = useState([]);
  // Modal stuff
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(!visible);
  const closeModal = () => setVisible(false);

  useEffect(() => {
    if (rolePermissions && Array.isArray(rolePermissions)) {
      // @ts-ignore
      const data: any = getPrivilegesChildren(rolePermissions);
      setPermissions(data);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Form.Item
      name="privileges"
      rules={[{ type: "array", min: 1 }]}
      style={{ marginBottom: 0 }}
    >
      <Button type="primary" onClick={showModal}>
        نمایش دسترسی ها
      </Button>
      <Modal
        title="دسترسی ها"
        visible={visible}
        onOk={closeModal}
        onCancel={closeModal}
        cancelButtonProps={{
          hidden: true,
        }}
      >
        <ConfigProvider direction="ltr">
          <Tree treeData={permissions} className="ltr" />
        </ConfigProvider>
      </Modal>
    </Form.Item>
  );
};

export default ShowPrivilegesInTable;

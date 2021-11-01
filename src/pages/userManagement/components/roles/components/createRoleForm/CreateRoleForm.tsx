import { Button, Form, Input, Modal, Tree } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPrivilegesChildren } from "../../../privileges/privileges.action";

const CreateRoleForm = (props: {
  selectedRows: any;
  setSelectedRows: any;
  forUpdate?: boolean;
}) => {
  const { selectedRows, setSelectedRows, forUpdate } = props;
  const [apiData, setApiData] = useState([]);
  const { apiList } = useSelector((state: any) => state.privilegesReducer);

  useEffect(() => {
    const temp: any = getPrivilegesChildren(apiList);
    setApiData(temp);
  }, []);

  // Modal
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(!visible);
  const closeModal = () => setVisible(false);

  const onCheck = (checkedKeys: any) => {
    setSelectedRows(checkedKeys);
  };

  useEffect(() => {
    if (!forUpdate) {
      setSelectedRows([]);
    }
  }, [props]);

  return (
    <>
      <Form.Item
        label="Role name"
        name="name"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Privileges"
        name="privileges"
        hasFeedback
        dependencies={selectedRows}
      >
        <Button type="primary" onClick={openModal}>
          Choose
        </Button>
        <div>
          Selected Roles: {selectedRows ? ` ${selectedRows.length}` : " 0"}
        </div>
        <Modal
          title="Privilege"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={closeModal}
          okType="primary"
        >
          <Tree
            checkable
            onCheck={onCheck}
            treeData={apiData}
            defaultCheckedKeys={selectedRows}
            className="ltr"
          />
        </Modal>
      </Form.Item>
    </>
  );
};

export default CreateRoleForm;

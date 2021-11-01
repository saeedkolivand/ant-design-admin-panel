import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../../../../components/container/Container";
import { API } from "./roles.api";
import Crud from "../../../../components/crud/Crud";
import ShowPrivilegesInTable from "./components/ShowPrivilegesInTable/ShowPrivilegesInTable";
import { fetchRoles } from "./role.action";
import CreateRoleForm from "./components/createRoleForm/CreateRoleForm";

const Roles = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Privileges",
      dataIndex: "privileges",
      key: "privileges",
      render: (record: object) => (
        <ShowPrivilegesInTable rolePermissions={record} />
      ),
    },
  ];

  const onFinish = (values: { privileges: never[] }) => {
    if (!selectedRows || selectedRows.length === 0) {
      return false;
    }
    values.privileges = selectedRows;

    dispatch(fetchRoles());

    return values;
  };

  return (
    <Container classNames="contents">
      <Crud
        create={{
          api: API,
          modal: {
            title: "Create role",
          },
          button: {
            title: "Create role",
          },
          formProps: {
            onFinish,
          },
        }}
        get={{
          api: API,
          columns,
        }}
        remove={{
          api: API,
        }}
        update={{
          api: API,
          onInitial: (values: any) => {
            setSelectedRows(values.privileges);
            return values;
          },
          modal: {
            title: "Update",
          },
          formProps: {
            onFinish,
          },
        }}
      >
        <CreateRoleForm
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />
      </Crud>
    </Container>
  );
};

export default Roles;

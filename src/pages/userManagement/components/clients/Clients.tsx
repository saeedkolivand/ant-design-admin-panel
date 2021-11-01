import React from "react";
import moment from "jalali-moment";
import Container from "../../../../components/container/Container";
import Crud from "../../../../components/crud/Crud";
import { getDateString } from "../../../../app/util";
import {
  API,
  createSubscriberService,
  getSubscribersService,
  updateSubscriberService,
} from "./clients.api";
import CreateClientForm from "./components/createClientForm/CreateClientForm";

const Clients = () => {
  const columns = [
    {
      title: "CreatedDate",
      dataIndex: ["createdDate"],
      key: "createdDate",
      filter: "fromTo",
      sorter: true,
      align: "center",
      render: (text: string) => getDateString(text),
    },
    {
      title: "First Name",
      dataIndex: ["extraInfo", "firstName"],
      key: "firstName",
      searchable: true,
      align: "center",
      render: (text: string) => {
        if (!text) return "-";
        return text;
      },
    },
    {
      title: "Last Name",
      dataIndex: ["extraInfo", "lastName"],
      key: "lastName",
      searchable: true,
      align: "center",
      render: (text: string) => {
        if (!text) return "-";
        return text;
      },
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      searchable: true,
      align: "center",
      render: (text: string) => {
        if (!text) return "-";
        return text;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      searchable: true,
      align: "center",
      render: (text: string) => {
        if (!text) return "-";
        return text;
      },
    },
    {
      title: "Status",
      dataIndex: "locked",
      key: "locked",
      locked: "locked",
      filter: [
        {
          text: "Active",
          value: false,
        },
        {
          text: "Banned",
          value: true,
        },
      ],
      filterMultiple: false,
      align: "center",
      render: (text: boolean) => {
        if (!text) {
          return "Active";
        }
        return "Banned";
      },
    },
    {
      title: "Last Order",
      dataIndex: "lastOrder",
      key: "lastOrder",
      align: "center",
      render: (text: string) => getDateString(text),
    },
    {
      title: "Credit",
      dataIndex: "credit",
      key: "credit",
      align: "center",
      render: (text: string | number) => {
        if (!text) return "-";
        return `$${text.toLocaleString()}`;
      },
    },
  ];

  const onFinish = (values: any) => {
    const temp = { ...values };

    temp.extraInfo.addressList = [
      {
        province: values.province,
        city: values.city,
      },
    ];

    if (temp && temp.email && temp.email.length > 1) {
      delete temp.email;
    }
    if (temp && temp.avatarImageUrl) {
      temp.extraInfo.avatarImageUrl = temp.avatarImageUrl.toString();
      delete temp.avatarImageUrl;
    }

    delete temp.province;
    delete temp.city;

    return temp;
  };

  return (
    <Container classNames="contents">
      <Crud
        create={{
          apiService: createSubscriberService,
          modal: {
            title: "Create Client",
          },
          button: {
            title: "Create Client",
          },
          formProps: {
            onFinish,
          },
        }}
        get={{
          apiService: (params) =>
            getSubscribersService({
              ...params,
              sortKey: "createdDate",
              sort: "DESC",
              role: "ROLE_USER",
            }),
          columns,
        }}
        remove={{
          api: API,
        }}
        update={{
          apiService: (params) => updateSubscriberService(params),
          onInitial: (values: any) => {
            if (values && values.extraInfo && values.extraInfo.birthDay) {
              values.extraInfo.birthDay = moment(
                values.extraInfo.birthDay
              ).format("YYYY/MM/DD");
            }
            return values;
          },
          modal: { title: "Modify Client" },
          button: { title: "Modify Client" },
          formProps: {
            onFinish,
          },
        }}
      >
        <CreateClientForm />
      </Crud>
    </Container>
  );
};

export default Clients;

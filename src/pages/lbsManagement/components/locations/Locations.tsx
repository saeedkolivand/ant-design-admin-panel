import React from "react";
import { FilterFilled } from "@ant-design/icons";
import { getDateString } from "../../../../app/util";
import Crud from "../../../../components/crud/Crud";
import { getLbsListService } from "../../lbsManagement.api";
import Container from "../../../../components/container/Container";
import LocationInfo from "./components/locationInfo/LocationInfo";
import { LocationsGetResponseModel } from "../../lbsManagement.types";

const Locations = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      searchable: true,
    },
    {
      title: "State",
      dataIndex: ["address", "state"],
      key: "state",
      customFilterIcon: FilterFilled,
      filterMultiple: false,
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
      customFilterIcon: FilterFilled,
      filterMultiple: false,
    },
    {
      title: "Publish Date",
      dataIndex: "publishDate",
      key: "publishDate",
      sorter: true,
      render: (text: string | number) => getDateString(text),
    },
    {
      title: "More Info",
      dataIndex: "moreInfo",
      key: "moreInfo",
      render: (text: string | number, record: LocationsGetResponseModel) => (
        <LocationInfo {...record} />
      ),
    },
  ];

  return (
    <Container>
      <Crud
        get={{
          columns,
          defaultSort: {
            order: "DESC",
            key: "publishDate",
          },
          apiService: getLbsListService,
          onInitial: (values: any) => {
            const temp: string[] = [];
            if (values && values.properties) {
              values.properties.map((item: { id: any }) => temp.push(item.id));
              values.propertiesId = temp;
            }
            return values;
          },
        }}
      />
    </Container>
  );
};

export default Locations;

import React, { useState } from "react";
import { Descriptions, Image, Modal } from "antd";
import { Marker } from "react-google-maps";
import { MarkerInfoPropsTypes } from "./markerInfo.types";
import { LocationsGetResponseModel } from "../../../pages/lbsManagement/lbsManagement.types";
import { getDateString } from "../../../app/util";

const MarkerInfo: React.FC<MarkerInfoPropsTypes> = (props) => {
  const { location } = props;

  const [thisLocation, setThisLocation] = useState<
    LocationsGetResponseModel | boolean
  >(false);

  return (
    <>
      <Marker
        position={{ lat: location.lat, lng: location.lng }}
        onClick={() => setThisLocation(location)}
      />

      <Modal
        title="Details"
        visible={!!thisLocation}
        onOk={() => setThisLocation(false)}
        onCancel={() => setThisLocation(false)}
        okButtonProps={{ hidden: true }}
        className="flex-Center"
        width={500}
      >
        <Descriptions size="small" bordered>
          <Descriptions.Item label="Name" span={3}>
            {location.title}
          </Descriptions.Item>
          <Descriptions.Item label="Type" span={3}>
            {location.type}
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            {location.description}
          </Descriptions.Item>
          <Descriptions.Item label="Banner" span={3}>
            {location && location.banner
              ? location.banner.map((field: string, index: number) => {
                  return (
                    <Image src={field} key={index} alt="banners" width={100} />
                  );
                })
              : "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Website" span={3}>
            {location && location.metaData && location.metaData.website}
          </Descriptions.Item>
          <Descriptions.Item label="Website" span={3}>
            {location && location.metaData && location.metaData.phoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Working hours" span={3}>
            {`${
              (location &&
                location.metaData &&
                location.metaData.workingFrom) ||
              ""
            }-${
              (location && location.metaData && location.metaData.workingTo) ||
              ""
            }`}
          </Descriptions.Item>
          <Descriptions.Item label="Publish Date" span={3}>
            {getDateString(location.publishDate)}
          </Descriptions.Item>
          <Descriptions.Item label="Address" span={3}>
            {(location && location.address && location.address.route) || "-"}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
};

export default MarkerInfo;

import { Button, Descriptions, Modal } from "antd";
import React, { useState } from "react";
import { getDateString } from "../../../../../../app/util";
import "./locationInfo.style.scss";
import { LocationsGetResponseModel } from "../../../../lbsManagement.types";

const LocationInfo: React.FC<LocationsGetResponseModel> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const {
    title,
    metaData,
    publishDate,
    type,
    description,
    banner,
    status,
    address,
  } = props;

  return (
    <>
      <Button type="primary" onClick={() => setShowModal(true)}>
        More Info
      </Button>

      <Modal
        visible={showModal}
        title="More Info"
        onCancel={() => {
          setShowModal(false);
        }}
        okButtonProps={{ hidden: true }}
        wrapClassName="location-info"
      >
        <Descriptions size="small" bordered>
          <Descriptions.Item label="Name" span={3}>
            {title}
          </Descriptions.Item>
          <Descriptions.Item label="Type" span={3}>
            {type}
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            {description}
          </Descriptions.Item>
          <Descriptions.Item label="Website" span={3}>
            {metaData?.website}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number" span={3}>
            {metaData?.phoneNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Working hours" span={3}>
            {`${(metaData && metaData.workingFrom) || ""}-${
              (metaData && metaData.workingTo) || ""
            }`}
          </Descriptions.Item>
          <Descriptions.Item label="Publish Date" span={3}>
            {getDateString(publishDate)}
          </Descriptions.Item>
          <Descriptions.Item label="Address" span={3}>
            {(address && address.route) || "-"}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
};

export default LocationInfo;

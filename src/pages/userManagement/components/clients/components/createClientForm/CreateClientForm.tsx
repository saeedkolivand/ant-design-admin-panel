import { Form, Input, Radio } from "antd";
import React, { useEffect } from "react";
import CustomDateInput from "../../../../../../components/crud/components/customInputs/CustomDateInput";
import CustomInputNationalCode from "../../../../../../components/crud/components/customInputs/CustomInputNationalCode";
import ProvinceCitySelector from "../../../../../../components/crud/components/provinceCitySelector/ProvinceCitySelector";
import { CreateClientFormPropsTypes } from "./createClientForm.types";
import CustomInputJustLettersSymbols from "../../../../../../components/crud/components/customInputs/CustomInputJustLettersSymbols";
import CustomInputMobileNumber from "../../../../../../components/crud/components/customInputs/CustomInputMobileNumber";
import { GenderEnum } from "../../clients.types";
import { Genders } from "../clients.constant";

const CreateClientForm: React.FC<CreateClientFormPropsTypes> = (props) => {
  const { forUpdate, form, record } = props;

  useEffect(() => {
    if (
      record &&
      record.extraInfo &&
      record.extraInfo.addressList &&
      record.extraInfo.addressList[0]
    ) {
      form?.setFieldsValue({
        province: record.extraInfo.addressList[0].province || "",
        city: record.extraInfo.addressList[0].city || "",
      });
    }

    // @ts-ignore
    if (record && record.extraInfo && record.extraInfo.avatarImageUrl) {
      form?.setFieldsValue({
        // @ts-ignore
        avatarImageUrl: [record.extraInfo.avatarImageUrl],
      });
    }

    return () => {
      form?.resetFields();
      form?.setFieldsValue({ province: "", city: "" });
    };
  }, [record]);

  return (
    <>
      <Form.Item label="Name" name={["extraInfo", "firstName"]}>
        <Input />
      </Form.Item>

      <Form.Item label="Last Name" name={["extraInfo", "lastName"]}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ type: "email" }]}>
        <CustomInputJustLettersSymbols />
      </Form.Item>

      <Form.Item
        label="Mobile"
        name="mobile"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <CustomInputMobileNumber />
      </Form.Item>

      {!forUpdate && (
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: !forUpdate,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
      )}

      <Form.Item
        label="State"
        name="province"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <ProvinceCitySelector province />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
          },
        ]}
        dependencies={["province"]}
      >
        <ProvinceCitySelector city />
      </Form.Item>

      <Form.Item
        name="roles"
        initialValue={["ROLE_USER"]}
        style={{ display: "none" }}
      >
        <Input defaultValue={["ROLE_USER"]} />
      </Form.Item>

      <Form.Item label="Birthdate" name={["extraInfo", "birthdate"]}>
        <CustomDateInput />
      </Form.Item>

      <Form.Item label="National Code" name={["extraInfo", "nationalCode"]}>
        <CustomInputNationalCode />
      </Form.Item>

      <Form.Item label="Gender" name={["extraInfo", "gender"]}>
        <Radio.Group>
          <Radio value={GenderEnum.FEMALE}>
            {Genders[GenderEnum.FEMALE].title}
          </Radio>
          <Radio value={GenderEnum.MALE}>
            {Genders[GenderEnum.MALE].title}
          </Radio>
          <Radio value={GenderEnum.OTHER}>
            {Genders[GenderEnum.OTHER].title}
          </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default CreateClientForm;

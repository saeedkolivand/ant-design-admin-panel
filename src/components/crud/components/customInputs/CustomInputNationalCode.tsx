import React from "react";
import { Input } from "antd";
import { just_digit } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomInputNationalCode: React.FC<CustomInputInterface> = (props) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      maxLength={10}
      min={0}
      max={10}
      value={value}
      onKeyPress={(e) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!just_digit(pressedKey)) {
          e.preventDefault();
          return false;
        }
      }}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CustomInputNationalCode;

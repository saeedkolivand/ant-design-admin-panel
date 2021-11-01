import React from "react";
import { Input, InputProps } from "antd";
import { just_digit } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomInputMobileNumber: React.FC<CustomInputInterface & InputProps> = (
  props
) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      maxLength={11}
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

export default CustomInputMobileNumber;

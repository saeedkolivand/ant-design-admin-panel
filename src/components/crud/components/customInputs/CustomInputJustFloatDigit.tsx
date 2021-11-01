import React from "react";
import { Input } from "antd";
import { just_float_digit } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomInputJustFloatDigit: React.FC<CustomInputInterface> = (props) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      value={value}
      onKeyPress={(e) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!just_float_digit(pressedKey)) {
          e.preventDefault();
          return false;
        }
      }}
      {...otherProps}
      onChange={onChange}
    />
  );
};

export default CustomInputJustFloatDigit;

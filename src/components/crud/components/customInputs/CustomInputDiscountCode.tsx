import React from "react";
import { Input, InputProps } from "antd";
import { discount_code } from "../../../../app/util";

export interface CustomInputInterface extends InputProps {
  onChange?: any;
  value?: any;
}

const CustomInputDiscountCode: React.FC<CustomInputInterface> = (props) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      value={value}
      onKeyPress={(e) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!discount_code(pressedKey)) {
          e.preventDefault();
          return false;
        }
      }}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CustomInputDiscountCode;

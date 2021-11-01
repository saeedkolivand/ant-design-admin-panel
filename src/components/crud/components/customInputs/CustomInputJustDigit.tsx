import React from "react";
import { Input, message } from "antd";
import { just_digit, numberToLocalString } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomJustDigits: React.FC<CustomInputInterface> = (props) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      value={typeof value === "number" ? numberToLocalString(value) : value}
      onKeyPress={(e) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!just_digit(pressedKey)) {
          message.error("فقط اعداد انگلیسی مجاز هستند");
          e.preventDefault();
          return false;
        }
      }}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CustomJustDigits;

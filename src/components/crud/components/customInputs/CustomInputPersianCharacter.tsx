import React from "react";
import { Input, message } from "antd";
import { just_persian_character } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomInputPersianCharacter: React.FC<CustomInputInterface> = (props) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      value={value}
      onKeyPress={(e: {
        charCode: number;
        which: number;
        preventDefault: () => void;
      }) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!just_persian_character(pressedKey)) {
          e.preventDefault();
          message.error("فقط حروف فارسی قابل قبول است");

          return false;
        }
      }}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CustomInputPersianCharacter;

import React from "react";
import { Input } from "antd";
import { justEnglishLetterAndNumbers } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomInputJustLetters: React.FC<CustomInputInterface> = (props) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      value={value}
      onKeyPress={(e) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!justEnglishLetterAndNumbers(pressedKey)) {
          e.preventDefault();
          return false;
        }
      }}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CustomInputJustLetters;

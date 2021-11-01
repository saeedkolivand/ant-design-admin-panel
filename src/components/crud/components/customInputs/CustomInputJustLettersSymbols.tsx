import React from "react";
import { Input } from "antd";
import { just_character_symbols } from "../../../../app/util";
import { CustomInputInterface } from "./CustomInputDiscountCode";

const CustomInputJustLettersSymbols: React.FC<CustomInputInterface> = (
  props
) => {
  const { onChange, value, ...otherProps } = props;

  return (
    <Input
      value={value}
      onKeyPress={(e) => {
        const pressedKey = String.fromCharCode(
          !e.charCode ? e.which : e.charCode
        );
        if (!just_character_symbols(pressedKey)) {
          e.preventDefault();
          return false;
        }
      }}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default CustomInputJustLettersSymbols;

import React from "react";
import FormItemLabelStyled from "./formItemLabel.style";
import { FormItemLabelPropsTypes } from "./formItemLabel.types";

const FormItemLabel: React.FC<FormItemLabelPropsTypes> = (props) => {
  const { className = "", label = "", required = false } = props;

  return (
    <FormItemLabelStyled className={`pb-2 ${className}`} required={required}>
      {label}
    </FormItemLabelStyled>
  );
};

export default FormItemLabel;

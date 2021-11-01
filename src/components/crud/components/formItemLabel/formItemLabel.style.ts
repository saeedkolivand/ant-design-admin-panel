import styled from "styled-components";
import { FormItemLabelPropsTypes } from "./formItemLabel.types";

const FormItemLabelStyled = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  color: #000000d9;
  font-size: 14px;

  ${(props: Pick<FormItemLabelPropsTypes, "required">) =>
    props.required &&
    `
  &:before {
    display: inline-block;
    margin-left: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*";
  }
  `}

  :after {
    content: ":";
    position: relative;
    top: -0.5px;
    ${(props: Partial<FormItemLabelPropsTypes>) =>
      props.required && `margin: 0 2px 0 2px;`}
  }
`;

export default FormItemLabelStyled;

import "./customDatePicker.style.scss";
import DatePicker from "react-datepicker2";
import moment from "jalali-moment";
import React from "react";
import { CustomDatePickerPropsTypes } from "./customDatePicker.types";

export const CustomDatePicker: React.FC<CustomDatePickerPropsTypes> = (
  props
) => {
  const { onChange, value, className = "" } = props;

  return (
    <DatePicker
      value={
        typeof value === "string" && value.search("T") > -1
          ? moment(new Date(value))
          : value
      }
      onChange={(value) =>
        onChange ? onChange(moment(value).toISOString()) : ""
      }
      className={`custom-date-picker ${className}`}
      timePicker={false}
      isGregorian={false}
      removable
    />
  );
};

import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import moment from "jalali-moment";

// let fullYear = new Date().getFullYear();
const fullYear: any = moment().format("YYYY");

const CustomDateInput = (props: {
  id?: any;
  value?: any;
  onChange?: (data: any) => void;
  showYear?: boolean;
}) => {
  const { id, value, onChange, showYear } = props;

  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  // @ts-ignore
  const yearList = [...Array(90).keys()];
  // @ts-ignore
  const daysList = [...Array(31).keys()];

  useEffect(() => {
    if (value && day === 0) {
      if (value.search("-") > -1) {
        const time = moment(value, "YYYY-MM-DDTHH:mm:ss")
          .locale("en")
          .format("YYYY-MM-DD");

        const result = time.split("-").map((element) => Number(element));
        setYear(result[0]);
        setMonth(result[1]);
        setDay(result[2]);
      }
    }
  }, [value]);

  useEffect(() => {
    if (day || year || month) {
      const result = `${checkVal(year)}-${checkVal(month)}-${checkVal(day)}`;

      if (onChange && showYear) {
        const temp = `${year}-01-01}`;
        onChange(
          moment.from(temp, "fa", "YYYY-MM-DD").format("YYYY-MM-DDTHH:mm:ss")
        );
      } else if (onChange && !showYear) {
        onChange(
          moment.from(result, "fa", "YYYY-MM-DD").format("YYYY-MM-DDTHH:mm:ss")
        );
      }
    }
  }, [year, month, day, onChange]);

  const checkVal = (value: number) => {
    let result: string | number = value;
    if (value < 10) {
      result = `0${value}`;
    }
    return result;
  };

  return (
    // @ts-ignore
    <Input.Group id={id} compact>
      <Select
        defaultValue={(showYear && 1) || 0}
        value={day}
        onChange={(value) => setDay(value)}
        style={{ width: 70, display: (showYear && "none") || "" }}
      >
        <Select.Option value={0}>Day</Select.Option>
        {daysList.map((index) => {
          const day = index + 1;
          return (
            <Select.Option key={`day-${index}`} value={day}>
              {day}
            </Select.Option>
          );
        })}
      </Select>
      <Select
        defaultValue={(showYear && 1) || 0}
        value={month}
        onChange={(value) => setMonth(value)}
        style={{ width: 110, display: (showYear && "none") || "" }}
      >
        <Select.Option value={0}>Month</Select.Option>
        <Select.Option key={`month-${1}`} value={1}>
          {" "}
          January{" "}
        </Select.Option>
        <Select.Option key={`month-${2}`} value={2}>
          {" "}
          February{" "}
        </Select.Option>
        <Select.Option key={`month-${3}`} value={3}>
          {" "}
          March{" "}
        </Select.Option>
        <Select.Option key={`month-${4}`} value={4}>
          {" "}
          April{" "}
        </Select.Option>
        <Select.Option key={`month-${5}`} value={5}>
          {" "}
          May{" "}
        </Select.Option>
        <Select.Option key={`month-${6}`} value={6}>
          {" "}
          June{" "}
        </Select.Option>
        <Select.Option key={`month-${7}`} value={7}>
          {" "}
          July{" "}
        </Select.Option>
        <Select.Option key={`month-${8}`} value={8}>
          {" "}
          August{" "}
        </Select.Option>
        <Select.Option key={`month-${9}`} value={9}>
          {" "}
          October{" "}
        </Select.Option>
        <Select.Option key={`month-${10}`} value={10}>
          {" "}
          September{" "}
        </Select.Option>
        <Select.Option key={`month-${11}`} value={11}>
          {" "}
          November{" "}
        </Select.Option>
        <Select.Option key={`month-${12}`} value={12}>
          {" "}
          December{" "}
        </Select.Option>
      </Select>
      <Select
        defaultValue={0}
        value={year}
        onChange={(value) => setYear(value)}
        style={{ width: 90 }}
      >
        <Select.Option value={0}>Year</Select.Option>
        {yearList.map((index) => {
          const year = fullYear - index;
          return (
            <Select.Option key={`year-${index}`} value={year}>
              {year}
            </Select.Option>
          );
        })}
      </Select>
    </Input.Group>
  );
};

export default CustomDateInput;

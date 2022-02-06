import { Select } from "antd";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { FlattenOptionData } from "rc-select/lib/interface";
import { checkValue } from "../../../../app/util";
import { filterInterface } from "./filter.types";

const { Option } = Select;

const Filter: React.FC<filterInterface> = (props) => {
  const { setFilter, item, title, style, reset, setReset, itemFilters } = props;
  const [value, setValue] = useState("");
  const location = useLocation();
  const parsedQueryString: any = queryString.parse(location.search);

  useEffect(() => {
    if (parsedQueryString[item] && !checkValue(value)) {
      setValue(parsedQueryString[item]);
    }
  }, [parsedQueryString]);

  useEffect(() => {
    if (setFilter) {
      setFilter((prevData: object) => ({
        ...prevData,
        [item.key]: value,
      }));
    }
  }, [value]);

  useEffect(() => {
    setValue("");
    setReset(false);
  }, [reset]);

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <div style={style} className="search-filter">
      <Select
        onChange={onChange}
        placeholder={`${title}`}
        // @ts-ignore
        value={value || null}
        className="search-filter"
        style={{ width: "100%" }}
      >
        {itemFilters &&
          itemFilters.map(
            (
              item: {
                value: FlattenOptionData<any>;
                text:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: number
            ) => (
              <Option key={`filter-${index}`} value={`${item.value}`}>
                {item.text}
              </Option>
            )
          )}
      </Select>
    </div>
  );
};

export default Filter;

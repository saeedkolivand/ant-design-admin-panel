import { Select } from "antd";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Key } from "rc-select/lib/interface/generator";
import { checkValue } from "../../../../app/util";
import { filterInterface } from "./filter.types";

const { Option } = Select;

const Filter: React.FC<filterInterface> = (props) => {
  const { setFilter, item, title, style, reset, setReset, itemFilters } = props;
  const [value, setValue] = useState("");
  const history = useHistory();
  const parsedQueryString: any = queryString.parse(history.location.search);

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
                value: Key;
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

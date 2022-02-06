import { Input } from "antd";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { SearchFilterInterface } from "./searchFilter.types";
import { checkValue } from "../../../../app/util";

const SearchFilter: React.FC<SearchFilterInterface> = (props) => {
  const { setFilter, item, title, style, reset, setReset, filter, extraTitle } =
    props;
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
        [item]: value,
      }));
    }
  }, [value]);

  useEffect(() => {
    setValue("");
    setReset(false);
  }, [reset]);

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div style={style} className="search-filter">
      <Input
        onChange={handlerChange}
        placeholder={`${extraTitle || title}`}
        // @ts-ignore
        value={value}
        className="search-filter"
      />
    </div>
  );
};

export default SearchFilter;

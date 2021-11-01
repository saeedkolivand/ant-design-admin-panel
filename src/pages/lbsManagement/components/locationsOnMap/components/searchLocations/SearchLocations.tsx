import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { getLbsListService } from "../../../../lbsManagement.api";
import {
  AutoCompleteOptionsInterface,
  SearchLocationsPropsTypes,
} from "./searchLocations.types";
import { viewPointTypes } from "../../../../lbsManagement.types";

const SearchLocations: React.FC<SearchLocationsPropsTypes> = (props) => {
  const { viewPoint, setViewPoint, setZoom } = props;
  const [values, setValues] = useState("");
  const [options, setOptions] = useState<AutoCompleteOptionsInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (searchText: React.SetStateAction<string>) => {
    setViewPoint(viewPoint);
    setZoom(14);
    setValues(searchText);
  };

  const onSelect = (
    data: string | number | null,
    option: { value: string | number | null; location: viewPointTypes }
  ) => {
    setViewPoint(option.location);
    setZoom(18);
  };

  useEffect(() => {
    fetchData();
  }, [values]);

  const fetchData = () => {
    setLoading(true);
    setOptions([]);

    getLbsListService({ pageSize: 500, title: values })
      .then((response) => {
        const temp = response.data.map(
          (item: { title: any; lat: any; lng: any }, index: number) => {
            return {
              value: item.title,
              location: { lat: item.lat, lng: item.lng },
              key: `index-${index}`,
            };
          }
        );
        setOptions(temp);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <AutoComplete
      loading={loading}
      // @ts-ignore
      options={options}
      style={{
        width: window.outerWidth < 480 ? "100%" : 300,
        marginBottom: "2vh",
      }}
      // @ts-ignore
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="Search..."
    />
  );
};

export default SearchLocations;

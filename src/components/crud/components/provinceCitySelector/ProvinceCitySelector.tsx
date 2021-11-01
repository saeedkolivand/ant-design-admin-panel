import "./provinceCitySelector.scss";
import React, { useEffect, useState } from "react";
import { Input, List, message, Spin } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  ProvinceCityReduxTypes,
  ProvinceCitySelectorPropsTypes,
} from "./provinceCitySelector.types";
import { getCityService, getProvinceService } from "./provinceCitySelector.api";
import { errorMessageHandler } from "../../../../app/util";
import { DefaultRootStateTypes } from "../../../../app/reducers";

const ProvinceCitySelector: React.FC<ProvinceCitySelectorPropsTypes> = (
  props
) => {
  const { value = "", onChange, province: forProvince, city: forCity } = props;
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);
  const [loadProvince, setLoadProvince] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState<any[]>([]);

  const dispatch = useDispatch();
  const { selectedProvince, selectedCity } = useSelector(
    (state: DefaultRootStateTypes) => state.provinceCityReducer
  );

  useEffect(() => {
    if (selectedProvince && forProvince && onChange) onChange(selectedProvince);
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedCity && forCity && onChange) onChange(selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    if (!selectedProvince && onChange) {
      dispatch({ type: ProvinceCityReduxTypes.RESET_STATE });
    }
  }, [selectedProvince]);

  const onListClose = () => {
    setVisible(false);
    setSearchTerm("");
    // if (selectedProvince && !selectedCity && onChange) {
    //   dispatch({ type: ProvinceCityReduxTypes.RESET_STATE });
    //   onChange("");
    // } else if (selectedCity && onChange) {
    //   dispatch({
    //     type: ProvinceCityReduxTypes.SELECTED_CITY,
    //     payload: "",
    //   });
    //   onChange("");
    // }
  };

  const renderList = () => {
    const temp: string[] = dataList.filter((item: any) =>
      item.includes(searchTerm)
    );
    setFilteredList(temp);
  };

  const filterDataList = (event: { target: { value: string } }) =>
    setSearchTerm(event.target.value);

  useEffect(() => {
    if (searchTerm) {
      renderList();
    }
  }, [searchTerm]);

  const onListClick = (event: { target: { innerText: string } }) => {
    setSearchTerm("");
    setVisible(false);
    if (loadProvince) {
      dispatch({
        type: ProvinceCityReduxTypes.SELECTED_PROVINCE,
        payload: event.target.innerText,
      });
    } else {
      dispatch({
        type: ProvinceCityReduxTypes.SELECTED_CITY,
        payload: event.target.innerText,
      });
    }
  };

  const displayProvince = () => {
    dispatch({
      type: ProvinceCityReduxTypes.SELECTED_CITY,
      payload: "",
    });
    setLoading(true);
    getProvinceService()
      .then((response) => {
        setLoading(false);
        const temp: string[] = [];
        // @ts-ignore
        response?.data?.forEach((element: { name: string }) => {
          temp.push(element.name);
        });
        setDataList(temp);
      })
      .catch((error) => errorMessageHandler(error))
      .finally(() => setLoading(false));
    setLoadProvince(true);
    setVisible(true);
  };

  const displayCity = () => {
    setDataList([]);
    setLoading(true);
    if (selectedProvince) {
      getCityService(selectedProvince)
        .then((response) => {
          setLoading(false);
          const temp: string[] = [];
          // @ts-ignore
          response?.data?.forEach((element: { name: string }) => {
            temp.push(element.name);
          });
          setDataList(temp);
        })
        .catch((error) => errorMessageHandler(error))
        .finally(() => setLoading(false));
      setLoadProvince(false);
      setVisible(true);
    } else message.warning("Choose a Province first");
  };

  return (
    <>
      <Input
        onFocus={forProvince ? displayProvince : displayCity}
        value={value}
        placeholder={(forProvince && "State") || "City"}
        className="province-city-selector__main-input"
      />

      <div
        className="province-city-selector__background"
        style={{ top: !visible ? "100vh" : 0 }}
        onClick={onListClose}
      />

      <div
        className="province-city-selector absolute-center"
        style={{ top: !visible ? "100vh" : "5vw" }}
      >
        <CloseOutlined
          className="province-city-selector__close-icon"
          onClick={onListClose}
        />

        <div className="province-city-selector__title mt-2">
          {(forProvince && "State") || "City"}
        </div>

        <Input
          className="province-city-selector__search mt-2"
          onChange={filterDataList}
          placeholder="Search ..."
          size="large"
          value={searchTerm}
          prefix={<SearchOutlined style={{ color: "#bcbec0", fontSize: 22 }} />}
        />

        <div className="province-city-selector__list">
          <Spin spinning={loading}>
            <List
              size="small"
              dataSource={searchTerm === "" ? dataList : filteredList}
              renderItem={(item: React.ReactNode, index) => (
                <List.Item
                  key={index}
                  onClick={(event: any) => onListClick(event)}
                >
                  <div>{item}</div>
                </List.Item>
              )}
            />
          </Spin>
        </div>
      </div>
    </>
  );
};

export default ProvinceCitySelector;

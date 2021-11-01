import React, { ReactNode, useState } from "react";
import { Button, Col, Row, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SearchFilter from "../searchFilter/SearchFilter";
import { ReadInterface } from "./read.types";
import Filter from "../filter/Filter";

const Read: React.FC<ReadInterface> = (props) => {
  const {
    dataSource,
    apiData,
    loading,
    fetchData,
    hasError = false,
    tableColumn,
    handleChange,
    tableProps,
    paginationState,
    setPaginationState,
    filter,
    setFilter,
    setApiData,
    isFilter,
  } = props;

  const [showDatePickers, setShowDatePickers] = useState(false);
  const [reset, setReset] = useState(false);

  if (tableColumn.length === 0) {
    return <span />;
  }

  const resetHolder = () => {
    if (setApiData) {
      setApiData([]);
    }
    if (setFilter) {
      setFilter([]);
    }
    setPaginationState((prevData: any) => {
      return {
        ...prevData,
        pageSize: prevData.pageSize ? prevData.pageSize : 10,
        filters: {},
        current: 1,
      };
    });
    setReset(true);
  };

  const confirmHolder = () => {
    setShowDatePickers(false);
    setPaginationState({
      ...paginationState,
      pageSize: paginationState.pageSize ? paginationState.pageSize : 10,
      filters:
        filter &&
        Object.values(filter).filter((item: any) => item && item.length > 0)
          ? filter
          : {},
      // filters: filter,
      current: 1,
    });
  };

  const handlerCustomFilter = (
    CustomFilter: any,
    item: {
      searchable?: boolean;
      key?: string;
      title: string;
      filter?: string | { title?: string; data?: [] };
      customFilter?: React.ReactNode;
    }
  ) => {
    return (
      <CustomFilter
        {...props}
        filter={filter}
        style={{ width: "100%" }}
        item={item.key}
        title={item.title}
        setFilter={setFilter}
        reset={reset}
        setReset={setReset}
      />
    );
  };

  const filterData = tableColumn.map(
    (
      item: {
        searchable?: boolean;
        key?: string;
        title: string;
        extraTitle?: string;
        filter?: string;
        filters?: [
          {
            text: string;
            value: any;
          }
        ];
        customFilter?: ReactNode;
      },
      index?: React.Key | null | undefined
    ) => {
      if (item.searchable) {
        return (
          <Col key={index} xs={24} sm={24} md={20} lg={5}>
            <div className="label mb-2">{item.extraTitle || item.title}</div>
            <SearchFilter
              {...props}
              style={{ width: "100%" }}
              item={item.key}
              extraTitle={item.extraTitle}
              title={item.title}
              setFilter={setFilter}
              reset={reset}
              setReset={setReset}
            />
          </Col>
        );
      }
      if (item.filter) {
        return (
          <Col key={index} xs={24} sm={24} md={20} lg={5}>
            <div className="label mb-2">{item.title}</div>
            <Filter
              {...props}
              style={{ width: "100%" }}
              item={item}
              itemFilters={item.filter}
              title={item.title}
              setFilter={setFilter}
              reset={reset}
              setReset={setReset}
            />
          </Col>
        );
      }
      if (item.customFilter) {
        return (
          <Col key={index} xs={24} sm={24} md={24} lg={5}>
            <div className="label">{item.title}</div>
            {handlerCustomFilter(item.customFilter, item)}
          </Col>
        );
      }
      return "";
    }
  );

  return (
    <>
      {isFilter && (
        <Row className="filters">
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row>{filterData}</Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} className="btn-filter">
            <Row style={{ width: "100%", direction: "ltr" }}>
              <Col
                style={{
                  alignItems: "flex-end",
                  display: "flex",
                  marginTop: "5px",
                }}
                xs={24}
                sm={24}
                md={5}
                lg={5}
              >
                <Button
                  style={{
                    width: "100%",
                  }}
                  className="flex-Center"
                  type="primary"
                  onClick={confirmHolder}
                  icon={<SearchOutlined />}
                />
              </Col>

              <Col
                style={{
                  alignItems: "flex-end",
                  display: "flex",
                  marginTop: "5px",
                }}
                xs={24}
                sm={24}
                md={5}
                lg={5}
              >
                <Button
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  type="primary"
                  onClick={resetHolder}
                >
                  reset
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Table
        bordered
        columns={tableColumn}
        dataSource={dataSource || apiData}
        loading={loading}
        locale={{
          emptyText: hasError ? (
            <Button className="try-again" onClick={fetchData}>
              Retry
            </Button>
          ) : undefined,
        }}
        onChange={handleChange}
        rowKey="id"
        {...tableProps}
        pagination={paginationState}
      />
    </>
  );
};

export default Read;

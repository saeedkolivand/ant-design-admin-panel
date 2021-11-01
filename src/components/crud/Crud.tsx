import React, { useEffect, useState } from "react";
import { Form, message, Modal } from "antd";
import { AxiosResponse } from "axios";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons/lib/icons";
import { DeleteOutlined } from "@ant-design/icons";
import DropOption from "./components/dropOption/DropOption";
import { convertArrayToTitleObject, Log, logType } from "../../app/util";
import Create from "./components/create/Create";
import "./crud.style.scss";
import { deleteService, getService } from "./crud.api";
import Read from "./components/read/Read";
import { CrudProps } from "./crud.types";

const Crud: React.FC<CrudProps> = (props) => {
  const history = useHistory();
  const parsedQueryString: any = queryString.parse(history.location.search);
  const {
    create,
    get,
    remove,
    update,
    otherAction = [],
    otherActionCustom,
    otherButtons,
    loading: loadingProps = false,
    showTotalItems = false,
    children,
  } = props;

  const {
    apiService,
    api,
    responseProperty,
    responseIsArray = false,
    tableProps,
    columns,
    dataSource,
    fetchDataFunc,
    fetchDataDependency = [],
    pagination = {
      sort: parsedQueryString.sort ? parsedQueryString.sort : "DESC",
      total: 0,
      current:
        parsedQueryString.pageNumber > 0 ? parsedQueryString.pageNumber : 1,
      pageSize: parsedQueryString.pageSize ? parsedQueryString.pageSize : 10,
    },
    defaultSort = {
      order: "",
      key: "",
    },
  } = get;

  const filterInitial = () => {
    if (parsedQueryString.pageSize && parsedQueryString.pageNumber) {
      delete parsedQueryString.pageSize;
      delete parsedQueryString.pageNumber;
      return parsedQueryString;
    }
  };

  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [preColumn, setPreColumn] = useState<object[]>([]);
  const [tableColumn, setTableColumn] = useState<any>([]);
  const [showUpdateModal, setShowUpdateModal] = useState<any>(false);
  const [filter, setFilter] = useState(filterInitial());
  const [isFilter, setIsFilter] = useState(false);
  const [paginationState, setPaginationState] = useState<
    { sortKey: string | [] } | any
  >({
    total: 0,
    current: 0,
    ...pagination,
    pageSize: pagination.pageSize ? pagination.pageSize : 10,
    filters: filter,
    sort: defaultSort.order || "",
    sortKey: defaultSort.key || "",
  });
  const [lastPagination, setLastPagination] = useState({});
  const [lastFetchDependency, setLastFetchDependency] = useState([]);

  useEffect(() => {
    handleSetOtherAction();
  }, []);

  useEffect(() => {
    if (columns && columns.length > 0) {
      const indexColumn: object[] = [
        {
          title: "No.",
          dataIndex: "index",
          key: "index",
          width: "5%",
          align: "center",
          render: (text: string | object, record: object, index: number) => {
            const { pageSize = 10, current = 0 } = paginationState;
            let rowIndex = pageSize * (current - 1);
            // eslint-disable-next-line no-restricted-globals
            if (isNaN(rowIndex)) {
              rowIndex = 0;
            }

            return index + 1 + rowIndex;
          },
        },
      ];
      const columnsParse: object[] = [...columns];

      columns.forEach((item: any, index: string | number | any) => {
        if (item.searchable) {
          setIsFilter(true);
          columnsParse[index] = {
            ...item,
          };
        }
        if ((item.filter && item.filter === "fromTo") || item.customFilter) {
          setIsFilter(true);
          columnsParse[index] = {
            ...item,
          };
        }
      });

      setTableColumn([...indexColumn, ...columnsParse, ...preColumn]);
    }
  }, [columns, preColumn, paginationState.current]);

  useEffect(() => {
    if (!columns || (columns && !columns.length)) {
      if (apiData && apiData.length > 0) {
        generateColumn(apiData);
      } else if (dataSource) {
        generateColumn(dataSource);
      }
    }
  }, [apiData, dataSource]);

  useEffect(() => {
    if (
      JSON.stringify(lastPagination) !== JSON.stringify(paginationState) ||
      JSON.stringify(lastFetchDependency) !==
        JSON.stringify(fetchDataDependency)
    ) {
      if (!dataSource && (api || getService)) {
        fetchData();
      }
    }
  }, [
    paginationState.current,
    paginationState.filters,
    paginationState.pageSize,
    paginationState.sort,
    paginationState.sortKey,
    paginationState.total,
    ...fetchDataDependency,
  ]);

  const handleSetOtherAction = () => {
    const defaultActions: object[] = [];
    let updateInOtherAction = false;
    let removeInOtherAction = false;
    if (otherAction && otherAction.length > 0) {
      otherAction.forEach((i: any) => {
        if (i.name === "edit" || i.name === "Edit") {
          updateInOtherAction = true;
        }
        if (i.name === "delete" || i.name === "remove") {
          removeInOtherAction = true;
        }
      });
    }

    if (update && (update.api || update.apiService) && !updateInOtherAction) {
      defaultActions.push({
        name: (
          <div>
            <EditOutlined />
            &nbsp; ویرایش
          </div>
        ),
        func: (record: object | any) => {
          // let result: any = { ...record };
          let result: any =
            window.location.pathname === "/systemUsers-management/subscriber"
              ? { ...record.userDto }
              : { ...record };
          if (update.onInitial) {
            result = update.onInitial(result);
          }

          setShowUpdateModal(result);
        },
      });
    }
    if (remove && (remove.api || remove.apiService) && !removeInOtherAction) {
      defaultActions.push({
        name: (
          <div>
            <DeleteOutlined />
            &nbsp;Delete
          </div>
        ),
        func: (record: {
          userDto: { id: string } | object | any;
          id: string;
        }) => {
          const id =
            (record && record.userDto && record.userDto.id) || record.id;
          if (!id) {
            message.error("id does NOT exist");
            return false;
          }

          Modal.confirm({
            className: "delete-operation-modal",
            title: "Are you sure you want to delete this record?",
            onOk() {
              setLoading(true);
              if (remove.api) {
                deleteService(`${remove.api}/${record.id || record.userDto.id}`)
                  .then(() => {
                    deleteThen();
                  })
                  .catch((error) => deleteCatch(error));
              } else {
                // @ts-ignore
                remove
                  .apiService(record.id || record.userDto.id)
                  .then(() => {
                    deleteThen();
                  })
                  .catch((error: object) => deleteCatch(error));
              }
            },
          });
        },
      });
    }
    const actions: object[] = [...defaultActions, ...otherAction];
    if (actions.length > 0) {
      // eslint-disable-next-line no-return-assign
      actions.map((item: any, index) => (item.key = `${index + 1}`));
      setPreColumn([
        ...preColumn,
        {
          title: "Actions",
          dataIndex: "",
          key: "x",
          align: "center",
          render: (text: string | object, record: object) => {
            return (
              <DropOption
                menuOptions={actions}
                record={record}
                otherActionCustom={otherActionCustom}
                fetchData={fetchData}
              />
            );
          },
        },
      ]);
    }
  };

  const generateColumn = (obj: any[]) => {
    if (!obj || (obj && obj.length === 0)) {
      Log("generateColumn must have data!", logType.warn);
      return false;
    }

    const result: {
      title: string;
      dataIndex: string;
      key: string;
      align: string;
      render: (text: string | object | undefined) => any;
    }[] = [];

    const sampleObject = obj[0];
    Object.keys(sampleObject).forEach((item) => {
      result.push({
        title: item,
        dataIndex: item,
        key: item,
        align: "center",
        render: (text) => {
          return (
            <span>
              {typeof text === "object" ? JSON.stringify(text) : text}
            </span>
          );
        },
      });
    });
    setTableColumn([...result, ...preColumn]);
  };

  const fetchData = () => {
    if (!api && !apiService && !fetchDataFunc) {
      return false;
    }

    if (loading) {
      return false;
    }

    setLastPagination(paginationState);
    setLastFetchDependency(fetchDataDependency);
    const {
      current,
      pageSize,
      filters,
      sort = "",
      sortKey = "",
    } = paginationState;

    let paginationData: object | any = {
      pageNumber: current - 1,
      pageSize: pageSize || 10,
      sort,
      sortKey:
        typeof sortKey === "object" && sortKey.length >= 2
          ? sortKey[1]
          : sortKey,
      ...filters,
    };

    if (!sort || sort === "") {
      // @ts-ignore
      delete paginationData.sort;
      // @ts-ignore
      delete paginationData.sortKey;
    }

    if (paginationData && paginationData.filterDate) {
      paginationData = {
        ...paginationData,
        from: paginationData.filterDate.from,
        to: paginationData.filterDate.to,
      };
      delete paginationData.filterDate;
    }

    history.push({
      pathname: history.location.pathname,
      search: `?${Object.keys(paginationData)
        .map((key) =>
          key === "filterDate"
            ? `from=${paginationData.filterDate.from}&to=${paginationData.filterDate.to}`
            : key
            ? `${key}=${paginationData[key]}`
            : ""
        )
        .join("&")}`,
    });

    if (fetchDataFunc) {
      fetchDataFunc(paginationData);
      return false;
    }
    setLoading(true);
    if (api) {
      getService(api, paginationData)
        .then((resp) => {
          fetchThen(resp);
        })
        .catch((error) => fetchCatch(error));
    } else if (apiService) {
      apiService(paginationData)
        .then((resp: AxiosResponse) => {
          fetchThen(resp);
        })
        .catch((error: object) => fetchCatch(error));
    }
  };

  const fetchThen = (resp: AxiosResponse<any>) => {
    let data: any = [];
    let metaData = {};

    if (resp && resp.data && resp.data.content && !responseProperty) {
      const { content, ...meta } = resp.data;
      data = content;
      metaData = meta;
    } else if (
      responseProperty &&
      resp &&
      resp.data &&
      resp.data[responseProperty]
    ) {
      data = resp.data[responseProperty];
      metaData = resp.data;
    } else if (resp && resp.data) {
      data = resp.data;
    }

    // if response is array for better filter convert to object
    if (data.length && responseIsArray) {
      data = convertArrayToTitleObject(data);
    }

    setMetaData(metaData, resp.data.length, resp.data);
    setApiData(data);
    setLoading(false);
    setHasError(false);
  };

  const fetchCatch = (error: object) => {
    setLoading(false);
    setHasError(true);
    // message.error("receiveError");
    setApiData([]);
    Log(error, logType.error);
  };

  const deleteThen = () => {
    message.info("Deleted successfully!");
    fetchData();
    setLoading(false);
  };

  const deleteCatch = (error: object) => {
    // message.error("errorOnDeletingData");
    Log(error, logType.error);
    setLoading(false);
  };

  const setMetaData = (
    metaData: { size?: number; totalElements?: any },
    contentLength: any[],
    response?: any
  ) => {
    const { size, totalElements } = metaData;
    setPaginationState({
      ...paginationState,
      total: totalElements,
      pageSize: size,
      showTotal: () => {
        return ` ${
          totalElements ||
          contentLength ||
          (response &&
            // @ts-ignore
            response[responseProperty] &&
            // @ts-ignore
            response[responseProperty].length)
        } مورد`;
      },
    });
  };

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    const temp = {
      ...paginationState,
      current: pagination.current,
      pageSize: pagination.pageSize,
      sortKey: "",
      sort: "",
    };

    if (sorter && sorter.order) {
      temp.sortKey = sorter.column.dataIndex;
      temp.sort = sorter.order === "ascend" ? "ASC" : "DESC";
    } else if (paginationState.sortKey && paginationState.sort) {
      temp.sortKey = paginationState.sortKey;
      temp.sort = paginationState.sort;
    } else {
      temp.sortKey = defaultSort.key || "";
      temp.sort = defaultSort.order || "";
    }

    setPaginationState(temp);
  };

  return (
    <Form className="crud">
      {children && create && (create.api || create.apiService) && (
        <Create
          {...create}
          fetchData={fetchData}
          otherButtons={otherButtons}
          buttonInitial={{
            disabled: loadingProps || loading,
          }}
        >
          {React.cloneElement(children, {
            // @ts-ignore
            fetchData,
            ...create,
          })}
        </Create>
      )}

      {children && update && (update.api || update.apiService) && (
        <Create
          fetchData={fetchData}
          forUpdate
          modalInitial={{
            visible: showUpdateModal !== false,
            onCancel: () => setShowUpdateModal(false),
          }}
          formPropsInitial={{
            initialValues: showUpdateModal || {},
          }}
          {...update}
        >
          {React.cloneElement(children, {
            record: showUpdateModal,
            fetchData,
            forUpdate: true,
            showModal: showUpdateModal !== false,
            ...update,
          })}
        </Create>
      )}

      <Read
        apiData={apiData}
        dataSource={dataSource}
        fetchData={fetchData}
        hasError={hasError}
        loading={loadingProps || loading}
        tableColumn={tableColumn}
        handleChange={handleChange}
        tableProps={tableProps}
        // pagination={{ pageNumber, pageSize, sort, totalPages }}
        paginationState={paginationState}
        setPaginationState={setPaginationState}
        showTotalItems={showTotalItems}
        filter={filter}
        setFilter={setFilter}
        setApiData={setApiData}
        isFilter={isFilter}
      />
    </Form>
  );
};

export default Crud;

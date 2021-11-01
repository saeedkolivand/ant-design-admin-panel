import { ReactNode } from "react";
import { AxiosResponse } from "axios";

export interface CrudProps {
  create?: {
    apiService?: (data: object) => Promise<AxiosResponse<any>> | void | any;
    api?: string;
    button?: {
      title: string;
    };
    modal?: {
      title: string;
    };
    formProps?: {
      initialValues?: {
        type: string;
      };
      onFinish: (args: any) => void;
    };
    fetchData?: (paginationData: object) => void | any;
    justLog?: boolean;
  };
  get: {
    apiService?: (
      data: object | any
    ) => Promise<AxiosResponse<any>> | void | any;
    api?: string;
    responseProperty?: string;
    responseIsArray?: boolean;
    tableProps?: any;
    // columns?: ColumnsTypes & AntdColumnsType;
    columns?: any;
    dataSource?: [object];
    fetchData?: () => void;
    fetchDataFunc?: (paginationData: object) => void | any;
    fetchDataDependency?: [] | any;
    pagination?: {
      sort?: string;
      total?: number;
      current?: number;
      pageSize?: number;
    };
    defaultSort?: {
      order?: "ASC" | "DESC";
      key?: string;
    };
    onInitial?: (result: object) => void | any;
  };
  update?: {
    apiService?: (value?: any) => Promise<AxiosResponse<any>> | void | any;
    api?: string;
    onInitial?: (result: object) => void | any;
    modal?: {
      title: string;
    };
    button?: {
      title: string;
    };
    formProps?: {
      initialValues?: {
        type: string;
      };
      onFinish: (args: any) => void;
    };
    justLog?: boolean;
  };
  remove?: {
    apiService?: (id?: string) => Promise<AxiosResponse<any>> | void | any;
    api?: string;
  };
  otherAction?: {
    name: string | ReactNode;
    func: (record: object | any, fetchData: () => void) => void;
  }[];
  otherButtons?: ReactNode;
  otherActionCustom?: ReactNode;
  loading?: boolean;
  showTotalItems?: boolean;
  totalItemsCount?: number;
  children?: any;
}

export type ColumnsTypes = {
  searchable?: boolean;
  filter?: string | ReactNode;
  customFilter?: ReactNode;
};

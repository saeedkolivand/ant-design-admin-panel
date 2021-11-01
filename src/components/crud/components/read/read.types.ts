export interface ReadInterface {
  data?: string;
  apiData?: [object] | never[];
  setApiData?: (value: any) => void;
  loading?: boolean;
  fetchData?: () => void;
  hasError?: boolean;
  tableColumn?: any;
  handleChange?: (
    pagination?: object,
    filters?: object,
    sorter?: object
  ) => void;
  tableProps?: object;
  pagination?: object;
  showTotalItems?: boolean;
  dataSource?: [object];
  paginationState?:
    | {
        total?: number;
        current?: number;
        pageSize?: number;
        filters?: object;
        sort?: string;
        sortKey?: string;
      }
    | any;
  setPaginationState: (prevData?: any) => void;
  filter?: object | ArrayLike<any> | undefined | any;
  setFilter?: (arg: any[]) => void;
  isFilter?: boolean;
}

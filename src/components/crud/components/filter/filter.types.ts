export interface filterInterface {
  filter?: object;
  setFilter?: (filter: any) => void;
  item: any;
  title: string;
  style?: object;
  reset: boolean;
  setReset: (state: boolean) => void;
  key?: string | number | any;
  itemFilters?: any;
}

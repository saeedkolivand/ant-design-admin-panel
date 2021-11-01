export interface SearchFilterInterface {
  filter?: object;
  setFilter?: (filter: any) => void;
  item: any;
  title: string;
  extraTitle?: string;
  style?: object;
  reset: boolean;
  setReset: (state: boolean) => void;
}

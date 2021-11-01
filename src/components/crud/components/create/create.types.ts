import { ReactNode } from "react";

export interface CreateProps {
  apiService?: (data: object) => void | any;
  api?: string;
  button?: {
    title: string;
  };
  modal?: {
    title: string;
  };
  formProps?: {
    onFinish?: (values?: object, initial?: object) => void;
    initialValues?: {
      type: string;
    };
  };
  fetchData?: (paginationData?: object) => void | any;
  justLog?: boolean;
  title?: string;
  successMessage?: string;
  errorMessage?: string;
  forUpdate?: boolean;
  otherButtons?: ReactNode;
  buttonInitial?: object;
  modalInitial?: any;
  formPropsInitial?: {
    initialValues?: any;
  };
  afterUpdate?: () => void;
  children?: ReactNode | any;
}

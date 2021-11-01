import { FormInstance } from "antd";
import { DatyarUserDto } from "../../clients.types";

export interface CreateClientFormPropsTypes {
  forUpdate?: boolean;
  form?: FormInstance;
  record?: DatyarUserDto;
}

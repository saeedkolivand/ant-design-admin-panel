import { viewPointTypes } from "../../../../lbsManagement.types";

export interface SearchLocationsPropsTypes {
  viewPoint: viewPointTypes;
  setViewPoint: (viewPoint: viewPointTypes) => void;
  setZoom: (zoom: number) => void;
}

export interface AutoCompleteOptionsInterface {
  label: string;
  value: viewPointTypes;
}

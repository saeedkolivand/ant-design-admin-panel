export interface MarkerProps {
  text: string;
  location: any;
  lat: number | string | undefined;
  lng: number | string | undefined;
}

export interface MarkerTypes {
  banner?: string;
  title?: string;
  description?: string;
  type?: string;
}

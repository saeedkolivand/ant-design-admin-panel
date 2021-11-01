import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import React from "react";
import { WithGoogleMapProps } from "react-google-maps/lib/withGoogleMap";
import { WithScriptjsProps } from "react-google-maps/lib/withScriptjs";
import { MapWithMarkersTypes } from "./mapWithMarkers.types";

const GoogleMapWrapper: React.ComponentClass<
  | (React.WeakValidationMap<{}> &
      WithGoogleMapProps &
      WithScriptjsProps &
      MapWithMarkersTypes)
  | (WithGoogleMapProps & WithScriptjsProps & MapWithMarkersTypes)
> = withScriptjs(
  withGoogleMap((props) => {
    const { defaultZoom, defaultCenter, children } = props;
    return (
      <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        center={defaultCenter}
        zoom={defaultZoom}
      >
        {children}
      </GoogleMap>
    );
  })
);

export default GoogleMapWrapper;

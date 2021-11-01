import { useEffect, useState } from "react";
import { message } from "antd";
import { useQuery } from "react-query";
import Config from "../../../../app/config";
import Container from "../../../../components/container/Container";
import SearchLocations from "./components/searchLocations/SearchLocations";
import { getLbsListService } from "../../lbsManagement.api";
import {
  LocationsGetResponseModel,
  viewPointTypes,
} from "../../lbsManagement.types";
import GoogleMapWrapper from "../../../../components/map/GoogleMapWrapper";
import MarkerInfo from "../../../../components/map/components/MarkerInfo";

const LocationsOnMap = () => {
  const [locations, setLocations] = useState<LocationsGetResponseModel[]>([]);
  const [viewPoint, setViewPoint] = useState<viewPointTypes>({
    lat: 35.7102131,
    lng: 51.35115,
  });
  const [mapZoom, setMapZoom] = useState(16);

  const { data, error, isLoading } = useQuery("fetch locations", () =>
    getLbsListService({ pageSize: 500 })
  );

  if (error) {
    message.error("loading locations failed!");
  }

  useEffect(() => {
    if (data && data.data.length) {
      setLocations(data.data);
    }
  }, [data]);

  return (
    <Container loading={isLoading}>
      <div
        style={{
          height: "68vh",
          width: "100%",
        }}
      >
        <SearchLocations
          viewPoint={viewPoint}
          setViewPoint={setViewPoint}
          setZoom={setMapZoom}
        />

        <GoogleMapWrapper
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Config.googleMapToken}&v=3.exp&libraries=places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultCenter={viewPoint}
          defaultZoom={mapZoom}
        >
          {locations &&
            locations.length > 0 &&
            locations.map((location) => (
              <MarkerInfo location={location} key={`marker-${location.id}`} />
            ))}
        </GoogleMapWrapper>
      </div>
    </Container>
  );
};

export default LocationsOnMap;

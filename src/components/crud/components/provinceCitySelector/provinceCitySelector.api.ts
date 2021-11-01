import axios from "axios";
import Config from "../../../../app/config";

export const GetProvince = `public/api/v1/location/countries/states`;
export const GetCity = `public/api/v1/location/countries/states/cities`;

export const getProvinceService = () => {
  return axios.get(`${Config.baseUrl}${GetProvince}?country=ایران`, {
    headers: {
      ...Config.defaultHeader,
    },
  });
};

export const getCityService = (province: string | undefined) => {
  return axios.get(
    `${Config.baseUrl}${GetCity}?country=ایران&state=${province}`,
    {
      headers: {
        ...Config.defaultHeader,
      },
    }
  );
};

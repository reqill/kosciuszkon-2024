import axiosObject, { AxiosInstance } from "axios";

const configureAxios = (axios: AxiosInstance) => {
  axios.defaults.baseURL = "http://192.168.8.17:5001/koszciuszkon2/us-central1";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.validateStatus = (status) => {
    return status < 400;
  };
};

export const axios = axiosObject.create();
configureAxios(axios);

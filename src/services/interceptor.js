import axios from 'axios';

export const http = axios.create();
http.interceptors.request.use(
   function (config) {
      config.baseURL = process.env.REACT_APP_BASE_URL;
      return { ...config };
   },
   function (error) {
      return Promise.reject(error);
   }
);

http.interceptors.response.use(
   async function (response) {
      if (response.data) {
         return response.data;
      }
      return response;
   },
   async function (error) {
      if (error) {
         return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
   }
);
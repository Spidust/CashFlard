import axios from "axios";

import {store} from "../redux/store"
const instance = axios.create({
    baseURL: "https://cashflardbackend.onrender.com/api/",
})

instance.interceptors.request.use(function (config) {
    const token = store.getState().user.token;
    config.headers.Authorization = `Basic ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default instance;

//http://localhost:1703
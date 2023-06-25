import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

const baseURL = "https://api.rss2json.com/v1/api.json";

// 创建 axios 实例
let service = axios.create({
  baseURL: baseURL as string,
  timeout: 5000,
});

const request = <T>(
  method: Method,
  submitData: object,
  config?: AxiosRequestConfig
) => {
  return service.request<any, T>({
    method,
    [method.toLocaleLowerCase() === "get" ? "params" : "data"]: submitData,
    ...config,
  });
};

export default request;

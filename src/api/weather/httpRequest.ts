import axios, { AxiosResponse } from "axios";
// 和风天气的接口地址
const URL = import.meta.env.VITE_WEATHER_API;
// 和风天气的key
const KEY = import.meta.env.VITE_WEATHER_KEY;

// 创建 axios 实例
let request = axios.create({
  baseURL: URL as string,
  timeout: 5000,
});
// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // 在这里配置请求头
  if (config.method === "get") {
    // GET 请求，添加 key 参数到 URL 参数中
    config.params = {
      ...config.params,
      key: KEY,
    };
  } else if (config.method === "post") {
    // POST 请求，添加 key 参数到请求体中
    if (!config.data) {
      config.data = {};
    }
    config.data.key = KEY;
  }
  return config;
});
// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "登录过期，请重新登录";
        break;
      case 403:
        message = "拒绝访问";
        break;
      case 404:
        message = "请求错误，未找到该资源";
        break;
      case 500:
        message = "服务端错误";
        break;
      case 503:
        message = "服务端错误";
        break;
      default:
        message = error.response.data.message;
    }
    console.log(message);

    return Promise.reject(error);
  }
);

export default request;

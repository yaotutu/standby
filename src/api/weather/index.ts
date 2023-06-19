import request from "@/api/weather/httpRequest";
import { Weather3dResponse, weatherNowResponse } from "@/types/weatherRespone";

const location = import.meta.env.VITE_WEATHER_LOCATION;
// 获取实时天气信息
const getWeatherNow = () => {
  return request<weatherNowResponse>("/weather/now", "get", {
    location,
  });
};
// 获取未来3天的天气信息
const getWeather3d = () => {
  return request<Weather3dResponse>("/weather/3d", "get", {
    location,
  });
};
const getWeatherMinutely = () => {
  return request("/minutely/5m", "get", {
    location: "121.67,31.24",
  });
};

export { getWeatherNow, getWeather3d, getWeatherMinutely };

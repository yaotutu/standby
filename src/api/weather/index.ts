import request from "@/api/weather/httpRequest";
import { weatherNowResponse } from "@/types/weatherRespone";

const location = import.meta.env.VITE_WEATHER_LOCATION;
// 获取天气信息
const getWeather = (): Promise<weatherNowResponse> => {
  return request<weatherNowResponse>("/weather/now", "get", {
    location,
  });
};

export { getWeather };

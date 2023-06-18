import request from "@/api/weather/httpRequest";
import { weatherNowResponse } from "@/types/weatherRespone";

const location = import.meta.env.VITE_WEATHER_LOCATION;
// 获取天气信息
const getWeather = () => {
  return request({
    url: "/weather/now",
    params: {
      location,
    },
  });
};

export { getWeather };

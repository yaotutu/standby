// 实时天气类型
interface weatherNowResponse {
  code: string;
  updateTime: string;
  fxLink: string;
  now: {
    obsTime: string;
    temp: string;
    feelsLike: string;
    icon: string;
    text: string;
    wind360: string;
    windDir: string;
    windScale: string;
    windSpeed: string;
    humidity: string;
    precip: string;
    pressure: string;
    vis: string;
    cloud: string;
    dew: string;
  };
  refer: {
    sources: string[];
    license: string[];
  };
}
// 未来3天天气类型
interface Weather3dResponse {
  code: string;
  updateTime: string;
  fxLink: string;
  daily: DailyForecast[];
  refer: {
    sources: string[];
    license: string[];
  };
}

// 每日天气类型
interface DailyForecast {
  fxDate: string;
  sunrise?: string;
  sunset?: string;
  moonrise?: string;
  moonset?: string;
  moonPhase: string;
  moonPhaseIcon: string;
  tempMax: string;
  tempMin: string;
  iconDay: string;
  textDay: string;
  iconNight: string;
  textNight: string;
  wind360Day: string;
  windDirDay: string;
  windScaleDay: string;
  windSpeedDay: string;
  wind360Night: string;
  windDirNight: string;
  windScaleNight: string;
  windSpeedNight: string;
  humidity: string;
  precip: string;
  pressure: string;
  vis: string;
  cloud?: string;
  uvIndex: string;
}
// 分钟级降雨数据类型
interface MinutePrecipitationResponse {
  code: string;
  updateTime: string;
  fxLink: string;
  summary: string;
  minutely: MinuteData[];
  refer: ReferData;
}

interface MinuteData {
  fxTime: string;
  precip: string;
  type: string;
}

interface ReferData {
  sources: string[];
  license: string[];
}

export type {
  weatherNowResponse,
  Weather3dResponse,
  MinutePrecipitationResponse,
};

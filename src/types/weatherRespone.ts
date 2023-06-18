export interface weatherNowResponse {
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

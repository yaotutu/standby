import request from "./httpRequest";

const getRssData = () => {
  return request("get", {
    rss_url: "https://rsshub.app/weibo/search/hot",
  });
};

export { getRssData };

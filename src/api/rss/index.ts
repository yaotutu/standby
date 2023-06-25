import axios from "axios";

const rss2json = () => {
  axios.get("https://www.zhihu.com/rss").then((res) => {
    console.log(res);
  });
};

export { rss2json };

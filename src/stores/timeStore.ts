import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimeStore = defineStore("time", () => {
  const hhmmss = ref("00:00:00");
  const hhmm = ref("00:00");
  // 更新时间函数
  const updateTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    hhmmss.value = `${hours}:${minutes}:${seconds}`;
    hhmm.value = `${hours}:${minutes}`;
  };
  return {
    hhmm,
    hhmmss,
    updateTime,
  }
});

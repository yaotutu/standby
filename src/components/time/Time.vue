<template>
  <SquareOutline backgroundColor="#fafafa">
    <ul class="box">
      <li>
        <p :style="{ color: '#e96759' }">{{ currentWeekday }}</p>
      </li>
      <li>
        <p class="time">
          {{ currentTime }}
        </p>
      </li>
      <li :style="{ color: '#8095a6' }">{{ currentDate }}</li>
      <li :style="{ color: '#8095a6' }">五月初八</li>
    </ul>
  </SquareOutline>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import SquareOutline from "@/components/SquareOutline.vue";
let timer: number;
const getCurrentDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

const getCurrentWeekday = (): string => {
  const weekdays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const date = new Date();
  const weekdayIndex = date.getDay();
  return weekdays[weekdayIndex];
};
const getCurrentLunarDate = (): string => {
  // 这里省略获取农历日期的逻辑，需要根据具体农历数据进行计算或引入相关库
  // 假设获取的农历日期为 '农历2023年1月1日'
  return "农历2023年1月1日";
};
const currentDate = ref(getCurrentDate());
const currentTime = ref(getCurrentTime());
const currentWeekday = ref(getCurrentWeekday());
const currentLunarDate = ref(getCurrentLunarDate());

const updateData = () => {
  currentDate.value = getCurrentDate();
  currentTime.value = getCurrentTime();
  currentWeekday.value = getCurrentWeekday();
  currentLunarDate.value = getCurrentLunarDate();
};

onMounted(() => {
  timer = window.setInterval(updateData, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  // const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
</script>

<style lang="css" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.time {
  font-size: 8vh;
  font-weight: bolder;
}
</style>

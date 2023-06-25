<template>
  <SquareOutline backgroundColor="#74adf2 ">
    <ul class="box">
      <li>浦东新区</li>
      <li class="temp">{{ weatherData.temp }}°C</li>
      <li>{{ weatherData.text }}</li>
    </ul>
  </SquareOutline>
</template>

<script setup lang="ts">
import { getWeatherNow } from "@/api/weather";
import SquareOutline from "@/components/SquareOutline.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
// 用于存储定时器的 ID
let timer: number;
const weatherData = ref({
  text: "",
  temp: "",
});
const updateData = async () => {
  const {
    now: { text, temp },
  } = await getWeatherNow();
  weatherData.value = { text, temp };
};

onMounted(() => {
  updateData();
  timer = window.setInterval(updateData, 300000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="css" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
}
.temp {
  font-size: 10vh;
}
</style>

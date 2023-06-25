<template>
  <SquareOutline backgroundColor="#74adf2 ">
    <ul class="box">
      <li>浦东新区</li>
      <li class="temp">{{ weatherData.temp }}°C</li>
      <li>
        <div>
          {{ weatherData.text }}
        </div>
        <div>{{ weatherData.tempMin }} ~ {{ weatherData.tempMax }}</div>
      </li>
    </ul>
  </SquareOutline>
</template>

<script setup lang="ts">
import { getWeatherNow, getWeather3d } from "@/api/weather";
import SquareOutline from "@/components/SquareOutline.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
// 用于存储定时器的 ID
let timer: number;
const weatherData = ref({
  text: "",
  temp: "",
  tempMax: "",
  tempMin: "",
});
const updateData = async () => {
  const {
    now: { text, temp },
  } = await getWeatherNow();
  const {
    daily: [{ tempMax, tempMin }],
  } = await getWeather3d();
  weatherData.value = { text, temp, tempMax, tempMin };
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

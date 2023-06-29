<template>
  <div>
    <h1>实时天气</h1>
    It's raining
    <i
      :class="`qi-${weatherCode}`"
      style="
         {
          font-size: 100px;
        }
      "
    ></i>

    <ul>
      <li>温度</li>
      <li>天气概览</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { getWeatherNow } from "@/api/weather";
import { onMounted, ref } from "vue";

const weatherCode = ref<string>("");

onMounted(() => {
  getWeatherNow().then((res) => {
    console.log(res);
    weatherCode.value = res.now.icon;
  });
});
</script>
<style></style>

<template>
  <div>
    <h1>实时天气</h1>
    It's raining <i class="qi-307"></i> and cold <i class="qi-cold"></i>

    <ul>
      <li>温度</li>
      <li>天气概览</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { getWeatherNow } from "@/api/weather";
import { onMounted } from "vue";

onMounted(() => {
  getWeatherNow().then((res) => {
    console.log(res);
  });
});
</script>
<style></style>

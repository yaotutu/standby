<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>
<script setup lang="ts">
import { getWeather } from "@/api/weather/api";
import { onMounted } from "vue";

onMounted(() => {
  getWeather();
});
</script>

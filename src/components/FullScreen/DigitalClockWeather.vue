<template>
  <div
    class="flex flex-none justify-center items-center flex-row w-screen h-screen"
  >
    <div class="text w-3/5 flex justify-center items-center h-screen">
      {{ currentTime }}
    </div>
    <div class="w-1/5 h-screen">
      <ul class="h-screen justify-evenly items-center flex flex-col">
        <li class="text-4xl">{{ weatherState.temperature }}</li>
        <li class="text-4xl">{{ weatherState.weatherText }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TimeFormats } from "@/enums";
import { useTimeStore } from "@/stores/timeStore";
import { useWeatherStore } from "@/stores/weatherStore";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
const weatherStore = useWeatherStore();
const { weatherState } = storeToRefs(weatherStore);
const { updateWeather } = weatherStore;
const timeStore = useTimeStore();
const { hhmm, hhmmss } = storeToRefs(timeStore);
const { updateTime } = timeStore;
const currentTime = computed(() => {
  if (props.timeFormat === TimeFormats.HourMinuteSecond) {
    return hhmmss.value;
  } else {
    return hhmm.value;
  }
});
const props = defineProps({
  timeFormat: {
    type: String as () => TimeFormats,
    default: "HH:mm:ss",
  },
});

// 在组件挂载时开始更新时间
onMounted(() => {
  updateTime();
  updateWeather();
  setInterval(updateTime, 1000);
  setInterval(updateWeather, 300000);
});
</script>

<style lang="css" scoped>
.text {
  font-size: 10rem;
}
</style>

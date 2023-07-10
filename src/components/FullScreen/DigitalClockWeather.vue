<template>
  <div
    class="flex flex-none justify-center items-center flex-row w-screen h-screen"
  >
    <div class="text w-3/5 flex justify-center items-center h-screen">
      {{ currentTime }}
    </div>
    <div class="w-1/5 h-screen ">
      <ul class="h-screen justify-evenly items-center flex flex-col">
        <li class="text-4xl">26摄氏度</li>
        <li class="text-4xl">晴天</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TimeFormats } from "@/enums";
import { ref, onMounted } from "vue";

const currentTime = ref("");
const props = defineProps({
  timeFormat: {
    type: String as () => TimeFormats,
    default: "HH:mm:ss",
  },
});


// 在组件挂载时开始更新时间
onMounted(() => {
  // 更新时间函数
  const updateTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if (props.timeFormat === TimeFormats.HourMinuteSecond) {
      currentTime.value = `${hours}:${minutes}:${seconds}`;
    } else {
      currentTime.value = `${hours}:${minutes}`;
    }
  };

  // 每秒更新时间
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<style lang="css" scoped>
.text {
  font-size: 10rem;
}
</style>

<template>
  <div class="text">
    {{ currentTime }}
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

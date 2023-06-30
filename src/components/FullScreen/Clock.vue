<template>
  <div class="box">
    <div class="text">
      {{ currentTime }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const currentTime = ref("");

// 在组件挂载时开始更新时间
onMounted(() => {
  // 更新时间函数
  const updateTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    currentTime.value = `${hours}:${minutes}:${seconds}`;
    // currentTime.value = `${hours}:${minutes}`;
  };

  // 每秒更新时间
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<style lang="css" scoped>
@font-face {
  font-family: "Lobster-Regular";
  src: url("@/assets/fonts/Lobster-Regular.ttf") format("truetype");
}
.box {
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster-Regular";
  color: #8cac7c;
  text-shadow: 0 0 10px #000;
  border-radius: 10px;
}
.text {
  font-size: 10rem;
}
</style>

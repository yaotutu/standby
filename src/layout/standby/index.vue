<template>
  <div class="box">
    <DigitalClock />
  </div>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";

import { onMounted, ref } from "vue";
// 存储字体颜色
const fontColor = ref("#8cac7c");
// 当用户常按十秒后进入设置页面
onMounted(() => {
  ElMessage("this is a message.!!!~~~~~~~~~~");
  console.log("runnnn");
});
</script>

<style lang="css">
@font-face {
  font-family: "Lobster-Regular";
  src: url("@/assets/fonts/Lobster-Regular.ttf") format("truetype");
}
.box {
  width: 100%;
  height: 100%;
  /* background: #000; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster-Regular";
  color: v-bind(fontColor);
  text-shadow: 0 0 10px #000;
  border-radius: 10px;
}
</style>

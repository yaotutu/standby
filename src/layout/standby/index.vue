<template>
  <div class="box" @dblclick="handleDoubleClick">
    <DigitalClock :timeFormat="TimeFormats.HourMinuteSecond" />
  </div>
  <van-dialog v-model:show="isDoubleClick" title="标题" show-cancel-button>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
  </van-dialog>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";
import { ref } from "vue";
import { TimeFormats } from "@/enums";

// 存储字体颜色
const fontColor = ref("#8cac7c");
const backgroundColor = ref("#000");

const isDoubleClick = ref(false);
const handleDoubleClick = () => {
  isDoubleClick.value = true;
  // 执行你的操作
  console.log("Double click detected!");
};
// const handleClose = () => {
//   isDoubleClick.value = false;
// };
</script>

<style lang="css">
@font-face {
  font-family: "Lobster-Regular";
  src: url("@/assets/fonts/Lobster-Regular.ttf") format("truetype");
}
.box {
  width: 100%;
  height: 100%;
  background-color: v-bind(backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster-Regular";
  color: v-bind(fontColor);
  text-shadow: 0 0 10px #000;
  border-radius: 10px;
}
.configPage .el-dialog__header {
  display: none;
}
.settingBox {
}
</style>

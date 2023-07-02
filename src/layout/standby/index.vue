<template>
  <div
    class="box"
    @dblclick="handleDoubleClick"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    <DigitalClock :timeFormat="TimeFormats.HourMinuteSecond" />
  </div>
  <van-dialog
    v-model:show="isDoubleClick"
    title=""
    :show-cancel-button="false"
    :showConfirmButton="false"
  >
    <ul>
      <li>字体颜色</li>
      <li>背景颜色</li>
      <li>字体大小</li>
    </ul>
  </van-dialog>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";

import { ref, watchEffect, watch } from "vue";
import { TimeFormats } from "@/enums";

// 存储字体颜色
const fontColor = ref("#8cac7c");
const backgroundColor = ref("#000");
const isDoubleClick = ref(true);
const handleDoubleClick = () => {
  isDoubleClick.value = true;
};
</script>

<style lang="css">
@import "@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css";
@font-face {
  font-family: "Lobster-Regular";
  src: url("@/assets/fonts/Lobster-Regular.ttf") format("truetype");
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster-Regular";
  color: v-bind(fontColor);
  background-color: v-bind(backgroundColor);
  text-shadow: 0 0 10px #000;
  border-radius: 10px;
}
.configPage .el-dialog__header {
  display: none;
}
.settingBox {
}
</style>

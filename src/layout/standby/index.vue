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
  <van-popup
    v-model:show="showSetting"
    position="right"
    :style="{ width: '30%', height: '100%' }"
    @click-overlay="onClickOverlay"
  >
  </van-popup>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";
import { ref } from "vue";
import { TimeFormats } from "@/enums";

// 存储字体颜色
const fontColor = ref("#8cac7c");
const backgroundColor = ref("#000");
const showSetting = ref(true);
const handleDoubleClick = () => {
  // 打开设置页面
  showSetting.value = true;
};
const onClickOverlay = () => {
  // 关闭设置页面
  showSetting.value = false;
};
</script>

<style lang="css">
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

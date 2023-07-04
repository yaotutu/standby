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
    :style="{ width: '40%', height: '100%' }"
    @click-overlay="onClickOverlay"
  >
    <div class="settingBox">
      <div class="flex flex-initial flex-col">
        <div class="">字体颜色选择</div>
        <div
          class="flex flex-row flex-initial overscroll-auto w-full overflow-auto"
        >
          <div
            v-for="item in colorList"
            :style="{
              backgroundColor: item.value,
              width: '50px',
              height: '50px',
              flexShrink: 0,
              borderRadius: '50%',
            }"
          >
            12222
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";
import { ref } from "vue";
import { TimeFormats } from "@/enums";
import { useDigitalClockStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const store = useDigitalClockStore();
const { backgroundColor, fontColor, colorList } = storeToRefs(store);
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
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
</style>

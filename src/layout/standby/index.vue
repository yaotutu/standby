<template>
  <van-swipe
    class="h-screen"
    indicator-color="white"
    ref="swipeRef"
    :initial-swipe="1"
  >
    <van-swipe-item>
      <div
        class="box"
        :style="{
          backgroundColor: backgroundColor,
        }"
      >
        <DigitalClock :timeFormat="TimeFormats.HourMinuteSecond" />
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div
        class="box"
        :style="{
          backgroundColor: backgroundColor,
        }"
      >
        <DigitalClockWeather :timeFormat="TimeFormats.HourMinute" />
      </div>
    </van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";
import DigitalClockWeather from "@/components/FullScreen/DigitalClockWeather.vue";
import { TimeFormats } from "@/enums";
import { useDigitalClockStore } from "@/stores/index";
import { storeToRefs } from "pinia";
const store = useDigitalClockStore();
const { backgroundColor, fontColor } = storeToRefs(store);
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
</style>

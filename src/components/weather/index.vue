<template>
  <div class="wrap">
    <div class="column">
      <SquareOutline backgroundColor="#74adf2">
        <h1>内容区域</h1>
      </SquareOutline>
      <SquareOutline backgroundColor="#fafafa">
        <h1>内容区域</h1>
      </SquareOutline>
    </div>
    <div class="column">
      <SquareOutline backgroundColor="#fafafa">
        <h1>第二列</h1>
      </SquareOutline>
      <SquareOutline backgroundColor="#74adf2">
        <h1>第二列</h1>
      </SquareOutline>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWeatherMinutely } from "@/api/weather";
import SquareOutline from "@/components/SquareOutline.vue";
import { onMounted } from "vue";

onMounted(() => {
  getWeatherMinutely();
});
</script>

<style lang="css" scoped>
.wrap {
  display: flex;
  height: 100vh;
  background-image: url("@/assets/images/bg.jpeg");
  background-size: cover;
}
.wrap .column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 10px 0 10px;
}
</style>

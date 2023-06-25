<template>
  <div class="wrap">
    <div class="column">
      <Time />
      <Weather />
    </div>
    <div class="column">
      <Weather />
      <Time />
    </div>
  </div>
</template>
<script setup lang="ts">
import Weather from "@/components/weather/weather.vue";
import Time from "@/components/time/Time.vue";
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

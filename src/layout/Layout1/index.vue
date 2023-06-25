<template>
  <div class="wrap">
    <div class="left">
      <div class="row">
        <Time />
        <Weather />
      </div>
      <div class="row">
        <Rss />
      </div>
    </div>
    <div class="right">right</div>
  </div>
</template>
<script setup lang="ts">
import Weather from "@/components/weather/weather.vue";
import Time from "@/components/time/Time.vue";
import Rss from "@/components/rss/Rss.vue";
</script>

<style lang="css" scoped>
.wrap {
  display: flex;
  height: 100vh;
  background-image: url("@/assets/images/bg.jpeg");
  background-size: cover;
}
.wrap .left {
  width: 50vw;
}
.wrap .right {
  width: 50vw;
}
.wrap .row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
}
</style>

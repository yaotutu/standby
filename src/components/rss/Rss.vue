<template>
  <ReactangleOutline background-color="#5ac4b1">
    <ul>
      <li>今天全国土地日</li>
      <li>今天全国土地日</li>
      <li>今天全国土地日</li>
      <li>今天全国土地日</li>
    </ul>
  </ReactangleOutline>
</template>

<script setup lang="ts">
import ReactangleOutline from "@/components/ReactangleOutline.vue";

import { getRssData } from "@/api/rss";
import { onMounted } from "vue";

onMounted(() => {
  getRssData().then((res) => {
    console.log(res);
  });
});
</script>

<style lang="css" scoped></style>

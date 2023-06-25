<template>
  <div
    class="Square-outline-wrap"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "black",
  },
});
console.log(props);
</script>

<style lang="css" scoped>
.Square-outline-wrap {
  width: 40vh;
  height: 40vh;
  border-radius: 10vh;
  padding: 4vh;
}
</style>

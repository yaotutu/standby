<template>
  <div
    class="Reactangle-outline-wrap"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "white",
  },
});
console.log(props);
</script>

<style lang="css" scoped>
.Reactangle-outline-wrap {
  width: 90vh;
  height: 40vh;
  border-radius: 10vh;
  padding: 4vh;
}
</style>

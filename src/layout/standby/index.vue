<template>
  <div class="box" @dblclick="handleDoubleClick">
    <DigitalClock />
  </div>
  <el-dialog
    v-model="isDoubleClick"
    title=""
    width="60%"
    :show-close="false"
    :before-close="handleClose"
    class="configPage"
  >
    <ul class="settingBox">
      <li>
        <span>字体颜色：</span>
        <el-color-picker v-model="fontColor" size="large" />
      </li>
      <li>
        <span>背景颜色：</span>
        <el-color-picker v-model="backgroundColor" size="large" />
      </li>
    </ul>
  </el-dialog>
</template>

<script setup lang="ts">
import DigitalClock from "@/components/FullScreen/DigitalClock.vue";
import { ElMessage } from "element-plus";
import { ref } from "vue";

// 存储字体颜色
const fontColor = ref("#8cac7c");
const backgroundColor = ref("#000");

const isDoubleClick = ref(false);
const handleDoubleClick = () => {
  isDoubleClick.value = true;
  // 执行你的操作
  console.log("Double click detected!");
  ElMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const handleClose = () => {
  isDoubleClick.value = false;
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
  background-color: v-bind(backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster-Regular";
  color: v-bind(fontColor);
  text-shadow: 0 0 10px #000;
  border-radius: 10px;
}
.configPage .el-dialog__header {
  display: none;
}
.settingBox {
}
</style>

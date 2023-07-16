import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useStyleStore = defineStore("style", () => {
  const colorList = reactive([
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#FF00FF" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Orange", value: "#FFA500" },
    { name: "Magenta", value: "#800080" },
    { name: "Dark Green", value: "#008000" },
    { name: "Dark Red", value: "#800000" },
    { name: "Olive", value: "#808000" },
    { name: "Dark Cyan", value: "#008080" },
    { name: "Dark Blue", value: "#000080" },
    { name: "Gray", value: "#808080" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Brown", value: "#A52A2A" },
    { name: "Maroon", value: "#800000" },
  ]);
  const fontColor = ref("#8cac7c");
  const fontSize = ref("10rem")
  const backgroundColor = ref("#000");
  return { fontColor, backgroundColor, colorList, fontSize };
})

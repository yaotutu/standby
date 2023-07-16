
import { getWeatherNow } from "@/api/weather/index.ts";
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Weather {
  temperature: string
  weatherText: string
  lastUpdate: Date
}

export const useWeatherStore = defineStore('weather', () => {

  const weatherState = ref<Weather>({
    temperature: '11',
    weatherText: '222',
    lastUpdate: new Date()
  })

  async function updateWeather() {
    // 调用 API 获取数据
    const res = await getWeatherNow()
    weatherState.value.temperature = res.now.temp
    weatherState.value.weatherText = res.now.text
    weatherState.value.lastUpdate = new Date()
  }
  return {

    weatherState,
    updateWeather
  }

})

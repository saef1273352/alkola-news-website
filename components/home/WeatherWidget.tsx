'use client'

import { FC } from 'react'

interface WeatherWidgetProps {
  isDarkMode: boolean
}

const WeatherWidget: FC<WeatherWidgetProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`border rounded-lg p-6 transition-colors ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-4 border-b pb-2 flex items-center ${
          isDarkMode ? "text-gray-200 border-gray-600" : "text-gray-700 border-gray-200"
        }`}
      >
        🌤️ حالة الطقس
      </h3>
      <div className="text-center mb-4">
        <div className="text-3xl mb-2">☀️</div>
        <div className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>28°C</div>
        <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>مشمس</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="text-center">
          <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>الرطوبة</div>
          <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>65%</div>
        </div>
        <div className="text-center">
          <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>الرياح</div>
          <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>12 كم/س</div>
        </div>
      </div>
      <div
        className={`text-xs mt-3 pt-2 border-t text-center ${
          isDarkMode ? "text-gray-400 border-gray-600" : "text-gray-500 border-gray-200"
        }`}
      >
        القاهرة - آخر تحديث: منذ ساعة
      </div>
    </div>
  )
}

export default WeatherWidget
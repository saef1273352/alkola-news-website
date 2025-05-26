'use client'

import { FC } from 'react'

interface GoldPricesProps {
  isDarkMode: boolean
}

const GoldPrices: FC<GoldPricesProps> = ({ isDarkMode }) => {
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
        🥇 أسعار الذهب
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>عيار 24</span>
          <div className="text-right">
            <span className="text-yellow-600 font-bold">2,850 ج.م</span>
            <span className="text-xs text-green-500 block">+25 ج.م</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>عيار 21</span>
          <div className="text-right">
            <span className="text-yellow-600 font-bold">2,494 ج.م</span>
            <span className="text-xs text-green-500 block">+22 ج.م</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>عيار 18</span>
          <div className="text-right">
            <span className="text-yellow-600 font-bold">2,138 ج.م</span>
            <span className="text-xs text-green-500 block">+19 ج.م</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>الجنيه الذهب</span>
          <div className="text-right">
            <span className="text-yellow-600 font-bold">22,800 ج.م</span>
            <span className="text-xs text-green-500 block">+200 ج.م</span>
          </div>
        </div>
      </div>
      <div
        className={`text-xs mt-3 pt-2 border-t ${
          isDarkMode ? "text-gray-400 border-gray-600" : "text-gray-500 border-gray-200"
        }`}
      >
        آخر تحديث: منذ 10 دقائق
      </div>
    </div>
  )
}

export default GoldPrices
'use client'

import { FC } from 'react'

interface CurrencyRatesProps {
  isDarkMode: boolean
}

const CurrencyRates: FC<CurrencyRatesProps> = ({ isDarkMode }) => {
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
        💱 أسعار العملات
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>USD/EGP</span>
          <div className="text-right">
            <span className="text-green-600 font-bold">30.85</span>
            <span className="text-xs text-green-500 block">+0.15</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>EUR/EGP</span>
          <div className="text-right">
            <span className="text-red-600 font-bold">33.42</span>
            <span className="text-xs text-red-500 block">-0.08</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>GBP/EGP</span>
          <div className="text-right">
            <span className="text-green-600 font-bold">39.12</span>
            <span className="text-xs text-green-500 block">+0.22</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>SAR/EGP</span>
          <div className="text-right">
            <span className="text-green-600 font-bold">8.23</span>
            <span className="text-xs text-green-500 block">+0.05</span>
          </div>
        </div>
      </div>
      <div
        className={`text-xs mt-3 pt-2 border-t ${
          isDarkMode ? "text-gray-400 border-gray-600" : "text-gray-500 border-gray-200"
        }`}
      >
        آخر تحديث: منذ 5 دقائق
      </div>
    </div>
  )
}

export default CurrencyRates
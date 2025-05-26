'use client'

import { FC } from 'react'

interface ReligiousWindowProps {
  isDarkMode: boolean
}

const ReligiousWindow: FC<ReligiousWindowProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`border rounded-lg overflow-hidden transition-colors h-[350px] ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 text-center">
        <h3 className="text-lg font-bold flex items-center justify-center gap-2">🕌 نافذة دينية</h3>
      </div>

      <div className="p-6 h-[calc(350px-64px)] flex flex-col">
        {/* آية اليوم */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 mb-4 flex-1">
          <h4 className={`font-semibold mb-2 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            آية اليوم
          </h4>
          <p className={`text-center leading-relaxed mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
          </p>
          <p className={`text-xs text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            سورة الطلاق - آية 2-3
          </p>
        </div>

        {/* مواقيت الصلاة */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
          <h4 className={`font-semibold mb-3 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            مواقيت الصلاة - القاهرة
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>الفجر:</span>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>5:15</span>
            </div>
            <div className="flex justify-between">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>الشروق:</span>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>6:45</span>
            </div>
            <div className="flex justify-between">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>الظهر:</span>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>12:30</span>
            </div>
            <div className="flex justify-between">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>العصر:</span>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>3:45</span>
            </div>
            <div className="flex justify-between">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>المغرب:</span>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>6:20</span>
            </div>
            <div className="flex justify-between">
              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>العشاء:</span>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>7:50</span>
            </div>
          </div>
          <div className={`text-xs mt-2 text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            الصلاة القادمة: المغرب في 2:15 ساعة
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReligiousWindow
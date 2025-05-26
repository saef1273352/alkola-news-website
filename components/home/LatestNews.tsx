'use client'

import { FC } from 'react'

interface NewsItem {
  title: string
  time: string
}

interface LatestNewsProps {
  isDarkMode: boolean
  news: NewsItem[]
}

const LatestNews: FC<LatestNewsProps> = ({ isDarkMode, news }) => {
  return (
    <div
      className={`border rounded-lg p-6 transition-colors ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-4 border-b pb-2 ${
          isDarkMode ? "text-gray-200 border-gray-600" : "text-gray-700 border-gray-200"
        }`}
      >
        📰 أحدث الأخبار
      </h3>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li
            key={index}
            className="border-b border-gray-200 dark:border-gray-600 pb-3 last:border-b-0 last:pb-0"
          >
            <a href="#" className="block group">
              <h4 className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors mb-1">
                {item.title}
              </h4>
              <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{item.time}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LatestNews
"use client"

import { useState, useEffect } from "react"

interface BreakingNewsProps {
  news: string[];
  isDarkMode: boolean;
}

export default function BreakingNews({ news, isDarkMode }: BreakingNewsProps) {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  // تحديث شريط الأخبار تلقائياً
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % news.length)
    }, 8000) // زيادة المدة إلى 8 ثوانٍ

    return () => clearInterval(newsInterval)
  }, [news.length])

  return (
    <div
      className={`flex items-center py-3 px-4 rounded-lg overflow-hidden transition-colors ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div
        className={`flex-shrink-0 px-3 py-1 rounded-full mr-4 font-bold text-white ${isDarkMode ? "bg-red-600" : "bg-red-500"}`}
      >
        عاجل
      </div>
      <div className="relative overflow-hidden flex-1">
        <div
          className="whitespace-nowrap animate-marquee"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          <span className={`text-lg font-medium ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            {news[currentNewsIndex]}
          </span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
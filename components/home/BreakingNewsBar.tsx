'use client'

import { FC } from 'react'

interface BreakingNewsBarProps {
  news: string[]
  currentNewsIndex: number
}

const BreakingNewsBar: FC<BreakingNewsBarProps> = ({ news, currentNewsIndex }) => {
  return (
    <div className="fixed top-[120px] left-0 right-0 z-40 h-[50px] bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          {/* كلمة عاجل */}
          <div className="flex-shrink-0 ml-4">
            <span
              className="bg-red-600 text-white px-4 py-1 rounded-md font-bold text-sm shadow-lg border-r-4 border-red-700"
              style={{
                backgroundColor: "#dc2626",
                color: "#ffffff",
                borderRightColor: "#b91c1c",
              }}
            >
              عاجل
            </span>
          </div>

          {/* منطقة النص المتحرك */}
          <div className="flex-1 h-full overflow-hidden">
            <div className="h-full flex items-center">
              <div
                className="whitespace-nowrap font-medium text-sm"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "500",
                  transform: `translateX(${100 - currentNewsIndex * 100}%)`,
                  transition: "transform 15s linear",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {news.map((newsItem, index) => (
                  <span
                    key={index}
                    style={{
                      color: "#ffffff",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      minWidth: "100vw",
                      display: "inline-block",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {newsItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreakingNewsBar
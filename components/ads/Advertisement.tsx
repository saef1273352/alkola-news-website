'use client'

import { FC } from 'react'
import Image from 'next/image'

interface AdvertisementProps {
  isDarkMode: boolean
  width: number
  height: number
  className?: string
}

const Advertisement: FC<AdvertisementProps> = ({ isDarkMode, width, height, className = '' }) => {
  return (
    <div
      className={`border rounded-lg p-6 text-center transition-colors ${className} ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}
      style={{ height: `${height}px` }}
    >
      <div
        className={`border-2 border-dashed rounded-lg h-full flex flex-col items-center justify-center ${
          isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'
        }`}
      >
        <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>مساحة إعلانية</p>
        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          {width}x{height}
        </p>
        <div className="relative w-[100px] h-[60px] mt-2">
          <Image 
            src="/images/logo.png" 
            alt="إعلان" 
            fill
            className="opacity-70 object-contain"
            sizes="100px"
            priority={false}
            quality={75}
          />
        </div>
      </div>
    </div>
  )
}

export default Advertisement
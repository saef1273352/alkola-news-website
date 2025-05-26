'use client'

import { FC } from 'react'
import { Play } from 'lucide-react'

interface LiveBroadcastProps {
  isDarkMode: boolean
}

const LiveBroadcast: FC<LiveBroadcastProps> = ({ isDarkMode }) => {
  return (
    <div className="flex-1 bg-black text-white rounded-lg p-6 flex flex-col">
      <h3 className="text-xl font-bold mb-4 pb-3 border-b border-gray-600 text-center">بث مباشر</h3>
      <div className="flex-1 bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center text-center">
        <Play className="w-12 h-12 text-gray-400 mb-3" />
        <p className="text-gray-300 mb-2">محتوى البث المباشر يظهر هنا</p>
        <span className="text-gray-500 text-lg">(منطقة الفيديو)</span>
      </div>
    </div>
  )
}

export default LiveBroadcast
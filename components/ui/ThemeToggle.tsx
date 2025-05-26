"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)

  // تجنب مشكلة عدم تطابق الترميز بين الخادم والعميل
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-800 text-yellow-300 hover:bg-gray-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300"}`}
      aria-label={isDarkMode ? "تبديل إلى الوضع الفاتح" : "تبديل إلى الوضع الداكن"}
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onSearch: (query: string) => void;
  isDarkMode: boolean;
  placeholder?: string;
}

export default function SearchBar({ onSearch, isDarkMode, placeholder = "ابحث هنا..." }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const toggleSearch = () => {
    setIsExpanded(!isExpanded)
  }

  const clearSearch = () => {
    setQuery("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // عند توسيع حقل البحث، ركز على حقل الإدخال
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  return (
    <div className="relative flex items-center">
      <div
        className={`flex items-center overflow-hidden transition-all duration-300 ${isExpanded ? "w-full md:w-64" : "w-10"} ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} rounded-full`}
      >
        <button
          onClick={toggleSearch}
          className={`flex-shrink-0 p-2 rounded-full ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
          aria-label="بحث"
        >
          <Search className="w-5 h-5" />
        </button>

        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`border-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${isDarkMode ? "bg-gray-800 text-white placeholder:text-gray-400" : "bg-gray-100 text-gray-900 placeholder:text-gray-500"}`}
          style={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? "100%" : 0 }}
        />

        {isExpanded && query && (
          <button
            onClick={clearSearch}
            className={`flex-shrink-0 p-2 ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            aria-label="مسح البحث"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
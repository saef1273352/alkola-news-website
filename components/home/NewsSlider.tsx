"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface NewsSliderProps {
  news: NewsItem[];
  isDarkMode: boolean;
}

export default function NewsSlider({ news, isDarkMode }: NewsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // تحديث السلايدر تلقائياً
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [news.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length)
  }

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-md group">
      {/* الصورة الحالية */}
      <div className="relative h-full w-full">
        <Image
          src={news[currentSlide].image}
          alt={news[currentSlide].title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          {/* محتوى السلايدر */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-blue-600 rounded-full">
              {news[currentSlide].category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{news[currentSlide].title}</h2>
            <Link
              href={`/news/${news[currentSlide].id}`}
              className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors"
            >
              اقرأ المزيد
            </Link>
          </div>
        </div>
      </div>

      {/* أزرار التنقل */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
        aria-label="السابق"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
        aria-label="التالي"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* مؤشرات السلايدر */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "w-6 bg-white" : "bg-white/50"}`}
            aria-label={`انتقل إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
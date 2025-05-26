import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  category: string;
  image?: string;
  time: string;
  isDarkMode: boolean;
  featured?: boolean;
}

export default function NewsCard({
  id,
  title,
  content,
  category,
  image,
  time,
  isDarkMode,
  featured = false,
}: NewsCardProps) {
  return (
    <div
      className={`group h-full rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${featured ? "border-2 border-blue-500" : "border border-transparent"} ${isDarkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"}`}
    >
      <Link href={`/news/${id}`} className="block h-full">
        <div className="flex flex-col h-full">
          {/* صورة الخبر (إذا وجدت) */}
          {image && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {featured && (
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  مميز
                </div>
              )}
            </div>
          )}

          {/* محتوى الخبر */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-center mb-2">
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${isDarkMode ? "bg-gray-700 text-blue-400" : "bg-blue-100 text-blue-700"}`}
              >
                {category}
              </span>
              <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{time}</span>
            </div>

            <h3
              className={`text-lg font-bold mb-2 line-clamp-2 transition-colors ${isDarkMode ? "text-white group-hover:text-blue-400" : "text-gray-800 group-hover:text-blue-600"}`}
            >
              {title}
            </h3>

            <p
              className={`text-sm line-clamp-3 mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {content}
            </p>

            <div className="mt-auto">
              <span
                className={`inline-flex items-center text-sm font-medium transition-colors ${isDarkMode ? "text-blue-400 group-hover:text-blue-300" : "text-blue-600 group-hover:text-blue-700"}`}
              >
                اقرأ المزيد
                <svg
                  className="mr-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer
      className={`border-t py-12 transition-colors ${isDarkMode ? "bg-gray-900 border-gray-800 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* القسم الأول: معلومات الموقع */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/images/new-logo.png"
                alt="أخباريا الكوله الآن"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              موقع إخباري شامل يقدم أحدث الأخبار المحلية والعالمية في مختلف المجالات السياسية والاقتصادية والرياضية والفنية والتكنولوجية.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                aria-label="تويتر"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                aria-label="انستغرام"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} transition-colors`}
                aria-label="يوتيوب"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/islamic"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  إسلاميات
                </Link>
              </li>
              <li>
                <Link
                  href="/ads"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  إعلانات
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* القسم الثالث: الأقسام */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">الأقسام</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  أخبار محلية
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  أخبار عالمية
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  رياضة
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  اقتصاد
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`hover:underline ${isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
                >
                  تكنولوجيا
                </Link>
              </li>
            </ul>
          </div>

          {/* القسم الرابع: معلومات الاتصال */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>العنوان: شارع الصحافة، المدينة، البلد</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>الهاتف: +20 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>البريد: info@alkola-news.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="mt-12 pt-8 border-t text-center text-sm">
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            &copy; {new Date().getFullYear()} أخباريا الكوله الآن. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
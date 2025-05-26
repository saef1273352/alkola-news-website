'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Search, MessageCircle, Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// المكونات المنفصلة
import Advertisement from '@/components/ads/Advertisement'
import BreakingNewsBar from '@/components/home/BreakingNewsBar'
import NewsSlider from '@/components/home/NewsSlider'
import LiveBroadcast from '@/components/home/LiveBroadcast'
import ReligiousWindow from '@/components/home/ReligiousWindow'
import CurrencyRates from '@/components/home/CurrencyRates'
import GoldPrices from '@/components/home/GoldPrices'
import LatestNews from '@/components/home/LatestNews'
import WeatherWidget from '@/components/home/WeatherWidget'

// بيانات الأخبار للسلايدر
const sliderNews = [
  {
    id: 1,
    title: 'تطورات اقتصادية محلية هامة تؤثر على الأسواق',
    category: 'اقتصاد',
    image: '/images/slider_image_2.png',
  },
  {
    id: 2,
    title: 'نتائج رياضية مثيرة في البطولة المحلية',
    category: 'رياضة',
    image: '/images/slider_image_3.png',
  },
  {
    id: 3,
    title: 'إطلاق تقنيات جديدة في قطاع التكنولوجيا',
    category: 'تكنولوجيا',
    image: '/images/placeholder_tech.png',
  },
  {
    id: 4,
    title: 'تقرير شامل عن الأحوال الجوية والمناخ',
    category: 'طقس',
    image: '/images/placeholder_weather.png',
  },
]

// بيانات الأخبار العاجلة للشريط المتحرك
const breakingNews = [
  'عاجل: اجتماع طارئ لمجلس الوزراء لمناقشة التطورات الاقتصادية الأخيرة',
  'رياضة: فوز الفريق المحلي بنتيجة مثيرة في المباراة النهائية',
  'تكنولوجيا: إطلاق منصة رقمية جديدة لخدمة المواطنين',
  'طقس: توقعات بأمطار غزيرة خلال الأيام القادمة',
]

// بيانات الأخبار حسب التصنيف
const newsData = {
  local: [
    {
      id: 1,
      title: 'تطورات اقتصادية محلية هامة اليوم',
      content: 'تحليل لأحدث البيانات الاقتصادية وتأثيرها على السوق المحلي والاستثمارات المستقبلية...',
      category: 'أخبارنا',
      image: '/images/slider_image_2.png',
      time: 'منذ ساعتين',
    },
    // ... باقي الأخبار المحلية
  ],
  regions: [
    {
      id: 4,
      title: 'مشاريع تنموية جديدة في المحافظات الشمالية',
      content: 'تفاصيل عن مشاريع البنية التحتية الجديدة وتأثيرها على التنمية المحلية.',
      category: 'محافظات',
      image: '/images/placeholder_weather.png',
      time: 'منذ ساعة',
    },
    // ... باقي أخبار المحافظات
  ],
  world: [
    {
      id: 5,
      title: 'تقرير شامل عن التطورات السياسية الدولية',
      content: 'ملخص لأبرز الأحداث السياسية العالمية وتأثيرها على المنطقة.',
      category: 'عالمية',
      image: '/images/slider_image_1.png',
      time: 'منذ 30 دقيقة',
    },
    // ... باقي الأخبار العالمية
  ],
  more: [
    {
      id: 6,
      title: 'نتائج رياضية مهمة في البطولات المحلية',
      content: 'تغطية شاملة لأهم المباريات والنتائج الرياضية الأخيرة.',
      category: 'رياضة',
      image: '/images/slider_image_3.png',
      time: 'منذ 45 دقيقة',
    },
    // ... باقي الأخبار المتنوعة
  ],
}

// بيانات آخر الأخبار
const latestNewsData = [
  {
    title: 'خبر عاجل: تطورات مهمة في القطاع الاقتصادي',
    time: 'منذ 15 دقيقة',
  },
  {
    title: 'رياضة: فوز تاريخي للفريق المحلي في البطولة',
    time: 'منذ 30 دقيقة',
  },
  {
    title: 'تكنولوجيا: إطلاق منصة رقمية جديدة لخدمة المواطنين',
    time: 'منذ 45 دقيقة',
  },
  {
    title: 'طقس: توقعات بأمطار غزيرة خلال الأيام القادمة',
    time: 'منذ ساعة',
  },
]

export default function AlkolaNewsWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('local')
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [signupEmail, setSignupEmail] = useState('')

  // تحديث السلايدر تلقائياً
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderNews.length)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [])

  // تحديث شريط الأخبار تلقائياً
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % breakingNews.length)
    }, 8000)

    return () => clearInterval(newsInterval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderNews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderNews.length) % sliderNews.length)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`البحث عن: ${searchQuery}`)
    }
  }

  const handleLogin = () => {
    if (loginEmail.trim()) {
      alert(`تسجيل الدخول بـ: ${loginEmail}`)
    }
  }

  const handleSignup = () => {
    if (signupEmail.trim()) {
      alert(`إنشاء حساب بـ: ${signupEmail}`)
    }
  }

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} dir="rtl">
      {/* الرأس الثابت المحسن */}
      <header
        className={`fixed top-0 left-0 right-0 border-b shadow-sm z-50 h-[120px] transition-colors ${
          isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col">
          {/* المساحة الإعلانية العلوية */}
          <div className="flex-1 flex items-center justify-center py-2">
            <Advertisement isDarkMode={isDarkMode} width={970} height={40} />
          </div>

          {/* شريط التنقل الرئيسي */}
          <div className="h-[70px] flex justify-between items-center">
            {/* الجانب الأيمن: الشعار والتنقل */}
            <div className="flex items-center space-x-8 space-x-reverse">
              {/* الشعار */}
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/images/new-logo.png"
                      alt="أخباريا الكوله الآن"
                      width={120}
                      height={60}
                      className="h-12 w-auto"
                      priority
                    />
                  </a>
                </h1>
              </div>

              {/* قائمة التنقل */}
              <nav className="hidden md:block">
                <ul className="flex items-center space-x-6 space-x-reverse">
                  <li>
                    <a
                      href="#"
                      className={`hover:text-blue-600 transition-colors ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      الرئيسية
                    </a>
                  </li>
                  {/* ... باقي عناصر القائمة */}
                </ul>
              </nav>
            </div>

            {/* الجانب الأيسر: زر تسجيل الدخول */}
            <div className="flex items-center space-x-3 space-x-reverse">
              {/* مودال تسجيل الدخول */}
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    تسجيل الدخول
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md" dir="rtl">
                  <DialogHeader className="text-center">
                    <DialogTitle className="text-2xl font-bold text-center mb-6">هلا بيدأ</DialogTitle>
                  </DialogHeader>

                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="login" className="text-sm">
                        تسجيل الدخول
                      </TabsTrigger>
                      <TabsTrigger value="signup" className="text-sm">
                        اشترك الآن
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-4">
                        <Input
                          type="email"
                          placeholder="الرجاء إدخال البريد الإلكتروني أو رقم الجوال"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full text-center"
                          dir="rtl"
                        />
                        <Button onClick={handleLogin} className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                          متابعة
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                      <div className="space-y-4">
                        <Input
                          type="email"
                          placeholder="الرجاء إدخال البريد الإلكتروني أو رقم الجوال"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          className="w-full text-center"
                          dir="rtl"
                        />
                        <Button onClick={handleSignup} className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                          متابعة
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>

              {/* زر الواتساب */}
              <button
                onClick={() => window.open('https://wa.me/+201234567890', '_blank')}
                className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                title="تواصل عبر الواتساب"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              {/* قائمة الهامبرغر للشاشات الصغيرة */}
              <button className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* شريط الأخبار المتحرك */}
      <BreakingNewsBar news={breakingNews} currentNewsIndex={currentNewsIndex} />

      {/* المحتوى الرئيسي */}
      <main className="pt-[190px] pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* القسم العلوي - السلايدر والبث المباشر */}
          <div className="flex gap-6 mb-8 h-[350px]">
            <NewsSlider
              slides={sliderNews}
              currentSlide={currentSlide}
              onPrevSlide={prevSlide}
              onNextSlide={nextSlide}
              onSlideSelect={setCurrentSlide}
            />
            <LiveBroadcast isDarkMode={isDarkMode} />
          </div>

          {/* المحتوى السفلي */}
          <div className="flex gap-6 items-start">
            {/* منطقة الأخبار الرئيسية */}
            <div className="flex-1">
              {/* عنوان القسم وشريط البحث */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-6">
                  {/* عنوان أحدث الأخبار */}
                  <div className="bg-red-600 text-white px-6 py-3 font-bold text-lg relative">
                    أحدث الأخبار
                    <div className="absolute left-0 top-0 w-0 h-0 border-t-[25px] border-b-[25px] border-r-[15px] border-t-red-600 border-b-red-600 border-r-transparent transform translate-x-full"></div>
                  </div>

                  {/* شريط البحث */}
                  <div className="flex max-w-md">
                    <input
                      type="text"
                      placeholder="ابحث في الأخبار..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`flex-1 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        isDarkMode
                          ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
                          : 'border-gray-300 bg-white text-gray-900'
                      }`}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                      onClick={handleSearch}
                      className="px-4 py-2 bg-blue-600 text-white rounded-l-lg hover:bg-blue-700 transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* التبويبات المحسنة */}
              <div className={`mb-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <nav className="flex">
                  {[
                    { id: 'local', label: 'أخبارنا' },
                    { id: 'regions', label: 'محافظات' },
                    { id: 'world', label: 'عالمية' },
                    { id: 'more', label: 'المزيد' },
                  ].map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white'
                          : `${
                              isDarkMode
                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-600'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                            } border-t border-l ${index === 3 ? 'border-r' : ''}`
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute left-0 top-0 w-0 h-0 border-t-[24px] border-b-[24px] border-r-[12px] border-t-red-600 border-b-red-600 border-r-transparent transform translate-x-full"></div>
                      )}
                    </button>
                  ))}
                </nav>
                <div className={`h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>

              {/* محتوى التبويبات */}
              <div className="space-y-6">
                {newsData[activeTab as keyof typeof newsData]?.map((article) => (
                  <article
                    key={article.id}
                    className={`border rounded-lg p-6 shadow-sm hover:shadow-md transition-all ${
                      isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex gap-4">
                      {article.image && (
                        <div className="flex-shrink-0 relative w-[200px] h-[150px]">
                          <Image
                            src={article.image || '/placeholder.svg'}
                            alt={article.title}
                            fill
                            className="rounded-lg object-cover"
                            sizes="200px"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-2 hover:text-blue-600 transition-colors ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          <a href="#">{article.title}</a>
                        </h3>
                        <p className={`mb-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {article.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {article.category}
                          </span>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {article.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* الشريط الجانبي */}
            <aside className="w-80 space-y-6">
              <ReligiousWindow isDarkMode={isDarkMode} />
              <Advertisement isDarkMode={isDarkMode} width={300} height={200} />
              <CurrencyRates isDarkMode={isDarkMode} />
              <GoldPrices isDarkMode={isDarkMode} />
              <LatestNews isDarkMode={isDarkMode} news={latestNewsData} />
              <WeatherWidget isDarkMode={isDarkMode} />
            </aside>
          </div>
        </div>
      </main>

      {/* التذييل */}
      <footer className={`text-white text-center py-6 mt-8 transition-colors ${isDarkMode ? 'bg-black' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2024 الكوله اليوم. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

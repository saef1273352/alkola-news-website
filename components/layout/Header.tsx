"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon, MessageCircle, Menu, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [loginEmail, setLoginEmail] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const handleWhatsApp = () => {
    window.open("https://wa.me/+201234567890", "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 border-b shadow-sm z-50 h-[120px] transition-colors ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col">
        {/* المساحة الإعلانية العلوية */}
        <div className="flex-1 flex items-center justify-center py-2">
          <div
            className={`w-full max-w-4xl h-[40px] rounded-lg border-2 border-dashed flex items-center justify-center transition-colors ${isDarkMode ? "border-gray-600 bg-gray-800" : "border-gray-300 bg-gray-50"}`}
          >
            <span className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              مساحة إعلانية مميزة - 970x40 (Leaderboard)
            </span>
          </div>
        </div>

        {/* شريط التنقل الرئيسي */}
        <div className="h-[70px] flex justify-between items-center relative">
          {/* الجانب الأيمن: الشعار والتنقل */}
          <div className="flex items-center space-x-8 space-x-reverse">
            {/* الشعار */}
            <div className="flex items-center relative z-20">
              <h1 className="text-2xl font-bold">
                <Link href="/" className="hover:opacity-80 transition-opacity block">
                  <Image
                    src="/images/logo.png"
                    alt="أخبارنا الكوله الآن"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
              </h1>
            </div>

            {/* قائمة التنقل للشاشات الكبيرة */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6 space-x-reverse">
                <li>
                  <Link
                    href="/"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    أخبار
                  </Link>
                </li>
                <li>
                  <Link
                    href="/islamic"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    إسلاميات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ads"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    إعلانات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    تواصل
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    بث مباشر
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`hover:text-blue-600 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    المزيد
                  </Link>
                </li>
                {/* زر تبديل الوضع الليلي/النهاري */}
                <li>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? "bg-gray-700 text-yellow-400 hover:bg-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    title={isDarkMode ? "تبديل للوضع النهاري" : "تبديل للوضع الليلي"}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* الجانب الأيسر: زر تسجيل الدخول وزر الواتساب */}
          <div className="flex items-center space-x-3 space-x-reverse relative z-20">
            {/* مودال تسجيل الدخول */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className={`px-4 py-2 rounded-lg border transition-colors ${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
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
                      <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
                      <Button onClick={handleSignup} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        متابعة
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            {/* زر الواتساب */}
            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              title="تواصل عبر الواتساب"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            {/* زر القائمة للجوال */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الجوال المحسنة */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div 
        className={`fixed top-[120px] right-0 w-64 h-[calc(100vh-120px)] transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isDarkMode ? "bg-gray-900 border-l border-gray-700" : "bg-white border-l border-gray-200"}`}
      >
        <nav className="h-full overflow-y-auto">
          <div className="px-4 py-6">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className={`flex items-center space-x-4 space-x-reverse py-2 px-4 rounded-lg transition-colors ${isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>الرئيسية</span>
                </Link>
              </li>
              // ... نفس النمط لبقية الروابط ...
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
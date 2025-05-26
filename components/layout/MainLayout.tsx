"use client"

import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // تحقق من وضع السمة المفضل للمستخدم عند تحميل الصفحة
  useEffect(() => {
    // تحقق من وجود تفضيل مخزن في localStorage
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
    
    setMounted(true)
  }, [])

  // تحديث السمة عند تغييرها
  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDarkMode, mounted])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // معالجة البحث
  const handleSearch = (query: string) => {
    console.log("البحث عن:", query)
    // يمكن إضافة منطق البحث هنا أو توجيه المستخدم إلى صفحة نتائج البحث
  }

  // معالجة تسجيل الدخول
  const handleLogin = (email: string, password: string) => {
    console.log("تسجيل الدخول:", { email, password })
    // يمكن إضافة منطق تسجيل الدخول هنا
  }

  // معالجة إنشاء حساب
  const handleSignup = (name: string, email: string, password: string) => {
    console.log("إنشاء حساب:", { name, email, password })
    // يمكن إضافة منطق إنشاء الحساب هنا
  }

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Header 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />
      <main className="flex-grow pt-[120px] pb-8">
        {children}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic, Tajawal } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/layout/MainLayout'

// تكوين الخطوط العربية
const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
})

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-kufi',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'موقع الكولا الإخباري',
  description: 'موقع إخباري شامل يقدم أحدث الأخبار المحلية والعالمية في مختلف المجالات',
  keywords: 'أخبار، محلي، عالمي، رياضة، اقتصاد، تكنولوجيا، إسلاميات',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${ibmPlex.variable} ${notoKufi.variable} ${tajawal.variable} font-body antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}

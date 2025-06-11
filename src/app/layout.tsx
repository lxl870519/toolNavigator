import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StagewiseWrapper from '@/components/StagewiseWrapper'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '工具导航站 - 发现优质在线工具',
  description: '精心收集的在线工具集合，包含域名工具、AI工具、SEO工具、开发工具等，帮助您提升工作效率',
  keywords: ['工具导航', '在线工具', 'AI工具', 'SEO工具', '开发工具', '效率工具'],
  authors: [{ name: '工具导航站团队' }],
  creator: '工具导航站',
  publisher: '工具导航站',
  metadataBase: new URL('https://your-domain.com'), // 请替换为实际域名
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '工具导航站 - 发现优质在线工具',
    description: '精心收集的在线工具集合，帮助您提升工作效率',
    url: 'https://your-domain.com', // 请替换为实际域名
    siteName: '工具导航站',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '工具导航站 - 发现优质在线工具',
    description: '精心收集的在线工具集合，帮助您提升工作效率',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
        <StagewiseWrapper />
      </body>
    </html>
  )
} 
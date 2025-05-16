import { MetadataRoute } from 'next'
import { tools } from '@/data/tools'

export default function p(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toolnavigator.vercel.app'
  
  // 生成工具页面的URL
  const toolUrls = tools.map(tool => ({
    url: `${baseUrl}/tool/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 添加首页和其他静态页面
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  return [...staticUrls, ...toolUrls]
} 
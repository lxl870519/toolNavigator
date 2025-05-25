'use client'

import { useState, useEffect, useMemo } from 'react'
import { Tool } from '@/types/tool'

interface CategoryFilterProps {
  tools: Tool[]
  onCategoryChange: (category: string) => void
  searchResults?: Tool[] // 添加搜索结果参数
}

export default function CategoryFilter({ tools, onCategoryChange, searchResults }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // 使用搜索结果进行计算，如果没有搜索结果则使用原始数据
  const dataToUse = searchResults || tools
  
  // 使用useMemo优化categories计算
  const categories = useMemo(() => {
    return ['all', ...Array.from(new Set(dataToUse.map(tool => tool.category)))]
  }, [dataToUse])
  
  // 为每个分类计算工具数量（基于当前搜索结果）
  const getCategoryCount = (category: string) => {
    if (category === 'all') return dataToUse.length
    return dataToUse.filter(tool => tool.category === category).length
  }

  // 获取分类的显示名称
  const getCategoryDisplayName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      'all': '全部分类',
      'domain': '域名工具',
      'ai': 'AI工具',
      'api': 'API平台',
      'analytics': '数据分析',
      'seo': 'SEO工具',
      'monetization': '网站变现',
      'payment': '支付工具',
      'productivity': '效率工具',
      'development': '开发工具',
      'design': '设计工具',
      'marketing': '营销工具',
      'tools': '通用工具',
      'security': '安全工具',
      'social': '社交媒体'
    }
    return categoryNames[category] || category
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  // 当搜索结果变化时，如果当前分类在新结果中不存在，重置为'all'
  useEffect(() => {
    if (selectedCategory !== 'all' && !categories.includes(selectedCategory)) {
      setSelectedCategory('all')
      onCategoryChange('all')
    }
  }, [searchResults, selectedCategory, onCategoryChange]) // 移除categories依赖

  return (
    <div className="relative w-full">
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 pr-12 text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 appearance-none cursor-pointer transition-all duration-200 hover:border-[var(--primary)]/50"
        style={{ 
          minWidth: '200px',
          maxWidth: '100%',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 1rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1rem 1rem'
        }}
      >
        {categories.map((category) => (
          <option key={category} value={category} className="py-2 text-sm">
            {getCategoryDisplayName(category)} ({getCategoryCount(category)})
          </option>
        ))}
      </select>
    </div>
  )
} 
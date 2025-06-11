'use client'

import { useState, useEffect, useMemo } from 'react'
import { Tool } from '@/types/tool'

interface CategoryFilterProps {
  tools: Tool[]
  onCategoryChange: (category: string) => void
  searchResults?: Tool[]
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

  // 获取分类的显示名称和颜色
  const getCategoryInfo = (category: string) => {
    const categoryData: { [key: string]: { name: string, color: string } } = {
      'all': { name: '全部', color: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600' },
      'domain': { name: '域名工具', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50' },
      'ai': { name: 'AI工具', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50' },
      'api': { name: 'API平台', color: 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50' },
      'analytics': { name: '数据分析', color: 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50' },
      'seo': { name: 'SEO工具', color: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50' },
      'monetization': { name: '网站变现', color: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50' },
      'payment': { name: '支付工具', color: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50' },
      'productivity': { name: '效率工具', color: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-900/50' },
      'development': { name: '开发工具', color: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600' },
      'design': { name: '设计工具', color: 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50' },
      'marketing': { name: '营销工具', color: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50' },
      'tools': { name: '通用工具', color: 'bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-900/50' },
      'security': { name: '安全工具', color: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50' },
      'social': { name: '社交媒体', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50' }
    }
    return categoryData[category] || {
      name: category,
      color: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
    }
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
  }, [searchResults, selectedCategory, onCategoryChange])

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const categoryInfo = getCategoryInfo(category)
          const count = getCategoryCount(category)
          const isSelected = selectedCategory === category
          
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105
                ${isSelected 
                  ? 'bg-[var(--primary)] text-white shadow-md' 
                  : categoryInfo.color
                }
              `}
            >
              <span>{categoryInfo.name}</span>
              <span className={`
                text-xs px-1.5 py-0.5 rounded-full font-normal
                ${isSelected 
                  ? 'bg-white/20 text-white' 
                  : 'bg-black/10 dark:bg-white/20'
                }
              `}>
                {count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
} 
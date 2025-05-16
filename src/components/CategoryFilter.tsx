'use client'

import { useState } from 'react'
import { Tool } from '@/types/tool'

interface CategoryFilterProps {
  tools: Tool[]
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ tools, onCategoryChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = ['all', ...Array.from(new Set(tools.map(tool => tool.category)))]

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`btn rounded-full px-4 py-1 text-sm font-semibold transition-all duration-200 shadow-sm border
            ${selectedCategory === category 
              ? 'bg-[var(--primary)] text-white border-[var(--primary)]' 
              : 'bg-gray-100 dark:bg-[var(--background)] text-[var(--primary)] border-[var(--border)] hover:bg-[var(--primary-light)] hover:text-white'}
          `}
        >
          {category === 'all' ? '全部' : category}
        </button>
      ))}
    </div>
  )
} 
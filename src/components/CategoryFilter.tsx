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
          className={`btn ${
            selectedCategory === category 
              ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:from-[var(--primary-dark)] hover:to-[var(--secondary-dark)]' 
              : 'bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--muted)] hover:bg-opacity-10 border border-[var(--border)] hover:border-[var(--primary)]'
          } transition-all duration-200`}
        >
          {category === 'all' ? '全部' : category}
        </button>
      ))}
    </div>
  )
} 
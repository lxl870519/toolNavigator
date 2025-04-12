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
          className={`btn ${selectedCategory === category ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {category === 'all' ? '全部' : category}
        </button>
      ))}
    </div>
  )
} 
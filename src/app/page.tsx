'use client'

import ToolCard from '@/components/ToolCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import { tools } from '@/data/tools'
import { useState } from 'react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container py-4">
          <h1 className="text-2xl font-bold text-gray-900">工具导航站</h1>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <SearchBar />
            <CategoryFilter 
              tools={tools} 
              onCategoryChange={setSelectedCategory} 
            />
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="container py-6">
          <p className="text-center text-gray-500">© 2024 工具导航站</p>
        </div>
      </footer>
    </div>
  )
} 
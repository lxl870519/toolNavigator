'use client'

import { useState } from 'react'
import { tools } from '@/data/tools'
import ToolCard from '@/components/ToolCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import { Tool } from '@/types/tool'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchResults, setSearchResults] = useState<Tool[]>(tools)

  const filteredTools = selectedCategory === 'all' 
    ? searchResults 
    : searchResults.filter(tool => tool.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">工具导航站</h1>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <SearchBar 
              tools={tools} 
              onSearch={setSearchResults} 
            />
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

      <footer className="footer">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-gray-500 dark:text-gray-400">© 2024 工具导航站</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">关于我们</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">使用条款</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">隐私政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
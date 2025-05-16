'use client'

import { useState } from 'react'
import { tools } from '@/data/tools'
import ToolCard from '@/components/ToolCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import { Tool } from '@/types/tool'
import { FaGithub, FaTwitter, FaMoon, FaSun } from 'react-icons/fa'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchResults, setSearchResults] = useState<Tool[]>(tools)
  const [isDark, setIsDark] = useState(false)

  const filteredTools = selectedCategory === 'all' 
    ? searchResults 
    : searchResults.filter(tool => tool.category === selectedCategory)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header bg-white border-b border-[var(--border)] sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-xl shadow">T</div>
            <h1 className="text-2xl font-extrabold text-[var(--primary)] tracking-wide">工具导航站</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[var(--primary)] hover:text-white text-[var(--primary)] transition"
              title="夜间模式切换"
              onClick={toggleDarkMode}
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--primary)] transition">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--primary)] transition">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="container mt-4 flex flex-col md:flex-row gap-4">
          <SearchBar 
            tools={tools} 
            onSearch={setSearchResults} 
          />
          <CategoryFilter 
            tools={tools} 
            onCategoryChange={setSelectedCategory} 
          />
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <footer className="footer bg-white border-t border-[var(--border)] mt-8">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-[var(--muted)] font-semibold">© 2024 工具导航站</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition">关于我们</a>
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition">使用条款</a>
            <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  )
} 
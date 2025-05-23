'use client'

import { useState, useEffect } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { Tool } from '@/types/tool'

interface SearchBarProps {
  tools: Tool[]
  onSearch: (results: Tool[]) => void
}

export default function SearchBar({ tools, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const results = tools.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    onSearch(results)
  }, [searchQuery, tools, onSearch])

  const clearSearch = () => {
    setSearchQuery('')
  }

  return (
    <div className="relative">
      <div className="relative">
        {/* 搜索图标 */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch className="w-4 h-4 text-[var(--muted)]" />
        </div>

        {/* 输入框 */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="搜索工具名称、描述或标签..."
          className="input pl-10 pr-10"
        />

        {/* 清除按钮 */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--background-secondary)] hover:bg-[var(--muted)] hover:text-white text-[var(--muted)] flex items-center justify-center transition-all duration-200"
          >
            <FaTimes className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* 搜索提示 */}
      {searchQuery && (
        <div className="mt-2 text-sm text-[var(--muted)]">
          正在搜索: <span className="text-[var(--primary)]">"{searchQuery}"</span>
        </div>
      )}
    </div>
  )
} 
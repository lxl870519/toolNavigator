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
    <div className="relative flex-1">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="搜索工具名称、描述或标签..."
        className="input pl-10 pr-8"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <FaTimes />
        </button>
      )}
    </div>
  )
} 
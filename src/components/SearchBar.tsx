'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="搜索工具..."
        className="input pl-10"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
} 
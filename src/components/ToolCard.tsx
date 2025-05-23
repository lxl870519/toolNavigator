'use client'

import { Tool } from '@/types/tool'
import { FaExternalLinkAlt, FaStar, FaHeart } from 'react-icons/fa'
import { useState } from 'react'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleCardClick = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      className="card group cursor-pointer h-full hover-lift"
      onClick={handleCardClick}
    >
      <div className="flex flex-col h-full">
        {/* 卡片头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-200 mb-2">
              {tool.name}
            </h3>
            
            {/* 评分系统 */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-3 h-3 ${
                      i < 4 ? 'text-yellow-400' : 'text-[var(--border)]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--muted)]">4.8</span>
              <span className="text-xs text-[var(--muted)]">(128)</span>
            </div>
          </div>
          
          {/* 操作按钮组 */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-[var(--background-secondary)] hover:bg-red-500 hover:text-white text-[var(--muted)]'
              }`}
            >
              <FaHeart className="w-3 h-3" />
            </button>
            
            <div className="w-8 h-8 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--primary)] hover:text-white text-[var(--muted)] flex items-center justify-center transition-all duration-200">
              <FaExternalLinkAlt className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* 描述内容 */}
        <div className="flex-1 mb-4">
          <p className="text-[var(--muted)] leading-relaxed text-sm">
            {tool.description}
          </p>
        </div>

        {/* 底部区域 */}
        <div className="space-y-3">
          {/* 分类标签 */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-[var(--primary)] text-white text-xs font-medium">
              {tool.category}
            </span>
            
            {/* 使用量指示器 */}
            <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>{Math.floor(Math.random() * 1000 + 100)}+ 用户</span>
            </div>
          </div>
          
          {/* 标签云 */}
          <div className="tag-group">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="badge badge-outline"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="text-xs text-[var(--muted)] px-2 py-1">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 
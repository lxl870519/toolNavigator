'use client'

import { Tool } from '@/types/tool'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card group">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary">
            {tool.name}
          </h3>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tool.category}
          </span>
          <div className="flex gap-2">
            {tool.tags.map(tag => (
              <span
                key={tag}
                className="badge badge-outline"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
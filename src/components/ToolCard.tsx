'use client'

import { Tool } from '@/types/tool'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card group hover:border-[var(--primary)]">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-200">
            {tool.name}
          </h3>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
        
        <p className="text-[var(--muted-foreground)] mb-4 flex-grow">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--muted-foreground)] bg-[var(--background)] px-3 py-1 rounded-full">
            {tool.category}
          </span>
          <div className="flex gap-2">
            {tool.tags.map(tag => (
              <span
                key={tag}
                className="badge badge-outline hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--secondary)] hover:text-white hover:border-transparent"
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
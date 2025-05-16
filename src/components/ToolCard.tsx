'use client'

import { Tool } from '@/types/tool'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card group border border-[var(--border)] bg-white dark:bg-[var(--card)] rounded-2xl shadow hover:shadow-lg transition-all duration-200 hover:border-[var(--primary)] flex flex-col h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-[var(--primary)] group-hover:text-[var(--primary-light)] transition-colors duration-200">
            {tool.name}
          </h3>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--primary)] transition-transform duration-200 transform hover:scale-125"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        </div>
        <p className="text-[var(--muted)] mb-4 flex-grow text-base leading-relaxed">
          {tool.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white bg-[var(--primary)] px-3 py-1 rounded-full shadow">
            {tool.category}
          </span>
          <div className="flex gap-2">
            {tool.tags.map(tag => (
              <span
                key={tag}
                className="badge badge-outline border-[var(--primary)] text-[var(--primary)] bg-gray-100 dark:bg-[var(--background)] hover:bg-[var(--primary)] hover:text-white hover:border-transparent transition-all duration-200"
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
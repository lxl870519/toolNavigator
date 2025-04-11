'use client'

import { Tool } from '@/types/tool'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ToolCardProps {
  tool: Tool
}

const getDomain = (url: string) => {
  try {
    const domain = new URL(url).hostname.replace('www.', '')
    return domain
  } catch {
    return url
  }
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card hover:scale-[1.02] transition-transform">
      <div className="card-body">
        <h3 className="card-title text-lg font-semibold text-gray-900">{tool.name}</h3>
        <p className="text-gray-600 mb-1">{tool.description}</p>
        <p className="text-gray-400 text-sm">{getDomain(tool.url)}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tool.tags.map(tag => (
            <span key={tag} className="badge badge-outline">{tag}</span>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex items-center"
          >
            访问 <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
} 
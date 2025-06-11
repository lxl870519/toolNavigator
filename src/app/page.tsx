'use client'

import { useState, useEffect } from 'react'
import { tools } from '@/data/tools'
import ToolCard from '@/components/ToolCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import { Tool } from '@/types/tool'
import { FaGithub, FaTwitter, FaMoon, FaSun, FaTools, FaSearch, FaHeart } from 'react-icons/fa'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchResults, setSearchResults] = useState<Tool[]>(tools)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // 获取分类的中文显示名称
  const getCategoryDisplayName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      'all': '全部分类',
      'domain': '域名工具',
      'ai': 'AI工具',
      'api': 'API平台',
      'analytics': '数据分析',
      'seo': 'SEO工具',
      'monetization': '网站变现',
      'payment': '支付工具',
      'productivity': '效率工具',
      'development': '开发工具',
      'design': '设计工具',
      'marketing': '营销工具',
      'tools': '通用工具',
      'security': '安全工具',
      'social': '社交媒体'
    }
    return categoryNames[category] || category
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredTools = selectedCategory === 'all' 
    ? searchResults 
    : searchResults.filter(tool => tool.category === selectedCategory)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* 顶部导航栏 */}
      <header className="header">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-sm">
                <FaTools className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">工具导航站</h1>
                <p className="text-sm text-[var(--muted)]">发现优质在线工具</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                className="btn-secondary w-10 h-10 flex items-center justify-center rounded-lg hover-lift"
                title="切换主题"
                onClick={toggleDarkMode}
              >
                {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="btn-secondary w-10 h-10 flex items-center justify-center rounded-lg hover-lift">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="btn-secondary w-10 h-10 flex items-center justify-center rounded-lg hover-lift">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container py-8">
        {/* 搜索区域 */}
        <div className="max-w-4xl mx-auto mb-6">
          <SearchBar 
            tools={tools} 
            onSearch={setSearchResults} 
          />
        </div>

        {/* 分类展示区域 */}
        <div className="mb-8">
          <CategoryFilter 
            tools={tools} 
            searchResults={searchResults}
            onCategoryChange={setSelectedCategory} 
          />
        </div>

        {/* 结果统计 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FaSearch className="text-[var(--primary)] w-4 h-4" />
            <span className="text-[var(--foreground)] font-medium">
              找到 <span className="text-[var(--primary)]">{filteredTools.length}</span> 个工具
            </span>
          </div>
          
          {selectedCategory !== 'all' && (
            <div className="flex items-center gap-2">
              <span className="text-[var(--muted)] text-sm">当前分类:</span>
              <span className="badge bg-[var(--primary)] text-white px-3 py-1 rounded-md text-sm">
                {getCategoryDisplayName(selectedCategory)}
              </span>
            </div>
          )}
        </div>

        {/* 工具网格 */}
        {filteredTools.length > 0 ? (
          <div className="card-grid">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="fade-in">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--background-secondary)] flex items-center justify-center">
              <FaSearch className="w-8 h-8 text-[var(--muted)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">未找到相关工具</h3>
            <p className="text-[var(--muted)] mb-6">尝试调整搜索关键词或选择其他分类</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchResults(tools)
              }}
              className="btn btn-primary"
            >
              查看全部工具
            </button>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                  <FaTools className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-[var(--foreground)]">工具导航站</span>
              </div>
              <p className="text-[var(--muted)] text-sm mb-3">
                为您精心收集和整理实用的在线工具
              </p>
              <div className="flex items-center gap-1 text-sm text-[var(--muted)]">
                <FaHeart className="text-red-500 w-3 h-3" />
                <span>用心为您服务</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--foreground)] mb-3 text-sm">快速链接</h4>
              <div className="space-y-2">
                <a href="#" className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">工具推荐</a>
                <a href="#" className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">使用指南</a>
                <a href="#" className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">意见反馈</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--foreground)] mb-3 text-sm">关于</h4>
              <div className="space-y-2">
                <a href="#" className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">使用条款</a>
                <a href="#" className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">隐私政策</a>
                <a href="#" className="block text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm">联系我们</a>
              </div>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
            <span>© 2024 工具导航站 - 提升效率，简化工作</span>
            <div className="flex items-center gap-4">
              <span>版本 v2.0.0</span>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">更新日志</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
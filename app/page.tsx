'use client'

import { useState, useEffect } from 'react'
import HeroVictoryLane from '@/components/HeroVictoryLane'
import HeroVictoryLaneCorporate from '@/components/HeroVictoryLaneCorporate'
import HeroVictoryLaneAthletic from '@/components/HeroVictoryLaneAthletic'

export default function Home() {
  const [theme, setTheme] = useState<'athletic' | 'corporate' | 'athletic-imagery'>('athletic')

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'athletic' | 'corporate' | 'athletic-imagery' | null
    if (savedTheme && (savedTheme === 'athletic' || savedTheme === 'corporate' || savedTheme === 'athletic-imagery')) {
      setTheme(savedTheme)
    }
  }, [])

  // Save theme preference to localStorage when it changes
  const toggleTheme = () => {
    const themes: ('athletic' | 'corporate' | 'athletic-imagery')[] = ['athletic', 'corporate', 'athletic-imagery']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    const newTheme = themes[nextIndex]
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const getThemeLabel = () => {
    switch(theme) {
      case 'athletic':
        return '🎨 Corporate Theme'
      case 'corporate':
        return '📸 Athletic + Images'
      case 'athletic-imagery':
        return '🏃 Athletic Theme'
      default:
        return 'Toggle Theme'
    }
  }

  return (
    <main>
      {/* Theme Toggle Button - Fixed in corner */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-20 right-6 z-50 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-md text-white text-sm font-medium hover:bg-gray-900/90 transition-all duration-300 shadow-lg border border-white/10"
        aria-label="Toggle theme"
      >
        {getThemeLabel()}
      </button>

      {/* Render the appropriate component based on theme */}
      {theme === 'athletic' && <HeroVictoryLane />}
      {theme === 'corporate' && <HeroVictoryLaneCorporate />}
      {theme === 'athletic-imagery' && <HeroVictoryLaneAthletic />}
    </main>
  )
}
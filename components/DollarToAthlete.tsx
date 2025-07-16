'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const athletePaths = [
  // Dollar sign
  {
    path: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    viewBox: "0 0 24 24",
    label: "$"
  },
  // Basketball player shooting
  {
    path: "M12 2a3 3 0 0 1 3 3v2l2 1v3l-2 1v3l3 2v5H6v-5l3-2v-3l-2-1V8l2-1V5a3 3 0 0 1 3-3z M8 1l-2 2 M16 1l2 2",
    viewBox: "0 0 24 24",
    label: "Basketball"
  },
  // Football player throwing
  {
    path: "M12 2a3 3 0 0 1 3 3v2h2l2 3-1 2h-3v3l4 3v5H5v-5l4-3v-3H6l-1-2 2-3h2V5a3 3 0 0 1 3-3z",
    viewBox: "0 0 24 24",
    label: "Football"
  },
  // Runner sprinting
  {
    path: "M13 2a3 3 0 0 1 3 3v1l4 2-2 3-2-1v2l3 3-1 2-2-1v6H8v-6l-2 1-1-2 3-3v-2l-2 1-2-3 4-2V5a3 3 0 0 1 3-3h2z",
    viewBox: "0 0 24 24",
    label: "Track"
  },
  // Soccer player kicking
  {
    path: "M12 2a3 3 0 0 1 3 3v3l2 1v2l-2 1v2l5 4-1 2-4-3v5H9v-5l-4 3-1-2 5-4v-2l-2-1V9l2-1V5a3 3 0 0 1 3-3z",
    viewBox: "0 0 24 24",
    label: "Soccer"
  }
]

export default function DollarToAthlete() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % athletePaths.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-midnight flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/95 to-midnight" />
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Morphing SVG */}
        <div className="mb-16">
          <svg
            width="300"
            height="300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-gold/80"
          >
            <AnimatePresence mode="wait">
              <motion.path
                key={currentIndex}
                d={athletePaths[currentIndex].path}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  filter: currentIndex === 0 ? "none" : "drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))"
                }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
              />
            </AnimatePresence>
          </svg>
        </div>
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bebas text-white/80 tracking-wider mb-4">
            To them, you're just revenue.
          </h3>
          <p className="text-lg md:text-xl text-white/60 font-inter max-w-2xl mx-auto">
            The NCAA sees dollar signs where champions stand. 
            It's time to claim what's yours.
          </p>
        </motion.div>
        
        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {athletePaths.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-8 bg-gold' : 'w-1 bg-gold/30'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Ambient animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}
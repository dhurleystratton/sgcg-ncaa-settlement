'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const rafRef = useRef<number>()
  
  useEffect(() => {
    const startTime = Date.now()
    const startValue = 0
    
    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)
      
      countRef.current = currentValue
      setCount(currentValue)
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCount)
      }
    }
    
    updateCount()
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [end, duration])
  
  return count
}

export default function HeroExcellence() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showCounter, setShowCounter] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 1000], [0, -300])
  const scaleText = useTransform(scrollY, [0, 300], [1, 0.8])
  const opacityText = useTransform(scrollY, [0, 400], [1, 0])
  
  // Counter animation
  const animatedValue = useAnimatedCounter(showCounter ? 380000000 : 0, 2.5)
  
  useEffect(() => {
    setIsLoaded(true)
    // Trigger counter animation after a short delay
    const timer = setTimeout(() => setShowCounter(true), 800)
    return () => clearTimeout(timer)
  }, [])

  // Trigger confetti when counter reaches milestone
  useEffect(() => {
    if (animatedValue > 300000000 && !showConfetti) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [animatedValue, showConfetti])

  return (
    <section className="relative min-h-screen bg-midnight overflow-hidden">
      {/* Deep background layers */}
      <div className="absolute inset-0">
        {/* Multi-sport pattern overlay */}
        <div className="absolute inset-0">
          {/* Track and field lines - bottom layer */}
          <div className="absolute inset-0 pattern-track-animated opacity-[0.02]" />
          
          {/* Basketball court - middle layer */}
          <div className="absolute inset-0 pattern-basketball opacity-[0.03] scale-150" />
          
          {/* Football field perspective - top layer */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 pattern-football-perspective opacity-[0.04]" />
        </div>

        {/* Championship elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Trophy shapes - decorative */}
          <div className="absolute top-20 right-20 trophy-shape scale-50 opacity-[0.05] rotate-12">
            <div className="trophy-shimmer" />
          </div>
          <div className="absolute bottom-40 left-32 trophy-shape scale-75 opacity-[0.03] -rotate-12">
            <div className="trophy-shimmer" />
          </div>
          
          {/* Medal elements */}
          <div className="absolute top-40 left-20 medal-shape scale-50 opacity-[0.04]">
            <div className="medal-ribbon" />
          </div>
          
          {/* Rotating basketball */}
          <motion.div 
            className="absolute bottom-20 right-40 basketball-spin opacity-[0.05]"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Goal posts */}
          <div className="absolute top-1/3 right-1/4 goalpost-shape scale-75 opacity-[0.03]" />
        </div>

        {/* Stadium spotlight sweep */}
        <div className="absolute inset-0 spotlight-sweep opacity-[0.05]" />

        {/* Stadium lights effect - enhanced */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
              style={{ top: `${20 + i * 20}%` }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Stadium crowd wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 crowd-wave opacity-[0.03]" />

        {/* Geometric athletic shapes - abstract */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 bg-ocean/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Depth fog */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/50 to-midnight" />
      </div>


      {/* Main content - Split Screen Design */}
      <motion.div 
        className="relative z-10 min-h-screen grid lg:grid-cols-2"
        style={{ y: heroY }}
      >
        {/* Left Side - Typography and Content */}
        <div className="flex items-center justify-center px-8 lg:px-16 pt-24 lg:pt-0">
          <div className="w-full max-w-2xl">
            <motion.div
              style={{ scale: scaleText, opacity: opacityText }}
              className="text-center lg:text-left"
            >
              {/* Arena-scale typography with championship feel */}
              <motion.h1 
                className="text-[120px] md:text-[160px] lg:text-[200px] leading-[0.8] font-black text-white mb-4 relative"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="block relative">
                  HOUSE
                  {/* Subtle track lines behind text */}
                  <div className="absolute inset-0 pattern-track opacity-[0.02] -z-10 scale-110" />
                </span>
                <span className="block text-gradient-gold relative">
                  VS
                  {/* Championship glow */}
                  <motion.div 
                    className="absolute inset-0 bg-gold/10 blur-2xl -z-10"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
                <span className="block relative">
                  NCAA
                  {/* Football field pattern */}
                  <div className="absolute inset-0 pattern-football opacity-[0.02] -z-10 scale-110" />
                </span>
              </motion.h1>
              
              {/* Sell Your Claim - Prominent */}
              <motion.div
                className="mt-12 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="text-3xl md:text-4xl font-medium text-gold mb-4">
                  Sell Your Claim
                </div>
                <div className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Get paid now instead of waiting years for your NIL settlement
                </div>
              </motion.div>
              
              {/* Company Description */}
              <motion.p
                className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <span className="font-semibold text-gold">Sycamore Grove Claims Group</span> specializes in purchasing class member's rights to settlement payments.
              </motion.p>
              
              {/* CTA Button with athletic pattern */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <motion.button
                  className="btn-premium text-lg px-12 py-6 font-bold tracking-wider w-full lg:w-auto relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">CALCULATE YOUR CLAIM</span>
                  {/* Athletic pattern overlay on hover */}
                  <div className="absolute inset-0 pattern-track opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

        {/* Right Side - $380M Counter and Visual Element */}
        <div className="flex items-center justify-center px-8 lg:px-16 py-24 lg:py-0 relative overflow-hidden">
          {/* Background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Counter Container */}
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gold/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Dollar sign with victory stars */}
              <motion.div
                className="text-6xl md:text-8xl font-bebas text-gold mb-4 victory-stars"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                $
              </motion.div>
              
              {/* Animated counter */}
              <motion.div
                className="text-7xl md:text-9xl font-bebas text-white leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {animatedValue.toLocaleString()}
              </motion.div>
              
              {/* Million indicator */}
              <motion.div
                className="text-4xl md:text-6xl font-bebas text-gold mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                MILLION
              </motion.div>
              
              {/* Victory confetti */}
              {showConfetti && (
                <div className="confetti-container">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="confetti-piece"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${2 + Math.random() * 1}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Description */}
            <motion.p
              className="mt-8 text-lg md:text-xl text-white/80 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              Paid to athletes since 2024
            </motion.p>
            
            {/* Visual emphasis */}
            <motion.div
              className="mt-12 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-16 h-1 bg-gold"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile CTA - Fixed at bottom on mobile */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-4 bg-midnight/95 backdrop-blur-lg border-t border-gold/20 lg:hidden z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <button className="btn-premium w-full text-lg py-4 font-bold relative overflow-hidden group">
          <span className="relative z-10">CLAIM YOUR MONEY</span>
          {/* Animated basketball court pattern on hover */}
          <div className="absolute inset-0 pattern-basketball opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          {/* Corner trophy accents */}
          <div className="absolute top-2 right-2 trophy-shape scale-[0.15] opacity-20" />
          <div className="absolute bottom-2 left-2 trophy-shape scale-[0.15] opacity-20 rotate-180" />
        </button>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
      
      {/* Social links - bottom right, subtle with athletic backdrop */}
      <motion.div 
        className="absolute bottom-8 right-8 flex gap-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3 }}
      >
        {/* Tennis court pattern backdrop */}
        <div className="absolute inset-0 pattern-tennis opacity-[0.02] scale-150 -z-10" />
        <a
          href="https://twitter.com/sycamoregroveclaims"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          aria-label="Follow Sycamore Grove Claims on X (Twitter)"
        >
          <Twitter className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
        </a>
        <a
          href="https://linkedin.com/company/sycamore-grove-claims-group"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          aria-label="Connect with Sycamore Grove Claims on LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
        </a>
        <a
          href="https://instagram.com/sycamoregroveclaims"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          aria-label="Follow Sycamore Grove Claims on Instagram"
        >
          <Instagram className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
        </a>
      </motion.div>
    </section>
  )
}
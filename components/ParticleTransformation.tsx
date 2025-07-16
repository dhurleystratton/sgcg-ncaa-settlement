'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  targetX: number
  targetY: number
  stage: 'dollar' | 'breaking' | 'athletic'
  sport: 'basketball' | 'football' | 'track' | 'soccer'
  angle: number
  radius: number
  phase: number
}

const ParticleTransformation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)
  
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 })
  
  // Initialize particles
  useEffect(() => {
    const initParticles = () => {
      const particles: Particle[] = []
      const particlesPerDollar = 100
      const dollarSigns = 3
      
      // Create particles for each dollar sign (left side)
      for (let d = 0; d < dollarSigns; d++) {
        const centerX = dimensions.width * 0.15
        const centerY = dimensions.height * 0.3 + (d * dimensions.height * 0.3)
        
        for (let i = 0; i < particlesPerDollar; i++) {
          const t = i / particlesPerDollar
          const sport = ['basketball', 'football', 'track', 'soccer'][d % 4] as Particle['sport']
          
          // Position particles to form dollar sign shape
          let x, y
          if (t < 0.2) {
            // Top curve
            const angle = Math.PI * 1.5 + (Math.PI * 0.5 * (t / 0.2))
            x = centerX + Math.cos(angle) * 30
            y = centerY - 40 + Math.sin(angle) * 20
          } else if (t < 0.4) {
            // Middle S curve
            const progress = (t - 0.2) / 0.2
            x = centerX + Math.sin(progress * Math.PI) * 25
            y = centerY - 20 + progress * 40
          } else if (t < 0.6) {
            // Lower S curve
            const progress = (t - 0.4) / 0.2
            x = centerX - Math.sin(progress * Math.PI) * 25
            y = centerY + 20 + progress * 20
          } else if (t < 0.8) {
            // Bottom curve
            const angle = Math.PI * 0.5 + (Math.PI * 0.5 * ((t - 0.6) / 0.2))
            x = centerX + Math.cos(angle) * 30
            y = centerY + 40 + Math.sin(angle) * 20
          } else {
            // Vertical lines
            x = centerX + (Math.random() - 0.5) * 10
            y = centerY - 60 + Math.random() * 120
          }
          
          particles.push({
            id: d * particlesPerDollar + i,
            x,
            y,
            vx: 0,
            vy: 0,
            targetX: x,
            targetY: y,
            stage: 'dollar',
            sport,
            angle: Math.random() * Math.PI * 2,
            radius: 0,
            phase: Math.random() * Math.PI * 2
          })
        }
      }
      
      particlesRef.current = particles
    }
    
    initParticles()
  }, [dimensions])
  
  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }, [])
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])
  
  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const animate = () => {
      timeRef.current += 0.016
      
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 22, 40, 0.1)'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Stage progression based on position
        const progress = particle.x / dimensions.width
        
        // Update stage
        if (progress < 0.3) {
          particle.stage = 'dollar'
        } else if (progress < 0.6) {
          particle.stage = 'breaking'
        } else {
          particle.stage = 'athletic'
        }
        
        // Update target position based on stage
        if (particle.stage === 'dollar') {
          // Maintain dollar sign formation with slight vibration
          const vibration = Math.sin(timeRef.current * 2 + particle.phase) * 0.5
          particle.targetX = particle.targetX + vibration
          particle.targetY = particle.targetY + Math.cos(timeRef.current * 2 + particle.phase) * 0.5
        } else if (particle.stage === 'breaking') {
          // Chaotic breaking free movement
          const chaos = Math.sin(timeRef.current + particle.id) * 50
          particle.targetX += chaos * 0.1
          particle.targetY += Math.cos(timeRef.current * 1.5 + particle.id) * 30 * 0.1
          particle.vx += (Math.random() - 0.5) * 0.5
          particle.vy += (Math.random() - 0.5) * 0.5
        } else {
          // Athletic pattern formation
          const centerX = dimensions.width * 0.85
          const centerY = dimensions.height * 0.5
          
          switch (particle.sport) {
            case 'basketball':
              // Arc trajectory pattern
              particle.angle += 0.02
              particle.radius = 80 + Math.sin(particle.angle * 3) * 30
              particle.targetX = centerX + Math.cos(particle.angle) * particle.radius
              particle.targetY = centerY + Math.sin(particle.angle) * particle.radius - Math.sin(particle.angle * 2) * 40
              break
              
            case 'football':
              // Spiral pattern
              particle.angle += 0.03
              particle.radius = 40 + particle.angle * 2
              if (particle.radius > 120) {
                particle.angle = 0
                particle.radius = 40
              }
              particle.targetX = centerX + Math.cos(particle.angle * 4) * particle.radius
              particle.targetY = centerY + Math.sin(particle.angle) * particle.radius
              break
              
            case 'track':
              // Speed lines converging
              const laneOffset = (particle.id % 5) * 20 - 40
              particle.targetX = centerX + Math.cos(timeRef.current + particle.phase) * 100
              particle.targetY = centerY + laneOffset + Math.sin(timeRef.current * 2 + particle.phase) * 10
              break
              
            case 'soccer':
              // Circular flow pattern
              particle.angle += 0.025 + (particle.id % 3) * 0.005
              const radiusVariation = 60 + Math.sin(particle.angle * 5 + particle.phase) * 20
              particle.targetX = centerX + Math.cos(particle.angle) * radiusVariation
              particle.targetY = centerY + Math.sin(particle.angle) * radiusVariation
              break
          }
        }
        
        // Mouse influence
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100 && particle.stage === 'breaking') {
          particle.vx += (dx / distance) * 0.5
          particle.vy += (dy / distance) * 0.5
        }
        
        // Update velocity with easing
        particle.vx += (particle.targetX - particle.x) * 0.05
        particle.vy += (particle.targetY - particle.y) * 0.05
        particle.vx *= 0.92
        particle.vy *= 0.92
        
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Draw particle
        const opacity = particle.stage === 'dollar' ? 0.8 : 
                       particle.stage === 'breaking' ? 0.6 : 0.9
        
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw connections for athletic patterns
        if (particle.stage === 'athletic' && index % 3 === 0) {
          const nextParticle = particlesRef.current[(index + 1) % particlesRef.current.length]
          if (nextParticle.stage === 'athletic' && nextParticle.sport === particle.sport) {
            ctx.strokeStyle = `rgba(212, 175, 55, 0.2)`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(nextParticle.x, nextParticle.y)
            ctx.stroke()
          }
        }
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])
  
  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <section className="relative w-full h-screen bg-midnight overflow-hidden">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight pointer-events-none" />
      
      {/* Single text at bottom */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-2xl md:text-3xl text-white/60 font-light tracking-wide">
          The NCAA sees dollar signs where champions stand.
        </p>
      </motion.div>
      
      {/* Stage indicators (subtle) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-gold/30 text-sm">
        <span>Control</span>
        <span className="text-gold/20">→</span>
        <span>Transformation</span>
        <span className="text-gold/20">→</span>
        <span>Freedom</span>
      </div>
    </section>
  )
}

export default ParticleTransformation
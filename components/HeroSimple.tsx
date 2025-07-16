'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export default function HeroSimple() {
  return (
    <section className="relative min-h-screen bg-midnight overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.05) 35px, rgba(212, 175, 55, 0.05) 70px)
          `
        }} />
      </div>

      {/* Main Content - Adjusted for larger navigation */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-40 md:pt-48">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.h1 
            className="font-bebas text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-6xl md:text-8xl lg:text-9xl">HOUSE</span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-gold">VS</span>
            <span className="block text-6xl md:text-8xl lg:text-9xl">NCAA</span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-4xl text-gold font-light tracking-[0.3em] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            (NIL) SETTLEMENT
          </motion.div>

          {/* Sell Your Claim */}
          <motion.div
            className="mt-8 text-xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-white/80">Ready to </span>
            <span className="text-gold font-bold">Sell Your Claim</span>
            <span className="text-white/80">?</span>
          </motion.div>

          {/* Visual Choice */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <motion.div 
              className="p-8 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-5xl font-bebas text-gray-600 mb-4">2034</div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[10%] bg-gray-600 rounded-full" />
              </div>
              <p className="text-gray-500 mt-4 text-sm uppercase tracking-wider">Still Waiting</p>
            </motion.div>

            <motion.div 
              className="p-8 border border-gold/50 bg-gradient-to-br from-gold/10 to-transparent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-5xl font-bebas text-gold mb-4">NOW</div>
              <div className="text-2xl font-bold text-white">GET PAID</div>
              <p className="text-gold mt-4 text-sm uppercase tracking-wider">Immediate Payment</p>
            </motion.div>
          </div>

          {/* Company Description */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto p-8 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              <span className="font-semibold text-gold">Sycamore Grove Claims Group, LLC</span> is a private investment firm that specializes in purchasing class member's rights to settlement payments.{' '}
              <Link 
                href="https://www.sycamoregroveclaims.com" 
                target="_blank"
                className="text-gold/70 hover:text-gold transition-colors underline"
              >
                Learn more
              </Link>
            </p>
            <p className="mt-4 text-sm md:text-base text-white/70">
              In 2024 alone, structured transactions that provided over{' '}
              <span className="text-gold font-semibold">$380 million</span> to plaintiffs and/or class members.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <button className="px-12 py-6 bg-gold text-midnight font-bold text-lg tracking-wider uppercase hover:scale-105 transition-transform">
              CALCULATE YOUR CLAIM
            </button>
          </motion.div>
        </div>
      </div>

      {/* Social Links - Better positioned at bottom center */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="https://twitter.com/sycamoregroveclaims"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          aria-label="Follow on X (Twitter)"
        >
          <Twitter className="w-5 h-5 text-gold/70 group-hover:text-gold" />
        </a>
        <a
          href="https://linkedin.com/company/sycamore-grove-claims-group"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          aria-label="Connect on LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-gold/70 group-hover:text-gold" />
        </a>
        <a
          href="https://instagram.com/sycamoregroveclaims"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-5 h-5 text-gold/70 group-hover:text-gold" />
        </a>
      </motion.div>
    </section>
  )
}
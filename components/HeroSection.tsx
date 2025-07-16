'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Athletic background elements */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-brand-teal/5" />
        
        {/* Dynamic geometric shapes */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-energy-orange/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Speed lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-0 w-full h-full transform rotate-12">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-brand-teal to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  width: '150%',
                  left: '-25%',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 10 + i * 2, 
                  repeat: Infinity, 
                  ease: 'linear',
                  delay: i * 0.5 
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10 text-center py-12">
        {/* Main Headline with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-hero-mobile md:text-hero-desktop leading-none mb-6">
            <span className="block text-brand-dark-teal font-bold">HOUSE VS NCAA</span>
            <span className="block text-brand-teal mt-2">(NIL) SETTLEMENT</span>
          </h1>
        </motion.div>

        {/* Subheadline with stagger animation */}
        <motion.p 
          className="text-xl md:text-3xl font-inter text-gray-700 mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Get your settlement money <span className="font-bold text-brand-teal">now</span> instead of waiting 10 years
        </motion.p>

        {/* Target Audience Badge */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-block px-6 py-3 bg-brand-teal/10 text-brand-dark-teal font-semibold rounded-full text-lg md:text-xl">
            Former Division I Athletes (2016-2024)
          </span>
        </motion.div>

        {/* CTA Buttons with hover effects */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#claim-form" className="btn-primary text-lg px-10 py-5 inline-block">
              Sell Your Claim
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#learn-more" className="btn-secondary text-lg px-10 py-5 inline-block">
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Company Description Section */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-brand-dark-teal">Sycamore Grove Claims Group, LLC</span> is a private investment firm that specializes in purchasing class member's rights to settlement payments.{' '}
            <Link 
              href="https://www.sycamoregroveclaims.com" 
              target="_blank"
              className="text-brand-teal hover:text-brand-dark-teal underline font-medium transition-colors"
            >
              Learn more
            </Link>
          </p>
          <p className="text-lg text-gray-600">
            In 2024 alone, structured transactions that provided <span className="font-bold text-brand-dark-teal">over $380 million</span> to plaintiffs and/or class members.
          </p>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center text-brand-teal">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Athletic accent elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-energy-orange to-brand-teal" />
    </section>
  )
}
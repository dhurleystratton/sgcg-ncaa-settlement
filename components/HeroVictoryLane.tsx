'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import { useEffect } from 'react'

export default function HeroVictoryLane() {
  useEffect(() => {
    // Capture referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const ref = urlParams.get('ref')
    
    // Get the referral value (from URL or localStorage)
    const referralValue = ref || localStorage.getItem('referralCode') || ''
    
    if (ref) {
      // Store new ref in localStorage
      localStorage.setItem('referralCode', ref)
      
      // Clean the URL without losing the referral
      window.history.replaceState({}, document.title, window.location.pathname)
    }
    
    // Set the value on the hidden input after a short delay to ensure DOM is ready
    setTimeout(() => {
      const referralInput = document.querySelector('input[name="referral"]') as HTMLInputElement
      if (referralInput) {
        referralInput.value = referralValue
      }
    }, 100)
  }, [])

  return (
    <>
      <section className="relative min-h-screen bg-midnight overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Athletic track texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(67, 154, 163, 0.05) 100px, rgba(67, 154, 163, 0.05) 101px),
            repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(67, 154, 163, 0.05) 100px, rgba(67, 154, 163, 0.05) 101px)
          `,
        }} />
        
        {/* Stadium spotlights */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px]" />
        </motion.div>
        
        {/* Motion lines for speed effect - more visible */}
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(67, 154, 163, 0.2) 50%, transparent 100%)`,
            backgroundSize: '200px 100%',
            animation: 'slideRight 2s linear infinite',
          }} />
        </div>
        
        {/* Track lanes perspective */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(67, 154, 163, 0.1) 100%),
            repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 80px,
              rgba(67, 154, 163, 0.05) 80px,
              rgba(67, 154, 163, 0.05) 82px
            )
          `,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* Icon Bar - Upper Left */}
      <motion.div 
        className="absolute top-3 sm:top-6 left-3 sm:left-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 sm:gap-4 bg-midnight/30 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border border-brand-teal/20">
          {/* SGCG Logo */}
          <Link 
            href="https://www.sycamoregroveclaims.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Image 
              src="/images/logo/SGCG Logo Color.png" 
              alt="SGCG"
              width={100}
              height={100}
              className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          
          {/* Visual Divider */}
          <div className="w-px h-10 sm:h-16 bg-brand-teal/30" />
          
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {/* X */}
            <a
              href="https://x.com/NILsettlement"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-brand-teal/10 transition-all duration-300 group"
              aria-label="Follow on X"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sycamore-grove-claims-group/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-brand-teal/10 transition-all duration-300 group"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" />
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ncaasettlement/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-brand-teal/10 transition-all duration-300 group"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-16 pb-16">
        <div className="text-center max-w-7xl mx-auto w-full">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bebas text-white mb-1">
              <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-[0.8]">HOUSE</span>
              <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-brand-teal leading-[0.8]">VS</span>
              <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-[0.8]">NCAA</span>
            </h1>
            <div className="text-xl sm:text-[1.375rem] md:text-[1.5rem] lg:text-[2.5rem] text-brand-teal/80 font-light tracking-[0.2em] sm:tracking-[0.3em] -mt-1">
              (NIL) SETTLEMENT
            </div>
          </motion.div>

          {/* Credibility Badge */}
          <motion.div
            className="mt-6 md:mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-midnight/80 backdrop-blur-md border-2 border-brand-teal/40 rounded-full">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 text-center leading-relaxed">
                <span className="font-semibold text-brand-teal">Sycamore Grove</span> has purchased settlement claims from over <span className="font-bold text-brand-teal">1,000 NCAA athletes</span>
              </p>
            </div>
          </motion.div>

          {/* Finish Line with CTA */}
          <motion.div
            className="mt-6 md:mt-8 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Finish Line Graphics */}
            <div className="relative">
              {/* Bold Checkered Finish Line */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-24 opacity-60">
                <div className="h-full w-full" style={{
                  backgroundImage: `
                    repeating-linear-gradient(90deg, #439aa3 0, #439aa3 30px, #0A1628 30px, #0A1628 60px),
                    repeating-linear-gradient(0deg, #439aa3 0, #439aa3 12px, transparent 12px, transparent 24px)
                  `,
                  backgroundSize: '60px 24px',
                }} />
              </div>
              
              {/* Track lanes leading to finish */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-40 -z-10">
                <div className="h-full w-full opacity-30" style={{
                  backgroundImage: `
                    linear-gradient(to right, transparent 0%, rgba(67, 154, 163, 0.2) 45%, rgba(67, 154, 163, 0.2) 55%, transparent 100%),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 120px,
                      rgba(67, 154, 163, 0.3) 120px,
                      rgba(67, 154, 163, 0.3) 122px
                    )
                  `,
                }} />
              </div>
              
              {/* Motion blur lines */}
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #439aa3 100%)',
                  filter: 'blur(2px)',
                }}
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1"
                style={{
                  background: 'linear-gradient(270deg, transparent 0%, #439aa3 100%)',
                  filter: 'blur(2px)',
                }}
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />

              {/* Main CTA with Dark Panel */}
              <div className="relative z-10 py-6">
                {/* Dark background panel for contrast with brand-teal outline */}
                <div className="absolute inset-0 bg-midnight/80 backdrop-blur-sm -mx-8 md:-mx-16 rounded-lg border border-brand-teal/20" />

                <motion.a
                  href="https://www.sycamoregroveclaims.com/nil-settlement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-brand-teal tracking-wider px-4 sm:px-8 py-3 cursor-pointer hover:scale-105 hover:bg-brand-teal/10 transition-all duration-300 rounded-lg"
                  animate={{
                    textShadow: [
                      '0 0 30px rgba(67, 154, 163, 0.8)',
                      '0 0 50px rgba(67, 154, 163, 1)',
                      '0 0 30px rgba(67, 154, 163, 0.8)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  SELL YOUR CLAIM
                </motion.a>
                
              </div>
            </div>
          </motion.div>

          {/* Victory particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-brand-teal/30 rounded-full"
                style={{
                  left: `${50 + (i - 2) * 15}%`,
                  top: '60%',
                }}
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Credibility Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-teal/20 backdrop-blur-lg bg-midnight/90"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
            <span className="font-semibold text-white">Sycamore Grove Claims Group</span>
            <span className="hidden md:inline text-brand-teal/40">•</span>
            <Link
              href="https://www.sycamoregroveclaims.com/nil-settlement"
              target="_blank"
              className="text-brand-teal/70 hover:text-brand-teal transition-colors underline underline-offset-2"
            >
              Learn More
            </Link>
            <span className="hidden md:inline text-brand-teal/40">•</span>
            <Link
              href="https://www.sycamoregroveclaims.com/faqs"
              target="_blank"
              className="text-brand-teal/70 hover:text-brand-teal transition-colors underline underline-offset-2"
            >
              Tax Disclaimer
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(200px); }
        }
      `}</style>
    </>
  )
}
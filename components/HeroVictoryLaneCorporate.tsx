'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export default function HeroVictoryLaneCorporate() {
  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Background Effects - Updated for light theme */}
      <div className="absolute inset-0">
        {/* Athletic track texture - subtle gray */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(0, 0, 0, 0.02) 100px, rgba(0, 0, 0, 0.02) 101px),
            repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(0, 0, 0, 0.02) 100px, rgba(0, 0, 0, 0.02) 101px)
          `,
        }} />
        
        {/* Stadium spotlights - subtle shadows */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-900/5 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-900/5 rounded-full blur-[100px]" />
        </motion.div>
        
        {/* Motion lines for speed effect - gray */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%)`,
            backgroundSize: '200px 100%',
            animation: 'slideRight 2s linear infinite',
          }} />
        </div>
        
        {/* Track lanes perspective - subtle gray */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.02) 100%),
            repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 80px,
              rgba(0, 0, 0, 0.02) 80px,
              rgba(0, 0, 0, 0.02) 82px
            )
          `,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }} />
      </div>

      {/* Icon Bar - Upper Left */}
      <motion.div 
        className="absolute top-6 left-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-200 shadow-lg">
          {/* SGCG Logo */}
          <Link 
            href="https://www.sycamoregroveclaims.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[100px] h-[100px] flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Image 
              src="/images/logo/SGCG Logo Color.png" 
              alt="SGCG"
              width={100}
              height={100}
              className="w-[100px] h-[100px] opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          
          {/* Visual Divider */}
          <div className="w-px h-16 bg-gray-300" />
          
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {/* X */}
            <a
              href="https://x.com/NILsettlement"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 group"
              aria-label="Follow on X"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sycamore-grove-claims-group/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 group"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ncaasettlement/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 group"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
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
            <h1 className="font-bebas text-gray-900 mb-1">
              <span className="block text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-[0.8]">HOUSE</span>
              <span className="block text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-gray-900 leading-[0.8]">VS</span>
              <span className="block text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-[0.8]">NCAA</span>
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light tracking-[0.3em] -mt-1">
              (NIL) SETTLEMENT
            </div>
          </motion.div>

          {/* Finish Line with CTA */}
          <motion.div
            className="mt-6 md:mt-8 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Finish Line Graphics */}
            <div className="relative">
              {/* Bold Checkered Finish Line - Black and white */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-24 opacity-20">
                <div className="h-full w-full" style={{
                  backgroundImage: `
                    repeating-linear-gradient(90deg, #000000 0, #000000 30px, #ffffff 30px, #ffffff 60px),
                    repeating-linear-gradient(0deg, #000000 0, #000000 12px, transparent 12px, transparent 24px)
                  `,
                  backgroundSize: '60px 24px',
                }} />
              </div>
              
              {/* Track lanes leading to finish */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-40 -z-10">
                <div className="h-full w-full opacity-10" style={{
                  backgroundImage: `
                    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.1) 45%, rgba(0, 0, 0, 0.1) 55%, transparent 100%),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 120px,
                      rgba(0, 0, 0, 0.1) 120px,
                      rgba(0, 0, 0, 0.1) 122px
                    )
                  `,
                }} />
              </div>
              
              {/* Motion blur lines */}
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #000000 100%)',
                  filter: 'blur(2px)',
                }}
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.1, 0.2, 0.1],
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
                  background: 'linear-gradient(270deg, transparent 0%, #000000 100%)',
                  filter: 'blur(2px)',
                }}
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />

              {/* Main CTA with Light Panel */}
              <div className="relative z-10 py-6">
                {/* Light background panel for contrast */}
                <div className="absolute inset-0 bg-gray-100/90 backdrop-blur-sm -mx-8 md:-mx-16 rounded-lg border border-gray-300 shadow-xl" />
                
                <motion.h2
                  className="relative text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-wider px-8 py-3"
                  animate={{
                    textShadow: [
                      '0 0 30px rgba(0, 0, 0, 0.1)',
                      '0 0 50px rgba(0, 0, 0, 0.2)',
                      '0 0 30px rgba(0, 0, 0, 0.1)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  SELL YOUR CLAIM
                </motion.h2>
                
                {/* Or wait message */}
                <motion.div
                  className="relative mt-4 pb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <p className="text-gray-500 text-sm md:text-base" style={{ fontFamily: 'Georgia, serif' }}>or</p>
                  <p className="text-gray-700 text-lg md:text-xl mt-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    NCAA defendants are scheduled to make payments over a 10 year period
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Victory particles - gray */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
                style={{
                  left: `${50 + (i - 2) * 15}%`,
                  top: '60%',
                }}
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 0.5, 0],
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
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-300 backdrop-blur-lg bg-white/90 shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm md:text-base">
            <span className="font-semibold text-gray-900">Sycamore Grove Claims Group</span>
            <span className="hidden md:inline text-gray-400">•</span>
            <span className="text-gray-700">SGCG & Affiliates paid over $380M to plaintiffs in 2024</span>
            <span className="hidden md:inline text-gray-400">•</span>
            <Link 
              href="https://www.sycamoregroveclaims.com" 
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors underline underline-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

      {/* SGCG Description - Centered */}
      <section className="relative bg-gray-50 py-16 md:py-20">
        <motion.div 
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed">
            <span className="font-semibold text-gray-900">Sycamore Grove Claims Group, LLC</span> is a private investment firm that specializes in purchasing class member's rights to settlement payments.
          </p>
        </motion.div>
      </section>

      {/* Company Section - Two Column Layout */}
      <section className="relative bg-white overflow-hidden">
        {/* Athletic texture background - very subtle */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.01) 35px, rgba(0, 0, 0, 0.01) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.01) 35px, rgba(0, 0, 0, 0.01) 70px)
          `,
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Enhanced Company Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Glass card container - light theme */}
              <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 lg:p-10 space-y-8 shadow-xl">
                {/* Settlement Overview */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 tracking-wide mb-6">
                    The $2.8 Billion NIL Settlement
                  </h2>
                  
                  <div className="space-y-6 text-gray-700">
                    <p className="text-xl leading-relaxed">
                      The NCAA and Power Five conferences have agreed to pay <span className="font-bold text-black text-2xl">$2.8 billion</span> to Division I athletes who were denied NIL opportunities from 2016-2024.
                    </p>
                    
                    {/* Key Points */}
                    <div className="grid grid-cols-1 gap-4 my-8">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                        <p className="text-lg"><span className="font-semibold text-black">10+ year wait</span> for full settlement payments</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                        <p className="text-lg"><span className="font-semibold text-black">Immediate cash</span> available through SGCG</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                        <p className="text-lg"><span className="font-semibold text-black">Transfer settlement risk</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* SGCG Authority */}
                <div className="border-t border-gray-300 pt-8">
                  <h3 className="text-2xl md:text-3xl font-bebas text-gray-900 tracking-wide mb-4">
                    Why Choose Sycamore Grove?
                  </h3>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold text-gray-900">Sycamore Grove Claims Group</span> is a nationally recognized private investment firm specializing in structured settlement acquisitions.
                    </p>
                    
                    <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 my-6">
                      <p className="text-5xl md:text-6xl font-bebas text-black">
                        $380+ MILLION
                      </p>
                      <p className="text-lg text-gray-600 mt-2">
                        Our professionals have decades of experience purchasing claims, and in 2024 alone, structured transactions that provided over $380 million to plaintiffs and/or class members.
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 lg:p-10 h-full shadow-xl">
                <h3 className="text-3xl md:text-4xl font-bebas text-gray-900 tracking-wide mb-2">
                  Get Your Cash Offer Today
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Takes less than 60 seconds • No obligation
                </p>
                
                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
                      placeholder="john@email.com"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  {/* Years Played */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years Played Division I
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <select
                          name="yearFrom"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
                          required
                        >
                          <option value="">From Year</option>
                          {[...Array(9)].map((_, i) => {
                            const year = 2016 + i;
                            return <option key={year} value={year}>{year}</option>;
                          })}
                        </select>
                      </div>
                      <div>
                        <select
                          name="yearTo"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
                          required
                        >
                          <option value="">To Year</option>
                          {[...Array(9)].map((_, i) => {
                            const year = 2016 + i;
                            return <option key={year} value={year}>{year}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information <span className="text-gray-500">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all resize-none"
                      placeholder="Sport played, school, or any questions..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gray-900 text-white font-bold text-lg rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  >
                    SUBMIT CLAIM INFORMATION
                  </button>
                  
                  {/* Privacy Notice */}
                  <p className="text-sm text-gray-500 text-center">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
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
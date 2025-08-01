'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'
import LazySection from './LazySection'

export default function HeroVictoryLane() {
  const [referralCode, setReferralCode] = useState('')

  useEffect(() => {
    // Capture referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const ref = urlParams.get('ref')
    if (ref) {
      setReferralCode(ref)
      // Store in localStorage to persist across page reloads
      localStorage.setItem('referralCode', ref)
      
      // Also update the hidden input directly for Netlify Forms
      const referralInput = document.querySelector('input[name="referral"]') as HTMLInputElement
      if (referralInput) {
        referralInput.value = ref
      }
    } else {
      // Check localStorage in case they navigated away and came back
      const storedRef = localStorage.getItem('referralCode')
      if (storedRef) {
        setReferralCode(storedRef)
        // Update the hidden input
        const referralInput = document.querySelector('input[name="referral"]') as HTMLInputElement
        if (referralInput) {
          referralInput.value = storedRef
        }
      }
    }
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

          {/* Finish Line with CTA */}
          <motion.div
            className="mt-6 md:mt-8 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
                  href="#contact-form"
                  className="relative inline-block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-brand-teal tracking-wider px-4 sm:px-8 py-3 cursor-pointer hover:scale-105 hover:bg-brand-teal/10 transition-all duration-300 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact-form');
                    if (element) {
                      const yOffset = -80; // Offset to account for fixed header
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
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
          </div>
        </div>
      </motion.div>
    </section>

      {/* SGCG Description - Centered */}
      <LazySection className="relative bg-midnight py-16 md:py-20" animation="slideUp">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed">
            <span className="font-semibold text-brand-teal">Sycamore Grove Claims Group, LLC</span> is a private investment firm that specializes in purchasing class member's rights to settlement payments.
          </p>
        </div>
      </LazySection>

      {/* Company Section - Two Column Layout */}
      <LazySection className="relative bg-gradient-to-b from-midnight via-midnight/98 to-midnight overflow-hidden" animation="fadeIn">
        {/* Athletic texture background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(67, 154, 163, 0.03) 35px, rgba(67, 154, 163, 0.03) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(67, 154, 163, 0.03) 35px, rgba(67, 154, 163, 0.03) 70px)
          `,
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Enhanced Company Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Glass card container */}
              <div className="bg-midnight/40 backdrop-blur-md border border-brand-teal/20 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                {/* Settlement Overview */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas text-brand-teal tracking-wide mb-4 sm:mb-6">
                    The $2.8 Billion NIL Settlement
                  </h2>
                  
                  <div className="space-y-6 text-white/80">
                    <p className="text-lg sm:text-xl leading-relaxed">
                      The NCAA and Power Five conferences have agreed to pay <span className="font-bold text-brand-teal text-2xl">$2.8 billion</span> to Division I athletes who were denied NIL opportunities from 2016-2024.
                    </p>
                    
                    <p className="text-lg sm:text-xl leading-relaxed">
                      The defendants (NCAA and Power Five Conferences) will make payments into a settlement fund in <a href="https://www.ncaa.org/news/2024/7/26/media-center-settlement-documents-filed-in-college-athletics-class-action-lawsuits.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:text-brand-teal/80 underline underline-offset-2 transition-colors">equal, annual installments over the course of 10 years</a>. For more information on the settlement, please consult the <a href="https://collegeathletecompensation.com" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:text-brand-teal/80 underline underline-offset-2 transition-colors">settlement website</a> established by class counsel.
                    </p>
                  </div>
                </div>
                
                {/* SGCG Authority */}
                <div className="border-t border-brand-teal/20 pt-8">
                  <h3 className="text-2xl md:text-3xl font-bebas text-brand-teal tracking-wide mb-4">
                    Why Choose Sycamore Grove?
                  </h3>
                  
                  <div className="space-y-4 text-white/80">
                    <p className="text-lg leading-relaxed">
                      With the defendants scheduled to make payments into the settlement fund over the course of 10 years, and with any payments to athletes out of the fund blocked until after all possible appeals have been exhausted, eligible class members may be forced to wait for over a decade to receive the full amount they are owed. <span className="font-bold text-white">Sycamore Grove</span> can provide a tailored solution to accelerate payments.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      SGCG professionals have decades of experience purchasing claims, and in 2024 alone, structured transactions that provided over $380 million to plaintiffs and/or class members.
                    </p>
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
              <div id="contact-form" className="bg-brand-teal backdrop-blur-md border-2 border-black rounded-2xl p-6 sm:p-8 lg:p-10 h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-brand-teal bg-black px-6 py-4 rounded-lg tracking-wide inline-block">
                    Get Started Selling Your Claim
                  </h3>
                </div>
                <form 
                  name="contact"
                  method="POST"
                  action="/success.html"
                  data-netlify="true"
                  className="space-y-6"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="referral" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                      placeholder="john@email.com"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number <span className="text-white/70">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  {/* Sport */}
                  <div>
                    <label htmlFor="sport" className="block text-sm font-medium text-white mb-2">
                      Sport <span className="text-white/70">(optional)</span>
                    </label>
                    <select
                      id="sport"
                      name="sport"
                      className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                    >
                      <option value="">Select a sport</option>
                      <option value="Football">Football</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  {/* School and Years Played */}
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="school" className="block text-sm font-medium text-white mb-2">
                          School
                        </label>
                        <input
                          type="text"
                          id="school"
                          name="school"
                          className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                          placeholder="University name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          During Years
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            name="startYear"
                            className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                            placeholder="Start"
                            pattern="20(1[6-9]|2[0-3])"
                            title="Year between 2016-2023"
                            required
                          />
                          <input
                            type="text"
                            name="endYear"
                            className="w-full px-4 py-3 min-h-[48px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all"
                            placeholder="End"
                            pattern="20(1[6-9]|2[0-3])"
                            title="Year between 2016-2023"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Additional Information <span className="text-white/70">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 min-h-[100px] bg-white border-2 border-black/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-offset-1 focus:ring-offset-brand-teal transition-all resize-none"
                      placeholder="Sport played, school, or any questions..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full py-4 px-6 bg-midnight text-white font-bold text-lg rounded-lg hover:bg-black transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-black/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    SUBMIT CLAIM INFORMATION
                  </motion.button>
                  
                  {/* Privacy Notice */}
                  <p className="text-sm text-white/80 text-center">
                    By submitting, you agree to our{' '}
                    <Link 
                      href="https://www.sycamoregroveclaims.com/privacy-policy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      privacy policy
                    </Link>{' '}
                    and{' '}
                    <Link 
                      href="https://www.sycamoregroveclaims.com/terms-conditions" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      terms of service
                    </Link>.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Disclaimer - Below the two columns */}
          <div className="mt-8 px-4 sm:px-6">
            <p className="text-center text-xs sm:text-sm text-white/50 italic">
              Sycamore Grove is not affiliated with class counsel or the settlement administrator and is not providing legal, investment, or tax advice to class members.
            </p>
          </div>
        </div>
      </LazySection>

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
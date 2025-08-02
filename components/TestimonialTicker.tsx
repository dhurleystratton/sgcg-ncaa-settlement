'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Sample testimonials for demonstration
const testimonials = [
  {
    id: 1,
    name: "MARCUS JOHNSON",
    sport: "FOOTBALL",
    school: "OHIO STATE",
    quote: "GOT PAID IN 5 DAYS INSTEAD OF WAITING 10+ YEARS"
  },
  {
    id: 2,
    name: "SARAH MARTINEZ",
    sport: "BASKETBALL", 
    school: "STANFORD",
    quote: "RECEIVED $45K UPFRONT TO INVEST IN MY BUSINESS"
  },
  {
    id: 3,
    name: "DEANDRE WILLIAMS",
    sport: "FOOTBALL",
    school: "ALABAMA",
    quote: "USED MY SETTLEMENT TO PAY OFF STUDENT LOANS IMMEDIATELY"
  },
  {
    id: 4,
    name: "ASHLEY CHEN",
    sport: "VOLLEYBALL",
    school: "UCLA",
    quote: "MONEY HIT MY ACCOUNT IN LESS THAN A WEEK"
  },
  {
    id: 5,
    name: "JORDAN THOMPSON",
    sport: "TRACK",
    school: "OREGON",
    quote: "GOT PAID NOW AND STARTED MY COACHING ACADEMY"
  },
  {
    id: 6,
    name: "MICHAEL RODRIGUEZ",
    sport: "BASEBALL",
    school: "VANDERBILT",
    quote: "PROFESSIONAL TEAM, QUICK PAYMENT, NO HASSLE"
  }
]

export default function TestimonialTicker() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we're in demo mode (URL contains ?demo=ticker)
    const urlParams = new URLSearchParams(window.location.search)
    const demo = urlParams.get('demo')
    if (demo === 'ticker') {
      setIsVisible(true)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* LED/Digital font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap');
        
        .led-ticker {
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        .ticker-glow {
          text-shadow: 
            0 0 5px #439aa3,
            0 0 10px #439aa3,
            0 0 15px #439aa3,
            0 0 20px #439aa3;
        }
      `}</style>

      {/* Ticker positioned above the footer bar */}
      <div className="fixed bottom-[56px] left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-t-2 border-brand-teal/50 py-2 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="inline-flex items-center px-8"
            >
              <span className="led-ticker ticker-glow text-brand-teal text-sm md:text-base">
                {testimonial.quote}
              </span>
              <span className="led-ticker text-white/70 text-xs md:text-sm ml-3">
                - {testimonial.name} • {testimonial.sport} • {testimonial.school}
              </span>
              <span className="text-brand-teal text-xl mx-6 ticker-glow">◆</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Toggle button for demo purposes */}
      <div className="fixed top-4 right-4 z-50 bg-black/90 rounded-lg p-2 border border-brand-teal/50">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-brand-teal hover:text-white transition-colors"
        >
          Hide Ticker (Demo)
        </button>
      </div>
    </>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroVictoryLane from '@/components/HeroVictoryLane'

// Sample testimonials for demonstration
const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    sport: "Football",
    school: "Ohio State",
    year: "2019-2022",
    quote: "Got my settlement money in 5 days instead of waiting 10+ years. SGCG made it simple and fast."
  },
  {
    id: 2,
    name: "Sarah Martinez",
    sport: "Basketball",
    school: "Stanford",
    year: "2018-2021",
    quote: "The process was transparent and professional. Received $45K upfront to invest in my business."
  },
  {
    id: 3,
    name: "DeAndre Williams",
    sport: "Football",
    school: "Alabama",
    year: "2017-2020",
    quote: "Used my settlement to pay off student loans immediately. Best decision I made."
  },
  {
    id: 4,
    name: "Ashley Chen",
    sport: "Volleyball",
    school: "UCLA",
    year: "2020-2023",
    quote: "SGCG delivered exactly what they promised. Money hit my account in less than a week."
  },
  {
    id: 5,
    name: "Jordan Thompson",
    sport: "Track & Field",
    school: "Oregon",
    year: "2016-2019",
    quote: "Why wait a decade? Got paid now and started my coaching academy. Game changer!"
  },
  {
    id: 6,
    name: "Michael Rodriguez",
    sport: "Baseball",
    school: "Vanderbilt",
    year: "2019-2022",
    quote: "Professional team, quick payment, no hassle. Highly recommend to all former athletes."
  }
]

export default function TestimonialDemo() {
  return (
    <main className="relative">
      {/* Testimonial Ticker - Positioned at top of hero section */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-teal/95 backdrop-blur-sm border-b-2 border-black py-3 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 30,
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
              <div className="flex items-center gap-3">
                <span className="text-black font-bold text-lg">
                  "{testimonial.quote}"
                </span>
                <span className="text-black/70 font-medium">
                  — {testimonial.name}, {testimonial.sport} @ {testimonial.school}
                </span>
                <span className="text-black text-2xl mx-4">•</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Alternative Ticker Design - Bottom of Hero */}
      <div className="relative">
        <div className="h-16"></div> {/* Spacer for fixed ticker above */}
        <HeroVictoryLane />
      </div>

      {/* Alternative Design Option - Static Cards */}
      <section className="bg-midnight py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bebas text-brand-teal text-center mb-12">
            ALTERNATIVE: Testimonial Cards Display
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-midnight/40 backdrop-blur-md border border-brand-teal/30 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-brand-teal text-5xl mb-4">"</div>
                <p className="text-white/90 text-lg mb-4">{testimonial.quote}</p>
                <div className="border-t border-brand-teal/20 pt-4">
                  <p className="text-brand-teal font-bold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">
                    {testimonial.sport} • {testimonial.school}
                  </p>
                  <p className="text-white/40 text-xs">{testimonial.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Notice */}
      <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
        <p className="text-sm font-bold">PROTOTYPE - Not Live</p>
      </div>
    </main>
  )
}
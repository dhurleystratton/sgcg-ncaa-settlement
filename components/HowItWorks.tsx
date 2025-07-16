'use client';

import { motion } from 'framer-motion';
import { Calculator, FileCheck, Trophy, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Calculate Your Value',
    description: 'Discover your NIL claim worth in seconds',
    icon: Calculator,
    visual: 'START LINE',
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: 2,
    title: 'Submit Your Info',
    description: 'Quick, secure verification process',
    icon: FileCheck,
    visual: 'ACCELERATION',
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 3,
    title: 'Review Your Offer',
    description: 'Transparent, competitive cash offer',
    icon: Trophy,
    visual: 'FINAL TURN',
    color: 'from-amber-600 to-amber-800',
  },
  {
    id: 4,
    title: 'Get Paid Now',
    description: 'Instant payment, no waiting',
    icon: Zap,
    visual: 'FINISH LINE',
    color: 'from-amber-700 to-amber-900',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0a0f1c] py-32 overflow-hidden">
      {/* Background Track Visual */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M 100 400 Q 300 200, 600 400 T 1100 400"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            YOUR PATH TO
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              INSTANT PAYMENT
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four simple steps from claim to cash. No waiting. No uncertainty.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/20 via-amber-500/40 to-amber-600/20 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-gradient-to-b from-[#1a2332] to-[#0f1722] rounded-xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 h-full">
                  {/* Visual Marker */}
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full">
                    <span className="text-xs font-bold text-black">{step.visual}</span>
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-6 relative overflow-hidden`}
                  >
                    <step.icon className="w-full h-full text-black" />
                    <div className="absolute inset-0 bg-white/20 transform translate-x-full hover:translate-x-0 transition-transform duration-300" />
                  </motion.div>

                  {/* Step Number */}
                  <div className="text-6xl font-teko text-amber-500/20 absolute top-4 right-4">
                    {String(step.id).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bebas text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>

                  {/* Progress Indicator */}
                  <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${step.color}`}
                    />
                  </div>
                </div>

                {/* Connection Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-amber-500">
                        <path
                          d="M 10 20 L 25 20 M 25 20 L 20 15 M 25 20 L 20 25"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of athletes who've already secured their settlement
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg px-12 py-6 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-2xl shadow-amber-500/25"
          >
            START YOUR CLAIM NOW
          </motion.button>
          <p className="text-sm text-gray-500 mt-4">
            Average completion time: 5 minutes
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full filter blur-3xl" />
    </section>
  );
}
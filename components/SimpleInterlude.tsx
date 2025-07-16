'use client'

import { motion } from 'framer-motion'

export default function SimpleInterlude() {
  return (
    <section className="relative bg-gradient-to-b from-midnight via-midnight/95 to-midnight py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5" />
      
      {/* Central Message */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Dollar Sign morphing to athlete silhouette */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {/* Dollar Sign */}
          <motion.div
            className="text-gold/30 text-8xl md:text-9xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            $
          </motion.div>
          
          {/* Arrow */}
          <motion.div
            className="text-gold/50"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <svg width="60" height="30" viewBox="0 0 60 30" fill="currentColor">
              <path d="M0 15 L40 15 M40 15 L30 5 M40 15 L30 25" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </motion.div>
          
          {/* Athlete Icon */}
          <motion.div
            className="text-gold text-8xl md:text-9xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M12.5 7H11.5C10.95 7 10.5 7.45 10.5 8V12L7.91 8.27C7.66 7.88 7.21 7.64 6.74 7.64C6.27 7.64 5.82 7.88 5.57 8.27L2.99 12.25C2.66 12.75 2.82 13.41 3.32 13.73C3.82 14.06 4.48 13.9 4.81 13.4L6.74 10.67L9 13.77V22H11V16H13V22H15V13.77L17.26 10.67L19.19 13.4C19.52 13.9 20.18 14.06 20.68 13.73C21.18 13.41 21.34 12.75 21.01 12.25L18.43 8.27C18.18 7.88 17.73 7.64 17.26 7.64C16.79 7.64 16.34 7.88 16.09 8.27L13.5 12V8C13.5 7.45 13.05 7 12.5 7Z"/>
            </svg>
          </motion.div>
        </div>
        
        {/* Message */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-light text-white/80 leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          The NCAA sees dollar signs where champions stand.
        </motion.h2>
        
        {/* Subtle divider line */}
        <motion.div
          className="mt-16 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: '50%',
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}
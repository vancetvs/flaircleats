"use client";

import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalCTANew() {
  const handleInstagramClick = () => {
    window.open('https://ig.me/m/flair_cleats', '_blank');
  };

  return (
    <section className="relative py-40 px-6 overflow-hidden bg-black">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-pink-500/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-16">
        {/* Big statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase">
            <motion.span
              className="inline-block bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FLAIR.
            </motion.span>
            <br />
            <span className="text-white">SPEED.</span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Power.
            </motion.span>
          </h2>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInstagramClick}
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 text-black px-16 py-7 text-xl md:text-2xl font-black uppercase tracking-wider overflow-hidden shadow-2xl"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(90deg, #10b981, #3b82f6, #ec4899, #10b981)',
                backgroundSize: '200% 100%',
              }}
            />
            <Instagram className="w-8 h-8 relative z-10" />
            <span className="relative z-10">Contact us on Instagram</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

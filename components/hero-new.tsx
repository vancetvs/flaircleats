"use client";

import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroNew() {
  const handleInstagramClick = () => {
    window.open('https://ig.me/m/flair_cleats', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/flaircleats-logo.png"
            alt="flaircleats Logo"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto object-contain"
          />
        </motion.div>
        
        {/* Instagram prompt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-bold text-orange-200"
        >
          See something you like? DM us on Instagram
        </motion.p>
        
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-none"
        >
          <span className="text-white">Elite Football Boots.</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative inline-block mb-12"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Ready to Ship.
          </h2>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 blur-2xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Curated football boots for players who want <span className="text-white font-bold">style & performance.</span>
        </motion.p>
        
        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleInstagramClick}
          className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 text-black px-12 py-5 text-lg md:text-xl font-black uppercase tracking-wider overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <Instagram className="w-7 h-7 relative z-10" />
          <span className="relative z-10">Order via Instagram</span>
        </motion.button>
      </div>
    </section>
  );
}

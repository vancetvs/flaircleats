"use client";

import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function FooterNew() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/flair_cleats/', '_blank');
  };

  return (
    <footer className="py-12 px-6 border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img
            src="/flaircleats-logo.png"
            alt="flaircleats Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </motion.div>
        
        {/* Instagram */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleInstagramClick}
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Instagram className="w-6 h-6 text-black" />
          </div>
          <span className="font-bold text-lg">@flair_cleats</span>
        </motion.button>
      </div>
      {/* Bottom bar */}
      
    </footer>
  );
}

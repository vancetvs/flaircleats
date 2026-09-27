"use client";

import { Instagram } from 'lucide-react';
import { ImageWithFallback } from '@/components/image-with-fallback';
import { motion } from 'motion/react';

interface BootCardNewProps {
  image: string;
  name: string;
  description: string;
  accent?: 'green' | 'blue' | 'pink' | 'yellow';
}

export function BootCardNew({ image, name, description, accent = 'green' }: BootCardNewProps) {
  const handleDMClick = () => {
    window.open('https://ig.me/m/flair_cleats', '_blank');
  };

  const accentColors = {
    green: 'from-green-500 to-emerald-600',
    blue: 'from-blue-500 to-cyan-600',
    pink: 'from-pink-500 to-fuchsia-600',
    yellow: 'from-yellow-500 to-amber-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative bg-zinc-950 border border-zinc-800 hover:border-zinc-700 overflow-hidden transition-all duration-300"
    >
      {/* Hover glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${accentColors[accent]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      
      {/* Image container */}
      <div className="aspect-square overflow-hidden bg-black relative">
        <ImageWithFallback
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4 relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
          {name}
        </h3>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
        
        {/* DM CTA */}
        <button
          onClick={handleDMClick}
          className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-wide group/btn mt-4"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center`}
          >
            <Instagram className="w-5 h-5" />
          </motion.div>
          <span className="group-hover/btn:translate-x-2 transition-transform duration-300">
            DM on Instagram to order
          </span>
        </button>
      </div>
    </motion.div>
  );
}

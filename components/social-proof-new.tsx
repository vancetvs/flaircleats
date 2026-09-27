"use client";

import { ImageWithFallback } from '@/components/image-with-fallback';
import { motion } from 'motion/react';

export function SocialProofNew() {
  const images = [
    'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770672130/IMG_2469_grifwa.jpg',
    'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770671644/IMG_2447_btijns.jpg',
    'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770671647/IMG_2448_gqjuf7.jpg',
    'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770672121/IMG_2465_df0qzu.jpg',
    'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770671650/IMG_2449_hmdrgh.jpg',
    'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770672124/IMG_2466_z371bs.jpg',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Built for players who play with <span className="bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">flair.</span>
          </h3>
          <p className="text-xl text-zinc-400">
            Trusted by football players worldwide.
          </p>
        </motion.div>
        
        {/* Instagram-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="aspect-square overflow-hidden bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-600 transition-all duration-300 relative group"
            >
              <ImageWithFallback
                src={image || "/placeholder.svg"}
                alt="Football culture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

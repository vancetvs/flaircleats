"use client";

import { motion } from 'motion/react';

export function PriceInfoNew() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-zinc-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
              All football boots have a fixed price
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-blue-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <p className="text-7xl md:text-9xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text inline-block text-orange-200">
              €120
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto pt-4"
          >
            No hidden fees. No complicated pricing. Every premium boot in our collection — <span className="text-white font-bold">one transparent price.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

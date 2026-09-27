"use client";

import { BootCardNew } from '@/components/boot-card-new';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredBoots = [
  {
    id: 1,
    name: 'NIKE MERCURIAL SUPERFLY CR7',
    description: 'Built for speed.',
    image: 'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1772608867/richtige_oz9u80.jpg',
    accent: 'green' as const,
  },
  {
    id: 2,
    name: 'NIKE MERCURIAL VAPOR SAFARI',
    description: 'Precision control.',
    image: 'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770663209/IMG_2155_szu9x2.jpg',
    accent: 'blue' as const,
  },
  {
    id: 3,
    name: 'NIKE TIEMPO RONALDINHO',
    description: 'Elite touch and feel. Dribble like Ronaldinho.',
    image: 'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1772006533/Photoroom_20260225_085518_pubglt.jpg',
    accent: 'pink' as const,
  },
  {
    id: 4,
    name: 'ADIDAS LAMINE YAMAL F50',
    description: 'Stand out from the crowd. Players who dictate the game.',
    image: 'https://res.cloudinary.com/dqkyqhtgp/image/upload/v1770663212/Photoroom_20260206_102527_toqtjy.jpg',
    accent: 'yellow' as const,
  },
];

export function FeaturedBoots() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter uppercase">
            Featured <span className="bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">Boots</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
            Premium boots. Ready to perform.
          </p>
        </motion.div>
        
        {/* Boots grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredBoots.map((boot) => (
            <BootCardNew
              key={boot.id}
              name={boot.name}
              description={boot.description}
              image={boot.image}
              accent={boot.accent}
            />
          ))}
        </div>

        {/* See Full Collection Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link href="/catalog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 bg-white text-black px-12 py-6 text-lg md:text-xl font-black uppercase tracking-wider hover:bg-gradient-to-r hover:from-green-500 hover:via-blue-500 hover:to-pink-500 transition-all duration-300"
            >
              <span>See Full Collection</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

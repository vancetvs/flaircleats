"use client";

import { motion } from "motion/react";
import { BootCardNew } from "@/components/boot-card-new";
import { FooterNew } from "@/components/footer-new";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const allBoots = [
  {
    id: 1,
    name: "Velocity Strike",
    description: "Built for speed. Lightweight design for explosive acceleration.",
    image: "https://images.unsplash.com/photo-1768696082133-024fedbdbc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGJvb3RzJTIwYmxhY2t8ZW58MXx8fHwxNzY5MzQ0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "green" as const,
  },
  {
    id: 2,
    name: "Shadow Predator",
    description: "Precision control. Engineered for players who dictate the game.",
    image: "https://images.unsplash.com/photo-1728520508268-1766303e1ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjbGVhdHMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MzQ0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "blue" as const,
  },
  {
    id: 3,
    name: "Apex Phantom",
    description: "Elite touch and feel. Premium materials for the complete footballer.",
    image: "https://images.unsplash.com/photo-1768696082140-e042cf8223e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwbWVyY3VyaWFsJTIwYm9vdHN8ZW58MXx8fHwxNzY5MzQ0NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "pink" as const,
  },
  {
    id: 4,
    name: "Gold Rush",
    description: "Stand out from the crowd. Luxury finishes for bold players.",
    image: "https://images.unsplash.com/photo-1689574528928-bc796b75e8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMGJvb3RzfGVufDF8fHx8MTc2OTM0NDczMHww&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "yellow" as const,
  },
  {
    id: 5,
    name: "Night Striker",
    description: "Dominate under the lights. Reflective details for night games.",
    image: "https://images.unsplash.com/photo-1768696082133-024fedbdbc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGJvb3RzJTIwYmxhY2t8ZW58MXx8fHwxNzY5MzQ0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "blue" as const,
  },
  {
    id: 6,
    name: "Thunder Bolt",
    description: "Explosive power. Designed for players who strike with authority.",
    image: "https://images.unsplash.com/photo-1728520508268-1766303e1ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjbGVhdHMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MzQ0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "green" as const,
  },
  {
    id: 7,
    name: "Classic Elite",
    description: "Timeless design. Premium leather for ultimate comfort.",
    image: "https://images.unsplash.com/photo-1768696082140-e042cf8223e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwbWVyY3VyaWFsJTIwYm9vdHN8ZW58MXx8fHwxNzY5MzQ0NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "yellow" as const,
  },
  {
    id: 8,
    name: "Stealth Mode",
    description: "Silent but deadly. All-black design for focused players.",
    image: "https://images.unsplash.com/photo-1689574528928-bc796b75e8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMGJvb3RzfGVufDF8fHx8MTc2OTM0NDczMHww&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "pink" as const,
  },
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Back button */}
      <div className="px-6 pt-8">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Header Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Full <span className="bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">Collection</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12"
          >
            All football boots have a fixed price
          </motion.p>

          {/* Price Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-6 rounded-sm">
              <span className="text-6xl md:text-8xl font-black tracking-tight text-orange-200">
                €120
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto"
          >
            No hidden fees. One transparent price for every premium boot.
          </motion.p>
        </div>
      </section>

      {/* Boots Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allBoots.map((boot, index) => (
              <motion.div
                key={boot.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BootCardNew
                  name={boot.name}
                  description={boot.description}
                  image={boot.image}
                  accent={boot.accent}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}

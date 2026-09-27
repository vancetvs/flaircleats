"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Instagram, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  modelName: string;
  brand: string;
  brandColor: string;
  onClose: () => void;
}

const OUTSOLE_TYPES = [
  { code: "FG", label: "Firm Ground", desc: "Natural grass" },
  { code: "AG", label: "Artificial Ground", desc: "Artificial turf" },
  { code: "SG", label: "Soft Ground", desc: "Soft / wet grass" },
  { code: "TF", label: "Turf", desc: "Hard surfaces" },
];

const SIZE_TABLES = [
  {
    brand: "Nike",
    headers: ["EU", "US", "UK", "CM"],
    rows: [
      ["38.5","6","5","24"],["39","6.5","5.5","24.5"],["40","7","6","25"],
      ["40.5","7.5","6.5","25.5"],["41","8","7","26"],["42","8.5","7.5","26.5"],
      ["42.5","9","8","27"],["43","9.5","8.5","27.5"],["44","10","9","28"],
      ["44.5","10.5","9.5","28.5"],["45","11","10","29"],["45.5","11.5","10.5","29.5"],
      ["46","12","11","30"],["47.5","13","12","31"],["48.5","14","13","32"],
      ["49.5","15","14","33"],
    ],
  },
  {
    brand: "Adidas",
    headers: ["CM", "US", "UK", "EU"],
    rows: [
      ["24","6","5.5","38 2/3"],["24.5","6.5","6","39 1/3"],["25","7","6.5","40"],
      ["25.5","7.5","7","40 2/3"],["26","8","7.5","41 1/3"],["26.5","8.5","8","42"],
      ["27","9","8.5","42 2/3"],["27.5","9.5","9","43 1/3"],["28","10","9.5","44"],
      ["28.5","10.5","10","44 2/3"],["29","11","10.5","45 1/3"],["29.5","11.5","11","46"],
      ["30","12","11.5","46 2/3"],
    ],
  },
  {
    brand: "Puma",
    headers: ["EU", "US", "UK", "CM"],
    rows: [
      ["38","6","5","24"],["38.5","6.5","5.5","24.5"],["39","7","6","25"],
      ["40","7.5","6.5","25.5"],["40.5","8","7","26"],["41","8.5","7.5","26.5"],
      ["42","9","8","27"],["42.5","9.5","8.5","27.5"],["43","10","9","28"],
      ["44","10.5","9.5","28.5"],["44.5","11","10","29"],["45","11.5","10.5","29.5"],
      ["46","12","11","30"],
    ],
  },
];

function OutsoleSection() {
  return (
    <section className="mt-6">
      <h3 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Available Outsole Types</h3>
      <div className="relative w-full aspect-video mb-3 overflow-hidden rounded-sm">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20230635-LXoXcxRLzAhhV8t2sWjOvOYHXTh1IE.png"
          alt="Outsole types overview"
          fill
          className="object-cover"
          sizes="320px"
        />
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {OUTSOLE_TYPES.map((t) => (
          <div
            key={t.code}
            className="bg-zinc-900/60 border border-zinc-800 px-2.5 py-2 rounded-sm"
          >
            <span className="block text-amber-400 font-black text-xs tracking-widest">{t.code}</span>
            <span className="block text-zinc-300 text-[11px] font-semibold leading-tight">{t.label}</span>
            <span className="block text-zinc-600 text-[10px] leading-tight">{t.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SizeGuideSection() {
  const [openBrand, setOpenBrand] = useState<string | null>(null);

  return (
    <section className="mt-6">
      <h3 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Shoe Size Guide</h3>
      <div className="space-y-1.5">
        {SIZE_TABLES.map((table) => {
          const isOpen = openBrand === table.brand;
          return (
            <div key={table.brand} className="border border-zinc-800 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenBrand(isOpen ? null : table.brand)}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-zinc-900/60 hover:bg-zinc-900 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{table.brand}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[200px] text-xs border-collapse">
                    <thead>
                      <tr className="bg-zinc-950 sticky top-0">
                        {table.headers.map((h) => (
                          <th key={h} className="px-2 py-1.5 text-amber-400 font-bold uppercase tracking-wider text-[10px] border-b border-zinc-800 text-left whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-zinc-900/30" : "bg-transparent"}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-2 py-1.5 text-zinc-300 border-b border-zinc-900/50 whitespace-nowrap">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ProductGallery({
  images,
  modelName,
  brand,
  brandColor,
  onClose,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const containerWidthRef = useRef(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const validImages = images.filter((img) => img && img.trim() !== "");

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const goNext = useCallback(() => {
    if (validImages.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const goPrev = useCallback(() => {
    if (validImages.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  // Native-feeling touch swipe with drag offset
  const onTouchStart = (e: React.TouchEvent) => {
    if (galleryRef.current) {
      containerWidthRef.current = galleryRef.current.offsetWidth;
    }
    touchStartRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
      time: Date.now(),
    };
    setIsDragging(true);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const deltaX = e.targetTouches[0].clientX - touchStartRef.current.x;
    setDragOffset(deltaX);
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current) return;
    const elapsed = Date.now() - touchStartRef.current.time;
    const velocity = Math.abs(dragOffset) / elapsed;
    const threshold = containerWidthRef.current * 0.2;
    const isQuickFlick = velocity > 0.3 && Math.abs(dragOffset) > 30;

    if (dragOffset < -threshold || (dragOffset < 0 && isQuickFlick)) {
      if (activeIndex < validImages.length - 1) {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (dragOffset > threshold || (dragOffset > 0 && isQuickFlick)) {
      if (activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }

    setDragOffset(0);
    setIsDragging(false);
    touchStartRef.current = null;
  };

  // Hover zoom for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const rect = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbnailContainerRef.current) return;
    const container = thumbnailContainerRef.current;
    const activeThumb = container.children[activeIndex] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeIndex]);

  const handleInstagramClick = () => {
    window.open("https://ig.me/m/flair_cleats", "_blank");
  };

  if (validImages.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center text-zinc-500 px-6">
          <div className="w-20 h-20 mx-auto mb-6 border-2 border-zinc-800 flex items-center justify-center">
            <span className="text-3xl text-zinc-700">0</span>
          </div>
          <p className="text-xl font-bold text-zinc-400 mb-2">{modelName}</p>
          <p className="text-zinc-600">No images available yet. Check back soon.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 hover:border-zinc-500 transition-colors"
        aria-label="Close gallery"
      >
        <X className="w-5 h-5" />
      </button>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden h-full flex flex-col">
        {/* Product header */}
        <div className="px-4 pt-4 pb-3 flex-shrink-0">
          <span
            className={`inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${brandColor} text-white mb-1.5`}
          >
            {brand}
          </span>
          <h2 className="text-lg font-black text-white uppercase tracking-tight leading-tight">
            {modelName}
          </h2>
        </div>

        {/* Swipe gallery - hardware accelerated horizontal strip */}
        <div
          ref={galleryRef}
          className="flex-1 relative overflow-hidden"
          style={{ touchAction: "pan-x" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex h-full"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 250ms cubic-bezier(0.25, 1, 0.5, 1)",
              willChange: "transform",
            }}
          >
            {validImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full h-full flex-shrink-0 flex items-center justify-center p-4"
              >
                <div className="relative w-full aspect-square max-h-[60vh]">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${modelName} - Image ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={idx <= 2}
                    loading={idx <= 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile nav arrows */}
          {validImages.length > 1 && (
            <>
              {activeIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 active:bg-white/20 active:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              {activeIndex < validImages.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 active:bg-white/20 active:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </>
          )}
        </div>

        {/* Pagination dots */}
        {validImages.length > 1 && (
          <div className="flex-shrink-0 py-3 px-4">
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {validImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 bg-amber-400"
                      : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-zinc-600 mt-2">
              {activeIndex + 1} / {validImages.length}
            </p>
          </div>
        )}

        {/* Mobile Outsole + Size guide */}
        

        {/* Mobile CTA */}
        <div className="flex-shrink-0 px-4 pb-4 pt-2">
          <button
            onClick={handleInstagramClick}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black py-3.5 font-black uppercase tracking-wider text-sm"
          >
            <Instagram className="w-5 h-5" />
            <span>Order via Instagram</span>
          </button>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:flex h-full">
        {/* Left: Vertical thumbnails */}
        <div className="w-20 lg:w-24 flex-shrink-0 border-r border-zinc-900 bg-zinc-950/50">
          <div
            ref={thumbnailContainerRef}
            className="h-full overflow-y-auto py-4 px-2 space-y-2 scrollbar-thin"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}
          >
            {validImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-full aspect-square overflow-hidden transition-all duration-200 ${
                  idx === activeIndex
                    ? "ring-2 ring-amber-400 opacity-100"
                    : "opacity-40 hover:opacity-75 ring-1 ring-zinc-800"
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${modelName} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Center: Main image */}
        <div className="flex-1 flex items-center justify-center relative bg-black p-8 lg:p-12">
          {/* Nav arrows desktop */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              ref={mainImageRef}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              className="relative w-full max-w-2xl xl:max-w-3xl aspect-square cursor-zoom-in overflow-hidden bg-zinc-950"
            >
              <Image
                src={validImages[activeIndex] || "/placeholder.svg"}
                alt={`${modelName} - Image ${activeIndex + 1}`}
                fill
                className={`object-contain transition-transform duration-200 ease-out ${
                  isZoomed ? "scale-[2]" : "scale-100"
                }`}
                style={
                  isZoomed
                    ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                    : undefined
                }
                sizes="(min-width: 1280px) 768px, (min-width: 768px) 512px, 100vw"
                priority={activeIndex === 0}
              />
              {/* Image counter */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs text-zinc-400 font-medium">
                {activeIndex + 1} / {validImages.length}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Product info */}
        <div className="w-72 lg:w-80 xl:w-96 flex-shrink-0 border-l border-zinc-900 bg-zinc-950/30 flex flex-col overflow-y-auto">
          <div className="p-6 lg:p-8 flex flex-col">
            {/* Brand badge */}
            <span
              className={`inline-block self-start px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${brandColor} text-white mb-4`}
            >
              {brand}
            </span>

            {/* Model name */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              {modelName}
            </h2>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-amber-400/40 mb-6" />

            {/* Price */}
            <div className="mb-6">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Fixed Price</p>
              <p className="text-3xl lg:text-4xl font-black text-amber-400">€120</p>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Photos</span>
                <span className="text-zinc-300 font-medium">{validImages.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Shipping</span>
                <span className="text-zinc-300 font-medium">Worldwide</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleInstagramClick}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black py-4 font-black uppercase tracking-wider text-sm transition-all duration-200"
            >
              <Instagram className="w-5 h-5" />
              <span>Order via Instagram</span>
            </button>

            <p className="text-[10px] text-zinc-600 text-center mt-3 mb-2">
              DM us on Instagram to order this model
            </p>

            {/* Outsole types + Size guide */}
            <OutsoleSection />
            <SizeGuideSection />
            <div className="h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const OUTSOLE_TYPES = [
  { code: "AG", label: "Artificial Ground", desc: "Artificial turf" },
  { code: "FG", label: "Firm Ground", desc: "Natural grass" },
  { code: "SG", label: "Soft Ground", desc: "Soft / wet grass" },
  { code: "TF", label: "Turf", desc: "Hard surfaces / clay" },
];

const SIZE_TABLES = [
  {
    brand: "Nike",
    headers: ["EU", "US", "UK", "CM"],
    rows: [
      ["38.5", "6", "5", "24"],
      ["39", "6.5", "5.5", "24.5"],
      ["40", "7", "6", "25"],
      ["40.5", "7.5", "6.5", "25.5"],
      ["41", "8", "7", "26"],
      ["42", "8.5", "7.5", "26.5"],
      ["42.5", "9", "8", "27"],
      ["43", "9.5", "8.5", "27.5"],
      ["44", "10", "9", "28"],
      ["44.5", "10.5", "9.5", "28.5"],
      ["45", "11", "10", "29"],
      ["45.5", "11.5", "10.5", "29.5"],
      ["46", "12", "11", "30"],
      ["47.5", "13", "12", "31"],
      ["48.5", "14", "13", "32"],
      ["49.5", "15", "14", "33"],
    ],
  },
  {
    brand: "Adidas",
    headers: ["CM", "US", "UK", "EU"],
    rows: [
      ["24", "6", "5.5", "38 2/3"],
      ["24.5", "6.5", "6", "39 1/3"],
      ["25", "7", "6.5", "40"],
      ["25.5", "7.5", "7", "40 2/3"],
      ["26", "8", "7.5", "41 1/3"],
      ["26.5", "8.5", "8", "42"],
      ["27", "9", "8.5", "42 2/3"],
      ["27.5", "9.5", "9", "43 1/3"],
      ["28", "10", "9.5", "44"],
      ["28.5", "10.5", "10", "44 2/3"],
      ["29", "11", "10.5", "45 1/3"],
      ["29.5", "11.5", "11", "46"],
      ["30", "12", "11.5", "46 2/3"],
    ],
  },
  {
    brand: "Puma",
    headers: ["EU", "US", "UK", "CM"],
    rows: [
      ["38", "6", "5", "24"],
      ["38.5", "6.5", "5.5", "24.5"],
      ["39", "7", "6", "25"],
      ["40", "7.5", "6.5", "25.5"],
      ["40.5", "8", "7", "26"],
      ["41", "8.5", "7.5", "26.5"],
      ["42", "9", "8", "27"],
      ["42.5", "9.5", "8.5", "27.5"],
      ["43", "10", "9", "28"],
      ["44", "10.5", "9.5", "28.5"],
      ["44.5", "11", "10", "29"],
      ["45", "11.5", "10.5", "29.5"],
      ["46", "12", "11", "30"],
    ],
  },
];

function AccordionItem({
  brand,
  headers,
  rows,
}: {
  brand: string;
  headers: string[];
  rows: string[][];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-zinc-50 transition-colors text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-zinc-900 text-sm uppercase tracking-wider">
          {brand}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="overflow-x-auto border-t border-zinc-200">
          <table className="w-full min-w-[260px] text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-900">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-amber-400 font-bold uppercase tracking-wider text-xs text-left whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-3 py-2 text-zinc-700 border-b border-zinc-100 whitespace-nowrap text-sm"
                    >
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
}

export function CatalogInfoSection() {
  return (
    <section className="md:hidden px-4 pb-8 space-y-8">
      {/* Outsole Types */}
      <div>
        <h2 className="text-lg font-black text-white uppercase tracking-tight mb-4">
          Available Outsole Types
        </h2>
        <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20230635-CM7VEVRRyJeYj5MD8RQgj9zPKdU75Q.png"
            alt="Outsole types overview"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <p className="text-zinc-400 text-sm mb-3">All models are available in:</p>
        <div className="grid grid-cols-2 gap-2">
          {OUTSOLE_TYPES.map((t) => (
            <div
              key={t.code}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-3"
            >
              <span className="block text-amber-400 font-black text-sm tracking-widest mb-0.5">
                {t.code}
              </span>
              <span className="block text-white text-xs font-semibold leading-tight">
                {t.label}
              </span>
              <span className="block text-zinc-500 text-xs leading-tight mt-0.5">
                {t.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Size Guide */}
      <div>
        <h2 className="text-lg font-black text-white uppercase tracking-tight mb-4">
          Shoe Size Guide
        </h2>
        <p className="text-zinc-400 text-sm mb-3">
          Nike, Adidas &amp; Puma — tap a brand to expand.
        </p>
        <div className="space-y-2">
          {SIZE_TABLES.map((table) => (
            <AccordionItem
              key={table.brand}
              brand={table.brand}
              headers={table.headers}
              rows={table.rows}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BRAND = "#F26522";

const slides = [
  {
    src: "/IMG_20260514_175729.jpg",
    alt: "Stacks of wooden pallets",
  },
  {
    src: "/IMG_20260514_175729 (2).jpg",
    alt: "We make the right size for your company — stacks of custom pallets",
  },
  {
    src: "/IMG_20260514_175317.jpg",
    alt: "Pallets Extra Solutions team at work",
  },
  {
    src: "/IMG_20260514_175317 (1).jpg",
    alt: "Asegura tu carga con Pallets Extra Solutions LLC",
  },
  {
    src: "/IMG_20260514_175328.jpg",
    alt: "Ready to deliver the quantity you need",
  },
];

function Frame({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== activeIndex}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) =>
    setIndex(((i % slides.length) + slides.length) % slides.length);

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="relative px-10 sm:px-12">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <Frame activeIndex={index} />
          <div className="hidden md:block">
            <Frame activeIndex={(index + 1) % slides.length} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-0 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg leading-none text-slate-800 shadow-md ring-1 ring-slate-200 transition hover:bg-slate-50 sm:h-10 sm:w-10"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-0 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg leading-none text-slate-800 shadow-md ring-1 ring-slate-200 transition hover:bg-slate-50 sm:h-10 sm:w-10"
        >
          ›
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            style={i === index ? { backgroundColor: BRAND } : undefined}
          />
        ))}
      </div>
    </div>
  );
}

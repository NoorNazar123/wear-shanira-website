"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import ProductCard, { Product } from "./components/ProductCard";
import Image from "next/image";

export const bagsCatalog: Product[] = [
  {
    id: "1",
    name: "Classic Tote Bag",
    price: 450,
    desc: "Timeless structural silhouette crafted for everyday sophistication with premium Italian grain leather structural handles.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M30 45 C30 25, 70 25, 70 45" />
        <rect x="20" y="45" width="60" height="40" rx="2" />
        <line x1="20" y1="55" x2="80" y2="55" />
      </svg>
    ),
  },
  {
    id: "2",
    name: "Mini Handbag",
    price: 320,
    desc: "A compact luxury statement designed to elevate evening ensembles, equipped with hand-polished metallic hardware accents.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M35 40 C35 20, 65 20, 65 40" />
        <rect x="25" y="40" width="50" height="35" rx="8" />
        <circle cx="50" cy="58" r="4" />
      </svg>
    ),
  },
  {
    id: "3",
    name: "Premium Shoulder Bag",
    price: 580,
    desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
        <path d="M25 35 Q50 10 75 35" />
        <path d="M25 45 H75" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Thank you for subscribing to Wear Shanira updates.");
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden px-6 sm:px-10 md:px-16">
        {/* Background Layer: Luxury Executive Lifestyle Context */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Business District Backdrop"
            className="w-full h-full object-cover opacity-[0.03] grayscale mix-blend-luminosity scale-105 select-none pointer-events-none"
          />
          {/* Subtle Luxury Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-[#fafafa]/50" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 pt-12">
          {/* Left Side: Sophisticated Editorial Branding */}
          <div className="text-center md:text-left max-w-[620px] mx-auto md:mx-0 flex flex-col justify-center">
            <h1 className="text-[3.5rem] sm:text-[4.8rem] lg:text-[5.5rem] leading-[0.95] mb-6 tracking-[1px]">
              Wear Shanira
            </h1>

            <div className="h-[2px] w-12 bg-[#111111] my-4 mx-auto md:mx-0 opacity-80" />

            <p className="text-[12px] sm:text-[13px] tracking-[5px] uppercase text-gray-400 mb-10 leading-relaxed max-w-[480px]">
              Elite Tech-Structure Packs & Travel Gear for Academics and
              Executives
            </p>

            <div>
              <Link
                href="/bags"
                className="inline-block bg-[#111111] border border-[#111111] text-white text-[11px] tracking-[4px] uppercase py-4.5 px-12 transition-all duration-500 hover:bg-transparent hover:text-[#111111] shadow-lg hover:shadow-sm"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Right Side: High-Status Luxury Product Showcase (Fixed Layout) */}
          <div className="flex justify-center items-center w-full max-w-[550px] mx-auto md:max-w-none">
            {/* 
              Changed aspect ratio to 4/3 to perfectly frame your wide landscape asset.
              Removed the heavy card borders and inner backgrounds that caused the boxing layout defect.
          */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center p-4 group transition-all duration-700">
              {/* Elegant luxury floating image with enhanced crisp drop-shadow */}
              <div className="relative w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.03] z-10 flex items-center justify-center">
                <Image
                  src="/images/hero-wear-shanira.png"
                  alt="Wear Shanira Minimal Matte Tech Backpack"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.15)]"
                  sizes="(max-w-md): 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[140px] bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-20">
            <h2 className="text-[2.2rem]">Featured Bags</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {bagsCatalog.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[140px] bg-[#fafafa] border-t border-[#f2f2f2] text-center">
        <div className="max-w-[750px] mx-auto px-5">
          <div className="text-[24px] tracking-[6px] mb-9">Wear Shanira</div>
          <p className="font-serif text-[18px] sm:text-[20px] leading-[1.8] text-[#222222] italic">
            “Wear Shanira is a modern fashion label starting with premium
            handbags and expanding into watches, shoes, and lifestyle
            accessories. Our focus is timeless design, minimal luxury, and
            everyday elegance.”
          </p>
        </div>
      </section>

      <section className="py-[100px] bg-white border-t border-[#f2f2f2] text-center">
        <div className="max-w-[500px] mx-auto px-6">
          <h3 className="text-[1.6rem] mb-4">Join The Club</h3>
          <p className="text-gray-400 text-[14px] mb-9">
            Subscribe to receive early collection access updates and brand
            stories.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex border-b border-[#111111] pb-1"
          >
            <input
              type="email"
              className="flex-1 bg-transparent border-none outline-none py-2 px-3 text-[14px] tracking-[1px] uppercase"
              placeholder="ENTER YOUR EMAIL ADDRESS"
              required
            />
            <button
              type="submit"
              className="bg-transparent border-none uppercase text-[11px] tracking-[2px] font-medium cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

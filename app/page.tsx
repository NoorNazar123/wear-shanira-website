"use client";

import React, { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import ProductCard, { Product } from "./components/ProductCard";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Business Consultant",
    review:
      "The craftsmanship exceeded my expectations. Elegant, structured, and perfect for daily professional use.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Executive",
    review:
      "A beautiful balance between luxury and practicality. I've received compliments everywhere I carry it.",
  },
  {
    name: "Olivia Brooks",
    role: "University Lecturer",
    review:
      "Premium quality, thoughtful design, and enough space for all my essentials. Highly recommended.",
  },
];

const faqs = [
  {
    question: "What materials are used in Wear Shanira bags?",
    answer:
      "Our bags are crafted using premium-quality materials selected for durability, elegance, and everyday comfort. Each piece is designed to maintain its structure while offering a luxurious feel.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes. Wear Shanira ships worldwide. Shipping times and costs vary depending on your location and will be calculated during checkout.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are typically processed within 1–2 business days. Delivery usually takes 3–7 business days for domestic orders and 7–14 business days for international orders.",
  },
  {
    question: "Can I return or exchange my order?",
    answer:
      "Yes. We offer a hassle-free return and exchange policy within 30 days of delivery, provided the item is unused and in its original condition.",
  },
  {
    question: "Are your products covered by a warranty?",
    answer:
      "We stand behind the quality of our products. Manufacturing defects are covered under our limited warranty policy.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email that allows you to monitor your package in real time.",
  },
];

const heroImages = [
  {
    src: "/images/hero-wear-shanira.png",
    alt: "Wear Shanira Minimal Matte Tech Backpack",
  },
  {
    src: "/images/hero-wear-shanira-2.png",
    alt: "Wear Shanira Premium Luxury Tote",
  },
  {
    src: "/images/hero-wear-shanira-3.png",
    alt: "Wear Shanira Executive Travel Pack",
  },
];

export const bagsCatalog: Product[] = [
  {
    id: "1",
    name: "Classic Tote Bag",
    price: 450,
    desc: "Timeless structural silhouette crafted for everyday sophistication with premium Italian grain leather structural handles.",
    images: [
      "/images/hero-wear-shanira.png",
      "/images/hero-wear-shanira-2.png",
      "/images/hero-wear-shanira-3.png",
    ],
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
    images: [
      "/images/hero-wear-shanira-2.png",
      "/images/hero-wear-shanira-3.png",
      "/images/hero-wear-shanira.png",
    ],
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
    images: [
      "/images/hero-wear-shanira-3.png",
      "/images/hero-wear-shanira.png",
      "/images/hero-wear-shanira-2.png",
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
        <path d="M25 35 Q50 10 75 35" />
        <path d="M25 45 H75" />
      </svg>
    ),
  },
  {
    id: "4",
    name: "Premium Shoulder Bag",
    price: 580,
    desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
    images: [
      "/images/hero-wear-shanira.png",
      "/images/hero-wear-shanira-2.png",
      "/images/hero-wear-shanira-3.png",
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
        <path d="M25 35 Q50 10 75 35" />
        <path d="M25 45 H75" />
      </svg>
    ),
  },
  {
    id: "5",
    name: "Premium Shoulder Bag",
    price: 580,
    desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
    images: [
      "/images/hero-wear-shanira-2.png",
      "/images/hero-wear-shanira-3.png",
      "/images/hero-wear-shanira.png",
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
        <path d="M25 35 Q50 10 75 35" />
        <path d="M25 45 H75" />
      </svg>
    ),
  },
  {
    id: "6",
    name: "Premium Shoulder Bag",
    price: 580,
    desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
    images: [
      "/images/hero-wear-shanira-3.png",
      "/images/hero-wear-shanira.png",
      "/images/hero-wear-shanira-2.png",
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
        <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
        <path d="M25 35 Q50 10 75 35" />
        <path d="M25 45 H75" />
      </svg>
    ),
  },
];

// export const bagsCatalog: Product[] = [
//   {
//     id: "1",
//     name: "Classic Tote Bag",
//     price: 450,
//     desc: "Timeless structural silhouette crafted for everyday sophistication with premium Italian grain leather structural handles.",
//     image: "/images/hero-wear-shanira.png",
//     icon: (
//       <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
//         <path d="M30 45 C30 25, 70 25, 70 45" />
//         <rect x="20" y="45" width="60" height="40" rx="2" />
//         <line x1="20" y1="55" x2="80" y2="55" />
//       </svg>
//     ),
//   },
//   {
//     id: "2",
//     name: "Mini Handbag",
//     price: 320,
//     desc: "A compact luxury statement designed to elevate evening ensembles, equipped with hand-polished metallic hardware accents.",
//     image: "/images/hero-wear-shanira-2.png",
//     icon: (
//       <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
//         <path d="M35 40 C35 20, 65 20, 65 40" />
//         <rect x="25" y="40" width="50" height="35" rx="8" />
//         <circle cx="50" cy="58" r="4" />
//       </svg>
//     ),
//   },
//   {
//     id: "3",
//     name: "Premium Shoulder Bag",
//     price: 580,
//     desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
//     image: "/images/hero-wear-shanira-3.png",
//     icon: (
//       <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
//         <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
//         <path d="M25 35 Q50 10 75 35" />
//         <path d="M25 45 H75" />
//       </svg>
//     ),
//   },

//   // fallback products still use images (same for now)
//   {
//     id: "4",
//     name: "Premium Shoulder Bag",
//     price: 580,
//     desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
//     image: "/images/hero-wear-shanira.png",
//     icon: (
//       <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
//         <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
//         <path d="M25 35 Q50 10 75 35" />
//         <path d="M25 45 H75" />
//       </svg>
//     ),
//   },
//   {
//     id: "5",
//     name: "Premium Shoulder Bag",
//     price: 580,
//     desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
//     image: "/images/hero-wear-shanira-2.png",
//     icon: (
//       <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
//         <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
//         <path d="M25 35 Q50 10 75 35" />
//         <path d="M25 45 H75" />
//       </svg>
//     ),
//   },
//   {
//     id: "6",
//     name: "Premium Shoulder Bag",
//     price: 580,
//     desc: "Perfect balance of sleek architecture and effortless grace featuring adjustable luxury crossbody extensions.",
//     image: "/images/hero-wear-shanira-3.png",
//     icon: (
//       <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.7">
//         <path d="M25 35 V70 C25 75, 75 75, 75 70 V35 Z" />
//         <path d="M25 35 Q50 10 75 35" />
//         <path d="M25 45 H75" />
//       </svg>
//     ),
//   },
// ];
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Thank you for subscribing to Wear Shanira updates.");
    e.currentTarget.reset();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 -mt-28">
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

          {/* Right Side: High-Status Luxury Product Showcase (Slider Layout) */}
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="relative w-[500px] h-[500px] sm:w-[550px] sm:h-[550px]">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out
          ${
            index === currentSlide
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-95 z-0"
          }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.15)]"
                    sizes="550px"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500
          ${index === currentSlide ? "w-6 bg-black" : "w-1.5 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bags Section - Adjusted to py-[120px] */}
      <section className="py-[120px] bg-white">
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

      {/* Reviews Section - Adjusted to py-[120px] */}
      <section className="py-[120px] bg-[#fafafa] border-t border-[#f2f2f2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[2.2rem] mb-4">
              Loved By Modern Professionals
            </h2>
            <p className="text-gray-500 text-[14px] tracking-[1px] max-w-[600px] mx-auto">
              Discover why customers choose Wear Shanira for timeless elegance,
              premium craftsmanship, and everyday functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-[#eeeeee] p-8 hover:shadow-lg transition-all duration-500"
              >
                <div className="mb-6 text-[#111111] text-lg">★★★★★</div>
                <p className="text-gray-600 leading-[1.9] italic mb-8">
                  "{review.review}"
                </p>
                <div>
                  <h4 className="font-medium text-[#111111]">{review.name}</h4>
                  <p className="text-[13px] text-gray-400 mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 border border-[#111111] px-8 py-4">
              <span className="text-lg">★★★★★</span>
              <span className="text-[13px] tracking-[2px] uppercase">
                Rated 4.9/5 By 500+ Customers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Brand Quote Section - Adjusted to py-[120px] */}
      <section className="py-[120px] border-t border-[#f2f2f2] text-center">
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

      {/* FAQ Section - Already at py-[120px] */}
      <section className="py-[120px] bg-[#fafafa] border-t border-[#f2f2f2]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-[14px] tracking-[1px]">
              Everything you need to know about shopping with Wear Shanira.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-[#eeeeee] px-6 py-5 transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-[15px] font-medium text-[#111111]">
                    {faq.question}
                  </span>
                  <span className="text-[20px] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.8] text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Adjusted to py-[120px] */}
      <section className="py-[120px] bg-white border-t border-[#f2f2f2] text-center">
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

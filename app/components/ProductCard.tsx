"use client";

import React, { useState } from "react";
import { useCart } from "../layout";

export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  icon: React.ReactNode;
  image?: string; // ✅ optional image
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative bg-white group">
        {/* PRODUCT BOX */}
        <div className="relative w-full pt-[135px] bg-[#fcfcfc] overflow-hidden flex items-center justify-center mb-6">
          {/* IMAGE / ICON AREA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] opacity-80 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {product.icon}
              </div>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div
            className="
              absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2
              bg-gradient-to-t from-white/95 to-transparent

              translate-y-0
              md:translate-y-full md:group-hover:translate-y-0

              transition-transform duration-500 ease-out
            "
          >
            {/* ADD TO BAG */}
            <button
              onClick={() => addToCart(product)}
              className="
                w-full bg-[#111111] text-white text-[11px]
                tracking-[3px] uppercase py-3
                transition-colors duration-300 hover:bg-[#333333]
              "
            >
              Add To Bag
            </button>

            {/* QUICK VIEW */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="
                w-full border border-[#111111] text-[#111111]
                text-[11px] tracking-[3px] uppercase py-3
                transition-all duration-300
                hover:bg-[#111111] hover:text-white
              "
            >
              Quick View
            </button>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="text-center px-2">
          <h3 className="text-[15px] tracking-[1px] mb-1">{product.name}</h3>
          <div className="text-[14px] font-medium">${product.price}</div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 z-[60] flex items-center justify-center p-4">
          {/* BACKDROP */}
          <div
            className="fixed inset-0"
            onClick={() => setIsModalOpen(false)}
          />

          {/* MODAL BOX */}
          <div className="bg-white w-[800px] max-w-full grid grid-cols-1 md:grid-cols-2 relative animate-fade-in-up z-10">
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-5 right-6 text-[24px] leading-none hover:opacity-60"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* LEFT IMAGE / ICON */}
            <div className="bg-[#fcfcfc] flex items-center justify-center p-14 h-[350px] md:h-auto">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[70%] h-[70%] object-contain"
                />
              ) : (
                <div className="w-[60%] h-[60%] opacity-20">{product.icon}</div>
              )}
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-[24px] mb-4">{product.name}</h3>

              <div className="text-[16px] font-medium mb-5">
                ${product.price}
              </div>

              <p className="text-[13px] text-gray-500 mb-8 leading-relaxed">
                {product.desc}
              </p>

              <button
                onClick={() => {
                  addToCart(product);
                  setIsModalOpen(false);
                }}
                className="
                  w-full bg-[#111111] text-white text-[11px]
                  tracking-[3px] uppercase py-4
                  transition-colors hover:bg-[#333333]
                "
              >
                Add To Bag
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

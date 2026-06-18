"use client";

import React, { useState } from "react";
import { useCart } from "../layout";

export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  icon: React.ReactNode;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative bg-white group">
        <div className="relative w-full pt-[135px] bg-[#fcfcfc] overflow-hidden flex items-center justify-center mb-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] opacity-15 transition-transform duration-700 group-hover:scale-105">
            {product.icon}
          </div>

          {/* Editorial Actions Overlays */}
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 bg-gradient-to-t from-white/95 to-transparent">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-[#111111] text-white text-[11px] tracking-[3px] uppercase py-3 text-center transition-colors duration-300 hover:bg-[#333333]"
            >
              Add To Bag
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full border border-[#111111] text-[#111111] text-[11px] tracking-[3px] uppercase py-3 text-center transition-all duration-300 hover:bg-[#111111] hover:text-white"
            >
              Quick View
            </button>
          </div>
        </div>

        <div className="text-center px-2">
          <h3 className="text-[15px] tracking-[1px] mb-1">{product.name}</h3>
          <div className="text-[14px] font-medium">${product.price}</div>
        </div>
      </div>

      {/* Detail Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 z-[60] flex items-center justify-center p-4">
          <div
            className="fixed inset-0"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="bg-white w-[800px] max-w-full grid grid-cols-1 md:grid-cols-2 relative animate-fade-in-up z-10">
            <button
              className="absolute top-5 right-6 text-[24px] leading-none hover:opacity-60"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className="bg-[#fcfcfc] flex items-center justify-center p-14 h-[350px] md:h-auto">
              <div className="w-[60%] h-[60%] opacity-20">{product.icon}</div>
            </div>
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
                className="w-full bg-[#111111] text-white text-[11px] tracking-[3px] uppercase py-4 transition-colors hover:bg-[#333333]"
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

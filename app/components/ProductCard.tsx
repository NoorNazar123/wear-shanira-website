"use client";

import React, { useState } from "react";
import { useCart } from "../layout";

export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  icon: React.ReactNode;
  images: string[]; // Array of images for color variants
  selectedImage?: string; // Optional property for the selected image
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use a fallback image if `product.images` is undefined or empty
  const [selectedImage, setSelectedImage] = useState(
    product.images && product.images.length > 0
      ? product.images[0]
      : "/images/default-image.jpg" // Replace with your default image path
  );

  return (
    <>
      <div className="relative bg-white group">
        {/* PRODUCT BOX */}
        <div className="relative w-full pt-[135px] bg-[#fcfcfc] overflow-hidden flex items-center justify-center mb-6">
          {/* IMAGE / ICON AREA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] opacity-80 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <img
              src={selectedImage} // Display the selected image
              alt={product.name}
              className="w-full h-full object-contain"
            />
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
            {/* ADD TO BAG BUTTON */}
            <button
              onClick={() => {
                addToCart({
                  ...product, // Spread the product details
                  selectedImage, // Add the selected image
                } as Product & { selectedImage: string }); // Extend the Product type
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
          <div className="bg-white w-[1200px] h-[800px] max-w-full max-h-full grid grid-cols-1 md:grid-cols-2 relative animate-fade-in-up z-10 rounded-lg shadow-lg overflow-hidden">
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-5 right-6 text-[24px] leading-none hover:opacity-60"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* LEFT IMAGE / ICON */}
            <div className="bg-[#fcfcfc] flex items-center justify-center p-14 h-full">
              <div className="group relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage} // Display the selected image
                  alt={product.name}
                  className="w-[70%] h-[70%] object-contain transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
              </div>
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

              {/* COLOR VARIANTS */}
              <div className="flex gap-2 mb-6">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Variant ${index + 1}`}
                    className={`w-12 h-12 cursor-pointer border ${
                      selectedImage === image
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(image)} // Change the selected image
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  addToCart({
                    ...product,
                    selectedImage, // Include the selected image
                  });
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

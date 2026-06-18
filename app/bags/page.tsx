"use client";

import ProductCard from "../components/ProductCard";
import { bagsCatalog } from "../page";

export default function BagsPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="border-b border-[#eeeeee] pb-6 mb-12 flex justify-between items-baseline">
          <h1 className="text-[2rem] tracking-[3px]">Handbags Collection</h1>
          <span className="text-[12px] uppercase text-gray-400 tracking-[1px]">
            {bagsCatalog.length} Exquisite Styles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
          {bagsCatalog.map((bag) => (
            <ProductCard key={bag.id} product={bag} />
          ))}
        </div>
      </div>
    </div>
  );
}

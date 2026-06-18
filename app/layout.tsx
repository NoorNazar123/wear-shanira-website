"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./globals.css";
import { Product } from "./components/ProductCard";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be executed within a RootLayout Provider.");
  return context;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    triggerToast(`${product.name} added to bag`);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <html lang="en">
      <body>
        <CartContext.Provider
          value={{
            cart,
            addToCart,
            removeFromCart,
            setIsCartOpen,
            cartCount,
            cartSubtotal,
          }}
        >
          {/* Announcement Bar */}
          <div className="bg-[#111111] text-white text-center py-2 px-4 text-[11px] uppercase tracking-[2.5px] font-light">
            Complimentary Worldwide Shipping on Orders Over $350
          </div>

          {/* HEADER */}
          <header
            className={`fixed left-0 w-full z-40 bg-white/95 border-b border-[#f2f2f2] transition-all duration-500 ${
              scrolled ? "top-0 shadow-sm" : "top-[33px]"
            }`}
          >
            <div
              className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between relative transition-all duration-500 ${
                scrolled ? "h-[65px]" : "h-[90px]"
              }`}
            >
              {/* LEFT NAV */}
              <nav className="hidden md:block">
                <ul className="flex gap-8 text-[12px] uppercase tracking-[2px]">
                  <li>
                    <Link
                      href="/"
                      className={`hover:opacity-60 ${
                        pathname === "/" ? "underline underline-offset-4" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bags"
                      className={`hover:opacity-60 ${
                        pathname === "/bags"
                          ? "underline underline-offset-4"
                          : ""
                      }`}
                    >
                      Bags
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* MOBILE MENU BUTTON */}
              <button className="md:hidden text-[12px] uppercase tracking-[2px]">
                Menu
              </button>

              {/* CENTER LOGO */}
              <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2 text-center">
                <Link href="/" className="flex flex-col items-center">
                  <span className="text-[16px] sm:text-[18px] tracking-[4px] font-semibold leading-none">
                    WS
                  </span>
                  <span className="text-[12px] sm:text-[15px] tracking-[5px] font-normal mt-1">
                    WEAR SHANIRA
                  </span>
                </Link>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-[12px] uppercase tracking-[1px]">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="hover:opacity-60"
                >
                  Search
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative hover:opacity-60"
                >
                  Bag
                  <span className="ml-1 bg-[#111111] text-white text-[9px] w-4 h-4 rounded-full inline-flex items-center justify-center absolute -top-1 -right-[14px]">
                    {cartCount}
                  </span>
                </button>
              </div>
            </div>

            {/* SEARCH */}
            {isSearchOpen && (
              <div className="w-full bg-white px-4 sm:px-10 py-5 border-t border-[#eeeeee] flex justify-center">
                <input
                  type="text"
                  className="w-full max-w-[600px] border-b border-[#111111] py-2 text-[14px] sm:text-[16px] tracking-[1px] outline-none uppercase placeholder:text-gray-300"
                  placeholder="Search collection..."
                  autoFocus
                />
              </div>
            )}
          </header>

          <main className="pt-[120px]">{children}</main>

          {/* CART OVERLAY */}
          {isCartOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-50"
              onClick={() => setIsCartOpen(false)}
            />
          )}

          {/* CART DRAWER */}
          <div
            className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white shadow-xl z-50 flex flex-col transition-transform duration-500 ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-[25px] border-b flex justify-between items-center">
              <h4 className="text-[16px]">Your Shopping Bag</h4>
              <button onClick={() => setIsCartOpen(false)}>&times;</button>
            </div>

            <div className="flex-1 p-[25px] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 mt-10 text-[14px]">
                  Your bag is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 mb-5 pb-5 border-b items-center"
                  >
                    <div className="w-[70px] h-[90px] bg-[#f7f7f7] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <h5 className="text-[13px] uppercase">
                        {item.name} ({item.quantity})
                      </h5>
                      <p className="text-[13px] text-gray-600">
                        ${item.price * item.quantity}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[11px] text-gray-400 mt-2 hover:text-black"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-[25px] border-t bg-[#fbfbfb]">
              <div className="flex justify-between text-[14px] mb-4 uppercase">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>

              <button className="w-full bg-black text-white py-4 text-[11px] uppercase tracking-[3px]">
                Checkout
              </button>
            </div>
          </div>

          {/* TOAST */}
          {toastMessage && (
            <div className="fixed bottom-6 left-6 bg-black text-white px-6 py-3 text-[11px] uppercase">
              {toastMessage}
            </div>
          )}

          {/* FOOTER */}
          <footer className="border-t py-14 text-center">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-10">
              <div className="text-[14px] tracking-[4px] mb-5">
                Wear Shanira
              </div>

              <ul className="flex justify-center gap-6 text-[11px] uppercase text-gray-500 mb-8 flex-wrap">
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#">Store Locator</Link>
                </li>
              </ul>

              <div className="text-[11px] text-gray-400">
                © 2026 Wear Shanira
              </div>
            </div>
          </footer>
        </CartContext.Provider>
      </body>
    </html>
  );
}

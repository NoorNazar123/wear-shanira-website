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
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
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
          <div className="bg-[#111111] text-white text-center py-2 px-5 text-[11px] uppercase tracking-[2.5px] font-light">
            Complimentary Worldwide Shipping on Orders Over $350
          </div>

          {/* Navigation Hub */}
          <header
            className={`fixed left-0 w-full z-40 bg-white/95 border-b border-[#f2f2f2] transition-all duration-500 ${
              scrolled ? "top-0 shadow-sm" : "top-[33px]"
            }`}
          >
            <div
              className={`max-w-[1400px] mx-auto px-10 flex justify-between items-center transition-all duration-500 ${
                scrolled ? "h-[65px]" : "h-[90px]"
              }`}
            >
              <nav className="hidden md:block">
                <ul className="flex gap-9 text-[12px] uppercase tracking-[2px]">
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

              <div className="absolute left-1/2 -translate-x-1/2 text-center">
                <Link href="/" className="flex flex-col items-center">
                  <span className="text-[18px] tracking-[4px] font-semibold leading-none">
                    WS
                  </span>
                  <span className="text-[15px] tracking-[5px] font-normal mt-1">
                    WEAR SHANIRA
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-[12px] uppercase tracking-[1px]">
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
                  Bag{" "}
                  <span className="ml-1 bg-[#111111] text-white text-[9px] w-4 h-4 rounded-full inline-flex items-center justify-content-center absolute -top-1 -right-[14px]">
                    {cartCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Dropdown Search Panel */}
            {isSearchOpen && (
              <div className="w-full bg-white px-10 py-5 border-t border-[#eeeeee] flex justify-center items-center animate-fade-in-up">
                <input
                  type="text"
                  className="w-[600px] border-b border-[#111111] py-2 text-[16px] tracking-[1px] outline-none uppercase placeholder:text-gray-300"
                  placeholder="Search collection..."
                  autoFocus
                />
              </div>
            )}
          </header>

          <main className="pt-[123px]">{children}</main>

          {/* Slide-out Shopping Drawer */}
          {isCartOpen && (
            <div
              className="fixed inset-0 bg-black/15 z-50 transition-opacity"
              onClick={() => setIsCartOpen(false)}
            />
          )}
          <div
            className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white shadow-xl z-50 flex flex-col transition-transform duration-500 ease-out ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-[30px] border-b border-[#eeeeee] flex justify-between items-center">
              <h4 className="text-[16px]">Your Shopping Bag</h4>
              <button
                className="text-[24px] hover:opacity-60"
                onClick={() => setIsCartOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="flex-1 p-[30px] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 italic mt-10 text-[14px]">
                  Your bag is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 mb-6 pb-6 border-b border-[#f9f9f9] items-center"
                  >
                    <div className="w-[70px] h-[90px] bg-[#f7f7f7] flex items-center justify-center p-2">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-[13px] uppercase tracking-[1px] font-medium">
                        {item.name} ({item.quantity})
                      </h5>
                      <div className="text-[13px] text-gray-600 mt-1">
                        ${item.price * item.quantity}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[11px] text-gray-400 uppercase tracking-[0.5px] mt-2 hover:text-[#111111]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-[30px] border-t border-[#eeeeee] bg-[#fbfbfb]">
              <div className="flex justify-between mb-5 text-[14px] uppercase tracking-[1px]">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-[#111111] text-white text-[11px] tracking-[3px] uppercase py-4 transition-all duration-300 hover:bg-[#333333]"
                onClick={() => alert("Proceeding to checkout.")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed bottom-8 left-8 bg-[#111111] text-white py-4 px-8 text-[12px] uppercase tracking-[2px] z-50 shadow-md">
              {toastMessage}
            </div>
          )}

          <footer className="border-t border-[#eeeeee] bg-white py-14 text-center">
            <div className="max-w-[1400px] mx-auto px-10">
              <div className="text-[14px] tracking-[4px] mb-5">
                Wear Shanira
              </div>
              <ul className="flex justify-center gap-8 mb-8 text-[11px] uppercase tracking-[2px] text-gray-500">
                <li>
                  <Link href="#" className="hover:opacity-60">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-60">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-60">
                    Store Locator
                  </Link>
                </li>
              </ul>
              <div className="text-[11px] text-gray-400 tracking-[1px]">
                © 2026 Wear Shanira
              </div>
            </div>
          </footer>
        </CartContext.Provider>
      </body>
    </html>
  );
}

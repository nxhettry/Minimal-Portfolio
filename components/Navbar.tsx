"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full mx-auto z-50 shadow-sm">
        <div className="w-full md:w-[60%] md:fixed backdrop-blur-sm px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg md:text-2xl font-bold font-heading"
          >
            NISHAN GAUTAM
          </motion.h1>
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="text-gray-600 hover:text-black dark:text-gray-200 transition-colors"
              >
                {item}
              </Link>
            ))}

            <ThemeSwitcher />
          </div>

          <div className="flex justify-center items-center">
            <div className="md:hidden flex justify-center items-center">
              <ThemeSwitcher />
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 dark:bg-black dark:text-white text-black bg-white z-[100] pt-20 md:hidden">
          <div className="w-full px-12 mx-auto flex justify-end items-center">
            <svg
              onClick={() => setIsMenuOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center space-y-8 p-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={item}
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="text-gray-600 hover:text-black dark:text-gray-200 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

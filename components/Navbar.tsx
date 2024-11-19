"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <nav className="w-full mx-auto z-50 shadow-sm">
        <div className="w-[60%] backdrop-blur-sm fixed px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold font-heading text-black"
          >
            NISHAN GAUTAM
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <FaSun className="w-6 h-6" />
              ) : (
                <FaMoon className="w-6 h-6" />
              )}
            </button>
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
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0  z-40 pt-20 md:hidden">
          <div className="flex flex-col items-center space-y-8 p-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

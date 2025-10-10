import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; import {
  LogIn,
  Home as HomeIcon,
  Layers,
  Info,
  Phone,
  ShoppingCart,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dark, setDark] = useState(false);
  const [cartCount] = useState(2);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={dark ? "dark" : ""}>
      <div className="fixed top-0 inset-x-0 bg-pink-100 dark:bg-gray-800 shadow-md z-50">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-3 md:gap-0">
          {/* Logo */}
          <Link to="/" className="text-3xl font-serif text-pink-700 dark:text-pink-400 font-bold">
            💎 DIVA
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Searching:", searchQuery);
            }}
            className="w-full md:w-1/3"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black dark:text-black"
            />
          </form>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium items-center">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                <HomeIcon size={20} />
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-pink-600 transition">
                <Layers size={20} />
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-pink-600 transition">
                <Info size={20} />
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-600 transition">
                <Phone size={20} />
              </a>
            </li>

            {/* Sign In */}
            <li>
              <Link
                to="/login"
                className="flex items-center justify-center bg-pink-400 text-white p-2 rounded-full hover:bg-pink-700 transition"
              >
                <LogIn size={18} />
              </Link>
            </li>

            {/* Cart */}
            <li className="relative">
              <ShoppingCart size={22} className="cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


{/* // Inside your Navbar component */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Overlay */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black z-40"
              ></motion.div>

              {/* Sliding Menu */}
              <motion.ul
                key="mobileMenu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-pink-100 dark:bg-gray-800 flex flex-col gap-6 px-6 py-12 text-gray-700 dark:text-gray-200 font-medium shadow-lg z-50"
              >
                <li>
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-pink-600 transition flex items-center gap-2 text-lg"
                  >
                    <HomeIcon size={20} /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-pink-600 transition flex items-center gap-2 text-lg"
                  >
                    <Layers size={20} /> Products
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-pink-600 transition flex items-center gap-2 text-lg"
                  >
                    <Info size={20} /> About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-pink-600 transition flex items-center gap-2 text-lg"
                  >
                    <Phone size={20} /> Contact
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 justify-center bg-pink-400 text-white py-2 rounded-full hover:bg-pink-700 transition text-lg"
                  >
                    <LogIn size={18} /> Sign In
                  </Link>
                </li>
              </motion.ul>
            </>
          )}
        </AnimatePresence>


      </div>
    </nav>
  );
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (href) =>
    pathname === href || (href === "/projelerimiz" && pathname.startsWith("/projelerimiz"))
      ? "text-purple-400 font-semibold border-b-2 border-purple-400"
      : "text-gray-300 hover:text-purple-400 transition-colors duration-300";

  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md top-0 left-0 right-0 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 transition-all duration-500"
          >
            Nurettin Tutak
          </Link>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`px-4 py-2 text-lg ${getLinkClass("/")}`}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/hakkinda" 
              className={`px-4 py-2 text-lg ${getLinkClass("/hakkinda")}`}
            >
              Hakkında
            </Link>
            <Link 
              href="/projelerimiz" 
              className={`px-4 py-2 text-lg ${getLinkClass("/projelerimiz")}`}
            >
              Projelerim
            </Link>
            <Link 
              href="/iletisim" 
              className={`px-4 py-2 text-lg ${getLinkClass("/iletisim")}`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden p-2 text-gray-300 focus:outline-none rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobil Menü İçeriği */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-4 py-3 space-y-4">
              <Link 
                href="/" 
                className={`block px-4 py-3 rounded-lg text-lg ${getLinkClass("/")} hover:bg-gray-800/50 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hakkinda" 
                className={`block px-4 py-3 rounded-lg text-lg ${getLinkClass("/hakkinda")} hover:bg-gray-800/50 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkında
              </Link>
              <Link 
                href="/projelerimiz" 
                className={`block px-4 py-3 rounded-lg text-lg ${getLinkClass("/projelerimiz")} hover:bg-gray-800/50 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projelerim
              </Link>
              <Link 
                href="/iletisim" 
                className={`block px-4 py-3 rounded-lg text-lg ${getLinkClass("/iletisim")} hover:bg-gray-800/50 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
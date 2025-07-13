"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) =>
    pathname === href || (href === "/projelerimiz" && pathname.startsWith("/projelerimiz"));

  const linkBaseClass =
    "relative group px-4 py-2 text-[15px] font-medium text-gray-100 hover:text-white transition-all duration-300";

  const activeLinkClass =
    "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-white after:scale-x-100 after:origin-center after:transition-transform after:duration-300";

  const inactiveLinkUnderline =
    "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white group-hover:after:w-4/5 group-hover:after:scale-x-100 after:origin-center after:transition-all after:duration-300";

  return (
    <nav className="fixed top-8 w-full z-50 bg-gradient-to-r from-blue-950 to-blue-800 backdrop-blur-md backdrop-saturate-150 border-b border-blue-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:opacity-90 transition-opacity">
            <Image
              src="/nrt14.png"
              alt="Nurettin Tutak Logo"
              width={175}
              height={70}
              priority
              quality={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Ana Sayfa" },
              { href: "/hakkinda", label: "Hakkında" },
              { href: "/kurumsal", label: "Üretim Tesisimiz" },
              { href: "/projelerimiz", label: "Projelerimiz" },
              { href: "/iletisim", label: "İletişim" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${linkBaseClass} ${
                  isActive(href) ? activeLinkClass : inactiveLinkUnderline
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden p-2 text-white focus:outline-none rounded-md hover:bg-blue-800/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobil Menü İçeriği */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-blue-800/50">
            <div className="px-2 py-2 space-y-1">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkinda", label: "Hakkında" },
                { href: "/kurumsal", label: "Üretim Tesisimiz" },
                { href: "/projelerimiz", label: "Projelerimiz" },
                { href: "/iletisim", label: "İletişim" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 rounded-md text-[15px] ${
                    isActive(href)
                      ? "text-white font-semibold bg-blue-700/30"
                      : "text-gray-100 hover:text-white hover:bg-blue-700/20"
                  } transition-all duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
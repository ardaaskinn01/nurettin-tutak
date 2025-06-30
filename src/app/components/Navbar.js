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
    "relative group px-4 py-2 text-lg text-gray-100 hover:text-white transition-colors duration-300";

  const activeLinkClass =
    "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  const inactiveLinkUnderline =
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  return (
    <nav className="fixed w-full z-50 bg-green-700/60 backdrop-blur-md backdrop-saturate-150 border-b border-green-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/nrt10.png"
              alt="Nurettin Tutak Logo"
              width={135}
              height={30}
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center space-x-8">
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
            className="md:hidden p-2 text-white focus:outline-none rounded-md hover:bg-gray-800 transition-colors"
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
          <div className="md:hidden bg-green-600/90 backdrop-blur-lg border-t border-green-700">
            <div className="px-4 py-3 space-y-4">
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
                  className={`block px-4 py-3 rounded-lg text-lg ${
                    isActive(href)
                      ? "text-white font-semibold bg-green-700/50"
                      : "text-gray-100 hover:text-white hover:bg-green-700/50"
                  } transition-colors`}
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
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const isActive = (href) =>
    pathname === href || (href === "/projelerimiz" && pathname.startsWith("/projelerimiz"));

  const linkBaseClass =
    "relative group px-4 py-2 text-[15px] font-medium text-gray-100 hover:text-white transition-all duration-300";

  const activeLinkClass =
    "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-white after:scale-x-100 after:origin-center after:transition-transform after:duration-300";

  const inactiveLinkUnderline =
    "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white group-hover:after:w-4/5 group-hover:after:scale-x-100 after:origin-center after:transition-all after:duration-300";

  return (
    <nav className="fixed top-6 w-full z-50 bg-gradient-to-r from-blue-950 to-blue-800 backdrop-blur-md backdrop-saturate-150 border-b border-blue-800/50 shadow-lg">
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
              {
                label: "Kurumsal",
                submenu: [
                  { href: "/kurumsal/uretim", label: "Üretim Tesisimiz" },
                  { href: "/kurumsal/kereste", label: "Yıkama / Kereste İmalatı" },
                  { href: "/kurumsal/misafirhane", label: "Yönetim Kurulu Misafirhanesi" },
                ],
              },
              { href: "/projelerimiz", label: "Projelerimiz" },
              { href: "/iletisim", label: "İletişim" },
            ].map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="relative group">
                  <button
                    className={`${linkBaseClass} flex items-center gap-1 ${pathname.startsWith("/kurumsal") ? activeLinkClass : inactiveLinkUnderline}`}
                  >
                    {item.label}
                    <svg className="w-3 h-3 text-gray-300 group-hover:text-white transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.084l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.25-4.4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-blue-800/70 hover:text-white transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBaseClass} ${isActive(item.href) ? activeLinkClass : inactiveLinkUnderline}`}
                >
                  {item.label}
                </Link>
              )
            )}
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
            <div className="space-y-1">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkinda", label: "Hakkında" },
                {
                  label: "Kurumsal",
                  submenu: [
                    { href: "/kurumsal/uretim", label: "Üretim Tesisimiz" },
                    { href: "/kurumsal/kereste", label: "Yıkama / Kereste İmalatı" },
                    { href: "/kurumsal/misafirhane", label: "Yönetim Kurulu Misafirhanesi" },
                  ],
                },
                { href: "/projelerimiz", label: "Projelerimiz" },
                { href: "/iletisim", label: "İletişim" },
              ].map((item, idx) =>
                item.submenu ? (
                  <div key={idx} className="border-b border-blue-800/50">
                    <button
                      className="w-full text-left flex items-center justify-between px-6 py-4 text-gray-100 hover:text-white hover:bg-blue-800/30 transition"
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    >
                      <span className="text-[15px] font-medium">{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${submenuOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {submenuOpen && (
                      <div className="bg-blue-800/20">
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            className="block px-8 py-3 text-sm text-white hover:text-white hover:bg-blue-800/40 transition"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-6 py-4 border-b border-blue-800/50 text-[15px] font-medium ${isActive(item.href)
                        ? "text-white bg-blue-700/30"
                        : "text-gray-100 hover:text-white hover:bg-blue-700/20"
                      } transition`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
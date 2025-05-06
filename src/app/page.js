"use client";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Nurettin Tutak | Geçmişten Gelen Güç, Geleceğe Sağlam Adım</title>
        <meta name="description" content="Nurettin Tutak - Profesyonel Flutter Geliştirici" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white min-h-screen flex flex-col relative">
        <Navbar />

        {/* Hero Section */}
        <section
          className="pt-32 md:pt-40 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Arka planın üzerine yarı saydam koyu bir katman ekledim */}
          <div className="relative max-w-4xl mx-auto z-10">

            {/* Slogan */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-10">
              Geçmişten Gelen Güç, <br /> Geleceğe Sağlam Adım
            </h1>

            {/* Scroll Down Indicator */}
            <div
              className="mt-20 animate-bounce cursor-pointer"
              onClick={scrollToSection}
            >
              <svg
                className="w-8 h-8 text-green-400 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-900 py-16 border-t border-gray-700 mt-auto">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center space-y-10">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                İletişim Bilgileri
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* E-posta */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-semibold">E-posta</h3>
                    <a href="mailto:nurettintutak@gmail.com" className="text-gray-300 hover:text-green-400">
                       nurettintutak@gmail.com
                    </a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h3 className="text-xl font-semibold">Telefon</h3>
                    <a href="tel:+905555555555" className="text-gray-300 hover:text-green-400">
                       +90 555 555 55 55
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 pt-8 border-t border-gray-800 w-full text-center">
                © {new Date().getFullYear()} Nurettin Tutak. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
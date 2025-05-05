"use client";
import Image from "next/image";
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
        <title>Nurettin Tutak | Flutter Geliştirici</title>
        <meta name="description" content="Nurettin Tutak - Profesyonel Flutter Geliştirici" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 h-screen flex items-center justify-center overflow-hidden">
          
          <div className="z-10 relative text-center px-6 max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-purple-400/50 overflow-hidden shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Nurettin Tutak"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Merhaba, Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Nurettin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Flutter uzmanı olarak, kullanıcı dostu ve yüksek performanslı mobil uygulamalar geliştiriyorum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-500 shadow-lg font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                CV İndir
              </a>
              <Link 
                href="/iletisim" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                İletişime Geç
              </Link>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
            onClick={scrollToSection}
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/30">
              <svg
                className="w-7 h-7 text-white"
                xmlns="http://www.w3.org/2000/svg"
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
        <footer className="w-full bg-gray-800/90 backdrop-blur-md py-16 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                İletişim Bilgileri
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                <div className="bg-gray-700/50 p-8 rounded-xl shadow-lg border border-gray-600/30">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-2">E-posta</h3>
                    <a href="mailto:nurettintutak@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors text-lg">
                      nurettintutak@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-8 rounded-xl shadow-lg border border-gray-600/30">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-2">Telefon</h3>
                    <a href="tel:+905555555555" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                      +90 555 555 55 55
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-700 w-full text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Nurettin Tutak. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
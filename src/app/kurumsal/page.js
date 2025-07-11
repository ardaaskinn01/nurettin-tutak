"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Kurumsal() {
  const images = Array.from({ length: 19 }, (_, i) => `/fabrika/${i}.jpg`);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen bg-gray-900">

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Başlık Bölümü */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-400 tracking-widest">ÜRETİM TESİSİMİZ</span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Gediz / Kütahya
              </span>
              <br />
              <span className="text-white">Modern Üretim Tesisimiz</span>
            </h1>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              15.000 m² kapalı alan üzerine kurulu son teknoloji üretim tesisimizde, 
              kalite standartlarını en üst seviyede tutarak üretim yapmaktayız.
            </p>
          </div>

          {/* Galeri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Tesis Görseli ${index + 1}`}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isLoading ? 'blur-sm' : 'blur-0'}`}
                  onLoadingComplete={() => setIsLoading(false)}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-lg">Görsel {index + 1}</h3>
                    <p className="text-gray-300 text-sm mt-1">Üretim Hattı</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* İstatistikler */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "15.000", label: "m² Kapalı Alan" },
              { value: "100+", label: "Çalışan" },
              { value: "24/7", label: "Kesintisiz Üretim" },
              { value: "ISO 9001", label: "Kalite Belgesi" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-full aspect-video">
              <Image
                src={selectedImage}
                alt="Büyütülmüş Tesis Görseli"
                fill
                className="object-contain rounded-lg"
                quality={100}
              />
            </div>
            <button
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              onClick={closeModal}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
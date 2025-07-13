"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import TopContactBar from "../components/TopContactBar";

export default function Kurumsal() {
  const images = Array.from({ length: 19 }, (_, i) => `/fabrika/${i}.jpg`);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentIndex + 1) % images.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Klavye kısayolları
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'ArrowLeft') {
        navigate('prev');
      } else if (e.key === 'ArrowRight') {
        navigate('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gray-900">
      <TopContactBar />
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
                onClick={() => openModal(src, index)}
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
                  </div>
                </div>
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
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Önceki buton */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-all"
              aria-label="Önceki görsel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Görsel içeriği */}
            <div className="relative max-w-6xl w-full h-[90vh]"> {/* max-h yerine h kullanın */}
              <div className="relative w-full h-full"> {/* Bu div'in yüksekliği olmalı */}
                <Image
                  src={selectedImage}
                  alt={`Tesis Görseli ${currentIndex + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Sonraki buton */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-all"
              aria-label="Sonraki görsel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Kapatma butonu */}
            <button
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-all"
              onClick={closeModal}
              aria-label="Kapat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
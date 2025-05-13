"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Kurumsal() {
  const images = Array.from({ length: 19 }, (_, i) => `/fabrika/${i}.jpg`);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-gradient-to-r from-green-800 to-gray-800 min-h-screen">
      <Navbar />

      {/* Navbar yüksekliği kadar boşluk bırak */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold uppercase text-white">
               Üretİm TesİSİMİZ
            </h2>
            <p className="text-gray-400 mt-2 uppercase text-sm">
              Gedİz / Kütahya 
            </p>
            <div className="mt-3 h-1 w-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group h-40 sm:h-48 md:h-52 bg-gray-800 cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Fabrika Görseli ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    Görsel {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-3xl w-full bg-transparent">
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src={selectedImage}
                alt="Büyütülmüş Görsel"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <button
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
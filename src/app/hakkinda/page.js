"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; // Navbar bileşenini import edin

export default function Hakkinda() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar Bileşeni */}
      <Navbar />

      {/* İçerik Bölümü */}
      <div className="flex-grow flex justify-center items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Profil Fotoğrafı 
          <div className="w-388 h-388 md:w-388 md:h-388">
            <Image
              src="/arda.jpg"
              alt="Arda Aşkın"
              width={1152}
              height={1152}
              className="rounded-lg object-cover"
            />
          </div>*/}

          {/* Hakkında Yazısı */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Hakkında</h2>
            <p className="text-gray-300 leading-relaxed">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
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
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Hakkımda</h2>
            <p className="text-gray-300 leading-relaxed">
              İzmir'de doğdum ve yaşıyorum. Lisans eğitimimi Manisa Celal Bayar
              Üniversitesi'nde Yazılım Mühendisliği alanında gerçekleştirdim. Bu 4
              yıl içinde Teknofest yarışmalarına katılım gösterdim ve Haziran
              2022 - Ekim 2022 tarihlerinde Amerika Birleşik Devletleri'nde Work
              & Travel yapma şansı yakaladım. Mezun olduğum tarihten itibaren
              mobil uygulama geliştiriyorum. Yapay zeka ve robotik sistemlere
              özel ilgim var. Aktif olarak freelance projelerde bulunuyorum.
              2025/2026 eğitim öğretim yılında Bilgisayar Mühendisliği alanında
              Yüksek Lisans’a başlayacağım.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";

// Proje verileri
const projeler = [
   {
    slug: "vizyonyoneticilik",
    baslik: "Vizyon Yöneticilik",
    resimler: [],
    aciklama: "Proje, bir site yönetim uygulamasıdır. Yönetici kendi panelinden borç ekleme, duyuru ve gider ekleme gibi işlevleri gerçekleştirmekte, site sakinleri ise kendi bloğuna ait paylaşımları görüp, kendi borçlarını görüntüleyebilmektedir.",
    dil: "Dart-Flutter",
    tarih: "12/2024 - 01/2025",
    platform: "Android-iOS",
    link: "{https://play.google.com/store/apps/details?id=com.vizyon.apartman&hl=tr}, {https://apps.apple.com/tr/app/vizyon-yöneticilik/id6739545663?l=tr}"
  },
  {
    slug: "learningenglishvocab",
    baslik: "Learning English Vocabulary",
    resimler: [],
    aciklama: "Proje, eğitici bir İngilizce egzersiz uygulamasıdır. Çeşitli seviye ve kategorilerdeki testler ile kullanıcılar İngilizce seviyelerine katkıda bulunmaktadırlar.",
    dil: "Dart-Flutter",
    tarih: "01/2025 - 02/2025",
    platform: "Android-iOS",
    link: "{https://play.google.com/store/apps/details?id=com.aasoft.ingilizce}, {https://apps.apple.com/tr/app/learning-english-vocabulary/id6741487197?l=tr}"
  },
];

export default function ProjeDetay({ params }) {
  const { slug } = params;
  const proje = projeler.find((p) => p.slug === slug);

  if (!proje) {
    return <div>Proje bulunamadı!</div>;
  }

  const currentIndex = projeler.findIndex((p) => p.slug === slug);
  const previousProje = currentIndex > 0 ? projeler[currentIndex - 1] : null;
  const nextProje = currentIndex < projeler.length - 1 ? projeler[currentIndex + 1] : null;


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Proje İçeriği */}
      <div className="flex flex-col flex-1 pt-20 px-4 md:px-8">
        {/* Üst Kısım: Mobilde Dikey, Desktop'ta Yatay */}
        <div className="flex flex-col md:flex-row flex-1 gap-8">
          {/* Sol Üst Köşe: Proje Bilgileri */}
          <div className="flex-1 md:max-w-[30%]"> {/* Sol tarafın genişliği artırıldı */}
            <h1 className="text-4xl font-bold mb-4">{proje.baslik}</h1>
            <p className="text-lg text-gray-300">Proje Tarihi: {proje.tarih}</p>
            <p className="text-lg text-gray-300">Platformlar: {proje.platform}</p>
            <p className="text-lg text-gray-300">Dil-Geliştirme Ortamı: {proje.dil}</p>
            </div>
        </div>

        <div className="mt-8 mb-20"> {/* mb-20 ekleyerek butonlar için boşluk bırakıldı */}
          <h2 className="text-2xl font-bold mb-4">Proje Açıklaması</h2>
          <p className="text-lg text-gray-300">{proje.aciklama}</p>
        </div>
      </div>

      {/* Önceki ve Sonraki Proje Butonları (Mobilde Altta Sabit) */}
      <div className="fixed bottom-0 left-0 right-0 flex p-4 bg-gray-900 md:bg-transparent md:relative md:bottom-auto md:left-auto md:right-auto md:px-8 md:py-4">
        {/* Önceki Buton */}
        {previousProje && (
          <Link href={`/projeler/${previousProje.slug}`}>
            <div className="text-black bg-gray-200 p-2 md:p-3 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
              ← Önceki
            </div>
          </Link>
        )}

        {/* Esnek Boşluk */}
        <div className="flex-grow"></div>

        {/* Sonraki Buton */}
        {nextProje && (
          <Link href={`/projeler/${nextProje.slug}`}>
            <div className="text-black bg-gray-200 p-2 md:p-3 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
              Sonraki →
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image"; // Image import edildi

export default function Projeler() {
  const projects = [
    { title: "TavşanlI / KÜTAHYA", link: "/projeler/tavsanli" },
    { title: "NazİLLİ / AYDIN", link: "/projeler/nazilli" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Arka plan resmini bulanıklaştırdık */}
      <Navbar />
      <Image
        src="/bg.jpg"
        alt="background"
        fill
        className="object-cover blur-[4px]"
        priority
      />
      {/* Arka planı daha koyu hale getirdik */}
      <div className="absolute inset-0 bg-black opacity-65">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white">Projelerim</h2>
            <div className="mt-3 h-1 w-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
          </div>

          {/* Kartları ortalayıp kare yapmak için grid yerine flex kullanıyoruz */}
          <div className="flex justify-center items-center gap-8">
            {projects.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                className="group relative overflow-hidden rounded-lg border-4 border-orange-500 w-72 h-72 bg-white bg-opacity-85 transition-transform duration-300 hover:scale-105 shadow-2xl"
              >
                <div className="text-center flex items-center justify-center h-full">
                  <span className="text-orange-500 text-lg uppercase font-semibold">{project.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

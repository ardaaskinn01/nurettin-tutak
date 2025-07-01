"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image"; // Image import edildi

export default function Projeler() {
  const projects = [
    { title: "TavşanlI / KÜTAHYA", link: "/projelerimiz/tavsanli" },
    { title: "NazİLLİ / AYDIN", link: "/projelerimiz/nazilli" },
    { title: "Karaburun / İZMİR", link: "/projelerimiz/karaburun" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Arka plan resmini bulanıklaştırdık */}
      <Navbar />
      {/* Arkaplan */}
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center"
                style={{
                    backgroundImage: "url('/bg.jpg')",
                }}
            />

            {/* Arkaplan karartması */}
            <div className="absolute inset-0 bg-black opacity-70" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white">KONUMLAR</h2>
                    <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
                </div>

          {/* Cardlar alt alta ve geniş dikdörtgen yapıldı */}
          <div className="flex flex-col items-center gap-8">
            {projects.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                className="group relative overflow-hidden rounded-lg border-l-4 border-orange-500 w-full max-w-2xl h-36 bg-white bg-opacity-80 transition-transform duration-300 hover:scale-160 shadow-xl"
              >
                <div className="text-center flex items-center justify-center h-full">
                  <span className="text-orange-500 text-xl uppercase font-semibold">
                    {project.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
}

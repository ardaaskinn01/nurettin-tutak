"use client";
import Navbar from "../../components/Navbar";
import TopContactBar from "../../components/TopContactBar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ulucak() {
  const router = useRouter();
  const projects = [
    { title: "Ulucak Merkez İnşaatlar", link: "/projelerimiz/ulucak/insaat" },
  ];

  return (
    <div className="relative min-h-screen">
      <TopContactBar />
      <Navbar />

      <div className="absolute top-32 left-6 z-20">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg text-white hover:bg-opacity-30 transition-all border border-white border-opacity-20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Geri Dön
        </button>
      </div>

      {/* Arkaplan */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-44 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">ULUCAK / İZMİR</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Güleç İnşaat'a ait Ulucak Projeleri
          </p>
        </div>

        {/* Kart Düzeni */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group block relative overflow-hidden rounded-xl bg-white bg-opacity-15 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-opacity-10 py-8 px-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center justify-center text-sm text-blue-400">
                    Proje Detayları
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
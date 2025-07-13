"use client";
import Navbar from "../../components/Navbar";
import TopContactBar from "../../components/TopContactBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nazilli() {
  const router = useRouter();
  const projects = [
    { title: "Ocaklı", link: "/projelerimiz/nazilli/ocakli", villas: 9 },
    { title: "Pamukören", link: "/projelerimiz/nazilli/pamukoren", villas: 15 },
    { title: "Dualar", link: "/projelerimiz/nazilli/dualar", villas: 24 },
    { title: "HamİDİye", link: "/projelerimiz/nazilli/hamidiye", villas: 42 },
  ];

  return (
    <div className="relative min-h-screen">
      <TopContactBar />
      <Navbar />

      <div className="absolute top-32 left-6 z-20">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          ← Geri
        </button>
      </div>

      {/* Arkaplan */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      {/* Arkaplan karartması */}
      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">NAZİLLİ / AYDIN</h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </div>

        {/* Kartlar */}
        <div className="flex flex-col items-center gap-8">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group relative overflow-hidden rounded-lg border-l-4 border-blue-500 w-full max-w-2xl h-28 bg-white bg-opacity-80 transition-transform duration-300 hover:scale-105 shadow-xl"
            >
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-blue-500 text-xl uppercase font-semibold">
                  {project.title}
                </span>
                <span className="text-gray-600 text-sm font-light mt-1">
                  {project.villas} Villa
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

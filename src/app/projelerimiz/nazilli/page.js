"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image"; // Image import edildi
import { useRouter } from "next/navigation";

export default function Nazilli() {
    const router = useRouter();
    const projects = [
        { title: "Ocaklı", link: "/projelerimiz/nazilli/ocakli" },
        { title: "Pamukören", link: "/projelerimiz/nazilli/pamukoren" },
        { title: "Dualar", link: "/projelerimiz/nazilli/dualar" },
        { title: "HamİDİye", link: "/projelerimiz/nazilli/hamidiye" },
    ];

     return (
            <div className="relative min-h-screen">
                <Navbar />
    
                <div className="absolute top-24 left-6 z-20">
                    <button
                        onClick={() => router.back()}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600"
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
    
                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-white">NAZİLLİ / AYDIN</h2>
                        <div className="mt-3 h-1 w-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
                    </div>
    

                    {/* Cardlar alt alta ve geniş dikdörtgen yapıldı */}
                    <div className="flex flex-col items-center gap-12">
                        {projects.map((project, index) => (
                            <Link
                                href={project.link}
                                key={index}
                                className="group relative overflow-hidden rounded-lg border-l-4 border-orange-500 w-full max-w-2xl h-24 bg-white bg-opacity-80 transition-transform duration-300 hover:scale-105 shadow-xl"
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
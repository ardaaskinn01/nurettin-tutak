"use client";
import Navbar from "../../components/Navbar";
import TopContactBar from "../../components/TopContactBar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tavsanli() {
    const router = useRouter();
    const projects = [
        { title: "Adalİfe Apartmanı", link: "/projelerimiz/tavsanli/adalife" },
        { title: "Astepe Apartmanı", link: "/projelerimiz/tavsanli/astepe" },
        { title: "Aytepe Sİtesİ", link: "/projelerimiz/tavsanli/aytepe" },
        { title: "Davutlar Konutu", link: "/projelerimiz/tavsanli/davutlar" },
        { title: "Demİrbey Vİllaları", link: "/projelerimiz/tavsanli/demirbey" },
        { title: "Emİrgan Sİtesİ", link: "/projelerimiz/tavsanli/emirgan" },
        { title: "KG Yapı", link: "/projelerimiz/tavsanli/kgyapi" },
        { title: "Prestİj Park SİTESİ", link: "/projelerimiz/tavsanli/prestij" },
        { title: "Tepe Huzur Sİtesİ", link: "/projelerimiz/tavsanli/tepehuzur" },
        { title: "Tepe Lİfe Sİtesİ", link: "/projelerimiz/tavsanli/tepelife" },
        { title: "Tepe Park Sİtesİ", link: "/projelerimiz/tavsanli/tepepark" },
        { title: "ÇaĞtepe Sİtesİ", link: "/projelerimiz/tavsanli/cagtepe" },
        { title: "Çelİk Yapı", link: "/projelerimiz/tavsanli/celikyapi" },
        { title: "Ömer Faruk Boyacı Sİtesİ", link: "/projelerimiz/tavsanli/ofbsitesi" },
        { title: "Şehrar HavuzbaŞı DÜĞÜn Salonu", link: "/projelerimiz/tavsanli/sehrar" },
        { title: "Gürtepe Sİtesİ", link: "/projelerimiz/tavsanli/gurtepe" },
        { title: "Tepe İdeal Sİtesİ", link: "/projelerimiz/tavsanli/tepeideal" },
        { title: "Tepe Elİt Sİtesi", link: "/projelerimiz/tavsanli/tepeelit" },
        { title: "Tepe Yücel Sİtesİ", link: "/projelerimiz/tavsanli/tepeyucel" },
    ];

    return (
        <div className="relative min-h-screen">
            <TopContactBar />
            <Navbar />

            <div className="absolute top-24 left-6 z-20">
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
                    <h2 className="text-3xl font-semibold text-white">TAVŞANLI / KÜTAHYA</h2>
                    <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
                </div>

                {/* Grid Düzeni */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            className="group relative overflow-hidden rounded-lg border-l-4 border-blue-500 h-24 bg-white bg-opacity-80 transition-transform duration-300 hover:scale-105 shadow-xl"
                        >
                            <div className="text-center flex items-center justify-center h-full">
                                <span className="text-blue-500 text-lg uppercase font-semibold">
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
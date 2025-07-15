"use client";
import Navbar from "../../components/Navbar";
import TopContactBar from "../../components/TopContactBar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tavsanli() {
    const router = useRouter();
    const projects = [
        { title: "Adalife Apartmanı", link: "/projelerimiz/tavsanli/adalife" },
        { title: "Astepe Apartmanı", link: "/projelerimiz/tavsanli/astepe" },
        { title: "Aytepe Sitesi", link: "/projelerimiz/tavsanli/aytepe" },
        { title: "Davutlar Konutu", link: "/projelerimiz/tavsanli/davutlar" },
        { title: "Demirbey Villaları", link: "/projelerimiz/tavsanli/demirbey" },
        { title: "Emirgan Sitesi", link: "/projelerimiz/tavsanli/emirgan" },
        { title: "KG Yapı", link: "/projelerimiz/tavsanli/kgyapi" },
        { title: "Prestij Park Sitesi", link: "/projelerimiz/tavsanli/prestij" },
        { title: "Tepe Huzur Sitesi", link: "/projelerimiz/tavsanli/tepehuzur" },
        { title: "Tepe Life Sitesi", link: "/projelerimiz/tavsanli/tepelife" },
        { title: "Tepe Park Sitesi", link: "/projelerimiz/tavsanli/tepepark" },
        { title: "Çağtepe Sitesi", link: "/projelerimiz/tavsanli/cagtepe" },
        { title: "Çelik Yapı", link: "/projelerimiz/tavsanli/celikyapi" },
        { title: "Ömer Faruk Boyacı Sitesi", link: "/projelerimiz/tavsanli/ofbsitesi" },
        { title: "Şehrar Havuzbaşı Düğün Salonu", link: "/projelerimiz/tavsanli/sehrar" },
        { title: "Gürtepe Sitesi", link: "/projelerimiz/tavsanli/gurtepe" },
        { title: "Tepe İdeal Sitesi", link: "/projelerimiz/tavsanli/tepeideal" },
        { title: "Tepe Elit Sitesi", link: "/projelerimiz/tavsanli/tepeelit" },
        { title: "Tepe Yücel Sitesi", link: "/projelerimiz/tavsanli/tepeyucel" },
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

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-44 pb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-white mb-4">TAVŞANLI / KÜTAHYA</h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                        Bölgede gerçekleştirdiğimiz öne çıkan projeler
                    </p>
                </div>

                {/* Grid Düzeni */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-white bg-opacity-15 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-opacity-10 h-32 flex items-center justify-center"
                        >
                            <div className="text-center px-6 py-4">
                                <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-flex items-center text-sm text-blue-400">
                                        Detayları görüntüle
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
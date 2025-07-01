"use client";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ocakli() {
    const router = useRouter();
    const images = Array.from({ length: 10 }, (_, i) => `/tepepark/(${i + 1}).jpeg`);
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => setSelectedImage(null);

    return (
        <div className="bg-gradient-to-r from-blue-800 to-gray-800 min-h-screen">
            <Navbar /><div className="absolute top-32 left-6 z-10">
                <button
                    onClick={() => router.back()}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600"
                >
                    ← Geri
                </button>
            </div>

            {/* Navbar yüksekliği kadar boşluk bırak */}
            <div className="pt-36 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-gray-400 mt-2 text-sm">TEPE PARK SİTESİ</p>
                        <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
                    </div>

                    {/* Görsel Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg group h-40 sm:h-48 md:h-52 bg-gray-800 cursor-pointer"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Ocaklı Görsel ${index + 1}`}
                                    fill
                                    className="transition-transform duration-300 group-hover:scale-105 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">
                                        Görsel {index + 1}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-3xl w-full bg-transparent">
                        <div className="relative w-full h-96 md:h-[500px]">
                            <Image
                                src={selectedImage}
                                alt="Büyütülmüş Görsel"
                                fill
                                className="rounded-lg object-contain"
                            />
                        </div>
                        <button
                            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
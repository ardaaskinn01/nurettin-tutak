"use client";
import Navbar from "../../components/Navbar";
import TopContactBar from "../../components/TopContactBar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function HakkindaLayout({ children }) {
    const pathname = usePathname();

    const navItems = [
        { href: "/hakkinda/genel", label: "Genel Bilgi" },
        { href: "/hakkinda/misyon", label: "Misyon" },
        { href: "/hakkinda/vizyon", label: "Vizyon" },
        { href: "/hakkinda/yonetim", label: "Yönetim Kurulu" },
    ];

    return (
        <div className="relative min-h-screen bg-white text-gray-800 flex flex-col font-sans overflow-hidden">
            {/* Arka Plan Görseli */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background3.jpg"
                    alt="background"
                    fill
                    className="object-cover blur-sm"
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-65"></div>
            </div>

            <TopContactBar />
            <Navbar />

            <div className="flex flex-row z-10 relative max-w-7xl mx-auto w-full mt-6">
                {/* Sol Menü */}
                <aside className="hidden lg:block w-64 sticky top-32 h-fit z-30 px-6">
                    <nav className="space-y-3 text-white text-base font-medium bg-black bg-opacity-30 p-4 rounded-2xl shadow-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 p-2 rounded-lg transition duration-200 hover:text-blue-400 ${
                                    pathname === item.href ? "text-blue-400 font-semibold" : ""
                                }`}
                            >
                                <ChevronRight
                                    size={18}
                                    className={`${pathname === item.href ? "text-blue-400" : "text-white"}`}
                                />
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Sayfa İçeriği */}
                <main className="flex-1 px-4 py-8 mt-12 rounded-xl shadow-md">
                    {children}
                </main>
            </div>
        </div>
    );
}

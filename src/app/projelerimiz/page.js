"use client";
import Navbar from "../components/Navbar";
import TopContactBar from "../components/TopContactBar";
import Link from "next/link";
import Image from "next/image";

export default function Projeler() {
  const projects = [
    {
      title: "Tavşanlı / Kütahya",
      link: "/projelerimiz/tavsanli",
      description: "Modern yaşam alanları",
      image: "/tepeideal/(1).jpeg",
    },
    {
      title: "Nazilli / Aydın",
      link: "/projelerimiz/nazilli",
      description: "90 villalık lüks konut projesi",
      image: "/ocaklı/(3).jpeg",
    },
    {
      title: "Karaburun / İzmir",
      link: "/projelerimiz/karaburun",
      description: "Deniz manzaralı premium villalar",
      image: "/karaburun/(3).jpeg",
    },
    {
      title: "Ulucak / İzmir",
      link: "/projelerimiz/ulucak",
      description: "Güleç İnşaat'a ait Ulucak Projeleri",
      image: "/insaat/(4).jpeg",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Arka Plan */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Arkaplan"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <TopContactBar />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* Başlık */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 tracking-widest">REFERANSLARIMIZ</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Gurur Duyduğumuz
            </span>
            <br />
            <span className="text-white">Projelerimiz</span>
          </h1>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            50 yılı aşkın tecrübemizle hayata geçirdiğimiz özenle tasarlanmış projelerimizi keşfedin
          </p>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/40 transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                <div className="absolute bottom-0 p-6 z-10">
                  <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
                  <p className="text-gray-100 text-sm">{project.description}</p>
                  <div className="mt-3 flex items-center text-cyan-400 group-hover:text-cyan-300">
                    <span className="text-sm font-medium">Detayları Görüntüle</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Sizin için özel bir proje tasarlayalım</h3>
          <Link
            href="/iletisim"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Ücretsiz Teklif Alın
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
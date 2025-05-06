"use client";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Nurettin Tutak | Geçmişten Gelen Güç, Geleceğe Sağlam Adım</title>
        <meta name="description" content="Nurettin Tutak - Profesyonel Flutter Geliştirici" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen flex flex-col relative">
        <Navbar />

        {/* Hero Section */}
        <section
          className="pt-32 md:pt-40 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-10">
              Geçmişten Gelen Güç, <br /> Geleceğe Sağlam Adım
            </h1>

            <div
              className="mt-20 animate-bounce cursor-pointer"
              onClick={scrollToSection}
            >
              <svg
                className="w-8 h-8 text-green-400 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Main Content with Gradient Background */}
        <div className="bg-gradient-to-b from-green-900 via-green-950 to-black text-white">

          {/* Hizmetlerimiz Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  HİZMETLERİMİZ
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-green-400">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Neden Bizi Seçmelisiniz Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  NEDEN BİZİ SEÇMELİSİNİZ?
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Sol Taraf - Fotoğraf */}
                <div className="relative rounded-xl overflow-hidden">
                  <img src="/foto.jpg" alt="Neden Bizi Seçmelisiniz" className="object-cover w-full h-full transition-transform transform hover:scale-105" />
                </div>

                {/* Sağ Taraf - Metin ve Title'lar */}
                <div className="space-y-6 flex flex-col justify-center">
                  {reasons.map((reason, index) => (
                    <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                      <h3 className="text-2xl font-semibold text-green-400">{reason.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full py-16 border-t border-gray-800 mt-auto">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col items-center space-y-10">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                  İletişim Bilgileri
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                  <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-semibold text-white">E-posta</h3>
                      <a href="mailto:nurettintutak@gmail.com" className="text-gray-300 hover:text-green-400">
                        nurettintutak@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <h3 className="text-xl font-semibold text-white">Telefon</h3>
                      <a href="tel:+905467689992" className="text-gray-300 hover:text-green-400">
                        +90 (546) 768 99 92
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 pt-8 border-t border-gray-800 w-full text-center">
                  © {new Date().getFullYear()} Nurettin Tutak. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

// Data for services
const services = [
  {
    title: "Mimari Proje",
    description: "Müşterilerimizin istek ve ihtiyaçları doğrultusunda, uzman mimar ve mühendis kadromuzla mimari proje çözümleri sunuyoruz. Modern ve fonksiyonel tasarımlarımızla yaşam alanlarınızı şekillendiriyoruz."
  },
  {
    title: "Statik Proje",
    description: "Yapıların güvenliği için gerekli tüm statik hesaplamaları yapıyor, deprem yönetmeliklerine uygun projelendirme hizmeti veriyoruz. Yapılarınızın uzun ömürlü olması için en doğru mühendislik çözümlerini üretiyoruz."
  },
  {
    title: "Mekanik Proje",
    description: "Isıtma, soğutma, havalandırma ve sıhhi tesisat sistemleri için en uygun mekanik projeleri hazırlıyoruz. Enerji verimliliğini ön planda tutarak konforlu yaşam alanları oluşturuyoruz."
  },
  {
    title: "Elektrik Projesi",
    description: "Bina elektrik tesisatından aydınlatmaya kadar tüm elektrik projelerinizi güvenli ve ekonomik çözümlerle tasarlıyoruz. Yenilenebilir enerji sistemleri konusunda da uzman desteği sağlıyoruz."
  },
  {
    title: "İnşaat Yönetimi",
    description: "Projelerinizin başından sonuna kadar tüm inşaat süreçlerini profesyonelce yönetiyoruz. Zamanında ve bütçe dostu teslimat için tüm süreçleri kontrol altında tutuyoruz."
  },
  {
    title: "Müteahhitlik Hizmetleri",
    description: "Konut, villa, işyeri ve tüm yapı türlerinde anahtar teslim müteahhitlik hizmeti veriyoruz. Kaliteli malzeme ve işçilik garantisiyle hayallerinizdeki yapıları inşa ediyoruz."
  }
];

// Data for reasons
const reasons = [
  {
    title: "50+ Yıllık Deneyim",
  },
  {
    title: "Uzman Ekip",
  },
  {
    title: "Kalite Garantisi",

  },
  {
    title: "Müşteri Memnuniyeti",

  },
  {
    title: "Zamanında Teslimat",

  },
  {
    title: "Teknolojik Altyapı",
  }
];
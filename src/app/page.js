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

      <div className="min-h-screen flex flex-col relative bg-gray-950">
        <Navbar />

        {/* Hero Section */}
        <section
          className="pt-32 md:pt-40 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto z-10">
            <h1 className="text-center mb-12 relative">
              <span className="block text-4xl md:text-6xl font-medium text-white leading-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
                  Geçmişten Gelen Güç
                </span>
              </span>
              <span className="block text-5xl md:text-7xl font-bold text-white leading-tight">
                Geleceğe Sağlam Adım
              </span>
              <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 font-light">
              50 yılı aşkın tecrübemizle inşaat sektöründe öncü çözümler sunuyoruz
            </p>

            <div className="mt-16 animate-bounce cursor-pointer" onClick={scrollToSection}>
              <svg className="w-8 h-8 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Hizmetlerimiz Section */}
        <section className="py-24 relative bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-sm font-medium text-green-500 tracking-widest">HİZMETLERİMİZ</span>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Uzmanlık Alanlarımız
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 group-hover:bg-green-500/20 transition-colors">
                      <span className="text-green-400 text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Bizi Seçmelisiniz Section */}
        <section className="py-24 relative bg-gray-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-sm font-medium text-green-500 tracking-widest">AVANTAJLARIMIZ</span>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Neden Bizi Seçmelisiniz?
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Sol Taraf - Fotoğraf */}
              <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src="/foto.jpg"
                  alt="Neden Bizi Seçmelisiniz"
                  className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-8">
                </div>
              </div>

              {/* Sağ Taraf - Liste */}
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="group flex items-start bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">{reason.title}</h3>
                      {reason.description && (
                        <p className="mt-1 text-sm text-gray-400 font-light">{reason.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kronoloji Bölümü */}
        <section className="py-24 relative bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-sm font-medium text-green-500 tracking-widest">TARİHÇEMİZ</span>
              <h2 className="mt-2 text-3xl font-bold text-white">Yolculuğumuz</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            </div>

            <div className="relative">
              {/* Çizgi */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-green-400 via-green-600 to-green-400"></div>

              <div className="space-y-12 md:space-y-0">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* İçerik */}
                    <div className={`md:w-1/2 p-8 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                        <p className="text-green-400 text-sm font-medium mb-2">{item.year}</p>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm font-light">{item.description}</p>
                      </div>
                    </div>

                    {/* Nokta */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 border-4 border-gray-900 z-10 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>

                    {/* Boş Alan */}
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Footer */}
        <footer className="w-full py-20 bg-gray-900 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">İletişim Bilgileri</h2>
                <div className="h-px w-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">E-posta</h3>
                    <a href="mailto:nurettintutak@hotmail.com" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                      nurettintutak@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Telefon</h3>
                    <a href="tel:+905467689992" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                      +90 (546) 768 99 92
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-800 w-full text-center">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Nurettin Tutak. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </footer>
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

// Timeline verileri
const timeline = [
  {
    year: "1977",
    title: "Kuruluş",
    description: "Hasan Tutak tarafından teknik demir doğrama atölyesi olarak kuruldu."
  },
  {
    year: "1985",
    title: "İlk Büyük Proje",
    description: "Nazilli'de ilk büyük ölçekli inşaat projesini tamamladık."
  },
  {
    year: "1992",
    title: "Şirketleşme",
    description: "Tutakoğulları Sanayi ve Ticaret Ltd. Şti. adıyla resmiyet kazandık."
  },
  {
    year: "2005",
    title: "Yeni Nesil Yönetim",
    description: "Nurettin Tutak liderliğinde modern yönetim yapısına geçildi."
  },
  {
    year: "2018",
    title: "NRT Grup Kuruluşu",
    description: "NRT Grup İnşaat A.Ş. olarak yapılanmamızı güçlendirdik."
  },
  {
    year: "2023",
    title: "90 Villalık Proje",
    description: "Aydın Nazilli'de 90 villalık lüks konut projesine başladık."
  },
  {
    year: "2025",
    title: "Yeni Hedefler",
    description: "Kütahya Gediz'de yeni üretim tesisi ve uluslararası projeler planlanıyor."
  }
];
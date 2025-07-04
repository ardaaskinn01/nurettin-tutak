"use client";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useState, useEffect } from 'react';


const useSectionAnimation = (setStartCountUp) => { // setStartCountUp parametre olarak eklendi
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');

          // Stats section için CountUp animasyonlarını tetikle
          if (entry.target.classList.contains('stats-section')) {
            setStartCountUp(true); // Artık burada erişilebilir
            const counters = entry.target.querySelectorAll('.count-up-trigger');
            counters.forEach(counter => {
              counter.classList.add('animate-fadeInUp');
            });
          }
        }
      });
    }, { threshold: 0.3 });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setStartCountUp]); // setStartCountUp dependency olarak eklendi

  return sectionRefs;
};

export default function Home() {
  const [startCountUp, setStartCountUp] = useState(false);
  const sectionRef = useRef(null);
  const sectionRefs = useSectionAnimation(setStartCountUp);
  const [currentBg, setCurrentBg] = useState(0);
  const [animatedText1, setAnimatedText1] = useState("");
  const [animatedText2, setAnimatedText2] = useState("");
  const backgrounds = [
    '/background.jpg',
    '/bg2.jpg',
    '/bg3.jpg'
  ];
  const containerRef = useRef(null);
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Metin animasyonları için
  useEffect(() => {
    const text1 = "Geçmişten Gelen Güç";
    const text2 = "Geleceğe Sağlam Adım";

    // İlk metin animasyonu
    let i = 0;
    const typing1 = setInterval(() => {
      if (i < text1.length) {
        setAnimatedText1(text1.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing1);

        // İkinci metin animasyonu
        let j = 0;
        const typing2 = setInterval(() => {
          if (j < text2.length) {
            setAnimatedText2(text2.substring(0, j + 1));
            j++;
          } else {
            clearInterval(typing2);
          }
        }, 100); // İkinci metin yazma hızı
      }
    }, 150); // İlk metin yazma hızı

    // Arka plan slider animasyonu
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => {
      clearInterval(typing1);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handlePrevious = () => {
    setCurrentBg((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleNext = () => {
    setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  };

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const diff = startX - currentX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrevious();
    isDragging = false;
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    currentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX - currentX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrevious();
  };

  return (
    <>
      <Head>
        <title>Nurettin Tutak | Geçmişten Gelen Güç, Geleceğe Sağlam Adım</title>
        <meta name="description" content="Nurettin Tutak - Profesyonel İnşaat ve Müteahhitlik Hizmetleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen flex flex-col relative bg-gray-950">
        <Navbar />

        <section
          className="pt-32 md:pt-40 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          ))}

          <div className="relative max-w-4xl mx-auto z-10">
            <h1 className="text-center mb-12 relative">
              <span className="block text-4xl md:text-6xl font-medium text-white leading-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  {animatedText1}
                  {animatedText1.length < "Geçmişten Gelen Güç".length && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </span>
              <span className="block text-5xl md:text-7xl font-bold text-white leading-tight">
                {animatedText2}
                {animatedText1 === "Geçmişten Gelen Güç" && animatedText2.length < "Geleceğe Sağlam Adım".length && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
              <div
                className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-1000 delay-1000 scale-x-0 origin-left"
                style={{
                  animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'scaleIn 1s forwards' : ''
                }}
              />
            </h1>
            <p
              className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 font-light opacity-0"
              style={{
                animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'fadeIn 1s forwards 0.5s' : ''
              }}
            >
              50 yılı aşkın tecrübemizle inşaat sektöründe öncü çözümler sunuyoruz
            </p>

            <div
              className="mt-16 cursor-pointer opacity-0"
              onClick={scrollToSection}
              style={{
                animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'fadeInUp 1s forwards 1s' : ''
              }}
            >
              <svg className="w-8 h-8 text-blue-600 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Slider kontrolleri */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
            {backgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBg(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentBg ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Hizmetlerimiz Section */}
        <section
          ref={el => sectionRefs.current[0] = el}
          className="py-24 bg-white opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-blue-800 tracking-widest">HİZMETLERİMİZ</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Uzmanlık Alanlarımız</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-800 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3 group-hover:bg-blue-300 transition-colors">
                      <span className="text-blue-800 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Bizi Seçmelisiniz Section */}
        <section
          ref={el => sectionRefs.current[1] = el}
          className="py-24 bg-gray-50 opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-medium text-blue-800 tracking-widest">AVANTAJLARIMIZ</span>
              <h2 className="mt-1 text-2xl font-semibold text-gray-900">
                Neden Bizi Seçmelisiniz?
              </h2>
              <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-blue-700 to-blue-900 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-800 transition-all duration-300 shadow-sm"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center group-hover:bg-blue-300 transition-colors">
                      <svg className="w-4 h-4 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                    {reason.description && (
                      <p className="mt-1 text-sm text-gray-600">{reason.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={(el) => sectionRefs.current[2] = el}
          className="py-16 bg-white opacity-0 translate-y-10 transition-all duration-500 stats-section"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-800 transition duration-300 count-up-trigger opacity-0 shadow-sm"
                >
                  <div className="text-4xl font-bold text-blue-800 mb-2">
                    {startCountUp && <CountUp end={stat.value} duration={3} suffix={stat.suffix} />}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={el => sectionRefs.current[3] = el}
          className="py-16 relative bg-gray-900 opacity-0 translate-y-10 transition-all duration-500"
        >
          {/* Arkaplan */}
          <div className="absolute inset-0 z-0">
            <img
              src="/fabrika/1.jpg"
              alt="Arkaplan"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/55"></div>
          </div>

          <div className="w-full pl-8 relative z-10">
            <span className="text-xs font-medium text-blue-600 tracking-widest">TARİHÇEMİZ</span>
            <h2 className="mt-2 text-2xl font-semibold text-white">Yolculuğumuz</h2>
            <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-blue-600 to-blue-800"></div>

            <div className="relative">
              {/* Dikey Çizgi */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-blue-600 z-0"></div>

              {/* Grid yapısı */}
              <div className="space-y-6 relative z-10">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    {/* Nokta */}
                    <div className="w-4 h-4 rounded-full bg-blue-700 border-2 border-gray-900 shadow-lg relative z-12"></div>

                    {/* İçerik */}
                    <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 hover:border-blue-600 transition-all duration-200 shadow-md flex flex-col h-full w-full max-w-lg">
                      <p className="text-blue-600 text-sm font-medium mb-1">{item.year}</p>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-xs font-light">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          ref={el => sectionRefs.current[4] = el}
          className="w-full py-20 bg-gray-900 opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Bizimle İletişime Geçin
                  </span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mt-3">
                  Projeleriniz için uzman ekibimizle her zaman iletişim kurabilirsiniz
                </p>
                <div className="mt-4 h-px w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-600 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-blue-700/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">E-posta</h3>
                    <a href="mailto:nurettintutak@hotmail.com" className="text-gray-300 hover:text-blue-600 transition-colors">
                      nurettintutak@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-600 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-blue-700/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Telefon</h3>
                    <a href="tel:+905467689992" className="text-gray-300 hover:text-blue-600 transition-colors">
                      +90 (546) 768 99 92
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-gray-800 w-full text-center">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Nurettin Tutak. Tüm hakları saklıdır.
                </p>
                <div className="mt-2 flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-xs transition-colors">Gizlilik Politikası</a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-xs transition-colors">Çerezler</a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-xs transition-colors">Şartlar</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// Data for stats
const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Yıllık Deneyim",
  },
  {
    value: 50,
    suffix: "+",
    label: "Tamamlanan Bina",
  },
  {
    value: 90,
    suffix: "+",
    label: "Lüks Villa",
  },
  {
    value: 10,
    suffix: "+",
    label: "Devam Eden Proje",
  }
];

// Data for services
const services = [
  {
    title: "Mimari Proje",
    description: "Müşterilerimizin istek ve ihtiyaçları doğrultusunda, uzman mimar ve mühendis kadromuzla mimari proje çözümleri sunuyoruz."
  },
  {
    title: "Statik Proje",
    description: "Yapıların güvenliği için gerekli tüm statik hesaplamaları yapıyor, deprem yönetmeliklerine uygun projelendirme hizmeti veriyoruz."
  },
  {
    title: "Mekanik Proje",
    description: "Isıtma, soğutma, havalandırma ve sıhhi tesisat sistemleri için en uygun mekanik projeleri hazırlıyoruz."
  },
  {
    title: "Elektrik Projesi",
    description: "Bina elektrik tesisatından aydınlatmaya kadar tüm elektrik projelerinizi güvenli ve ekonomik çözümlerle tasarlıyoruz."
  },
  {
    title: "İnşaat Yönetimi",
    description: "Projelerinizin başından sonuna kadar tüm inşaat süreçlerini profesyonelce yönetiyoruz."
  },
  {
    title: "Müteahhitlik Hizmetleri",
    description: "Konut, villa, işyeri ve tüm yapı türlerinde anahtar teslim müteahhitlik hizmeti veriyoruz."
  }
];

// Data for reasons
const reasons = [
  { title: "50+ Yıllık Deneyim" },
  { title: "Uzman Ekip" },
  { title: "Kalite Garantisi" },
  { title: "Müşteri Memnuniyeti" },
  { title: "Zamanında Teslimat" },
  { title: "Teknolojik Altyapı" }
];

// Timeline verileri
const timeline = [
  {
    year: "1977",
    title: "Kuruluş",
    description: "Hasan Tutak tarafından teknik demir doğrama atölyesi olarak kuruldu."
  },
  {
    year: "1990",
    title: "İlk Büyük Proje",
    description: "PVC ve alüminyum sektöründe kendini geliştirerek yer aldı."
  },
  {
    year: "1992",
    title: "Şirketleşme",
    description: "Tutakoğulları Sanayi ve Ticaret Ltd. Şti. adıyla resmiyet kazanıldı"
  },
  {
    year: "2005",
    title: "Yeni Nesil Yönetim",
    description: "Nurettin Tutak liderliğinde modern yönetim yapısına geçildi."
  },
  {
    year: "2018",
    title: "NRT Grup Kuruluşu",
    description: "NRT Grup İnşaat A.Ş. olarak yapılanma güçlendirildi."
  },
  {
    year: "2023",
    title: "90 Villalık Proje",
    description: "Aydın Nazilli'de 90 villalık lüks konut projesine başlandı."
  },
  {
    year: "2025",
    title: "Yeni Hedefler",
    description: "Kütahya Gediz'de yeni üretim tesisi ve uluslararası projeler planlanmaktadır."
  }
];
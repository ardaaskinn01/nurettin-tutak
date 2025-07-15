"use client";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";
import TopContactBar from "./components/TopContactBar";
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";

const useSectionAnimation = (setStartCountUp) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');

          if (entry.target.classList.contains('stats-section')) {
            setStartCountUp(true);
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
  }, [setStartCountUp]);

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

  useEffect(() => {
    const text1 = "Geçmişten Gelen Güç";
    const text2 = "Geleceğe Sağlam Adım";

    let i = 0;
    const typing1 = setInterval(() => {
      if (i < text1.length) {
        setAnimatedText1(text1.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing1);
        let j = 0;
        const typing2 = setInterval(() => {
          if (j < text2.length) {
            setAnimatedText2(text2.substring(0, j + 1));
            j++;
          } else {
            clearInterval(typing2);
          }
        }, 100);
      }
    }, 150);

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

  return (
    <>
      <Head>
        <title>NRT Grup | İnşaat ve Müteahhitlik Hizmetleri</title>
        <meta name="description" content="NRT Grup - 50 yılı aşkın tecrübesiyle kaliteli inşaat ve müteahhitlik hizmetleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col relative bg-gray-950">
        <TopContactBar />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 md:pt-28 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative overflow-hidden">
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
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}

          <div className="relative max-w-5xl mx-auto z-10 px-4">
            <h1 className="text-center mb-8 relative">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                  {animatedText1}
                  {animatedText1.length < "Geçmişten Gelen Güç".length && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {animatedText2}
                {animatedText1 === "Geçmişten Gelen Güç" && animatedText2.length < "Geleceğe Sağlam Adım".length && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
              <div
                className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000 delay-1000 scale-x-0 origin-left"
                style={{
                  animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'scaleIn 1s forwards' : ''
                }}
              />
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light opacity-0 leading-relaxed"
              style={{
                animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'fadeIn 1s forwards 0.5s' : ''
              }}
            >
              50 yılı aşkın tecrübemizle inşaat sektöründe öncü ve güvenilir çözümler sunuyoruz
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <Link
                href="/iletisim"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg opacity-0"
                style={{
                  animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'fadeInUp 1s forwards 0.8s' : ''
                }}
              >
                Teklif Alın
              </Link>
              <Link
                href="/projelerimiz"
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition-colors duration-300 opacity-0"
                style={{
                  animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'fadeInUp 1s forwards 1s' : ''
                }}
              >
                Projelerimiz
              </Link>
            </div>

            <div
              className="mt-12 cursor-pointer opacity-0"
              onClick={scrollToSection}
              style={{
                animation: animatedText2 === "Geleceğe Sağlam Adım" ? 'fadeInUp 1s forwards 1.2s' : ''
              }}
            >
              <svg className="w-8 h-8 text-blue-500 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className={`w-2 h-2 rounded-full transition-all ${index === currentBg ? 'bg-white w-4' : 'bg-white/50'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Tanıtım Videosu Section */}
        <section
          ref={el => sectionRefs.current[0] = el}
          className="relative py-20 bg-gray-900 opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">TANITIM</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Güleç İnşaat Tanıtım Videosu</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
            </div>

            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/video-poster.jpg" // Video ön izleme resmi
              >
                <source src="/tanitim.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        </section>

        {/* Hizmetlerimiz Section */}
        <section
          ref={el => sectionRefs.current[1] = el}
          className="py-16 bg-white opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-800">Hizmetlerimiz</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">50 yıllık uzmanlıkla sunduğumuz profesyonel çözümler</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden p-6 rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                        <p className="mt-2 text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Bizi Seçmelisiniz Section */}
        <section
          ref={el => sectionRefs.current[2] = el}
          className="py-16 bg-gray-50 opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-800">Neden Biz?</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Tecrübemiz ve kalite anlayışımızla fark yaratıyoruz</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarihçe Section */}
        <section
          ref={el => sectionRefs.current[3] = el}
          className="py-20 relative bg-gray-900 opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/fabrika/1.jpg"
              alt="Arkaplan"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">TARİHÇEMİZ</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Yolculuğumuz</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500 z-0"></div>

              <div className="space-y-8 relative z-10 pl-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                  >
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 shadow-md relative z-10 -ml-6 mt-1.5"></div>
                    <div className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-200 shadow-lg w-full">
                      <p className="text-blue-400 text-sm font-medium mb-1">{item.year}</p>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={el => sectionRefs.current[4] = el}
          className="py-20 bg-gray-50 translate-y-10 transition-all duration-500 relative"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-2xl font-semibold text-gray-800 tracking-widest uppercase">REFERANSLARIMIZ</span>
              <h2 className="mt-4 text-md md:text-md font-light text-gray-500">Gerçekleştirdiğimiz Projeler</h2>
              <div className="mt-6 h-px w-24 bg-gray-300 mx-auto"></div>
            </div>

            {/* Grid Yapısı */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ulucak / İZMİR",
                  link: "/projelerimiz/ulucak",
                },
                {
                  title: "NAZİLLİ / AYDIN",
                  link: "/projelerimiz/nazilli",
                },
                {
                  title: "KARABURUN / İZMİR",
                  link: "/projelerimiz/karaburun",
                }
              ].map((project, index) => (
                <div key={index} className="group">
                  <Link href={project.link} className="block h-full">
                    <div className="bg-white p-6 h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md rounded-lg">
                      <div className="mb-4 flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
                      </div>
                      <div className="text-blue-600 text-sm font-medium flex items-center mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                        Proje detayları
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/projelerimiz"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Tüm Detaylar
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section
          ref={(el) => sectionRefs.current[5] = el}
          className="py-20 bg-blue-950 opacity-0 translate-y-10 transition-all duration-500 stats-section"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition duration-300 count-up-trigger opacity-0"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {startCountUp && <CountUp end={stat.value} duration={3} suffix={stat.suffix} />}
                  </div>
                  <p className="text-white/90 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          ref={el => sectionRefs.current[6] = el}
          className="w-full py-16 bg-gray-900 opacity-0 translate-y-10 transition-all duration-500"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Logo ve Slogan */}
              <div className="flex flex-col">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/nrt14.png"
                    alt="NRT Grup Logo"
                    width={200}
                    height={70}
                    className="object-contain"
                  />
                </Link>
                <p className="text-gray-400 text-sm italic">
                  "Geçmişten aldığımız güçle, geleceği inşa ediyoruz"
                </p>
              </div>

              {/* Hızlı Bağlantılar (Navbar Öğeleri) */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-6">Hızlı Bağlantılar</h3>
                <nav className="space-y-3">
                  {[
                    { href: "/", label: "Ana Sayfa" },
                    { href: "/hakkinda", label: "Hakkımızda" },
                    { href: "/kurumsal", label: "Üretim Tesisimiz" },
                    { href: "/projelerimiz", label: "Projelerimiz" },
                    { href: "/iletisim", label: "İletişim" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* İletişim Bilgileri */}
              <div className="flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-6">İletişim</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <a href="mailto:nurettintutak@hotmail.com" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                        nurettintutak@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <a href="tel:+905467689992" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                        Nurettin Tutak: +90 (546) 768 99 92
                      </a>
                    </div>

                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <a href="tel:+905467689992" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                        Ümit Güleç: +90 (534) 285 83 56
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Alt Kısım - Telif Hakkı */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm text-center md:text-left">
                  © {new Date().getFullYear()} NRT Güleç Grup A.Ş. Tüm hakları saklıdır.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Gizlilik Politikası</a>
                  <a href="/cookies" className="text-gray-500 hover:text-white transition-colors text-sm">Çerezler</a>
                  <a href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Şartlar</a>
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
  {
    title: "50+ Yıllık Deneyim",
    description: "Yarım asrı aşan sektör tecrübemizle en zorlu projeleri bile başarıyla tamamlıyoruz."
  },
  {
    title: "Uzman Ekip",
    description: "Alanında uzman, deneyimli ve dinamik ekibimizle hizmet veriyoruz."
  },
  {
    title: "Kalite Garantisi",
    description: "Tüm projelerimizde en üst kalite standartlarını titizlikle uyguluyoruz."
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Müşteri odaklı yaklaşımımızla tam memnuniyet sağlıyoruz."
  },
  {
    title: "Zamanında Teslimat",
    description: "Projelerimizi belirlenen sürelerde eksiksiz olarak teslim ediyoruz."
  },
  {
    title: "Teknolojik Altyapı",
    description: "Son teknoloji ekipman ve yazılımlarla en verimli çözümleri sunuyoruz."
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
    title: "Yeni Ortaklık Projesi",
    description: "Güleç İnşaat ile güçler birleştirilmiş, yeni projelerin ilk adımlarına başlanmıştır."
  }
];
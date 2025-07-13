"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Mesajınız başarıyla gönderildi!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setSubmitStatus({ type: "error", message: errorData.message || "Bir hata oluştu" });
      }
    } catch (error) {
      console.error("İstek gönderme hatası:", error);
      setSubmitStatus({ type: "error", message: "Bağlantı hatası, lütfen tekrar deneyin." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 flex flex-col relative">
      {/* Arkaplan */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background4.jpg"
          alt="background"
          fill
          className="object-cover blur-[6px]"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <Navbar />

      <main className="flex-grow py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 tracking-widest">İLETİŞİM</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              <span className="bg-clip-text text-transparent bg-white">Bizimle İletişime Geçin</span>
            </h1>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
            <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
              Profesyonel ekibimiz, sorularınızı yanıtlamak ve projeleriniz için en iyi çözümleri sunmak için hazır.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">İletişim Bilgileri</h3>
                
                <div className="space-y-6">

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">E-posta</h4>
                      <a href="mailto:nurettintutak@hotmail.com" className="text-blue-600 hover:text-blue-800 transition-colors mt-1 block">
                        nurettintutak@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Telefon</h4>
                      <a href="tel:+905467689992" className="text-blue-600 hover:text-blue-800 transition-colors mt-1 block">
                        +90 (546) 768 99 92
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mesaj Gönderin</h3>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-posta*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesajınız*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
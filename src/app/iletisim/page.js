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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorMessage = await response.text();
        alert(`Hata: ${errorMessage}`);
      }
    } catch (error) {
      console.error("İstek gönderme hatası:", error);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col relative">
      <Navbar />

      <div className="absolute inset-0 z-0">
        <Image
          src="/background4.jpg"
          alt="background"
          fill
          className="object-cover blur-[4px]"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="flex-grow py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl font-bold text-blue-300 mb-4">BİZE ULAŞIN</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border-l-8 border-orange-400 shadow-lg hover:shadow-yellow-200 transition duration-300 opacity-80">
                <h3 className="text-xl font-semibold text-blue-500 mb-4">İletişim Bilgileri</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-500">Email</p>
                      <a href="mailto:nurettintutak@hotmail.com" className="text-gray-800 hover:text-blue-500 transition">nurettintutak@hotmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-500">Telefon</p>
                      <a href="tel:+905467689992" className="text-gray-800 hover:text-blue-500 transition">+90 (546) 768 99 92</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="bg-white p-6 rounded-2xl border-l-8 border-orange-400 shadow-lg hover:shadow-yellow-200 transition duration-300 opacity-80">
              <h3 className="text-xl font-semibold text-blue-500 mb-6">Mesaj Gönderin</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-2">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-600 mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-600 mb-2">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md shadow-blue-200"
                >
                  GÖNDER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

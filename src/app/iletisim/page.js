"use client";

import Link from "next/link";
import Navbar from "../components/Navbar"; // Navbar bileşenini import edin

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar Bileşeni */}
      <Navbar />

      {/* İçerik - Sayfanın ortasına hizalanmış */}
      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">İletişim</h2>
          <p className="text-gray-300 mb-6">Bana Ulaşın:</p>
          <ul className="text-gray-400 space-y-2">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:ardaaskindm@gmail.com"
                className="hover:text-purple-400"
              >
                ardaaskindm@gmail.com
              </a>
            </li>
            <li>
              📞 Telefon:{" "}
              <a href="tel:+905532980081" className="hover:text-purple-400">
                +90 553 298 00 81
              </a>
            </li>
          </ul>

          {/* Sosyal Medya İkonları */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.instagram.com/ardaaskin_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all duration-300"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/arda-aşkın-7230261a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useEffect, useRef, useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import metadata from "./app-metadata";  // Default import
import Head from 'next/head';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;

    const handleFirstInteraction = () => {
      if (!isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error("Müzik çalınamadı:", e));
        document.removeEventListener("click", handleFirstInteraction);
      }
    };

    document.addEventListener("click", handleFirstInteraction);

    return () => {
      audioRef.current.pause();
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, [isPlaying]);

  return (
    <html lang="tr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
      </Head>
      <body>
        {children}

        {/* Müzik Kontrol Butonu */}
        <button
          onClick={() => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
          }}
          className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </body>
    </html>
  );
}
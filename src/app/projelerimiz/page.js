"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projeler() {
  const router = useRouter();

  useEffect(() => {
    router.push("/projelerimiz/proje1"); // İlk projeye yönlendir
  }, []);

  return (
    <div className="bg-green-500 w-full h-screen">
      {/* Tamamen boş yeşil ekran */}
    </div>
  );
}
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projeler() {
  const router = useRouter();

  useEffect(() => {
    router.push("/projelerimiz/vizyonyoneticilik"); // İlk projeye yönlendir
  }, []);

  return <div>Yönlendiriliyor...</div>;
}
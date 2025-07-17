"use client";
import Image from "next/image";
import HakkindaLayout from "../hakkindaLayout/layout";

export default function Genel() {
  return (
    <HakkindaLayout>
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-white mb-12 border-b-4 border-blue-400 inline-block pb-2">
          Yönetim Kurulu
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Yönetim Kartları */}
          {[
            {
              name: "Hasan Tutak",
              title: "Tutakoğulları Sanayi ve Ticaret Ltd. Şti. Kurucusu",
              image: "/hasan4.png",
              borderColor: "border-blue-400",
            },
            {
              name: "Ümit Güleç",
              title: "Güleç İnşaat A.Ş. Yönetim Kurulu Başkanı",
              image: "/ümit2.png",
              borderColor: "border-blue-400",
            },
            {
              name: "Nurettin Tutak",
              title: "NRT Grup İnşaat A.Ş. Yönetim Kurulu Başkanı",
              image: "/nurettin.png",
              borderColor: "border-blue-300",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center bg-gray-900/80 border border-gray-700 rounded-xl p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]"
            >
              <div
                className={`relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 ${member.borderColor} shadow-md`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-400 font-medium text-sm text-center px-2">{member.title}</p>
              <div className="mt-4 h-px w-2/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </HakkindaLayout>
  );
}

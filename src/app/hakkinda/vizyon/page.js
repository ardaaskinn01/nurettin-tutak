import HakkindaLayout from "../hakkindaLayout/layout";

export default function Genel() {
  return (
    <HakkindaLayout>
    <div className="max-w-7xl mt-8 mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 border-b-4 border-blue-400 inline-block pb-2">
        Vizyonumuz
      </h1>
      
      {/* Şu anki içeriğin ilgili kısmı */}
      <div className="space-y-6 text-base leading-8 text-white mt-4 md:mt-6 lg:mt-8">
            <p className="text-base text-white leading-7">
                NRT Grup A.Ş. olarak geçmişten aldığımız güçle geleceğe emin adımlarla ilerliyoruz. 2025 yılı hedeflerimiz arasında, Kütahya Gediz Organize Sanayi Bölgesi'nde kurulacak olan yeni üretim tesisimizle üretim alanımızı 50.000 m²'ye çıkarmak ve bisiklet/otomobil parçaları üretiminde yurt dışı yatırımlarla büyümek yer almaktadır.
              </p>
          </div>
    </div>
    </HakkindaLayout>
  );
}
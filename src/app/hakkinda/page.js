"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Hakkinda() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 flex flex-col font-sans overflow-hidden">
      {/* Arka Plan Görseli (Sadece bu blur olacak) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background3.jpg"
          alt="background"
          fill
          className="object-cover blur-[4px]"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* İçerik (Blur olmayan kısım) */}
      <div className="relative z-20 flex-grow pt-32 px-6 md:px-20 lg:px-36 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Başlık */}
          <h1 className="text-4xl font-bold text-white mb-4 md:mb-8 lg:mb-12 border-b-4 border-blue-400 inline-block pb-2">
            Hakkında
          </h1>

          {/* Metin İçeriği */}
          <div className="space-y-6 text-base leading-8 text-white mt-4 md:mt-6 lg:mt-8">
            <p>
              Kuruluşumuzun temelleri, 1977 yılında kurucumuz Hasan Tutak tarafından kurulan teknik demir doğrama atölyesiyle atılmıştır. Ustalığı, çalışkanlığı ve vizyonuyla kısa sürede kendini geliştiren Hasan Tutak, zamanla PVC sektörüne yönelerek bölgesinde öncü bir isim haline gelmiş, Fıratpen iş ortaklığı ile üretim kapasitesini artırmış ve kendi PVC fabrikasını kurarak sektörde önemli bir dönüşüm gerçekleştirmiştir.
            </p>
            <p>
              1992 yılında şirketimiz, kurumsal kimliğini güçlendirmek ve büyüme stratejisini netleştirmek amacıyla Tutakoğulları Sanayi ve Ticaret Ltd. Şti. adıyla yeniden yapılandırılmış; Hasan Tutak ve Pakize Tutak ortaklığında sanayi ve ticaret alanlarında sağlam bir zemin oluşturulmuştur. Bu yapı içerisinde PVC ve cam üretimi başta olmak üzere birçok farklı sektörde hizmet verilmiştir.
            </p>
            <p>
              2000 yılı itibarıyla, ikinci kuşak temsilcimiz Nurettin Tutak liderliğinde önemli bir vizyon değişimi yaşanmış; şirket yalnızca PVC ve cam üretimiyle sınırlı kalmayıp inşaat, müteahhitlik, taşımacılık, otomotiv alım satımı, araç kiralama ve devlet ihaleleri gibi farklı alanlara da açılmıştır. Türkiye'nin 81 iline yayılan hizmet ağıyla büyük ölçekli projelere ve güçlü iş ortaklıklarına imza atılmıştır.
            </p>
            <p>
              Bu süreçte kurulan NRT Grup İnşaat A.Ş., tek ortaklı bir yapı olarak Nurettin Tutak öncülüğünde; kentsel dönüşüm projeleri, konut ve villa inşaatları üzerine uzmanlaşmıştır. Şu anda Aydın Nazilli'de hayata geçirilen 90 villalık proje, modern mimari anlayışı ve yüksek yapı kalitesi ile bölgeye değer katmaktadır. Aynı zamanda Kuşadası, Çeşme, Urla ve Çiğli gibi bölgelerde taşeronluk inşaat faaliyetleriyle aktif olarak yer almaktadır.
            </p>
            <p>
              Genişleyen faaliyet alanlarımız doğrultusunda şirketimiz, taşımacılık ve araç kiralama hizmetlerini de başarıyla sürdürmektedir. Almanya, Kıbrıs, Bodrum ve İzmir merkezli organizasyonumuzla, makam araçları da dahil olmak üzere toplam 950 araçlık filomuz, bireysel ve kurumsal müşterilere güvenli ve konforlu çözümler sunmaktadır.
            </p>
            <p>
              Ayrıca, mimarlık, teknik çizim, harita mühendisliği ve proje geliştirme alanlarında da faaliyet göstererek sadece uygulamada değil, tasarım aşamasında da yüksek standartlarda hizmet veriyoruz.
            </p>
          </div>

          {/* Kartlar */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Misyon */}
            <div className="bg-gray-800/80 p-8 rounded-3xl shadow-lg border-t-4 border-blue-500 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz ve Değerlerimiz</h2>
              <p className="text-base text-white leading-7">
                55 yılı aşkın süredir babadan oğula aktarılan bu meslek yalnızca bir iş değil; güvenin, emeğin ve aile değerlerinin ortak adıdır. Tutakoğulları ve NRT Grup İnşaat olarak biz, kaliteye, güvene ve müşteri memnuniyetine dayalı bir anlayışla çalışıyor; bulunduğumuz her sektörde örnek gösterilen projelere imza atmaya devam ediyoruz.
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-gray-800/80 p-8 rounded-3xl shadow-lg border-t-4 border-blue-500 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Geleceğe Yönelik Vizyonumuz</h2>
              <p className="text-base text-white leading-7">
                NRT Grup A.Ş. olarak geçmişten aldığımız güçle geleceğe emin adımlarla ilerliyoruz. 2025 yılı hedeflerimiz arasında, Kütahya Gediz Organize Sanayi Bölgesi'nde kurulacak olan yeni üretim tesisimizle üretim alanımızı 50.000 m²'ye çıkarmak ve bisiklet/otomobil parçaları üretiminde yurt dışı yatırımlarla büyümek yer almaktadır.
              </p>
            </div>
          </div>

          {/* Yönetim Kurulu */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Yönetim Kurulu</h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
            </div>

            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-12">
              {/* Hasan Tutak */}
              <div className="group w-full flex flex-col items-center text-center">
                <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-gold-500 shadow-lg">
                  <Image
                    src="/hasan4.png"
                    alt="Hasan Tutak"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
                <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 w-full backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-1">Hasan Tutak</h3>
                  <p className="text-blue-400 font-medium">Tutakoğulları Sanayi ve Ticaret Ltd. Şti. Kurucusu</p>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                  <p className="text-gray-300 mt-4 text-sm">
                    1977'den bu yana sektörde öncü isim, temelleri atan vizyoner lider
                  </p>
                </div>
              </div>

              {/* Ümit Güleç */}
              <div className="group w-full flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                  <Image
                    src="/ümit2.png"
                    alt="Ümit Güleç"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
                <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 w-full backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-1">Ümit Güleç</h3>
                  <p className="text-blue-400 font-medium">Güleç İnşaat A.Ş. Yönetim Kurulu Başkanı</p>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                  <p className="text-gray-300 mt-4 text-sm">
                    Modern yönetim anlayışıyla şirketimizi geleceğe taşıyan lider
                  </p>
                </div>
              </div>

              {/* Nurettin Tutak */}
              <div className="group w-full flex flex-col items-center text-center">
                <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg">
                  <Image
                    src="/nurettin.png"
                    alt="Nurettin Tutak"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
                <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 w-full backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-1">Nurettin Tutak</h3>
                  <p className="text-blue-400 font-medium">NRT İnşaat A.Ş. Yönetim Kurulu Başkanı</p>
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                  <p className="text-gray-300 mt-4 text-sm">
                    Yenilikçi projelerle şirketimizi büyüten ikinci kuşak temsilcisi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div className="mt-24 text-center">
            <div className="inline-block px-8 py-8 bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-gray-800 rounded-2xl backdrop-blur-sm shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white italic">
                "Geçmişten aldığımız güçle, geleceği inşa ediyoruz"
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import HakkindaLayout from "../hakkindaLayout/layout";

export default function Genel() {
  return (
    <HakkindaLayout>
    <div className="max-w-7xl mt-8 mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 border-b-4 border-blue-400 inline-block pb-2">
        Misyonumuz ve Değerlerimiz
      </h1>
      
      {/* Şu anki içeriğin ilgili kısmı */}
      <div className="space-y-6 text-base leading-8 text-white mt-4 md:mt-6 lg:mt-8">
            <p className="text-base text-white leading-7">
                55 yılı aşkın süredir babadan oğula aktarılan bu meslek yalnızca bir iş değil; güvenin, emeğin ve aile değerlerinin ortak adıdır. Tutakoğulları ve NRT Grup İnşaat olarak biz, kaliteye, güvene ve müşteri memnuniyetine dayalı bir anlayışla çalışıyor; bulunduğumuz her sektörde örnek gösterilen projelere imza atmaya devam ediyoruz.
              </p>
          </div>
    </div>
    </HakkindaLayout>
  );
}
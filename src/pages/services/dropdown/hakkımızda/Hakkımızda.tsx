import "../../../../App.css";
import grop from "../../../references/img-referances/grop.png";
import i1 from "../../img-services/i1-hakk.png";
import i2 from "../../img-services/i2-hakk.png";
import kl from "../../img-services/hakk-k.png";

const Hakkımızda = () => {
  return (
    <div>
      <section className="bg-hakk h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <div className="h-full flex items-center mt-[10px]">
            <div className="max-w-[650px] ">
              <div className="text-[#FFF] flex gap-6 items-center">
                <p>Anasayfa</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5.25 10.5L8.75 7L5.25 3.5"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Haberler</p>
              </div>
              <h1 className="text-[50px] font-bold  not-italic  text-[#FFF] leading-[60px]  mt-[20px]">
                Haberler
              </h1>
              <p className="text-[#FFF] mt-[30px]">
                Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                mühendisliğinde yeni ufuklar açıyoruz.
                Yenilikçiyaklaşımlarımızla sorunlara çözüm üretiyor, geleceği
                aydınlatıyoruz.
              </p>
            </div>
          </div>
          <div className="flex justify-center  relative top-[-28px]">
            <img width={55} src={grop} alt="" />
          </div>
        </div>
      </section>
      <main className="container lg:pt-[71px] mx-auto">
        <p className="lg:text-[23px] text-[18px] lg:leading-[48px] text-black/70 px-[20px]">
          Emat Mühendislik olarak, enerjinin güvenli ve etkili bir şekilde
          iletilmesi için tasarladığımız{" "}
          <span className="text-[#FF8A00] font-[600]">
            "Transformatör Merkezi"
          </span>{" "}
          hizmetimizle sektörde öne çıkıyoruz. Elektrik enerjisinin dağıtımında
          kritik bir rol oynayan transformatör merkezleri, güvenilirlik,
          verimlilik ve sürdürülebilirlik açısından büyük bir öneme sahiptir.
        </p>
        <p className="lg:text-[23px] text-[18px] lg:leading-[48px] text-black/70 px-[20px] mt-[40px] lg:mt-[90px]">
          Emat Mühendislik olarak, havalandırma (HVAC) sistemleri alanındaki
          uzmanlığımızı ve teknolojiye dayalı yaklaşımımızı bir araya getirerek,
          mekanlarınızı daha yaşanabilir, verimli ve sağlıklı hale getiriyoruz.
          <span className="text-[#FF8A00] font-[600]">
            <span className="text-[#FF8A00] font-[600]">
              "Transformatör Merkezi"
            </span>{" "}
          </span>{" "}
          tasarrufunu bir araya getiren çözümlerimizle, iç mekanlarınızın
          kalitesini artırıyoruz.
        </p>
        {/* box */}
        <div className="lg:mt-[120px] mt-[70px] flex flex-col gap-[120px] px-[20px] lg:px-0">
          {/* top */}
          <div className="grid lg:grid-cols-2 gap-[30px] lg:gap-0">
            {/* l */}
            <div className="hakk-bg-d1 p-[50px] flex flex-col justify-center mr-[60px]">
              <p className="text-[#FF8A00] text-[12px] tracking-tight-[6px]">
                EMAT MÜHENDİSLİK
              </p>
              <p className="lg:mt-[50px] lg:text-[50px] text-[30px] mt-[20px] text-black/80">
                Teknik Uzmanlık ve Tasarım
              </p>
              <p className="lg:mt-[71px] mt-[30px] text-black/60 lg:text-[23px] text-[18px] lg:leading-[46px]">
                Transformatör merkezlerini tasarlarken, teknik uzmanlığımız ve
                sektördeki deneyimimizle en iyi çözümleri sunmayı hedefliyoruz.
                <br />
                <br />
                Her projenin ihtiyaçları farklı olduğundan, özelleştirilmiş
                tasarımlarla müşterilerimize en uygun çözümleri sunuyoruz
              </p>
            </div>
            {/* r */}
            <div className="relative flex items-center">
              <img src={i1} className="w-full h-full" alt="" />
              <img src={kl} className="absolute left-0" alt="" />
            </div>
          </div>
          {/* bottom */}
          <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-[30px] lg:gap-0">
            {/* l */}
            <div className="relative flex items-center">
              <img src={i2} className="w-full h-full" alt="" />
              <img src={kl} className="absolute right-0" alt="" />
            </div>
            {/* r */}
            <div className="hakk-bg-d1-b p-[50px] flex flex-col text-end justify-center ml-[60px]">
              <p className="text-[#FF8A00] text-[12px] tracking-tight-[6px]">
                EMAT MÜHENDİSLİK
              </p>
              <p className="lg:mt-[50px] lg:text-[50px] text-[30px] mt-[20px] text-black/80">
                Teknik Uzmanlık ve Tasarım
              </p>
              <p className="lg:mt-[71px] mt-[30px] text-black/60 lg:text-[23px] text-[18px] lg:leading-[46px]">
                Transformatör merkezlerini tasarlarken, teknik uzmanlığımız ve
                sektördeki deneyimimizle en iyi çözümleri sunmayı hedefliyoruz.
                <br />
                <br />
                Her projenin ihtiyaçları farklı olduğundan, özelleştirilmiş
                tasarımlarla müşterilerimize en uygun çözümleri sunuyoruz
              </p>
            </div>
          </div>
        </div>
        {/* box-2 */}
        <div className="bg-hakk-2 min-h-[720px] mt-[120px] p-[50px] lg:p-[100px] mx-[20px] lg:mx-0 flex flex-col lg:flex-row gap-[20px] justify-between">
          <div className="flex flex-col justify-evenly text-[23px] font-[700] h-full">
            <p className="pl-[50px] text-white/70 hover:text-white hover:border-l-[2px] hover:border-l-orange-500 h-full flex items-center border-l-[2px]">
              Verimlilik ve Enerji Tasarrufu
            </p>
            <p className="pl-[50px] text-white/70 hover:text-white hover:border-l-[2px] hover:border-l-orange-500 h-full flex items-center border-l-[2px]">
              Özelleştirilmiş Çözümler
            </p>
            <p className="pl-[50px] text-white/70 hover:text-white hover:border-l-[2px] hover:border-l-orange-500 h-full flex items-center border-l-[2px]">
              Konfor ve Sağlık
            </p>
            <p className="pl-[50px] text-white/70 hover:text-white hover:border-l-[2px] hover:border-l-orange-500 h-full flex items-center border-l-[2px]">
              Teknoloji ve İnovasyon
            </p>
          </div>
          <div className="max-w-[690px] flex flex-col">
            <div className="h-full flex items-center text-center">
              <p className="text-white/60 max-w-[500px] mx-auto italic text-[20px] font-[500] leading-[42px]">
                “Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                mühendisliğinde{" "}
                <span className="text-[#FF8A00] font-[700]">yeni ufuklar</span>{" "}
                açıyoruz. “
              </p>
            </div>
            <p className="bg-[#FF8A00] px-[70px] py-[43px] text-center text-white text-[17px] leading-[30px] font-[500]">
              HVAC sistemleri, enerji tüketiminin büyük bir kısmını oluşturduğu
              için günümüzde verimlilik ve taşımaktadır. Emat Mühendislik
              olarak, en son teknolojilere dayalı HVAC tasarrufu sunuyoruz.
            </p>
          </div>
        </div>
        <p className="text-[#FF8A00] text-center text-[12px] mt-[60px] lg:mt-[120px]">
          HAVALANDIRMA SİSTEMLERİ
        </p>
        <p className="text-[#FF8A00] text-center text-[50px] mt-[25px] lg:mt-[50px]">
          Sıkça Sorulan Sorularİ
        </p>
        {/* box-3 */}

        <div className="flex flex-col gap-[25px] lg:gap-[50px] mt-[50px] mx-[20px] lg:mt-[83px] max-w-[1060px] lg:mx-auto">
          <div className="bg-gray-100 px-[48px] py-[33px] text-[#1C0B24A6]/60 text-[20px] font-[500] flex justify-between items-center">
            Havalandırma sistemleri neden önemlidir?{" "}
            <span className="font-[700] text-[34px] cursor-pointer">+</span>
          </div>
          <div className="bg-hakk-box3 px-[48px] py-[33px] text-white flex flex-col gap-[72px] relative">
            <p className="text-[20px] font-[500]">
              Havalandırma sistemleri ne kadar enerji tüketir?
            </p>
            <p className="text-[17px] text-white/70 font-[500]">
              Havalandırma sistemlerinin enerji tüketimi, tasarım, verimlilik ve
              mekanın büyüklüğüne göre değişebilir. Ancak, günümüzde gelişmiş
              teknolojiler ve enerji tasarruflu tasarımlar sayesinde HVAC
              sistemlerinin enerji tüketimi düşük tutulabilir.
            </p>
            <span className="bg-[#FF8A00] text-white text-[34px] text-center px-[15px] flex items-center justify-center cursor-pointer absolute top-[40px] right-[40px] rounded-[0px_0px_50px_50px]">
              -
            </span>
          </div>
          <div className="bg-gray-100 px-[48px] py-[33px] text-[#1C0B24A6]/60 text-[20px] font-[500] flex justify-between items-center">
            Hangi sektörlerde havalandırma sistemleri kullanılır?{" "}
            <span className="font-[700] text-[34px] cursor-pointer">+</span>
          </div>
          <div className="bg-gray-100 px-[48px] py-[33px] text-[#1C0B24A6]/60 text-[20px] font-[500] flex justify-between items-center">
            Havalandırma sistemi nasıl özelleştirilir?{" "}
            <span className="font-[700] text-[34px] cursor-pointer">+</span>
          </div>
          <div className="bg-gray-100 px-[48px] py-[33px] text-[#1C0B24A6]/60 text-[20px] font-[500] flex justify-between items-center">
            Havalandırma sistemi bakımı nasıl yapılır?{" "}
            <span className="font-[700] text-[34px] cursor-pointer">+</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hakkımızda;

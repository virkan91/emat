import React from "react";
import { useTranslation } from "react-i18next";
// import img
import draw from "../about/img-about/draw.png";
import vector from "../about/img-about/vector.svg";
import three from "../about/img-about/300.png";
import two from "../about/img-about/120.png";
import five from "../about/img-about/50.png";
import erow from "../about/img-about/erows.png";
import green from "../about/img-about/green.png";
import offiss from "../about/img-about/offiss.png";
import zavod from "../about/img-about/zavod.png";

const About = () => {
    const { t, i18n } = useTranslation();

  
  return (
    <div>
      <section className="bg_header h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <header className="flex items-center justify-between"></header>
          <div className="h-full flex items-center mt-[10px]">
            <div className="max-w-[480px] ">
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]">
                {t("Haktext.h1")}
                {/* Yenilikle Geleceği İnşa Ediyoruz */}
              </h1>
              <p className="text-[#FFF] mt-[30px]">{t("Haktext.p")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-2 */}
      <section className="section_2">
        <div className="container max-w-[1250px] m-auto p-[20px]">
          <div className="grid md:grid-cols-2 md:gap-20 grid-cols-1 gap-0">
            <div>
              <img src={draw} alt="" />
            </div>
            <div className=" flex flex-col gap-[20px] max-w-[480px]  ">
              <h4 className="text-[#FF8A00] text-[12px] font-semibold">
                EMAT MÜHENDİSLİK
              </h4>
              <h2>Çözüm Odaklı İnşaat Teknolojileri</h2>
              <p className="leading-[35px]">
                Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                mühendisliğinde yeni ufuklar açıyoruz. Yenilikçi
                yaklaşımlarımızla sorunlara çözüm üretiyor, geleceği
                aydınlatıyoruz.
              </p>
              <div className="flex gap-12">
                <p className="leading-[35px]">
                  Teknolojinin hızla evrildiği bu dönemde, akıllı çözümlerimiz
                  ve ileri teknolojiyle birlikte geleceği inşa ediyoruz.
                </p>
                <div className="bg-[#FF8A00] inline-flex px-[20px] p-[5px] gap-14 justify-center items-center h-[50px]	">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around flex-wrap mt-[60px] md:mt-auto relative md:top-[-120px] top-0">
            <div className="flex flex-col gap-7 w-[200px]">
              <p>Personel</p>
              <img src={two} alt="" className="w-[150px]" />
            </div>
            <div className="flex flex-col gap-7 w-[200px]">
              <p>Tamamlanan Proje</p>
              <img src={three} alt="" className="w-[150px]" />
            </div>
            <div className="flex flex-col gap-7 w-[150px] mt-[60px] md:mt-auto">
              <p>Devam Eden Proje</p>
              <img src={five} alt="" className="w-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className="h-screen p-[12px] mt-[80px] md:mt-auto">
        <div className=" relative h-[900px] flex justify-center px-[20px]">
          <div className="section_3 h-screen container md:w-full  mx-auto absolute z-[3] p-[20px]">
            <div className=" max-w-[1000px] m-auto py-[130px]">
              <p className="text-[#FF8A00] text-[10px] font-bold tracking-[4px]">
                PROJELER
              </p>
              <div className="leading-[70px]">
                <h1 className="text-[#FFF] text-[48px] font-bold leading-[50px]">
                  Armsan <br />
                  Silah Fabrikası
                </h1>
              </div>
            </div>

            <div className="sm:flex flex-col md:flex md:flex-row justify-between   max-w-[1000px] m-auto items-center">
              <div className="text-[#FFF]">
                <p>
                  İşveren: <b>Almis İnşaat</b>
                </p>
                <p>
                  İnşaat Alanı: <b>11.000 m2</b>
                </p>
                <p>
                  Dönem: <b>2022</b>
                </p>
                <p>
                  Hizmetler: <b>Elektrik-Mekanik</b>
                </p>
                <p>
                  {" "}
                  Konum : <b>İstanbul</b>
                </p>
              </div>
              <div className="bg-[#FF8A00] inline-flex px-[25px]  gap-14 justify-center items-center h-[65px] mt-[15px]	md:mt-auto">
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
          <div className="section_3_2 h-screen container max-w-[1200px] mx-auto absolute z-[2] top-[-20px]">
            <div className="leading-[70px]">
              <h1 className="text-[#FFF] text-[60px] font-bold">
                Armsan <br />
                Silah Fabrikası
              </h1>
            </div>
          </div>
          <div className="section_3_3 h-screen container max-w-[1100px] mx-auto absolute  z-[1] top-[-35px]">
            <div className="leading-[70px]">
              <h1 className="text-[#FFF] text-[60px] font-bold">
                Armsan <br />
                Silah Fabrikası
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-4 */}
      <section className="section_4 p-[20px]  md:mt-[50px] mt-[100px]">
        <div className="container max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div className="text-center md:text-start">
              <p className="text-[#FF8A00] text-[10px] tracking-[4px] font-bold">
                EMAT MÜHENDİSLİK
              </p>
              <h2>Hizmetlerimiz</h2>
            </div>
            <div className="">
              <img src={erow} alt="" className="w-[65%] m-auto" />
            </div>
          </div>
          <div className="swich grid md:grid-cols-4 gap-4 mt-[40px] grid-col-1">
            <div className="swich_1  p-[30px]">
              <h2 className="text-[#FFF] text-[20px] mt-[120px]">
                Orta Gerilim Hizmetleri
              </h2>
              <ul className="text-[#FFF] text-[14px] mt-[30px] flex flex-col gap-4">
                <li>Transformatör Merkezi</li>
                <li>Yüksek Gerilim Hücreleri</li>
                <li>Yeraltı Kablo Tesisi</li>
                <li>Yol Aydınlatma</li>
                <li>Enerji Müsaade Belgesi</li>
                <li>Elektrik İdaresi Kabul İşlemleri</li>
              </ul>
            </div>
            <div className="swich_2 md:h-full flex items-end text-center pb-[20px] h-screen">
              <h5 className="text-[#FFF] w-full ml-auto">
                Alçak Gerilim Hizmetleri
              </h5>
            </div>
            <div className="swich_3 md:h-full flex items-end text-center pb-[20px] h-screen">
              <h5 className="text-[#FFF] w-full ml-auto">
                Zayıf Akım Sistemleri
              </h5>
            </div>
            <div className="swich_4 md:h-full flex items-end text-center pb-[20px] h-screen">
              <h5 className="text-[#FFF] w-full ml-auto">Mekanik</h5>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-5 */}
      <section className="section_5 p-[20px] mt-[50px]">
        <div className="container max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <div className="flex gap-8 items-center flex-col md:flex-row justify-center md:justify-start">
              <div>
                <img src={erow} alt="" className="w-[65%]" />
              </div>
              <div>
                <h2>Bizden Haberler</h2>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p>Tüm Haberler</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M1 14L14 1M14 1H1M14 1V14"
                  stroke="#FF8A00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-[90px] grid-cols-1 justify-center mt-[50px] mb-[60px]">
            <div className="hover:border-[#FF8A00]  border-[1px] p-[14px] ">
              <div className="relative md:right-[35px] right-0">
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col gap-6 mt-[30px]">
                <p className="text-[#FF8A00]">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="hover:border-[#FF8A00]  border-[1px] p-[14px] ">
              <div className="relative md:right-[35px] right-0">
                <img src={offiss} alt="" />
              </div>
              <div className="flex flex-col gap-6 mt-[30px]">
                <p className="text-[#FF8A00]">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="hover:border-[#FF8A00]  border-[1px] p-[14px] ">
              <div className="relative md:right-[35px] right-0">
                <img src={zavod} alt="" />
              </div>
              <div className="flex flex-col gap-6 mt-[30px]">
                <p className="text-[#FF8A00]">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

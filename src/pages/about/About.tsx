import React from "react";
import { Link } from "react-router-dom";
// import img
import draw from "../about/img-about/draw.png";
import vector from "../about/img-about/vector.svg";
import three from "../about/img-about/300.png";
import two from "../about/img-about/120.png";
import five from "../about/img-about/50.png";

const About = () => {
  return (
    <div>
      <section className="bg_header h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <header className="flex items-center justify-between">
            {/* logo */}
            {/* <div>
              <img src={logo} alt="" />
            </div> */}
            {/* <nav>
              <ul className="flex justify-center gap-[70px] text-[#FFF]">
                <Link to="about">
                  <li>Hakkımızda</li>
                </Link>
                <Link to="services">
                  <li>Hizmetlerimiz</li>
                </Link>
                <Link to="references">
                  <li>Referanslar</li>
                </Link>
                <Link to="news">
                  <li>Haberler</li>
                </Link>
                <Link to="communication">
                  <li>İletişim</li>
                </Link>
                <select className="bg-transparent outline-none flex it">
                  <option value="ru">Tr</option>
                  <option value="en">En</option>
                </select>
              </ul>
            </nav> */}
          </header>
          <div className="h-full flex items-center mt-[10px]">
            <div className="max-w-[450px] ">
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]">
                Yenilikle Geleceği İnşa Ediyoruz
              </h1>
              <p className="text-[#FFF] mt-[30px]">
                Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                mühendisliğinde yeni ufuklar açıyoruz. Yenilikçi
                yaklaşımlarımızla sorunlara çözüm üretiyor, geleceği
                aydınlatıyoruz.
              </p>
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
              <img src={two} alt="" />
            </div>
            <div className="flex flex-col gap-7 w-[200px]">
              <p>Tamamlanan Proje</p>
              <img src={three} alt="" />
            </div>
            <div className="flex flex-col gap-7 w-[150px] mt-[60px] md:mt-auto">
              <p>Devam Eden Proje</p>
              <img src={five} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section>
        <div className=" relative h-[900px] flex justify-center px-[20px]">
          <div className="section_3 h-screen container md:w-full  mx-auto absolute z-[3]">
            <p className="text-[#FF8A00] text-[10px] font-semibold">PROJELER</p>
            <div className="leading-[70px]">
              <h1 className="text-[#FFF] text-[60px] font-bold">
                Armsan <br />
                Silah Fabrikası
              </h1>
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
    </div>
  );
};

export default About;

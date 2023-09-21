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
    const { t } = useTranslation();

  
  return (
    <div>
      <section className="bg_header h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <header className="flex items-center justify-between"></header>
          <div className="h-full flex items-center mt-[10px]">
            <div className="max-w-[480px] ">
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px] dark:text-orange-500">
                {t("Haktext.h1")}
                {/* Yenilikle Geleceği İnşa Ediyoruz */}
              </h1>
              <p className="text-[#FFF] mt-[30px] dark:text-orange-400">{t("Haktext.p")}</p>
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
                {t("sec2.p")}
              </h4>
              <h2>{t("sec2.h2")}</h2>
              <p className="leading-[35px]">{t("sec2.p2")}</p>
              <div className="flex gap-12">
                <p className="leading-[35px]">{t("sec2.p3")}</p>
                <div className="bg-[#FF8A00] inline-flex px-[20px] p-[5px] gap-14 justify-center items-center h-[50px]	">
                  <img src={vector} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around flex-wrap mt-[60px] md:mt-auto relative md:top-[-120px] top-0">
            <div className="flex flex-col gap-7 w-[200px]">
              <p>{t("sec2.span1")}</p>
              <img src={two} alt="" className="w-[150px]" />
            </div>
            <div className="flex flex-col gap-7 w-[200px]">
              <p>{t("sec2.span2")}</p>
              <img src={three} alt="" className="w-[150px]" />
            </div>
            <div className="flex flex-col gap-7 w-[150px] mt-[60px] md:mt-auto">
              <p>{t("sec2.span3")}</p>
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
                {t("sec3.p")}
              </p>
              <div className="leading-[70px]  max-w-[400px]">
                <h1 className="text-[#FFF] text-[48px] font-bold leading-[50px]">
                  {t("sec3.h1")}
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
                {t("sec4.p")}
              </p>
              <h2>{t("sec4.h2")}</h2>
            </div>
            <div className="">
              <img src={erow} alt="" className="w-[65%] m-auto" />
            </div>
          </div>
          <div className="swich grid md:grid-cols-4 gap-4 mt-[40px] grid-col-1">
            <div className="swich_1  p-[30px]">
              <h3 className="text-[#FFF] text-[20px] mt-[120px]">
                {t("sec4.h3")}
              </h3>
              <ul className="text-[#FFF] text-[14px] mt-[30px] flex flex-col gap-4">
                <li>{t("sec4.li1")}</li>
                <li>{t("sec4.li2")}</li>
                <li>{t("sec4.li3")}</li>
                <li>{t("sec4.li4")}</li>
                <li>{t("sec4.li5")}</li>
                <li>{t("sec4.li6")}</li>
              </ul>
            </div>
            <div className="swich_2 md:h-full flex items-end text-center pb-[20px] h-screen">
              <h5 className="text-[#FFF] w-full ml-auto">{t("sec4.h5")}</h5>
            </div>
            <div className="swich_3 md:h-full flex items-end text-center pb-[20px] h-screen">
              <h5 className="text-[#FFF] w-full ml-auto">{t("sec4.h52")}</h5>
            </div>
            <div className="swich_4 md:h-full flex items-end text-center pb-[20px] h-screen">
              <h5 className="text-[#FFF] w-full ml-auto"> {t("sec4.h3")}</h5>
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
                <h2>{t("sec5.h2")}</h2>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p>{t("sec5.p")}</p>
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
                <p className="text-[#FF8A00]">{t("sec5.p1")}</p>
                <p className="text-[#000] font-bold">{t("sec5.p2")}</p>
                <p className="text-[#ccc]">{t("sec5.p3")}</p>
              </div>
            </div>
            <div className="hover:border-[#FF8A00]  border-[1px] p-[14px] ">
              <div className="relative md:right-[35px] right-0">
                <img src={offiss} alt="" />
              </div>
              <div className="flex flex-col gap-6 mt-[30px]">
                <p className="text-[#FF8A00]">{t("sec5.p1")}</p>
                <p className="text-[#000] font-bold">{t("sec5.p2")}</p>
                <p className="text-[#ccc]">{t("sec5.p3")}</p>
              </div>
            </div>
            <div className="hover:border-[#FF8A00]  border-[1px] p-[14px] ">
              <div className="relative md:right-[35px] right-0">
                <img src={zavod} alt="" />
              </div>
              <div className="flex flex-col gap-6 mt-[30px]">
                <p className="text-[#FF8A00]">{t("sec5.p1")}</p>
                <p className="text-[#000] font-bold">{t("sec5.p2")}</p>
                <p className="text-[#ccc]">{t("sec5.p3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import fram from "../../pages/services/img-services/Fram.png"



const Services = () => {
  return (
    <div>
      <section className="bg_servise h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <div className="h-full flex items-center mt-[10px]">
            <div className="max-w-[450px] ">
              <div className="text-[#FFF] flex gap-4 items-center">
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
                <p>Referanslar</p>
              </div>
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px]">
                Referanslar
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
      <div className="flex justify-center relative bottom-[155px] gap-5">
        <div className=" cursor-pointer hover:bg-[#FF8A00] hover:text-white border-[1px] p-[5px] rounded-[90px] px-[40px] ">
          <button className=" hover:text-white  cursor-pointer  ">
            Project
          </button>
        </div>
        <button className=" cursor-pointer hover:bg-[#FF8A00] hover:text-white border-[1px] p-[5px] rounded-[90px] px-[40px] ">
          Taahhüt
        </button>
      </div>
      <div className=" service ">
        <ul className=" md:flex justify-center gap-[50px] hidden ">
          {/* <a href="" className=""> */}
          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Hepsi
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Endüstriyel
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Ticari
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Konut
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Tarihi
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Eğitim
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              İdari
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Sağlık
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              Ofis
            </a>
          </li>
        </ul>
      </div>
      <hr className="w-[80.5%] mx-auto  " />

      {/* SECTION-2 */}
      <section>
        <div className="container max-w-[1100px] mx-auto py-[52px] p-[10px]">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
            <div className="armsan_1 pl-[50px] pr-[50px] pt-[50px] pb-[50px] ">
              <div className=" flex justify-end relative bottom-[30px]">
                <img width={55} src={fram} alt="" />
              </div>
              <p className="pop font-bold">TİCARİ</p>
              <br />
              <p className=" text-white text-[40px] font-bold leading-[50px]">
                Armsan <br /> Silah Fabrikası
              </p>
              <br />
              <br />
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
              </div>
            </div>
            <div className="armsan_2 pl-[50px] pr-[50px] pt-[50px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
            <div className="armsan_3 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
            <div className="armsan_4 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
            <div className="armsan_5 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
            <div className="armsan_6 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold ">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
            <div className="armsan_7 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
            <div className="armsan_8 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">TİCARİ</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px]">
                  Armsan <br /> Silah Fabrikası
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

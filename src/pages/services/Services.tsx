import { useTranslation } from "react-i18next";

import fram from "../../pages/services/img-services/Fram.png";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="bg_servise h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <div className="h-full flex items-center mt-[10px]">
            <div className="max-w-[450px] ">
              <div className="text-[#FFF] flex gap-4 items-center">
                <p>{t("service.page1")}</p>
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
                <p>{t("service.page2")}</p>
              </div>
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px]">
                {t("service.h1")}
              </h1>
              <p className="text-[#FFF] mt-[30px]">{t("service.p")}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center relative bottom-[155px] gap-5">
        <div className=" cursor-pointer hover:bg-[#FF8A00] hover:text-white border-[1px] p-[5px] rounded-[90px] px-[40px] ">
          <button className=" hover:text-white  cursor-pointer  ">
            {t("service.bt1")}
          </button>
        </div>
        <button className=" cursor-pointer hover:bg-[#FF8A00] hover:text-white border-[1px] p-[5px] rounded-[90px] px-[40px] ">
          {t("service.bt2")}
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
              {t("service.a1")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a2")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a3")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a4")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a5")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a6")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a7")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a8")}
            </a>
          </li>

          <li className=" pb-[60px]">
            {" "}
            <a
              href=""
              className=" hover:text-orange-500 hover:border-b-[1px] border-orange-500 hover:pb-[60px] "
            >
              {t("service.a9")}
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
              <p className="pop font-bold">{t("service.p1")} </p>
              <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                {t("service.p2")}
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
                <p className="pop font-bold">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
                </p>
              </div>
            </div>
            <div className="armsan_3 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
                </p>
              </div>
            </div>
            <div className="armsan_4 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
                </p>
              </div>
            </div>
            <div className="armsan_5 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
                </p>
              </div>
            </div>
            <div className="armsan_6 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold ">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
                </p>
              </div>
            </div>
            <div className="armsan_7 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
                </p>
              </div>
            </div>
            <div className="armsan_8 pl-[50px] pr-[50px] pt-[250px] pb-[50px] flex items-end">
              <div>
                <p className="pop font-bold">{t("service.p1")}</p>
                <br />
                <p className=" text-white text-[40px] font-bold leading-[50px] p-[10px]">
                  {t("service.p2")}
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

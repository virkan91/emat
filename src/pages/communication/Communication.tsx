import React from "react";

// impot icon
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import {RiLinkedinFill} from "react-icons/ri"

// import images
import grop from "../references/img-referances/grop.png";
import rect1 from "../references/img-referances/rect1.png";
import rect2 from "../references/img-referances/rect2.png";
import rect3 from "../references/img-referances/rect3.png";
import rect4 from "../references/img-referances/rect4.png";

const Communication = () => {
  return (
    <div>
      <section className="bg_commun h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <div className="h-full flex items-center mt-[100px]">
            <div className="max-w-[880px]">
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
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px]">
                İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
              </h1>
              <div className="h-full flex text-[#FFF] gap-5 md:mt-[100px] mt-[50px]">
                <p>29 Ağustos 2023</p>
                <p className="border-r-[1px]"></p>
                <p>Bizden Haberler</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center  relative top-[-120px]">
            <img width={55} src={grop} alt="" />
          </div>
        </div>
      </section>
      {/* section-2 */}
      <section>
        <div className="container max-w-[1150px] mx-auto p-[20px]">
          <div>
            <p>
              Emat Mühendislik, elektrik mühendisliği alanındaki inovasyon
              çabalarını, teknolojiyle birleştirerek geleceği şekillendirme
              misyonuyla önemli adımlar atmaya devam ediyor. Yenilikçi
              yaklaşımlar ve son teknolojiye dayalı projeler, firmanın
              sektördeki öncü konumunu pekiştiriyor. <br />
              <br />
              Çağımızın gereksinimleri, sadece inovasyonla değil, aynı zamanda
              teknolojiyle entegre bir şekilde karşılanıyor. Emat Mühendislik,
              bu bilinçle hareket ederek müşterilerine ileri düzeyde çözümler
              sunmayı amaçlıyor. Yenilikçi proje tasarımları ve akıllı teknoloji
              entegrasyonu, firma projelerinin kalitesini ve etkinliğini
              artırıyor.
            </p>
          </div>
        </div>
      </section>
      {/* section-3 */}
      <section className="py-[30px]">
        <div className="container max-w-[1140px] mx-auto md:p-[10px] p-[20px]">
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-3 flex-col md:flex-row ">
              <div className="">
                <img src={rect1} alt="" />
              </div>
              <div className="">
                <img src={rect2} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-col md:flex-row">
              <div className="">
                <img src={rect3} alt="" />
              </div>
              <div className="">
                <img src={rect4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section text  */}
      <section>
        <div className="container max-w-[1150px] mx-auto p-[20px]">
          <div>
            <p>
              Emat Mühendislik, elektrik mühendisliği alanındaki inovasyon
              çabalarını, teknolojiyle birleştirerek geleceği şekillendirme
              misyonuyla önemli adımlar atmaya devam ediyor. Yenilikçi
              yaklaşımlar ve son teknolojiye dayalı projeler, firmanın
              sektördeki öncü konumunu pekiştiriyor. <br />
              <br />
              Çağımızın gereksinimleri, sadece inovasyonla değil, aynı zamanda
              teknolojiyle entegre bir şekilde karşılanıyor. Emat Mühendislik,
              bu bilinçle hareket ederek müşterilerine ileri düzeyde çözümler
              sunmayı amaçlıyor. Yenilikçi proje tasarımları ve akıllı teknoloji
              entegrasyonu, firma projelerinin kalitesini ve etkinliğini
              artırıyor.
            </p>
          </div>
        </div>
      </section>
      {/* section-4- */}
      <section>
        <div className="container max-w-[1150px] mx-auto p-[20px]">
          <div className="flex justify-between flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-10">
              <p className=" text-[18px]">Share</p>
              <div className="flex items-center gap-5">
                <div className="hover:bg-[#FF8A00] p-[5px] rounded-full hover:text-[#FFF]">
                  <BiLogoWhatsapp className="text-[20px]" />
                </div>
                <div className="hover:bg-[#FF8A00] p-[5px] rounded-full hover:text-[#FFF]">
                  <BiLogoFacebook className="text-[18px]" />
                </div>
                <div className="hover:bg-[#FF8A00] p-[5px] rounded-full  hover:text-[#FFF]">
                  <BsTwitter />
                </div>
                <div className="hover:bg-[#FF8A00] p-[5px] rounded-full hover:text-[#FFF]">
                  <FaTelegramPlane />
                </div>
                <div className="hover:bg-[#FF8A00] p-[5px] rounded-full hover:text-[#FFF]">
                  <RiLinkedinFill />
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clip-path="url(#clip0_81_383)">
                    <path
                      d="M0.645686 13.4292L27.3534 13.4292C27.6711 13.4292 27.9277 13.6859 27.9277 14.0036C27.9277 14.3213 27.6711 14.5779 27.3534 14.5779L2.03312 14.5779L5.51876 18.0636C5.74312 18.2879 5.74312 18.6523 5.51876 18.8767C5.2944 19.101 4.93004 19.101 4.70568 18.8767L0.238249 14.4092C0.0731224 14.2441 0.0246606 13.9982 0.114403 13.7828C0.204148 13.5692 0.414147 13.4292 0.645686 13.4292Z"
                      fill="#1C0B24"
                    />
                    <path
                      d="M5.11847 8.95646C5.26565 8.95646 5.41283 9.0121 5.52411 9.12518C5.74847 9.34954 5.74847 9.7139 5.52411 9.93826L1.05129 14.4111C0.826932 14.6354 0.462575 14.6354 0.238216 14.4111C0.0138569 14.1867 0.013857 13.8224 0.238216 13.598L4.71104 9.12518C4.82411 9.0121 4.97129 8.95646 5.11847 8.95646Z"
                      fill="#1C0B24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_383">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(28 28) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Back to Blog Page</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communication;

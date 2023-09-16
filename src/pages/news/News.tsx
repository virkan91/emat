import React from "react";

// import img

import grop from "../references/img-referances/grop.png";

const News = () => {
  return (
    <div>
      <section className="bg_news h-screen relative top-[-100px] w-full z-[-1]">
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
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px]">
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
      <div className="container max-w-[1150px] mx-auto">
        <ul className="flex gap-[60px] ulsearch">
          <li>
            <a href="" className="hover:text-[#FF8A00]">
              Tümü
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FF8A00]">
              Haberler
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FF8A00]">
              Blog
            </a>
          </li>
        </ul>
        <div>
          <input type="search" className="border-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default News;

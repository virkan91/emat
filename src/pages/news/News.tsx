
// import img

import grop from "../references/img-referances/grop.png";
import search from "../news/img-news/search.svg";
import rec1 from "../news/img-news/rec1.png";
import rec2 from "../news/img-news/rec2.png";
import rec3 from "../news/img-news/rec3.png";
import rec4 from "../news/img-news/rec4.png";
import rec5 from "../news/img-news/rec5.png";
import rec6 from "../news/img-news/rec6.png";
import rec7 from "../news/img-news/rec7.png";
import rec8 from "../news/img-news/rec8.png";
import rec9 from "../news/img-news/rec9.png";

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
      <div className="container max-w-[1150px] mx-auto p-[10px]">
        <div className="flex justify-between items-center flex-col md:flex-row gap-6">
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
          <div className="bg-[#F9F9F9] border-[1px] rounded-[99px] px-[25px] p-[10px] w-[400px] border-none shadow-md">
            <div className="flex items-center justify-between ">
              <input
                className="outline-none bg-transparent"
                type="text"
                placeholder="Blog veya haberler içerisinde ara..."
              />
              <img width={25} src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* section-2 */}
      <section className="py-[30px]">
        <div className="container max-w-[1150px] mx-auto p-[10px]">
          <div className="grid lg:grid-cols-3 gap-[30px] md:grid-cols-2  ">
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex  ">
                <div>
                  <img src={rec1} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec2} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec3} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec4} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec5} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec6} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec7} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec8} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
            <div className="border-[1px]  hover:border-[#FF8A00] shadow-md p-[27px] max-w-[463px] md:w-full m-auto md:m-[0px] ">
              <div className="flex">
                <div>
                  <img src={rec9} alt="" />
                </div>
                <div className="bg-[#FF8A00] p-[20px] w-[70px] md:w-[80px] h-[70px] flex justify-center items-center text-center text-[#FFF] relative top-[-27px] md:left-7 left-[59px]">
                  29 Ağustos
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-[30px]">
                <p className="text-[#FF8A00] font-bold">Finans</p>
                <p className="text-[#000] font-bold">
                  İnovasyonun Ötesinde: Teknolojiyle Geleceği Şekillendiriyoruz
                </p>
                <p className="text-[#ccc] text-[14px]">
                  Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde yeni ufuklar açıyoruz...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-[40px]">
        <button className="bg-[#FF8A00] text-[#FFFFFF] rounded-[99px] p-[9px] px-[25px] font-semibold">
          {" "}
          Daha Fazla Göster +
        </button>
      </div>
    </div>
  );
};

export default News;

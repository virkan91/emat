import "./style.css";
import React from "react";
import grop from "../../../references/img-referances/grop.png";
import Ellipse from "../projeler/img-proj/Ellipse.png";
import gr120 from "../projeler/img-proj/gr120.png";
import gr300 from "../projeler/img-proj/gr300.png";
import gr50 from "../projeler/img-proj/gr50.png";
import gr116 from "../projeler/img-proj/gr116.png";
import gr1997 from "../projeler/img-proj/gr1997.png";
import gr1999 from "../projeler/img-proj/gr1999.png";
import gr2000 from "../projeler/img-proj/gr2000.png";
import gr2001 from "../projeler/img-proj/gr2001.png";
import gr2002 from "../projeler/img-proj/gr2002.png";
import gr2003 from "../projeler/img-proj/gr2003.png";
import gr2004 from "../projeler/img-proj/gr2004.png";
import gr2005 from "../projeler/img-proj/gr2005.png";
import fu1 from "../projeler/img-proj/fu1.png";
import city from "../projeler/img-proj/city.png";
import draw2 from "../projeler/img-proj/draw2.png"

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const Projeler = () => {
  return (
    <div>
      <section className="bg_proj h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <div className="h-full  grid md:grid-cols-2 grid-cols-1">
            <div className="h-full flex items-end mt-[10px] py-[100px] justify-center md:justify-start ">
              <div className="max-w-[600px] ">
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
                  <p>Hakkımızda</p>
                </div>
                <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px]">
                  Hakkımızda
                </h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center  relative top-[-20px]">
            <img width={55} src={grop} alt="" />
          </div>
        </div>
      </section>
      {/* section-2 */}
      <section>
        <div className="container max-w-[1150px] mx-auto p-[10px]">
          <div className="grid md:grid-cols-2 gap-[50px] grid-cols-1 ">
            <div className=" p-[20px]">
              <img src={Ellipse} alt="" />
            </div>
            <div className="p-[20px] flex flex-col gap-5">
              <p className="text-[#FF8A00] text-[10px] font-bold tracking-[5px]">
                EMAT MÜHENDİSLİK
              </p>
              <h2 className="text-[42px] font-bold text-[#1C0B24CC]">
                Biz Kimiz?
              </h2>
              <p className="p1">
                Emat Mühendislik olarak, 2014 yılında sektördeki deneyimli
                mühendislerin bir araya gelmesiyle kurulduk. Elektrik
                mühendisliği ve mekanik projeler konusundaki uzmanlığımızı
                birleştirerek, müşterilerimize en yüksek kalitede hizmet sunmayı
                hedefledik.{" "}
                <p className="p2">
                  Firmamızın kuruluşundan bugüne kadar, yenilikçilik, teknoloji
                  ve sürdürülebilirlik ilkelerine dayalı bir yaklaşım
                  benimseyerek sektörde öncü bir konuma ulaştık.
                </p>
              </p>
            </div>
          </div>
          <div className=" flex  justify-between flex-col md:flex-row gap-[40px] p-[20px]">
            <div className="m-auto md:m-[0px]">
              <p>Personel</p>
              <br />
              <img width={130} src={gr120} alt="" />
            </div>
            <div className="m-auto md:m-[0px]">
              <p>Tamamlanan Proje</p>
              <br />
              <img width={130} src={gr300} alt="" />
            </div>
            <div className="m-auto md:m-[0px]">
              <p>Devam Eden Proje</p>
              <br />
              <img width={100} src={gr50} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="ar_ge  container max-w-[1100px] mx-auto mt-[80px] z-10 relative">
        <div className="md:p-[150px] p-[70px]">
          <h1 className="text-[#FFF] text-[40px] font-bold">
            AR-GE ve İnovasyon
          </h1>
        </div>
        <div className="bg-[#FF8A00] p-[20px] max-w-[600px] text-[#FFF] ml-auto">
          <div className="flex items-center gap-5">
            <p className="text-[12px]">
              Dia Mühendislik olarak, geleceğe yönelik çözümler üretme
              vizyonumuzla AR-GE ve inovasyon alanında aktif bir rol oynuyoruz.
              Teknolojinin hızla değiştiği bu çağda, müşterilerimize daha iyi
              hizmet sunmak ve sektörde öncü olmak adına sürekli olarak
              yeniliklere odaklanıyoruz.
            </p>
            <div>
              <img width={500} src={gr116} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <section className="bg-[#1C0B24] relative top-[-190px] ">
        <div className="container max-w-[1100px] mx-auto p-[20px]">
          <div className="text-[#FFF] max-w-[700px]  pt-[240px]">
            <p className="text-[10px] tracking-[4px]">DEĞERLERİMİZ</p>
            <p className="text-[35px] mt-[40px]">
              Güvenle Geleceğe Adım Atın: Doğruluk, Gizlilik, Çalışanlarımıza
              Sorumluluk!
            </p>
          </div>
          <div className="text-[#FFF]">
            <div className=" guven grid md:grid-cols-3 gap-[30px] grid-cols-1 pt-[100px]">
              <div className="max-w-[350px]"></div>
              <div>
                <div className=" given max-w-[350px] border-t-[1px] border-[rgba(255,255,255,0.12)] ">
                  <h3>Güven</h3>
                </div>
                <p>
                  Dürüstlükle Güven İnşa Ediyoruz: Paydaşlarımıza Doğrulukla
                  Yaklaşıyoruz!
                </p>
              </div>
              <div>
                <div className=" given  max-w-[350px] border-t-[1px] border-[rgba(255,255,255,0.12)] ">
                  <h3>Gizlilik</h3>
                </div>
                <p>
                  Müşterilerimizin, çalışanlarımızın ve paydaşlarımızın özel
                  bilgilerinin korunmasına özen gösteririz.
                </p>
              </div>
              <div className=" given max-w-[350px]"></div>
              <div>
                <div className=" given  max-w-[350px] border-t-[1px] border-[rgba(255,255,255,0.12)]">
                  <h3>Çalışanlarına Karşı Sorumluluk</h3>
                </div>
                <p>
                  Güvence, istihdam ve adil yaklaşımla çalışanlarımızın
                  gelişimine katkı sağlarız.
                </p>
              </div>
              <div>
                <div className=" given  max-w-[350px] border-t-[1px] border-[rgba(255,255,255,0.12)]">
                  <h3>Sürekli İyileştirme</h3>
                </div>
                <p>
                  Çevre ve toplum değerlerini sürekli göz önünde bulundurarak
                  ürün ve hizmetlerini sürekli geliştiririz.
                </p>
              </div>
              <div className=" given max-w-[350px]"></div>
              <div>
                <div className=" given  max-w-[350px] border-t-[1px] border-[rgba(255,255,255,0.12)]">
                  <h3>İhtiyaç ve Beklentilerini Karşılamak</h3>
                </div>
                <p>
                  Tedarikçilerimizin, çalışanlarımızın, paydaşların ihtiyaç ve
                  beklentilerini Yönetim Sistemi süreçleri ile uyumlu şekilde
                  karşılanmasını sağlarız.
                </p>
              </div>
              <div>
                <div className=" given  max-w-[350px] border-t-[1px] border-[rgba(255,255,255,0.12)]">
                  <h3>Sürekli İyileştirme</h3>
                </div>
                <p>
                  Tüm faaliyetlerimizde etkileşim içinde olan hususlara risk
                  temelli yaklaşımla, amaçlanan hedeflere ulaşmasını güvence
                  altına alırız.
                </p>
              </div>
            </div>
          </div>
          <div className="vert flex justify-evenly pt-[110px]">
            <div className="hover:text-orange-500">
              <img src={gr1997} alt="" />
            </div>
            <div className="hover:text-orange-500">
              <img
                width={45}
                src={gr1999}
                alt=""
                className="hover:-orange-500"
              />
            </div>
            <div>
              <img width={40} src={gr2000} alt="" />
            </div>
            <div>
              <img width={43} src={gr2001} alt="" />
            </div>
            <div>
              <img width={40} src={gr2002} alt="" />
            </div>
            <div>
              <img width={40} src={gr2003} alt="" />
            </div>
            <div>
              <img width={40} src={gr2004} alt="" />
            </div>
            <div>
              <img width={40} src={gr2005} alt="" />
            </div>
          </div>
          <div className=" p-[20px]">
            <div className=" max-w-[880px] mx-auto flex justify-between relative top-[22px] z-10">
              <img src={fu1} alt="" className="hover:text-orange-500" />
              <img src={fu1} alt="" />
              <img src={fu1} alt="" />
              <img src={fu1} alt="" />
              <img src={fu1} alt="" />
              <img src={fu1} alt="" />
              <img src={fu1} alt="" />
              <img src={fu1} alt="" />
            </div>
            <hr className="relative top-[16px] max-w-[930px] m-auto text-[#000] z-1" />
            <div className="md:flex justify-between hidden">
              <div className="border-[1px] rounded-full hover:bg-[#FF8A00] border-[#828d93]">
                <BsArrowLeftShort className="text-[#FFF] text-[30px]" />
              </div>
              <div className="border-[1px] rounded-full hover:bg-[#FF8A00] border-[#828d93]">
                <BsArrowRightShort className="text-[#FFF] text-[30px]" />
              </div>
            </div>
          </div>
          <div className=" p_city grid md:grid-cols-2 py-[50px] grid-cols-1">
            <div className="m-auto md:m-[0px]">
              <img width={400} src={city} alt="" />
            </div>
            <div className="mt-[40px] md:mt-auto p-[10px]">
              <div className="flex ">
                <span className="text-[#FF8A00] font-bold text-[32px]">
                  1997
                </span>
              </div>
              <hr className="w-[320px] relative top-[-23px] left-[130px]" />
              <h5 className="border-b-[1px] border-[rgba(255,255,255,0.12)]">
                Emat Mühendislik olarak, 1997 yılında sektördeki deneyimli
                mühendislerin bir araya gelmesiyle kurulduk.
              </h5>

              <div className="grid grid-cols-2 py-[30px]">
                <p>1997’den Bugüne...</p>
                <p>
                  Bugün; Üretiminin %75 ini 50 den fazla ülkeye ihraç eden
                  global lider bir şirket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-4 */}
      <section>
        <div className="container max-w-[1250px] mx-auto p-[40px] ">
          <div className="grid md:grid-cols-6 grid-cols-1 ">
            <div className="col-span-3">
              <img src={draw2} alt="" />
            </div>
            <div className="text-section_4 col-span-3">
              <div className="br border-r-[2px] pr-[30px] hover:border-[#FF8A00]">
                <h2 className="text-end text-[#1C0B24CC]">Misyon</h2>
                <p className="text-end leading-[30px]">
                  Misyonumuz, müşterilerimize en iyi kalitede mühendislik
                  çözümleri sunarak, geleceğin gereksinimlerine uygun projeleri
                  hayata geçirmektir. İnovasyon ve teknolojiyi projelerimize
                  entegre ederek, sürdürülebilir ve çevre dostu yaklaşımlarla
                  sektörde fark yaratıyoruz. Müşteri memnuniyetini ve iş etiği
                  ilkelerini temel alarak, projelerimizde güvenilirliği ve
                  verimliliği ön planda tutuyoruz.
                </p>
              </div>

              <div className="br border-r-[2px] pr-[30px] mt-[50px] hover:border-[#FF8A00]">
                <h2 className="text-end">Vizyon</h2>
                <p className="text-end leading-[30px]">
                  Misyonumuz, müşterilerimize en iyi kalitede mühendislik
                  çözümleri sunarak, geleceğin gereksinimlerine uygun projeleri
                  hayata geçirmektir. İnovasyon ve teknolojiyi projelerimize
                  entegre ederek, sürdürülebilir ve çevre dostu yaklaşımlarla
                  sektörde fark yaratıyoruz. Müşteri memnuniyetini ve iş etiği
                  ilkelerini temel alarak, projelerimizde güvenilirliği ve
                  verimliliği ön planda tutuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projeler;

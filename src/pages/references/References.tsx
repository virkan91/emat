
// import img

import grop from "../references/img-referances/grop.png";
import rect1 from "../references/img-referances/rect1.png";
import rect2 from "../references/img-referances/rect2.png";
import rect3 from "../references/img-referances/rect3.png";
import rect4 from "../references/img-referances/rect4.png";
import erow from "../about/img-about/erows.png";

const References = () => {
  return (
    <div>
      <section className="bg_referances h-screen relative top-[-100px] w-full z-[-1]">
        <div className="container max-w-[1250px] mx-auto p-[20px] h-full ">
          <div className="h-full flex items-center mt-[10px]">
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
                <p>Referanslar</p>
              </div>
              <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px] animate__animated animate__backInDown">
                Armsan Silah Fabrikası
              </h1>
              <p className="text-[#FFF] mt-[30px]">
                Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                mühendisliğinde yeni ufuklar açıyoruz. Yenilikçi
                yaklaşımlarımızla sorunlara çözüm üretiyor, geleceği
                aydınlatıyoruz.
              </p>
            </div>
          </div>
          <div className="flex justify-center  relative top-[-10px]">
            <img width={55} src={grop} alt="" />
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section>
        <div className="conteiner max-w-[1100px] mx-auto pl-[20px] md:p-[0px]">
          <form
            action=""
            className="grid md:grid-cols-3 gap-[60px] grid-cols-1 md:mt-[-40px] mt-auto pl-[40px] md:pl-[0px]"
          >
            <div>
              <p>Konum</p>
              <input
                type="text"
                value={"İstanbul"}
                className="border-b-[1px] hover:text-[#FF8A00] pb-4"
              />
            </div>
            <div>
              <p>Dönem</p>
              <input
                type="text"
                value={2023}
                className="border-b-[1px] hover:text-[#FF8A00] pb-4"
              />
            </div>
            <div>
              <p>Hizmetler</p>
              <input
                type="text"
                value={"Elektrik - Mekanik"}
                className="border-b-[1px] hover:text-[#FF8A00] pb-4"
              />
            </div>
            <div className="md:mt-[-40px] mt-auto">
              <p>Hizmetler</p>
              <input
                type="text"
                value={"Almis İnşaat"}
                className="border-b-[1px] hover:text-[#FF8A00] pb-4"
              />
            </div>
            <div className="md:mt-[-40px] mt-auto">
              <p>Hizmetler</p>
              <input
                type="text"
                value={"11.000 m2"}
                className="border-b-[1px] hover:text-[#FF8A00] pb-4"
              />
            </div>
          </form>
          <div className="text_ref grid md:grid-cols-2 gap-[40px] mt-[80px] grid-cols-1">
            <p>
              Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
              mühendisliğinde yeni ufuklar açıyoruz. Yenilikçi yaklaşımlarımızla
              sorunlara çözüm üretiyor, geleceği aydınlatıyoruz.
            </p>
            <p>
              Sektörel çeşitliliğe sahip deneyimli kadromuz ile müşterilerimize;
              planlanan zamanda, kaliteden ödün verilmeden, ekonomik, verimli ve
              sürdürülebilir çözümlerinde olabileceğini göstermek hedefimizdir.
            </p>
          </div>
          {/* social media */}
          <div className="py-[90px] flex gap-10 items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M3.29066 14.7337H0.258365V5.07488H3.29066V14.7337ZM1.77296 3.75701C1.42396 3.75868 1.0823 3.65792 0.791188 3.46749C0.500078 3.27706 0.272598 3.00551 0.137518 2.68718C0.00243839 2.36885 -0.0341728 2.01804 0.0323152 1.67912C0.0988032 1.34021 0.265403 1.02841 0.511045 0.783164C0.756686 0.537919 1.07033 0.370244 1.41232 0.301346C1.7543 0.232448 2.10926 0.265422 2.4323 0.396098C2.75534 0.526774 3.03194 0.749281 3.22713 1.03548C3.42232 1.32167 3.52733 1.6587 3.52887 2.00394C3.52929 2.46622 3.34495 2.90993 3.01602 3.23832C2.6871 3.56672 2.24027 3.75316 1.77296 3.75701ZM14.6385 14.7329H11.6124V10.0317C11.6124 8.91107 11.5899 7.47423 10.0357 7.47423C8.45906 7.47423 8.21775 8.69156 8.21775 9.9511V14.7337H5.19166V5.07488H8.09981V6.39199H8.14248C8.43345 5.89928 8.85419 5.49395 9.35981 5.21927C9.86542 4.94459 10.4369 4.81085 11.0134 4.83234C14.0821 4.83234 14.6462 6.82796 14.6462 9.42763V14.7329H14.6385Z"
                fill="#1C0B24"
                fill-opacity="0.35"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M8.15496 3.69179C7.39385 3.69179 6.64983 3.91505 6.01699 4.33333C5.38415 4.75162 4.89091 5.34614 4.59965 6.04173C4.30839 6.73731 4.23218 7.50271 4.38066 8.24114C4.52915 8.97956 4.89566 9.65785 5.43384 10.1902C5.97203 10.7226 6.65772 11.0852 7.4042 11.232C8.15069 11.3789 8.92444 11.3035 9.62761 11.0154C10.3308 10.7273 10.9318 10.2394 11.3546 9.61338C11.7775 8.98737 12.0032 8.25138 12.0032 7.49849C12.004 6.99836 11.905 6.50299 11.7119 6.04077C11.5188 5.57856 11.2354 5.15859 10.8779 4.80494C10.5204 4.4513 10.0958 4.17093 9.62858 3.97991C9.16132 3.78889 8.66054 3.69098 8.15496 3.69179ZM8.15496 9.97372C7.66006 9.97372 7.17628 9.82855 6.76478 9.55657C6.35329 9.28459 6.03257 8.89801 5.84318 8.44572C5.6538 7.99343 5.60424 7.49574 5.70079 7.01559C5.79734 6.53544 6.03566 6.0944 6.3856 5.74823C6.73555 5.40206 7.18141 5.16632 7.66679 5.07081C8.15218 4.9753 8.6553 5.02432 9.11252 5.21167C9.56975 5.39901 9.96055 5.71627 10.2355 6.12332C10.5104 6.53037 10.6572 7.00893 10.6572 7.49849C10.6562 8.15472 10.3922 8.7838 9.92323 9.2479C9.45421 9.712 8.81835 9.97327 8.15496 9.97449V9.97372ZM13.0588 3.53857C13.0588 3.71418 13.0061 3.88584 12.9075 4.03186C12.8089 4.17787 12.6687 4.29168 12.5047 4.35888C12.3407 4.42608 12.1602 4.44367 11.9861 4.40941C11.812 4.37515 11.652 4.29058 11.5265 4.16641C11.401 4.04223 11.3155 3.88402 11.2808 3.71179C11.2462 3.53955 11.264 3.36103 11.3319 3.19878C11.3999 3.03654 11.5149 2.89787 11.6625 2.80031C11.8101 2.70274 11.9837 2.65067 12.1612 2.65067C12.2789 2.65037 12.3956 2.67305 12.5045 2.71742C12.6134 2.76179 12.7123 2.82698 12.7957 2.90924C12.8791 2.99151 12.9453 3.08924 12.9904 3.19683C13.0355 3.30443 13.0588 3.41978 13.0588 3.53627V3.53857ZM15.6075 4.43949C15.6321 3.28512 15.1964 2.16754 14.3947 1.3284C13.5447 0.537985 12.4161 0.107466 11.2497 0.128702C10.0105 0.0589875 6.29318 0.0589875 5.05406 0.128702C3.88908 0.105887 2.76124 0.534505 1.91135 1.32304C1.11125 2.16315 0.676091 3.28014 0.69934 4.43413C0.628866 5.65987 0.628866 9.3371 0.69934 10.5628C0.674714 11.7172 1.11038 12.8348 1.91213 13.6739C2.76281 14.463 3.89118 14.8926 5.05716 14.8713C6.29628 14.9411 10.0136 14.9411 11.2528 14.8713C12.4197 14.8957 13.5495 14.4647 14.3978 13.6716C15.1968 12.8308 15.632 11.7144 15.6106 10.5605C15.681 9.3348 15.681 5.6637 15.6106 4.43719L15.6075 4.43949ZM14.0067 11.8782C13.8788 12.1976 13.6859 12.4875 13.4399 12.73C13.194 12.9725 12.9003 13.1623 12.5771 13.2878C11.5889 13.6755 9.24693 13.5858 8.15263 13.5858C7.05834 13.5858 4.71253 13.6716 3.72821 13.2878C3.4054 13.1618 3.1122 12.9715 2.86681 12.7288C2.62141 12.4861 2.42906 12.196 2.30167 11.8767C1.9098 10.8992 2.00041 8.5825 2.00041 7.50002C2.00041 6.41753 1.91368 4.09705 2.30167 3.12335C2.42914 2.80352 2.62177 2.51305 2.86759 2.27002C3.1134 2.02699 3.40714 1.8366 3.73053 1.71068C4.71873 1.32304 7.06066 1.41267 8.15496 1.41267C9.24925 1.41267 11.5951 1.32687 12.5794 1.71068C12.9022 1.83669 13.1954 2.02697 13.4408 2.26971C13.6862 2.51245 13.8785 2.80249 14.0059 3.12181C14.3978 4.09935 14.3072 6.416 14.3072 7.49849C14.3072 8.58097 14.3986 10.9022 14.0067 11.8759V11.8782Z"
                fill="#1C0B24"
                fill-opacity="0.35"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
            >
              <path
                d="M9.15316 9.54769L9.62398 6.50863H6.67849V4.54008C6.65824 4.31339 6.68972 4.08509 6.7706 3.87205C6.85149 3.659 6.97972 3.46665 7.14583 3.30919C7.31193 3.15174 7.51167 3.0332 7.73028 2.96233C7.9489 2.89146 8.18082 2.87008 8.40892 2.89975H9.74764V0.314267C8.96163 0.188672 8.16739 0.120111 7.37128 0.109131C4.94576 0.109131 3.35973 1.56332 3.35973 4.19667V6.51091H0.663086V9.54997H3.35973V16.8908H6.67849V9.54769H9.15316Z"
                fill="#F59F00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
            >
              <path
                d="M17.8624 2.32359C17.7636 1.95579 17.5689 1.62011 17.2978 1.35013C17.0267 1.08015 16.6886 0.885345 16.3175 0.785206C14.9543 0.421631 9.48766 0.421631 9.48766 0.421631C9.48766 0.421631 4.02175 0.421631 2.65862 0.785206C2.28748 0.885345 1.94942 1.08015 1.67829 1.35013C1.40716 1.62011 1.21247 1.95579 1.11369 2.32359C0.861772 3.70564 0.739526 5.10778 0.748508 6.51209C0.739526 7.91641 0.861772 9.31854 1.11369 10.7006C1.21314 11.0654 1.40847 11.3977 1.67983 11.6637C1.95119 11.9297 2.28889 12.1198 2.65862 12.2148C4.02175 12.5784 9.48766 12.5784 9.48766 12.5784C9.48766 12.5784 14.9536 12.5784 16.3167 12.2148C16.6869 12.1198 17.0249 11.9293 17.2964 11.6629C17.568 11.3965 17.7633 11.0636 17.8624 10.6983C18.1143 9.3162 18.2366 7.91407 18.2276 6.50976C18.2366 5.10544 18.1143 3.70331 17.8624 2.32125V2.32359ZM7.70032 9.08358V3.94527L12.2651 6.51443L7.70032 9.08358Z"
                fill="#1C0B24"
                fill-opacity="0.35"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
            >
              <path
                d="M18.3953 1.91709C17.7145 2.21487 16.9929 2.41128 16.254 2.49994C17.0335 2.03876 17.6168 1.31289 17.8952 0.457672C17.1634 0.888729 16.3619 1.19175 15.526 1.35342C15.0149 0.812605 14.3511 0.436467 13.621 0.273936C12.8908 0.111406 12.1281 0.170007 11.4321 0.442115C10.7361 0.714224 10.139 1.18724 9.71843 1.79963C9.2979 2.41203 9.07341 3.13544 9.07417 3.87577C9.07257 4.15972 9.10484 4.44288 9.1703 4.71936C7.68633 4.64639 6.23459 4.26471 4.90982 3.59923C3.58504 2.93375 2.41701 1.99943 1.48193 0.857229C1.0052 1.67114 0.86008 2.63423 1.07615 3.5503C1.29221 4.46636 1.8532 5.26648 2.64484 5.78766C2.05043 5.77335 1.46859 5.61538 0.950093 5.32752V5.37353C0.949829 6.22587 1.24771 7.05204 1.79317 7.71184C2.33864 8.37164 3.09809 8.82441 3.94264 8.99332C3.62245 9.07927 3.29215 9.12285 2.96037 9.12293C2.72607 9.12321 2.49233 9.10035 2.26263 9.05467C2.50096 9.78876 2.96546 10.4307 3.59107 10.8906C4.21668 11.3505 4.97205 11.6052 5.75135 11.6192C4.43028 12.6464 2.79791 13.2035 1.11755 13.2006C0.820071 13.2 0.522883 13.1821 0.227539 13.1469C1.92589 14.2402 3.90956 14.8201 5.93587 14.8157C7.33354 14.8259 8.71932 14.5611 10.0126 14.0367C11.3059 13.5123 12.4809 12.7388 13.4692 11.7611C14.4575 10.7834 15.2395 9.62113 15.7696 8.34181C16.2997 7.06248 16.5674 5.69166 16.5571 4.30907C16.5571 4.14878 16.5571 3.98927 16.5455 3.83282C17.272 3.30773 17.8983 2.65906 18.3953 1.91709Z"
                fill="#1C0B24"
                fill-opacity="0.35"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* section-3 */}
      <section>
        <div className="container max-w-[1140px] mx-auto p-[10px]">
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
      {/* section-4 */}
      <section className="mt-[90px]">
        <div className="container max-w-[1140px] mx-auto">
          <div className="flex items-center justify-between flex-col md:flex-row gap-10">
            <div className="section_4">
              <p className="text-[#FF8A00] text-[10px] tracking-[4px] font-bold">
                EMAT MÜHENDİSLİK
              </p>
              <h2>Diğer Projeler</h2>
            </div>
            <div>
              <img src={erow} alt="" className="w-[65%]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-[50px] grid-cols-1 p-[10px]">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;

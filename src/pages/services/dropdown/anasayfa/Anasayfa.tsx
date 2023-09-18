import React from "react";

import grop from "../anasayfa/img-anasay/grop.png";
import gr from "../anasayfa/img-anasay/gr.png";
import mail from "../anasayfa/mail.png"
import call from "../anasayfa/call.svg"
import draw from "../anasayfa/img-anasay/draw.png";
import Form from "../../../../components/Form";


const Anasayfa = () => {
  return (
    <div>
      <section className="bg_anastasy h-screen relative top-[-100px] w-full z-[-1]">
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
                  <p>İletişim</p>
                </div>
                <h1 className="text-[50px] font-bold	not-italic	text-[#FFF] leading-[60px]  mt-[20px]">
                  İletişim
                </h1>
              </div>
            </div>

            <div className=" flex items-center gap-8  justify-center">
              <img width={60} src={gr} alt="" />
              <p className="text-[#FFF]">YOL TARİFİ AL</p>
            </div>
          </div>

          <div className="flex justify-center  relative top-[-20px]">
            <img width={55} src={grop} alt="" />
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="py-[50px]">
        <div className="container max-w-[1100px] mx-auto pl-[10px] ">
          <div className="grid md:grid-cols-2 gap-[90px] grid-cols-1">
            <div className="flex flex-col gap-[60px]">
              <div className="flex justify-between  flex-col md:flex-row gap-[40px] ">
                <div>
                  <div className="flex items-center gap-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_81_1051)">
                        <path
                          d="M27.2895 10.3109H28.7999C29.5543 10.3109 30.2778 10.6105 30.8112 11.144C31.3447 11.6774 31.6443 12.4009 31.6443 13.1553V18.8441C31.6443 19.5986 31.3447 20.3221 30.8112 20.8556C30.2778 21.389 29.5543 21.6886 28.7999 21.6886H27.2895C26.9431 24.4384 25.605 26.967 23.5262 28.8001C21.4476 30.6332 18.7714 31.6445 15.9999 31.6441V28.7998C18.2631 28.7998 20.4335 27.9007 22.0339 26.3004C23.6342 24.7 24.5333 22.5296 24.5333 20.2664V11.7331C24.5333 9.46991 23.6342 7.29942 22.0339 5.69911C20.4335 4.0988 18.2631 3.19975 15.9999 3.19975C13.7367 3.19975 11.5662 4.0988 9.96593 5.69911C8.36563 7.29942 7.46657 9.46991 7.46657 11.7331V21.6886H3.19991C2.44552 21.6886 1.72202 21.389 1.18859 20.8556C0.65515 20.3221 0.355469 19.5986 0.355469 18.8441V13.1553C0.355469 12.4009 0.65515 11.6774 1.18859 11.144C1.72202 10.6105 2.44552 10.3109 3.19991 10.3109H4.71031C5.05484 7.55962 6.39217 5.02888 8.47102 3.19412C10.5499 1.35936 13.2271 0.346863 15.9999 0.346863C18.7726 0.346863 21.45 1.35936 23.5288 3.19412C25.6076 5.02888 26.945 7.55962 27.2895 10.3109ZM3.19991 13.1553V18.8441H4.62214V13.1553H3.19991ZM27.3776 13.1553V18.8441H28.7999V13.1553H27.3776ZM9.96969 21.3828L11.4773 18.9651C12.8339 19.8117 14.4008 20.2607 15.9999 20.2607C17.599 20.2607 19.166 19.8117 20.5226 18.9651L22.0301 21.3828C20.2215 22.5121 18.1321 23.1108 15.9999 23.1108C13.8677 23.1108 11.7783 22.5121 9.96969 21.3828Z"
                          fill="#FF8A00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_81_1051">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <p className="text-[#ccc]">Müşteri Hizmetleri</p>
                      <span className="font-bold">+90 212 216 55 98</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_81_1058)">
                        <path
                          d="M31.3484 13.8C30.7894 9.72615 28.635 6.04119 25.3591 3.55577C22.0833 1.07035 17.9542 -0.0119329 13.8804 0.547011C9.80651 1.10595 6.12154 3.26034 3.63612 6.53623C1.1507 9.81211 0.06842 13.9412 0.627364 18.015C1.08786 21.3868 2.63735 24.5159 5.04002 26.926C7.44269 29.336 10.567 30.8951 13.9374 31.366C14.627 31.4563 15.3218 31.5018 16.0174 31.502C18.8275 31.5066 21.585 30.7398 23.9894 29.285C24.1581 29.1834 24.3052 29.0495 24.4222 28.891C24.5392 28.7325 24.6238 28.5525 24.6713 28.3613C24.7187 28.1702 24.7281 27.9715 24.6987 27.7767C24.6694 27.5819 24.602 27.3948 24.5004 27.226C24.3987 27.0573 24.2648 26.9102 24.1064 26.7932C23.9479 26.6762 23.7679 26.5915 23.5767 26.5441C23.1906 26.4483 22.7822 26.5097 22.4414 26.715C20.73 27.7422 18.7976 28.3447 16.8057 28.472C14.8138 28.5993 12.8203 28.2478 10.9921 27.4468C9.16395 26.6458 7.55414 25.4187 6.29738 23.8681C5.04062 22.3174 4.17346 20.4884 3.76843 18.534C3.36341 16.5795 3.43229 14.5565 3.96932 12.6342C4.50636 10.7118 5.49593 8.94601 6.85525 7.48447C8.21458 6.02293 9.90413 4.90815 11.7826 4.23339C13.661 3.55863 15.6737 3.3435 17.6524 3.60601C19.4902 3.85037 21.2506 4.50048 22.8062 5.50925C24.3617 6.51801 25.6734 7.86017 26.6461 9.43848C27.6189 11.0168 28.2284 12.7917 28.4304 14.6347C28.6325 16.4776 28.422 18.3424 27.8144 20.094C27.6567 20.5152 27.3718 20.8769 26.9993 21.1288C26.6267 21.3808 26.185 21.5105 25.7354 21.5C25.1428 21.4992 24.5748 21.2635 24.1559 20.8445C23.7369 20.4255 23.5012 19.8575 23.5004 19.265V10C23.5004 9.60219 23.3423 9.22066 23.061 8.93935C22.7797 8.65805 22.3982 8.50001 22.0004 8.50001C21.6025 8.50001 21.221 8.65805 20.9397 8.93935C20.6584 9.22066 20.5004 9.60219 20.5004 10V10.014C19.3632 9.15575 18.0051 8.63913 16.5851 8.52461C15.165 8.41009 13.7417 8.7024 12.4817 9.36734C11.2217 10.0323 10.1772 11.0423 9.47037 12.2793C8.76353 13.5163 8.42363 14.929 8.49044 16.3521C8.55726 17.7752 9.02802 19.1498 9.84764 20.3151C10.6673 21.4804 11.8018 22.3882 13.1186 22.9321C14.4353 23.4761 15.8798 23.6338 17.2829 23.3867C18.6859 23.1396 19.9896 22.498 21.0414 21.537C21.4663 22.4221 22.132 23.1695 22.9623 23.6936C23.7925 24.2176 24.7536 24.4971 25.7354 24.5C26.8086 24.5104 27.8585 24.1862 28.7391 23.5726C29.6197 22.959 30.2874 22.0864 30.6494 21.076C31.4578 18.7408 31.6974 16.2464 31.3484 13.8ZM16.0004 20.5C15.1103 20.5 14.2403 20.2361 13.5003 19.7416C12.7603 19.2472 12.1835 18.5444 11.8429 17.7221C11.5023 16.8998 11.4132 15.995 11.5868 15.1221C11.7605 14.2492 12.189 13.4474 12.8184 12.818C13.4477 12.1887 14.2495 11.7601 15.1225 11.5865C15.9954 11.4128 16.9002 11.502 17.7224 11.8426C18.5447 12.1831 19.2475 12.7599 19.742 13.4999C20.2364 14.24 20.5004 15.11 20.5004 16C20.499 17.1931 20.0245 18.3369 19.1809 19.1805C18.3373 20.0242 17.1934 20.4987 16.0004 20.5Z"
                          fill="#1C0B24"
                          fill-opacity="0.25"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_81_1058">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <p className="text-[#ccc]">E-Posta</p>
                      <span className="font-bold">
                        info@ematmuhendislik.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M27.3914 4.61343C26.2074 3.8921 24.7647 3.83733 23.5327 4.47199L20.5847 5.98534C20.2141 6.17601 19.7874 6.17601 19.4167 5.98534L13.802 3.10269C13.246 2.81736 12.6367 2.67603 12.026 2.67203C12.0167 2.67203 12.01 2.66666 12.0007 2.66666C11.9914 2.66666 11.9847 2.67203 11.9754 2.67203C11.3647 2.67603 10.7554 2.81736 10.198 3.10269L5.60205 5.46402C3.79138 6.39335 2.66602 8.25605 2.66602 10.324V23.8932C2.66602 25.3372 3.39269 26.6427 4.61003 27.3867C5.79403 28.108 7.23538 28.1626 8.46871 27.528L11.4167 26.0146C11.7874 25.824 12.2141 25.824 12.5847 26.0146L18.1994 28.8974C18.758 29.1841 19.3714 29.3281 19.9847 29.3307C19.99 29.3307 19.9954 29.3333 20.0007 29.3333C20.006 29.3333 20.0114 29.3307 20.0167 29.3307C20.63 29.3281 21.2434 29.1841 21.802 28.8974L26.398 26.5361C28.2087 25.6068 29.334 23.7441 29.334 21.6761V8.10676C29.3354 6.66276 28.6087 5.35743 27.3914 4.61343ZM7.25269 25.1533C6.67535 25.4493 6.18603 25.2201 6.00203 25.1081C5.58603 24.8534 5.33537 24.3986 5.33537 23.8906V10.3213C5.33537 9.25728 5.90469 8.30396 6.82202 7.83462L10.6687 5.85871V23.4668C10.5127 23.5228 10.35 23.5626 10.2007 23.64L7.25269 25.1533ZM13.8034 23.64C13.6541 23.5626 13.4914 23.5241 13.3354 23.4668V5.85741L18.2007 8.35595C18.35 8.43328 18.5127 8.47195 18.6687 8.52929V26.1387L13.8034 23.64ZM26.6687 21.6761C26.6687 22.7401 26.0994 23.6934 25.182 24.1627L21.3354 26.1387V8.52929C21.4914 8.47329 21.6541 8.43328 21.8034 8.35595L24.7514 6.84276C25.3274 6.54543 25.818 6.77601 26.002 6.88801C26.418 7.14268 26.6687 7.5973 26.6687 8.1053V21.6761Z"
                      fill="#FF8A00"
                    />
                  </svg>
                  <div>
                    <p className="text-[#ccc]">Adres</p>
                    <p className="text-[#1C0B24] font-semibold">
                      Esentepe Mah. Kasap Sok. Aslanbr <br /> Apt. No:11 Kat: 6
                      Daire: 6
                    </p>
                    <p className="tetx-[#1C0B24] font-semibold text-[14px] mt-[8px]">
                      Şişli / İSTANBUL
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              <div>
                <p className="text-[#1C0B24] text-[30px]">
                  İletişime{" "}
                  <span className="text-[#FF8A00] font-semibold">Geçin</span>
                </p>
              </div>
              <form action="">
                <div>
                  <Form />
                </div>
                <div className="flex justify-between py-[20px] flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-6">
                    <input type="checkbox" />
                    <p>Şartlar ve Koşulları kabul ediyorum</p>
                  </div>
                  <div>
                    <button className="bg-[#FF8A00] p-[10px] px-[20px] text-[#FFF]">
                      FORMU GÖNDER
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="">
              <img src={draw} alt="" />
              <div className="text-center pl-[30px]">
                <p>
                  “Enerjinin akışını yönlendiren kabiliyetimizle, elektrik
                  mühendisliğinde{" "}
                  <span className="text-[#FF8A00]">yeni ufuklar</span> açıyoruz.
                  “
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anasayfa;

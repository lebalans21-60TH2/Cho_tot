"use client";
import React, { useEffect, useState } from "react";
import { SubMenuData, SubBannerData } from "../../Constant/indexData.js";

// Danh muc
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import router
import { useRouter } from "next/navigation";
import Image from "next/image";

const SubBanner = () => {
  // import router =useState
  const router = useRouter();

  // const [liId, setLiId] = useState("");

  // useEffect(() => {
  //   if (liId === "electroniceDevice") {
  //     router.push("/pages/electroniceDevice");
  //   } else if (liId === "houseware") {
  //     router.push("/pages/houseware");
  //   }
  // });

  // const SwitchRouterPage = (event) => {
  //   // Truy cập thẻ li chứa nút này
  //   const liElement = event.target.closest("li");
  //   if (liElement) {
  //     // Cập nhật trạng thái với ID của thẻ li
  //     setLiId(liElement.id);
  //   } else {
  //     setLiId("Không tìm thấy thẻ li");
  //   }
  // };
  // const SwitchRouterPageMobile = (event) => {
  // const liElement = event.target.closest("li");
  //   if (liElement) {
  //     // Cập nhật trạng thái với ID của thẻ li
  //     setLiId(liElement.id);
  //      console.log('ID của div chứa nút này là:', liElement.id);
  //   } else {
  //     setLiId("Không tìm thấy thẻ li");
  //   }
  // };

  return (
    <>
      <div className="hidden 800px:top-[12vh] 800px:block 800px:bg-[#F4F4F4] ">
        <div className="flex justify-center pb-4">
          <div className="w-full max-w-[1024px] bg-[#FFFFFF] pb-[12px]">
            <div className="flex flex-row items-center justify-center content-center">
              {SubMenuData?.map((SubMenuData) => (
                <div
                  onClick={() => router.push("/pages/categories/electroniceDevice")}
                  key={SubMenuData.id}
                  className="flex flex-col items-center pt-[7px] w-[117px] text-center"
                >
                  <div>
                    <Image
                      className="w-[33px] h-[33px]"
                      src={SubMenuData.ImgUrl}
                      alt=""
                      width={33}
                      height={33}
                    />
                  </div>
                  <span className="leading-4 text-sm w-24">
                    {SubMenuData.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4 h-[380px] bg-[#F4F4F4] ">
          <div className="w-full max-w-[1024px] bg-[#FFFFFF]">
            <p className="text-base font-bold not-italic text-gray-900 pl-3 leading-[1.41] mt-1 mr-0 mb-3">
              Khám phá danh mục
            </p>
            <div className="flex flex-col h-[329px] list-none content-around justify-around bg-white flex-wrap overflow-x-auto p-0">
              {SubBannerData.map((SubBannerData) => (
                <li
                  id={SubBannerData.router}
                  key={SubBannerData.id}
                  className="w-[135px] flex items-center flex-no-wrap content-center justify-center cursor-pointer h-[140px]"
                >
                  <div
                   onClick={()=>router.push(`${SubBannerData.router}`)}
                    className="bg-cover flex items-center w-[80] h-full no-underline flex-col"
                  >
                    <div className="inline-block max-w-full overflow-hidden m-0 box-border ">
                      <Image
                        className="max-w-full block m-0 p-0"
                        src={SubBannerData.ImgUrl}
                        alt="hinhanh"
                        height={77}
                        width={77}
                      />
                    </div>
                    <span className="text-gray-900 text-sm text-center w-24 h-[42px] mt-2 ml-0 font-normal not-italic leading-5 overflow-hidden pb-2">
                      {SubBannerData.title}
                    </span>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* reponsive */}
      <div className="w-full overflow-hidden">
        {/* Danh muc  */}

        <div className="flex 800px:hidden relative justify-center bg-[#F4F4F4]">
          <div className="w-full max-w-[1024px] bg-[#F4F4F4] pb-4">
            <div className="mr-auto ml-auto h-[auto] p-0">
              <div className=" bg-white border border-t-0 border-[#e5e5e5] mt-0 mb-2 pb-2  ">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={15}
                  breakpoints={{
                    380: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    740: { slidesPerView: 4 },
                    1275: { slidesPerView: 5 },
                  }}
                >
                  <div className="relative">
                    <div className="overflow-x-auto bg-white flex items-start list-none border-t border-[#f4f4f4] w-full max-w-[800px] hide-scrollbar">
                      <div className="overflow-x-auto flex border-b border-[rgb(244,244,244)] px-0.5">
                        {/* Card item product */}
                        {SubMenuData?.map((SubMenuData) => (
                          <SwiperSlide className="swiper-slide-mobile">
                            <div
                              onClick={() =>
                                router.push("/pages/categories/electroniceDevice")
                              }
                              key={SubMenuData.id}
                              className="flex flex-col items-center pt-[7px] text-center"
                            >
                              <div>
                                <Image
                                  className="w-[33px] h-[33px]"
                                  src={SubMenuData.ImgUrl}
                                  alt=""
                                  width={33}
                                  height={33}
                                />
                              </div>
                              <span className="w-20 text-xs leading-tight">
                                {SubMenuData.title}
                              </span>
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                      <button
                        // onClick={() => swiper.slidePrev()}
                        style={{
                          position: "absolute",
                          top: "50%",
                          background:
                            "url(https://static.chotot.com/storage/chotot-icons/svg/next.svg) 50% no-repeat",
                          backgroundSize: "100%",
                          width: "28px",
                          height: "28px",
                          zIndex: "50",
                          cursor: "pointer",
                          display: "none",
                          transition: "all .2s ease-in-out",
                          outline: "none",
                          userSelect: "none",
                          display: "block",
                          pointerEvents: "none",
                          opacity: "0",
                          right: "-15px",
                          transform: "translateY(-50%)",
                          transition: "opacity .5s",
                          ointerEvents: "all",
                          opacity: "1",
                        }}
                      >
                        NEXT
                      </button>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* Kham pha danh muc */}
        <div className=" relative 800px:hidden mx-[auto] max-w-[960px] h-[40vh]">
          <div className="bg-[#FFF] pt-[12px] ">
            <p className="text-base font-bold not-italic text-gray-900 pl-3 mb-[12px] leading-[1.41] tracking-normal">
              Khám phá danh mục
            </p>
            <div className=" relative flex flex-col items-start flex-wrap bg-white h-[280px] list-none overflow-x-auto overflow-y-hidden p-0">
              {SubBannerData.map((SubBannerData) => (
                <div
                  id={SubBannerData.router}
                  key={SubBannerData.id}
                 onClick={()=>router.push(`${SubBannerData.router}`)}
                  className="w-[111.429px] h-[125px] outline-0 relative cursor-pointer"
                >
                  <div className="pl-0 bg-white flex flex-col flex-wrap overflow-x-auto p-0 h-[290px] list-none">
                    <li className="bg-cover flex items-center w-24 no-underline flex-col">
                      <div className="inline-block max-w-full overflow-hidden relative box-border m-0">
                        <img
                          className="w-[68px] h-[68px] rounded-[20px] "
                          src={SubBannerData.ImgUrl}
                          alt=""
                        />
                      </div>
                      <span className="text-[#222] leading-tight text-sm text-center w-[110px] h-[35px] mt-2 ml-0 font-normal overflow-hidden line-clamp-2">
                        {SubBannerData.title}
                      </span>
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBanner;

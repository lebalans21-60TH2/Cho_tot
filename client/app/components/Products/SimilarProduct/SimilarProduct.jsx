"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sugetionsproduct } from "../../Constant/indexData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SimilarProduct = () => {
  return (
    <>
    <div className="hidden 800px:flex 800px:justify-center 800px:bg-[#F4F4F4]">
      <div className="w-full max-w-[1024px] bg-[#F4F4F4] pb-4 mt-3 ">
        <div className="mr-auto ml-auto h-[auto] p-0">
          <div className=" bg-white border border-t-0 border-[#e5e5e5] mt-0 mr-3 mb-2 ml-3 ">
            <div className="font-bold p-3 flex justify-between mb-0">
              <h4>Tin đăng tương tự</h4>
              <div className="flex justify-center text-center">
                <span className="flex justify-end items-center cursor-pointer w-32 text-blue-700 text-sm font-bold not-italic p-0 m-0 outline-none border-none leading-[1.33]">
                  {" "}
                  Xem tất cả
                  <Image
                    src="https://static.chotot.com/storage/icons/svg/right_arrow_blue.svg"
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>{" "}
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                380: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                740: { slidesPerView: 4 },
                1275: { slidesPerView: 5 },
              }}
            >
              <div className="relative">
                <div className="overflow-x-auto bg-white flex items-start list-none border-t border-[#f4f4f4] w-full hide-scrollbar">
                  <div className="overflow-x-auto flex border-b border-[rgb(244,244,244)] px-0.5">
                    {/* Card item product */}
                    {sugetionsproduct?.map((sugetionsproduct) => (
                      <SwiperSlide>
                        <div
                          key={sugetionsproduct.id}
                          className="relative overflow-hidden bg-white border-[2px] border-[#d8d8d8] basis-[20%] p-3 w-[200px] min-w-[200px] transition-transform duration-300 ease-in-out hover:shadow-lbl mt-1 mb-[1px]"
                        >
                          <div className="relative block h-[100%]">
                            {/* Hinh anh */}
                            <div className="flex justify-center">
                              <div className="bg-cover h-[150px] rounded-sm inline-block overflow-hidden w-full">
                                <Image
                                  className="h-full object-cover w-full"
                                  src={sugetionsproduct.ImgUrl}
                                  width={125}
                                  height={125}
                                  alt=""
                                />
                                <div className="bottom-[4px] right-[8px] z-[9]">
                                  <button className="border-none cursor-pointer outline-none p-0">
                                    <Image
                                      src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                                      width={20}
                                      height={20}
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* phan ten san pham */}
                            <div className="pb-[10px] relative w-[100%]">
                              <div className="text-sm leading-6 whitespace-inherit mt-2 h-10 block truncate text-[#222] font-normal overflow-hidden m-0">
                                {sugetionsproduct.Nameproduct}
                              </div>
                              <div className="relative pb-[10px]">
                                <span className="text-[15px] font-bold leading-[1.33] text-[#d0021b] inline-block m-[2px_4px_0_0]">
                                  {sugetionsproduct.Price}đ
                                </span>
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#9b9b9b",
                                position: "Absolute",
                                bottom: "-6px",
                                width: "100%",
                                left: "0",
                                display: "flex",
                              }}
                            >
                              <img
                                className="rounded-[50%] w-[16px] h-[16px] object-cover mr-[3px]"
                                src="https://static.chotot.com/storage/chotot-icons/svg/user.svg"
                                alt=""
                              />

                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "11px",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  textTransform: "capitalize",
                                  marginTop: "2px",

                                  fontSize: "11px",
                                  marginRight: "5px",
                                }}
                              >
                                {sugetionsproduct.Datesubmited}
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "11px",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  textTransform: "capitalize",
                                  marginTop: "2px",
                                  maxWidth: "65px",
                                  fontSize: "11px",
                                }}
                              >
                                {sugetionsproduct.Address}
                              </span>
                            </div>
                          </div>
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
                >NEXT</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    {/* repomsive */}
    <div className="800px:hidden flex justify-center bg-[#F4F4F4]">
      <div className="w-full max-w-[1024px] bg-[#F4F4F4] pb-4 mt-3 ">
        <div className="mr-auto ml-auto h-[auto] p-0">
          <div className=" bg-white border border-t-0 border-[#e5e5e5] mt-0 mb-2 ">
            <div className="font-bold p-3 flex justify-between mb-0">
              <h4>Tin đăng tương tự</h4>
              <div className="flex justify-center text-center">
                <span className="flex justify-end items-center cursor-pointer w-32 text-blue-700 text-sm font-bold not-italic p-0 m-0 outline-none border-none leading-[1.33]">
                  {" "}
                  Xem tất cả
                  <Image
                    src="https://static.chotot.com/storage/icons/svg/right_arrow_blue.svg"
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>{" "}
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={2}
              spaceBetween={50}
              breakpoints={{
                380: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                740: { slidesPerView: 4 },
                1275: { slidesPerView: 5 },
              }}
            >
              <div className="relative">
                <div className="overflow-x-auto bg-white flex items-start list-none border-t border-[#f4f4f4] w-full hide-scrollbar">
                  <div className="overflow-x-auto flex border-b border-[rgb(244,244,244)] px-0.5">
                    {/* Card item product */}
                    {sugetionsproduct?.map((sugetionsproduct) => (
                      <SwiperSlide>
                        <div
                          key={sugetionsproduct.id}
                          className="relative overflow-hidden bg-white border-[2px] border-[#d8d8d8] basis-[20%] p-3 w-[200px] min-w-[200px] transition-transform duration-300 ease-in-out hover:shadow-lbl mt-1 mb-[1px]"
                        >
                          <div className="relative block h-[100%]">
                            {/* Hinh anh */}
                            <div className="flex justify-center">
                              <div className="bg-cover h-[150px] rounded-sm inline-block overflow-hidden w-full">
                                <Image
                                  className="h-full object-cover w-full"
                                  src={sugetionsproduct.ImgUrl}
                                  width={125}
                                  height={125}
                                  alt=""
                                />
                                <div className="bottom-[4px] right-[8px] z-[9]">
                                  <button className="border-none cursor-pointer outline-none p-0">
                                    <Image
                                      src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                                      width={20}
                                      height={20}
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* phan ten san pham */}
                            <div className="pb-[10px] relative w-[100%]">
                              <div className="text-sm leading-6 whitespace-inherit mt-2 h-10 block truncate text-[#222] font-normal overflow-hidden m-0">
                                {sugetionsproduct.Nameproduct}
                              </div>
                              <div className="relative pb-[10px]">
                                <span className="text-[15px] font-bold leading-[1.33] text-[#d0021b] inline-block m-[2px_4px_0_0]">
                                  {sugetionsproduct.Price}đ
                                </span>
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#9b9b9b",
                                position: "Absolute",
                                bottom: "-6px",
                                width: "100%",
                                left: "0",
                                display: "flex",
                              }}
                            >
                              <img
                                className="rounded-[50%] w-[16px] h-[16px] object-cover mr-[3px]"
                                src="https://static.chotot.com/storage/chotot-icons/svg/user.svg"
                                alt=""
                              />

                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "11px",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  textTransform: "capitalize",
                                  marginTop: "2px",

                                  fontSize: "11px",
                                  marginRight: "5px",
                                }}
                              >
                                {sugetionsproduct.Datesubmited}
                              </span>
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "11px",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  textTransform: "capitalize",
                                  marginTop: "2px",
                                  maxWidth: "65px",
                                  fontSize: "11px",
                                }}
                              >
                                {sugetionsproduct.Address}
                              </span>
                            </div>
                          </div>
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
                >NEXT</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default SimilarProduct;

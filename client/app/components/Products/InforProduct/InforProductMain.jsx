"use client";
import Reac, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Directional from '../InforProduct/Directional/Directional'
import "./button.css";

// import Product từ file JSON
import { InforProduct, Seller } from "../../Constant/indexData";
// import router
import { useRouter } from "next/navigation";

import NavbarContact from '../../Layout/NavbarContact'

const InforProductMain = () => {
  const router = useRouter();
  const [showPhone, setShowPhone] = useState("notShow");
  const [showNumberPhone, setShowNumberPhone] = useState("notShowNumberPhone");
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [scrollUser, setScrollUser] = useState("fixed");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);

    if (clientWindowHeight > 500) {
      setScrollUser("");
    } else {
      setScrollUser("fixed");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="hidden 800px:flex 800px:top-[15vh] 800px:justify-center 800px:bg-[#F4F4F4]">
        <div className="w-full max-w-[1024px] bg-[#F4F4F4] pb-4 min-h-[700px] mt-3">
          <div className="mr-auto ml-auto h-[auto] p-0">
            <div className=" bg-white border border-t-0 border-[#e5e5e5] mt-0 mr-3 mb-0 ml-3 ">
           {/* Phan dinh huong san pham */}
            <Directional/>

              <div className="mt-2 mr-0 mb-2 ml-0"></div>
              {InforProduct ? (
              <div className="flex">
                <div key={InforProduct.id} className="flex flex-col">
                  {/* Hình ảnh sản phẩm */}
                  <div className="max-w-[637px] bg-[#F4F4F4] h-[55vh] l-4 pr-4 ml-[20px]">
                    <Carousel slideInterval={4000}>
                      {InforProduct[0].ImgUrl && InforProduct[0].ImgUrl.map((item,i) => (
                        <Image
                        key={item.id}
                          className="rounded object-contain w-full h-full"
                          src={`${item.ImgProduct}`}
                          width={200}
                          height={200}
                          alt="..."
                        />
                      ))}
                    </Carousel>
                  </div>
                  {/* Phan ten va gia san pham */}
                  <div className="mt-[10px] max-w-[637px] mr-0 mb-2 ml-4">
                    <h1 className="text-base font-bold mt-5 mb-2">
                      {" "}
                 {InforProduct[0].nameProduct}
                    </h1>
                    <div className="bg-transparent whitespace-pre-wrap p-0 max-w-[637px] flex justify-between items-center text-ellipsis">
                      <span className="text-base text-red-700 font-bold">
                      {InforProduct[0].priceProduct}
                      </span>
                      <div className="right-auto bottom-auto">
                        <button className="bg-transparent cursor-pointer outline-none border border-[#c90927] rounded-full py-1.25 px-2.5 text-[#c90927] flex items-center">
                          <p className="m-0 pr-1 ">Lưu tin</p>
                          <img
                            src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                            width={17}
                            height={17}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* phan mo ta san pham */}
                  <div className="max-w-[637px] mt-[10px] mr-0 mb-2 ml-4">
                    <p className="pt-2 text-justify mb-2 whitespace-pre-line break-words text-[14px]">
                    {InforProduct[0].description}
                    </p>
                    <div className="w-full text-[14px]">
                      {showPhone === "notShow" ? (
                        <div className="underline cursor-pointer text-blue-700">
                          <span onClick={() => setShowPhone("showPhone")}>
                            Nhấn để hiện số: 0839233***
                          </span>
                        </div>
                      ) : (
                        <div className="cursor-pointer">
                          <span>Nhấn để hiện số:  {InforProduct[0].numberPhoneSeller}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Thong tin chi tiet */}
                  <div className="max-w-[637px] mt-[10px] mr-0 mb-2 ml-4">
                  {InforProduct[0].infor.map((item, i )=>(
                    <div key={item.id} className="h-[45px] w-[50%] float-left text-[13px] table">
                    <div className="flex items-start">
                      <div>
                        <Image
                          className="inline-block align-middle mr-2 w-5 h-5"
                          src={item.urlIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div>{item.title} {item.content}</div>
                    </div>
                  </div>
                  ))}
                  </div>
                  {/* Khu vuc */}

                  <div className="max-w-[637px] mt-[10px] mr-0 mb-2 ml-4">
                    <h5 className="text-gray-600 mb-0 text-sm pb-1 font-bold border-b border-[#ebebeb]">
                    Khu vực
                    </h5>
                    <div className="max-w-[637px] flex items-start text-[13px] mt-[5px]">
                      <div>
                        <img
                          className="inline-block align-middle mr-2 w-5 h-5"
                          src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div>
                        <span>
                        {InforProduct[0].address}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Hỏi người bán qua chat */}
                  <div className="block w-full mt-[10px] float-left mr-0 mb-2 ml-4">
                    <div></div>
                    <h5 className="text-gray-600 mb-0 text-sm pb-1 font-bold border-b border-[#ebebeb]">
                      Hỏi người bán qua chat
                    </h5>
                    <div className="p-0 h-[auto] max-w-[637px]">
                      <ul
                        style={{
                          display: "block",
                          overflowY: "hidden",
                          whiteSpace: "nowrap",
                          padding: "0",
                          margin: "0",
                          fontSize: "13px",
                        }}
                      >
                        <li
                          style={{
                            border: "1px solid #fe9900",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            margin: "10px",
                            display: "inline-block",
                            fontsize: "13px",
                            color: "#222",
                            backgroundcolor: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          Điện thoại này còn không?
                        </li>
                        <li
                          style={{
                            border: "1px solid #fe9900",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            margin: "10px",
                            display: "inline-block",
                            fontsize: "13px",
                            color: "#222",
                            backgroundcolor: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          Bạn có giao hàng không?
                        </li>
                        <li
                          style={{
                            border: "1px solid #fe9900",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            margin: "10px",
                            display: "inline-block",
                            fontsize: "13px",
                            color: "#222",
                            backgroundcolor: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          Sản phẩm còn bảo hành không?
                        </li>
                        <li
                          style={{
                            border: "1px solid #fe9900",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            margin: "10px",
                            display: "inline-block",
                            fontsize: "13px",
                            color: "#222",
                            backgroundcolor: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          Sản phẩm đã qua sửa chữa chưa?
                        </li>
                        <li
                          style={{
                            border: "1px solid #fe9900",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            margin: "10px",
                            display: "inline-block",
                            fontsize: "13px",
                            color: "#222",
                            backgroundcolor: "#fff",
                            cursor: "pointer",
                          }}
                        >
                          Có phụ kiện đi kèm sản phẩm không?
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Chia se tin cho ban be */}
                  <div className="max-w-[637px] mt-[10px] mr-0 mb-2 ml-4">
                    <strong className="text-[#353535] font-bold">
                      Chia sẻ tin đăng này cho bạn bè:
                    </strong>
                    <div className="mt-1.25 border-t border-[#eeeeee]"></div>
                    <div className="mb-[10px] block">
                      <div className="mt-2 mr-2 mb-0 ml-2 cursor-pointer inline-block">
                        <Image
                          src="https://static.chotot.com/storage/chotot-icons/svg/circle-facebook.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                      <div className="mt-2 mr-2 mb-0 ml-2 cursor-pointer inline-block">
                        <Image
                          src="https://static.chotot.com/storage/chotot-icons/svg/circle-messenger.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                      <div className="mt-2 mr-2 mb-0 ml-2 cursor-pointer inline-block">
                        <Image
                          src="https://static.chotot.com/storage/chotot-icons/svg/circle-zalo.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                      <div className="mt-2 mr-2 mb-0 ml-2 cursor-pointer inline-block">
                        <Image
                          src="https://static.chotot.com/storage/chotot-icons/svg/circle-copylink.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mt-1.25 border-t border-[#eeeeee]"></div>
                  </div>
                  {/*  */}
                  <div className="max-w-[637px] mt-[10px] mr-0 mb-2 ml-4 text-[85%]">
                    <div className=" w-full">
                      <Image
                        className="w-[40px] float-left pr-[5px]"
                        src="https://static.chotot.com/storage/marketplace/shield-iconx4.png"
                        width={40}
                        height={17}
                        alt=""
                      />
                      <div className="w-[80%] float-left pb-1 text-[85%]">
                        <p>
                          Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui
                          lòng báo cáo tin đăng hoặc liên hệ CSKH để được trợ
                          giúp. Xem thêm ››
                        </p>
                      </div>
                    </div>
                    <div className="w-full inline-flex justify-center mt-[10px] mr-0 mb-2 ml-0">
                      <button className="mr-[10px] cursor-pointer block border-0 pl-2 pr-2 pt-[1px] pb-[1px] text-[12px] bg-[#ffffff] hover:bg-[#e6e6e6] rounded">
                        Báo tin không hợp lệ
                      </button>
                      <button className="mr-[10px] cursor-pointer block border-0 pl-2 pr-2 pt-[1px] pb-[1px] text-[12px] bg-[#ffffff] hover:bg-[#e6e6e6] rounded">
                        Báo tin đã bán
                      </button>
                      <button className="mr-[10px] cursor-pointer block border-0 pt-[1px] pr-1 pb-0 pl-1 text-[12px] text-white bg-[#fe9900] hover:bg-[#cc7a00] rounded">
                        Đăng nhanh - Bán gọn
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[33.33333%] ml-2 ">
                  <div className={`${scrollUser}`}>
                    {/* thong tin ng ban */}
                    <div className="block">
                      <div className="mb-2.5 py-2.5 border-t border-[#e5e5e5]">
                        <div className="flex">
                          <div className="w-[56px] h-[56px] rounded-[50%] inline-block p-0 align-middle bg-contain bg-white border-1 border-solid border-[#e5e5e5]">
                            <span className="box-border  object-cover inline-block overflow-hidden w-[auto] bg-transparent opacity-100 border-0 m-0 p-0 max-w-full">
                              <img
                                className="rounded-[50%] w-[56px] h-[56px] object-cover"
                                src={Seller[0].imgAvatar}
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="flex-1 pl-2 w-full max-w-[calc(100%-50px)]">
                            <div className="flex items-center">
                              <div className="text-[13px] overflow-hidden flex-1">
                                {" "}
                                <b>{Seller[0].nameSeller}</b>
                              </div>
                              <div className="text-[13px] overflow-hidden flex-[.2]">
                                <Image
                                  src="https://static.chotot.com/storage/chotot-icons/png/house.png"
                                  width={25}
                                  height={25}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="flex mb-[2px] text-[13px]">
                              <div className="flex">
                                <Image
                                  className="mr-[5px] border-none"
                                  src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                                  width={13}
                                  height={13}
                                  alt=""
                                />
                                <Image
                                  className="mr-[5px] border-none"
                                  src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                                  width={13}
                                  height={13}
                                  alt=""
                                />
                                <Image
                                  className="mr-[5px] border-none"
                                  src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                                  width={13}
                                  height={13}
                                  alt=""
                                />
                                <Image
                                  className="mr-[5px] border-none"
                                  src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                                  width={13}
                                  height={13}
                                  alt=""
                                />
                                <Image
                                  className="mr-[5px] border-none"
                                  src="https://static.chotot.com/storage/marketplace/common/pf_rating_half_active_icon.svg"
                                  width={13}
                                  height={13}
                                  alt=""
                                />
                              </div>
                              <strong className="mr-[2px]">{Seller[0].evaluate}</strong>
                              <span className="text-[#5291ff] font-bold">
                                (126 đánh giá)
                              </span>
                            </div>
                            <div className="text-gray-500 flex text-[11px]">
                              <div className="text-3xl text-green-600 leading-[.9rem] w-[13px] text-center inline-block mr-[5px]">
                                •
                              </div>
                              <p>Hoạt động 1 giờ trước</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* fllow and watch shop */}
                    <div className="flex items-center justify-between mt-4 gap-2 mb-[10px]">
                      <button className="bg-white text-[#222] border border-silver w-[49%] h-8 text-xs leading-3 flex justify-center items-center rounded-md font-bold">
                        <span className="text-base mr-1 font-normal ">+</span>
                        theo doi
                      </button>
                      <button className="bg-white text-[#222] border border-silver w-[49%] h-8 text-xs leading-3 flex justify-center items-center rounded-md font-bold ">
                        <svg
                          className="mr-[4px]"
                          width="16px"
                          height="16px"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="3"
                          stroke="#000000"
                          fill="none"
                        >
                          <path d="M52,27.18V52.76a2.92,2.92,0,0,1-3,2.84H15a2.92,2.92,0,0,1-3-2.84V27.17" />
                          <polyline points="26.26 55.52 26.26 38.45 37.84 38.45 37.84 55.52" />
                          <path d="M8.44,19.18s-1.1,7.76,6.45,8.94a7.17,7.17,0,0,0,6.1-2A7.43,7.43,0,0,0,32,26a7.4,7.4,0,0,0,5,2.49,11.82,11.82,0,0,0,5.9-2.15,6.66,6.66,0,0,0,4.67,2.15,8,8,0,0,0,7.93-9.3L50.78,9.05a1,1,0,0,0-.94-.65H14a1,1,0,0,0-.94.66Z" />
                          <line x1="8.44" y1="19.18" x2="55.54" y2="19.18" />
                          <line x1="21.04" y1="19.18" x2="21.04" y2="8.4" />
                          <line x1="32.05" y1="19.18" x2="32.05" y2="8.4" />
                          <line x1="43.01" y1="19.18" x2="43.01" y2="8.4" />
                        </svg>
                        Xem cua hang
                      </button>
                    </div>
                    {/* Thanh toan vs dam bao khi mua ngay */}
                    <button className="flex items-center rounded-md bg-[#f8f8f8] p-3 w-full text-black mb-[12px]">
                      <img
                        src="https://static.chotot.com/storage/escrow/icons/buy_protection.svg"
                        alt=""
                      />
                      <div className="text-sm">
                        <b>Thanh toán đảm bảo khi MUA NGAY</b>
                        <br />
                        <small>Hoàn tiền 100% nếu không nhận được hàng</small>
                      </div>
                      <Image
                        className="ml-[auto] rotate-180"
                        src="https://static.chotot.com/storage/escrow/icons/back.svg"
                        width={10}
                        height={10}
                        alt=""
                      />
                    </button>
                    {/* Mua ngay va dat coc */}
                    <div>
                      <div className="mb-[8px]">
                        <div className="h-[42px] cursor-pointer pt-2 pr-2 pb-2 pl-2 rounded-md text-xs text-white bg-[#589f39] font-semibold text-center flex items-center justify-center">
                          <span className="font-bold text-[14px]">
                            Mua ngay & Dat coc
                          </span>
                        </div>
                      </div>
                      {showNumberPhone === "notShowNumberPhone" ? (
                        <div className="mb-[8px]">
                          <div className="h-[42px] cursor-pointer pt-2 pr-2 pb-2 pl-2 rounded-md text-xs text-[#589f39] bg-[#fff] font-semibold border-[1px] border-solid border-[#32323]">
                            <div className="flex justify-between items-center font-bold">
                              <span>
                                <Image
                                  className="inline-block h-6 w-6 align-middle mr-2"
                                  src="https://static.chotot.com/storage/chotot-icons/svg/phone_call.svg"
                                  width={24}
                                  height={24}
                                  alt=""
                                />
                                0832743***
                              </span>
                              <span
                                onClick={() =>
                                  setShowNumberPhone("showNumberPhone")
                                }
                              >
                               Bấm để hiện số
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-[8px]">
                          <div className="h-[42px] cursor-pointer pt-2 pr-2 pb-2 pl-2 rounded-md text-center flex items-center justify-center text-xs text-[#589f39] bg-[#fff] font-semibold border-[1px] border-solid border-[#32323]">
                            <span>0832743857</span>
                          </div>
                        </div>
                      )}
                      <div className="mb-[8px]">
                        <div className="h-[42px] cursor-pointer pt-2 pr-2 pb-2 pl-2 rounded-md text-xs text-[#589f39] bg-[#fff] font-semibold border-[1px] border-solid border-[#32323]">
                          <div className="flex justify-between items-center font-bold">
                            <span>
                              <Image
                                className="inline-block h-6 align-middle mr-2"
                                src="https://static.chotot.com/storage/chotot-icons/png/chat_green.png"
                                width={24}
                                height={24}
                                alt=""
                              />
                            </span>
                            <span>Chat với người bán</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-1 mb-2 min-h-[108px]">
                      <div className="">
                        <img
                          className="w-[80px] h-[auto] mr-[15px] float-left align-middle"
                          src="https://st.chotot.com/storage/images/tips/2_mobile.png"
                          alt=""
                        />
                      </div>
                      <div className="text-[13px]">
                        <p>NÊN sử dụng tính năng 'Đặt cọc qua Chợ </p>
                        <p>Tốt'.nếu có nhu cầu đặt cọc.</p>
                        <p>hoặc chuyển tiền trước cho Người bán</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>): null}
            </div>
          </div>
        </div>
      </div>
      {/* Phan Reponsive */}
      <div></div>
      <div className="h-full w-full 800px:hidden z-50 flex flex-col">
        <header className=" leading-[1.5] h-[56px] bg-[#ffba00] w-full fixed top-0 z-[100] text-[0.875rem]">
          <div
            style={{ flexDirection: "row-reverse" }}
            className="flex flex-row justify-center min-w-[320px] m-[auto]"
          >
            <div className="max-w-[100%] w-[100%] pr-[50px] text-center flex items-center justify-center mr-[12px] ">
              <div onClick={()=>router.push("/")} className="justify-center text-[#1952ba] w-[142px] h-[52px] inline-flex items-center">
                <img
                  style={{ objectPosition: " 0 0" }}
                  className="object-contain mr-[-94px] h-[30px]"
                  src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-[16px] justify-center items-center">
              <button className="bg-[#00000000] border-0 outline-0 p-0 pl-1 z-[1] w-[50%] text-[1.25rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="monochrome"
                  viewBox="0 0 20 20"
                  width="1em"
                  height="1em"
                  fill="none"
                >
                  <path
                    d="M19.307 9.397H2.455l6.867-7.334a.718.718 0 00-.004-.978.572.572 0 00-.443-.193.603.603 0 00-.439.196L0 10.092l8.266 8.82a.604.604 0 00.441.196.603.603 0 00.442-.195.725.725 0 00.012-.988L2.42 10.78c.013 0 .025.004.039.004h16.849a.693.693 0 000-1.387"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div
          style={{ border: "1px solid #e5e5e5" }}
          className="800px:hidden pt-[60px] bg-[#fff] border-t-0"
        >
          {/* dieuhuong */}
          <div className="w-full overflow-auto flex flex-col items-center justify-between ">
            <div
              style={{
                maxWidth: "calc(100vw - 12px)",
                alignSself: "flex-start",
              }}
            >
              <div className="max-w-[637px] relative">
                <ol
                  style={{
                    scrollbarWidth: "none",
                    whiteSpace: "nowrap",
                    padding: "0 15px",
                  }}
                  className="w-[97%] bg-[#00000000] overflow-y-hidden overflow-x-scroll "
                >
                  <li className="liDirections">Cho tot</li>
                  <li className="liDirections">Dien thoai</li>
                  <li className="liDirections">Sam sung</li>
                  <li className="liDirections">Sam sung galaxy</li>
                  <li className="liDirections">Sam sung galaxy a30</li>
                  <li className="liDirections">Sam sung galaxy a30</li>
                </ol>
              </div>
            </div>
            <div className="w-full float-left relative px-[15px]">
              <div className="flex my-[10px] justify-between ">
                <button className="buttonBack">Về danh sách</button>
                <button className="buttonNextAds">Tin tiếp</button>
              </div>
            </div>
          </div>
          <div className="my-[10px]"></div>
          {/* Hinh anh va thong tin  */}
          {InforProduct ? ( 
          <div className="relative px-[15px]">
            {/* slide hình ảnh */}
            <div className="relative w-full h-[30vh] text-[#3232] bg-[#aeaeae]">
              <Carousel slideInterval={4000}>
                   {InforProduct[0].ImgUrl && InforProduct[0].ImgUrl.map((item,i) => (
                <Image
                 key={item.id}
                  className="rounded object-contain w-full h-full"
                  src={`${item.ImgProduct}`}
                  width={200}
                  height={200}
                  alt="..."
                />
                 ))}
              </Carousel>
            </div>
            {/* Thong tin va ten san pham */}
            <div className="mt-[10px] ">
              <h1 className="text-[16px] font-bold mt-[20px] mb-[10px]">
                  {InforProduct[0].nameProduct}
              </h1>
              {/* gia san pham */}
              <div className="my-[10px] bg-[#00000000] text-ellipsis p-0 max-w-full flex justify-between items-center">
                <div className="text-[16px] text-[#c90927] font-bold">
                   {InforProduct[0].priceProduct} đ
                </div>
                <div className="right-[auto] bottom-auto relative ">
                  <button
                    style={{
                      background: "transparent",
                      cursor: "pointer",
                      outline: "none",
                      border: "1px solid #c90927",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      color: "#c90927",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p>Lưu tin</p>
                    <img
                      className="w-[20px] h-[20px] ml-[5px]"
                      src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="h-1"></div>
              {/*Thong tin nguoi ban */}
              <div className="w-full border-t-[1px] border-solid border-[#e5e5e5]">
                <div className="mb-[10px] py-[10px] ">
                  <div className="flex">
                    {/* avatar ng ban */}
                    {Seller[0].imgAvatar ? (
                       <div
                       style={{
                         display: "inline-block",
 
                         padding: "0",
                         verticalAlign: " middle",
                        
                         backgroundSize: "contain",
                         backgroundColor: "#fff",
                         position: "relative",
                       }}
                       className="w-[56px] h-[56px] "
                     >
                       <span>
                        <img className="inline-block rounded-[50%] w-[56px] h-[56px] object-cover" src={Seller[0].imgAvatar} alt="" />
                       </span>
                     </div>
                    ):(
                      <div
                      style={{
                        display: "inline-block",

                        padding: "0",
                        verticalAlign: " middle",
                        background:
                          "url(https://static.chotot.com/storage/default_images/default-avatar.webp) no-repeat",
                        backgroundSize: "contain",
                        backgroundColor: "#fff",
                        position: "relative",
                      }}
                      className="w-[56px] h-[56px] "
                    >
                      <span></span>
                    </div>
                    )}
                   
                    {/* Ten ng ban */}
                    <div
                      style={{ maxWidth: "calc(100% - 50px)" }}
                      className="flex-1 pl-[8px] w-full "
                    >
                      <div className="flex items-center">
                        <div
                          style={{
                            textIndent: "2px",
                            fontDize: " 13px",
                            flex: "1 1",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <b className="mr-[5px]">{Seller[0].nameSeller}</b>
                        </div>
                        <div>
                          <button className="rounded-[4px] text-[#000] border-[1px] border-[#c0c0c0] min-w-[96px] h-[24px] text-sm leading-[12px] flex justify-center items-center">
                            Xem trang
                          </button>
                        </div>
                      </div>
                      {/* Danh gia */}
                      <div className="flex mb-[2px] text-sm items-center">
                        <div className="flex ">
                          <img
                            className="align-middle mr-[5px] w-[13px]"
                            src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                            alt=""
                          />
                          <img
                            className="align-middle mr-[5px] w-[13px]"
                            src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                            alt=""
                          />
                          <img
                            className="align-middle mr-[5px] w-[13px]"
                            src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                            alt=""
                          />
                          <img
                            className="align-middle mr-[5px] w-[13px]"
                            src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                            alt=""
                          />
                          <img
                            className="align-middle mr-[5px] w-[13px]"
                            src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg"
                            alt=""
                          />
                        </div>
                        <strong className="text-[#222] font-bold leading-[1.8] ml-[5px]">
                        {Seller[0].evaluate}
                        </strong>

                        <span className="ml-[5px] text-[13px] font-bold leading-[2] text-[#306bd9]">
                          (17 danh gia)
                        </span>
                      </div>
                      <div className="text-[11px] text-[#9b9b9b] flex">
                        <div className="text-[30px] text-[#589f39] leading-[16px] w-[13px] text-center inline-block ">
                          •
                        </div>
                        <span className="ml-[5px]">Chưa hoạt động</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* mo ta san pham */}

              <p
                style={{
                  paddingTop: "10px",
                  textAlign: "justify",
                  marginBottom: "10px",
                  whiteSpace: "pre-line",
                  overflowWrap: "break-",
                }}
              >
               {InforProduct[0].description}
              </p>
            </div>
            {/* opption xem them sdt */}
            <div className="my-[15px] w-full ">
              {showPhone === "notShow" ? (
                <div className="decoration-1 cursor-pointer text-[#33659c]">
                  <span onClick={() => setShowPhone("showPhone")}>
                    Nhấn để hiện số: 0839233***
                  </span>
                </div>
              ) : (
                <div className="decoration-1 cursor-pointer text-[#33659c]">
                  <span>Nhấn để hiện số: {InforProduct[0].numberPhoneSeller}</span>
                </div>
              )}
            </div>
            {/* Thong tin chi tiet */}
            <div className="w-full ">
              {/* the thong tin */}
              {InforProduct[0].infor.map((item, i )=>(
              <div className="my-[15px] h-[35px] text-[13px] table ">
                <div key={item.id} className="flex items-start">
                  <div>
                    <img
                      className="w-[20px] h-[20px] mr-[10px] align-middle inline-block"
                      src={item.urlIcon}
                      alt=""
                    />
                  </div>
                  <div>
                    <span>{item.title}</span>
                    <span>{item.content}</span>
                  </div>
                </div>
              </div>
                  ))}
             
            </div>
            {/* dia diem */}
            <div className="w-full ">
              <h5 className="text-[#8f8297] text-[14px] font-bold border-b-[1px] border-solid border-[#ebebeb] pb-[5px]">
               Khu vực
              </h5>
              <div className="w-full flex items-start">
                <div>
                  <img
                    className="w-[20px] h-[20px] inline-block align-middle mr-[10px]"
                    src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg"
                    alt=""
                  />
                </div>
                <span className="text-sm">
                  {InforProduct[0].address}
                </span>
              </div>
            </div>
            {/* Hoi nguoi ban qua chat */}
            <div className="w-full min-h-[100px]">
              <div className="mt-[5px]">
                <div className="my-[5px] mr-[5px] border-b-[1px] border-solid border-[#cacaca] text-[#777] text-[14px] font-bold">
                Hỏi người bán qua chat
                </div>
                <div className="p-o h-[auto]">
                  <ul
                    style={{ whiteSpace: "nowrap" }}
                    className="overflow-y-hidden p-0 m-0 "
                  >
                    <li
                      style={{
                        border: "1px solid #fe9900",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        margin: "10px",
                        display: "inline-block",
                        fontSize: "13px",
                        color: "#222",
                        backgroundColor: " #fff",
                        cursor: "pointer",
                      }}
                    >
                      Mặt hàng này còn không?
                    </li>
                    <li
                      style={{
                        border: "1px solid #fe9900",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        margin: "10px",
                        display: "inline-block",
                        fontSize: "13px",
                        color: "#222",
                        backgroundColor: " #fff",
                        cursor: "pointer",
                      }}
                    >
                      Bạn có ship hàng không?
                    </li>
                    <li
                      style={{
                        border: "1px solid #fe9900",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        margin: "10px",
                        display: "inline-block",
                        fontSize: "13px",
                        color: "#222",
                        backgroundColor: " #fff",
                        cursor: "pointer",
                      }}
                    >
                      Sản phẩm đã qua sửa chữa chưa?
                    </li>
                    <li
                      style={{
                        border: "1px solid #fe9900",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        margin: "10px",
                        display: "inline-block",
                        fontSize: "13px",
                        color: "#222",
                        backgroundColor: " #fff",
                        cursor: "pointer",
                      }}
                    >
                      Có phụ kiện đi kèm theo sản phẩm không?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Chia se tin dang nay cho ban be */}
            <div className="min-h-[87px] w-[100%]">
              <strong>Chia sẻ tin đăng này cho bạn bè:</strong>
              <div className="mt-0 border-t-[1px] border-solid border-[#EEEEEE]"></div>
              <div className="mb-[10px]">
                <div className="cursor-pointer mt-[10px] mr-[5px] ml-[10px] mb-0 inline-block ">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/circle-facebook.svg"
                    alt=""
                  />
                </div>
                <div className="cursor-pointer mt-[10px] mr-[5px] ml-[10px] mb-0 inline-block ">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/circle-zalo.svg"
                    alt=""
                  />
                </div>
                <div className="cursor-pointer mt-[10px] mr-[5px] ml-[10px] mb-0 inline-block ">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/circle-viber.svg"
                    alt=""
                  />
                </div>
                <div className="cursor-pointer mt-[10px] mr-[5px] ml-[10px] mb-0 inline-block ">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/circle-sms.svg"
                    alt=""
                  />
                </div>
                <div className="cursor-pointer mt-[10px] mr-[5px] ml-[10px] mb-0 inline-block ">
                  <img
                    className="w-[40px] h-[40px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/circle-copylink.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Button dang nhanh ban gon */}
            <div className="min-h-[32px]">
              <button className="text-[#1952ba] bg-[#fe9900] py-[6px] px-[16px] rounded-[4px] w-full border-none text-center inline-block">
                Đăng nhanh bán gọn
              </button>
            </div>
            {/* report tin */}
            <div className="min-h-[113px] w-full ">
              <div className="flex w-full flex-col-reverse">
                <div className="w-full inline-flex justify-center mt-[-10px]">
                  <button className="w-full my-[20px] mx-[10px] border-0 px-[8px] text-[12px] bg-[#fff] border-[#ccc]">
                    Báo tin không hợp lệ
                  </button>
                  <button className="w-full my-[20px] mx-[10px] border-0 px-[8px] text-[12px] bg-[#fff] border-[#ccc]">
                    Báo tin đã bán
                  </button>
                </div>
                <div className="text-[85%] pt-2 pr-1 pb-1 pl-0">
                  <img
                    className="w-[40px] float-left pr-[5px] align-middle"
                    src="https://static.chotot.com/storage/marketplace/shield-iconx4.png"
                    alt=""
                  />
                  <div className="w-[85%] float-left pb-[5px]">
                    <em>
                      Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng
                      báo cáo tin đăng hoặc liên hệ CSKH để được trợ giúp.&nbsp;
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ):null}
          {/* Cam ket*/}
          <div className="w-full min-h-[190px]">
            <div className="m-[15px] border-t-[1px] border-solid border-[#EEEEEE]">
              <div className="bg-[#fff] min-h-[108px] p-[3px] mb-[10px]">
                <img
                  className="w-[100px] h-[auto] mr-[15px] float-left align-middle"
                  src="https://static.chotot.com/storage/images/tips/6_mobile.png"
                  alt=""
                />
                <div className="text-[13px] text-left pt-[20px] ">
                  <p className="text-[13px]">
                    Lựa chọn hình thức giao hàng an toàn-uy tín-hiệu quả, khi
                    nhận hàng hãy kiểm tra cẩn thận chất lượng sản phẩm sau đó
                    mới trả tiền.
                  </p>
                  <a
                    className="text-[13px] text-[#fe9900] mt-[5px] text-left"
                    href="/"
                  >
                    Tìm hiểu thêm »
                  </a>
                </div>
              </div>
            </div>
          </div>
          <NavbarContact/>
        </div>
      </div>
    </div>
  );
};

export default InforProductMain;

"use client";
import Header from "../../../components/Header/Header";
import CarouselBanner from "../../../components/Home/CarouselBanner/CarouselBanner";
import FloatButton from "../../../components/Layout/FloatButton";
import FooterEctroniceDevice from "../../../components/Footer/FooterEctroniceDevice";
// import component
import ChooseLocation from "../../../components/Layout/ChooseLocation";
import Footer from "../../../components/Footer/Footer";
import MenuReponsive from "../../../components/Layout/MenuReponsive";

// import DATA subbanner cua đồ điện tử
import {
  SubMenuElectroniceDevice,
  CategoriesElectroniceDevice,
  homeProducts,
  OfficalStoreData,
  PrestigiousPartnerData,
} from "../../../components/Constant/indexData";

// import router

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Đảm bảo rằng code chỉ chạy trên client
    const fullUrl = window.location.href; // Trả về toàn bộ URL hiện tại
   
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://static.chotot.com/storage/banner/Theming-HuongThu.png)",
          backgroundRepeat: " no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: " 100%",
        }}
        className="hidden 800px:block"
      >
        <Header />
        
        <div className="mt-[15vh]">
          <ChooseLocation />
        </div>
        <div className="mx-[auto] my-[0] max-w-[960px]">
          <div className="text-center relative mb-[12px] min-h-[180px]">
            {/* Carousel bannrt */}
            <div className="py-[12px] px-[16px] my-0 mx-[auto] bg-[#FFFFFF] rounded-tl-lg rounded-tr-lg ">
              <div className="min-h-[234px] h-[10vh] rounded-[8px]">
                <CarouselBanner />
              </div>
            </div>
            {/* phần submenu */}
            <div className="pt-0 px-[12px] pb-[12px] mx-[auto] my-0 max-w-[960px] bg-[#FFFFFF] rounded-bl-lg rounded-br-lg">
              <div className="text-center flex items-stretch bg-[#fff] justify-between list-none overflow-x-auto">
                {SubMenuElectroniceDevice.map((SubMenuElectroniceDevice) => (
                  <div
                    key={SubMenuElectroniceDevice.id}
                    className="outline-0 flex-grow-0 flex-shrink-0 flex-auto min-h-[60px] mr-0 w-[95px] "
                  >
                    <div className="text-[#000000] flex outline-0 relative flex-col items-center pt-[7px]">
                      <div className="z-[0] h-[33px] ">
                        <div className="h-fit relative w-fit ">
                          {/* div cho phan icon mới  */}
                          <div></div>
                          {/* div icon */}
                          <div className="inline-block max-w-full overflow-hidden relative m-0 ">
                            <img
                              className="w-[33px] h-[33px]"
                              src={SubMenuElectroniceDevice.ImgUrl}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <span className="leading-[18px] text-[14px] w-full my-[6px] mx-0">
                        {SubMenuElectroniceDevice.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Phần danh muc nổi bật */}
            <div className="mx-[auto] my-2 max-w-[960px] ">
              <div className="bg-[#FFFFFF] p-[16px] rounded-[8px] ">
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-bold">Danh mục nổi bật</h2>
                  <div className="flex items-center">
                    <span className="font-bold mr-[4px] text-[#2a70df]">
                      Xem tất cả tin đăng
                    </span>
                    <img
                      className="w-[12px] h-[12px]"
                      src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/chevron_right.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="flex h-[115px] content-between items-start bg-[#fff] flex-col flex-wrap list-none overflow-x-auto p-0">
                    {CategoriesElectroniceDevice.map(
                      (CategoriesElectroniceDevice) => (
                        <li
                          key={CategoriesElectroniceDevice.id}
                          className="px-[4px] pb-[8px] overflow-hidden h-[112px] pt-0 outline-0 rounded-[8px] list-none cursor-pointer w-[80px]"
                        >
                          <div className="bg-cover flex items-center flex-col ">
                            <div className="inline-block max-w-full overflow-hidden relative m-0 ">
                              <img
                                className=""
                                src={CategoriesElectroniceDevice.ImgUrl}
                                alt=""
                              />
                            </div>
                            <h3 className="leading-[16px] text-[14px] mt-[4px] text-center ml-0 overflow-hidden text-ellipsis">
                              {CategoriesElectroniceDevice.title}
                            </h3>
                          </div>
                        </li>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Có gì hot hôm nay */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div
                style={{
                  background:
                    "linear-gradient(rgb(255, 154, 0) 0%, rgb(255, 255, 255) 50%)",
                  borderRadius: "8px",
                  padding: "16px 0px 16px 16px",
                }}
              >
                <h2 className="text-[18px] m-0 text-[#fff] mb-[8px] font-bold leading-[1.5] text-left">
                  Có gì hot hôm nay
                </h2>
                <div>
                  <div
                    style={{
                      scrollbarWidth: "thin",
                      whiteSpace: "nowrap",
                    }}
                    className="flex gap-[8px] list-none mb-[16px] overflow-x-auto pt-0 pl-0 pr-0 pb-[4px] w-full "
                  >
                    {homeProducts.map((homeProducts) => (
                      <div className="rounded-[4px] min-w-[170px] border-b-[1px] border-solid border-[#F4F4F4] hover:shadow-bl border-r-[1px] p-[8px] basis-[20%] bg-[#fff]">
                        <div className="flex justify-center relative h-[20vh]">
                          <div
                            style={{
                              background:
                                "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                              backgroundsize: "cover",
                              borderRadius: "2px",
                              display: "inline-block",
                              overflow: "hidden",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <img
                              className="h-full object-cover absolute w-full"
                              src={homeProducts.ImgUrl}
                              alt=""
                            />
                          </div>
                          <div className="absolute bottom-[4px] right-[8px] z-[9]">
                            <img
                              className="h-full object-cover absolute w-full"
                              src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                              alt=""
                            />
                          </div>
                          <div></div>
                        </div>
                        <div className="pb-[8px]">
                          <div className="text-[#222] block text-[14px] h-[65px] leading-[1.43] mt-[8px] whitespace-normal font-[400] overflow-hidden text-ellipsis">
                            <h3>{homeProducts.Nameproduct}</h3>
                          </div>
                        </div>
                        <div className="text-left">
                          <span className="text-[#d0021b] inline-block text-[14px] font-bold leading-[1.3] mt-[2px] mr-[4px] mb-0 ml-0">
                            {homeProducts.Price} d
                          </span>
                        </div>
                        <div className="w-full text-[#9b9b9b] text-left">
                          <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                            <img
                              className="align-middle inline-block"
                              src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                              alt=""
                            />
                            <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                              {homeProducts.Address}
                            </span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pr-[16px]">
                  <button className="w-full flex justify-center cursor-pointer bg-[#fff] border-[#c0c0c0] border-[1px] border-solid rounded-[4px] py-[9px] px-[19px] font-bold text-[1rem] leading-[1.25] ">
                    Xem tất cả sản phẩm
                  </button>
                </div>
              </div>
            </div>

            {/* Offical store */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "16px 0px 16px 16px",
                }}
              >
                <h2 className="text-[18px] m-0 text-[#222] mb-[8px] font-bold leading-[1.5] text-left">
                  Official Store
                </h2>
                <div className="overflow-x-hidden">
                  <div
                    style={{
                      scrollbarWidth: "thin",
                      whiteSpace: "nowrap",
                    }}
                    className="flex items-center flex-col flex-wrap list-none my-0 mx-[-16px] overflow-x-auto py-0 px-[16px]"
                  >
                    <div className="flex gap-[16px] mt-[16px]">
                      {OfficalStoreData.map((item, i) => (
                        <div
                          key={item.id}
                          className="w-[445px] border-[1px] rounded-tl-lg rounded-tr-lg border-solid border-[#e8e8e8] hover:shadow-bl"
                        >
                          {/* Thông tin shop */}
                          <div className="flex items-center w-full gap-[12px] p-[12px]">
                            <img
                              className="w-[32px] h-[32px] rounded-[50%]"
                              src={item.logoImg}
                              alt=""
                            />
                            <h3> {item.nameStore}</h3>
                            <img
                              src="https://static.chotot.com/storage/chotot-icons/svg/verify-fill.svg"
                              alt=""
                            />
                            <div className="ml-[auto] ">
                              <button className="bg-[#fff] border-[#c0c0c0] border-solid border-[1px] font-bold rounded-[7px] text-[.75rem] leading-[1] py-[5px] px-[11px]">
                                Xem shop
                              </button>
                            </div>
                          </div>
                          {/* Danh sách sanr phẩm */}
                          <div className="flex flex-nowrap gap-[1px] overflow-y-auto border-t-[1px] border-solid border-[#e8e8e8]">
                            {item.listProduct.map((item, i) => (
                              <div
                                key={item.id}
                                className="border-b-[none] flex-1 max-w-[33.33%] min-w-[auto] p-[8px] hover:shadow-bl"
                              >
                                <div className="relative justify-center flex h-[20vh] ">
                                  <div
                                    style={{
                                      background:
                                        "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                                      backgroundSize: "cover",
                                      borderRadius: " 2px",
                                      display: "inline-block",
                                      overflow: "hidden",
                                      position: "relative",
                                      width: "100%",
                                    }}
                                  >
                                    <img
                                      className="h-full object-cover absolute w-full"
                                      src={item.imgUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="absolute bottom-[4px] right-[8px] z-[9] ">
                                    <img
                                      className="w-[20px]"
                                      src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="relative pb-[8px] text-left ">
                                  <div className="block h-[65px] leading-[1.43] mt-[8px] whitespace-normal text-ellipsis overflow-hidden">
                                    <img
                                      className="inline-block mr-[2px]"
                                      src="https://static.chotot.com/storage/chotot-icons/svg/official_store.svg"
                                      alt=""
                                    />
                                    <h3 className="inline text-[14px] font-[400] m-0">
                                      {item.nameProduct}
                                    </h3>
                                  </div>
                                  <div>
                                    <span className="text-[#d0021b] inline-block font-bold text-[14px] leading-[1.33] mt-[2px] mr-[4px] ml-0 mb-0">
                                      {item.priceProduct}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full text-[#9b9b9b] text-left">
                                  <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                                    <img
                                      className="align-middle inline-block"
                                      src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                                      alt=""
                                    />
                                    <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                                      {item.adress}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Đối tác uy tín */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "16px 0px 16px 16px",
                }}
              >
                <div className="flex items-center mb-[8px]">
                  <h2 className="text-[18px] m-0 text-[#222] font-bold leading-[1.5] text-left">
                    Đối tác uy tín
                  </h2>
                  <img
                    className="align-middle ml-[3px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[8px] mt-[8px]">
                  <div className="items-center bg-[#f4f4f4] rounded-[99px] flex py-[8px] px-[16px]">
                    <img
                      className="align-middle"
                      src="https://static.chotot.com/storage/elt_homepage/thumb_up_static.svg"
                      alt=""
                    />
                    <b className="text-[.875rem] font-bolder ml-[5px]">
                      Hàng đúng mô tả
                    </b>
                  </div>
                  <div className="items-center bg-[#f4f4f4] rounded-[99px] flex py-[8px] px-[16px]">
                    <img
                      src="https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg"
                      alt=""
                    />
                    <b className="text-[.875rem] font-bolder ml-[5px]">
                      Có mô tả
                    </b>
                  </div>
                  <div className="items-center bg-[#f4f4f4] rounded-[99px] flex py-[8px] px-[16px]">
                    <img
                      src="https://static.chotot.com/storage/elt_homepage/recycle.svg"
                      alt=""
                    />
                    <b className="text-[.875rem] font-bolder ml-[5px]">
                      Có hỗ trợ đổi trả
                    </b>
                  </div>
                </div>
                <div className="overflow-x-hidden">
                  <div
                    style={{
                      scrollbarWidth: "thin",
                      whiteSpace: "nowrap",
                    }}
                    className="flex items-center flex-col flex-wrap list-none my-0 mx-[-16px] overflow-x-auto py-0 px-[16px]"
                  >
                    <div className="flex gap-[16px] mt-[16px]">
                      {PrestigiousPartnerData.map((item, i) => (
                        <div
                          key={item.id}
                          className="w-[445px] border-[1px] rounded-tl-lg rounded-tr-lg border-solid border-[#e8e8e8] hover:shadow-bl"
                        >
                          {/* Thông tin shop */}
                          <div className="flex items-center w-full gap-[12px] p-[12px]">
                            <img
                              className="w-[32px] h-[32px] rounded-[50%]"
                              src={item.logoImg}
                              alt=""
                            />
                            <h3> {item.nameStore}</h3>
                            <img
                              src="https://static.chotot.com/storage/chotot-icons/svg/verify-fill.svg"
                              alt=""
                            />
                            <div className="ml-[auto] ">
                              <button className="bg-[#fff] border-[#c0c0c0] border-solid border-[1px] font-bold rounded-[7px] text-[.75rem] leading-[1] py-[5px] px-[11px]">
                                Xem shop
                              </button>
                            </div>
                          </div>
                          {/* Danh sách sanr phẩm */}
                          <div className="flex flex-nowrap gap-[1px] overflow-y-auto border-t-[1px] border-solid border-[#e8e8e8]">
                            {item.listProduct.map((item, i) => (
                              <div
                                key={item.id}
                                className="border-b-[none] flex-1 max-w-[33.33%] min-w-[auto] p-[8px] hover:shadow-bl"
                              >
                                <div className="relative justify-center flex h-[20vh] ">
                                  <div
                                    style={{
                                      background:
                                        "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                                      backgroundSize: "cover",
                                      borderRadius: " 2px",
                                      display: "inline-block",
                                      overflow: "hidden",
                                      position: "relative",
                                      width: "100%",
                                    }}
                                  >
                                    <img
                                      className="h-full object-cover absolute w-full"
                                      src={item.imgUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="absolute bottom-[4px] right-[8px] z-[9] ">
                                    <img
                                      className="w-[20px]"
                                      src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="relative pb-[8px] text-left ">
                                  <div className="block h-[65px] leading-[1.43] mt-[8px] whitespace-normal text-ellipsis overflow-hidden">
                                    {/* <img
                                    className="inline-block mr-[2px]"
                                    src="https://static.chotot.com/storage/chotot-icons/svg/official_store.svg"
                                    alt=""
                                  /> */}
                                    <h3 className="inline text-[14px] font-[400] m-0">
                                      {item.nameProduct}
                                    </h3>
                                  </div>
                                  <div>
                                    <span className="text-[#d0021b] inline-block font-bold text-[14px] leading-[1.33] mt-[2px] mr-[4px] ml-0 mb-0">
                                      {item.priceProduct}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full text-[#9b9b9b] text-left">
                                  <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                                    <img
                                      className="align-middle inline-block"
                                      src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                                      alt=""
                                    />
                                    <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                                      {item.adress}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pr-[16px]">
                  <button className="w-full flex justify-center cursor-pointer bg-[#fff] border-[#c0c0c0] border-[1px] border-solid rounded-[4px] py-[9px] px-[19px] font-bold text-[1rem] leading-[1.25] ">
                    Xem tin đăng từ Đối tác uy tín
                  </button>
                </div>
              </div>
            </div>
            {/*Gợi ý hôm nay */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div className="mt-[12px] bg-[#FFFFFF] ">
                <h2 className="text-[18px] m-[0] font-bold px-[14px] py-[16px] leading-[1.41] tracking-normal text-left">
                  Gợi ý hôm nay
                </h2>
                {/* Phan danh sach san pham */}
                <div className=" flex flex-wrap border-t-[1px] border-solid border-[#F4F4F4]">
                  {homeProducts.map((homeProducts) => (
                    <div className="rounded-[4px] min-w-[170px] border-b-[1px] border-solid border-[#F4F4F4] border-r-[1px] gap-[4px] p-[8px] basis-[20%] bg-[#fff] hover:shadow-bl">
                      <div className="flex justify-center relative h-[20vh]">
                        <div
                          style={{
                            background:
                              "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                            backgroundsize: "cover",
                            borderRadius: "2px",
                            display: "inline-block",
                            overflow: "hidden",
                            position: "relative",
                            width: "100%",
                          }}
                        >
                          <img
                            className="h-full object-cover absolute w-full"
                            src={homeProducts.ImgUrl}
                            alt=""
                          />
                        </div>
                        <div className="absolute bottom-[4px] right-[8px] z-[9]">
                          <img
                            className="h-full object-cover absolute w-full"
                            src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                            alt=""
                          />
                        </div>
                        <div></div>
                      </div>
                      <div className="pb-[8px]">
                        <div className="text-[#222] block text-[14px] h-[65px] leading-[1.43] mt-[8px] whitespace-normal font-[400] overflow-hidden text-ellipsis">
                          <h3>{homeProducts.Nameproduct}</h3>
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="text-[#d0021b] inline-block text-[14px] font-bold leading-[1.3] mt-[2px] mr-[4px] mb-0 ml-0">
                          {homeProducts.Price} d
                        </span>
                      </div>
                      <div className="w-full text-[#9b9b9b] text-left">
                        <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                          <img
                            className="align-middle inline-block"
                            src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                            alt=""
                          />
                          <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                            {homeProducts.Address}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center w-full p-[12px] mx-[auto] my-0 bg-[#FFFFFF]">
                  <button className="bg-[#fff] w-full border-[1px] rounded-[4px] border-[#c0c0c0] border-solid text-[#222] font-bold py-[9px] px-[19px]">
                    {" "}
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
            {/* Phan Footer */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px] pt-[12px]">
              <FooterEctroniceDevice />
            </div>
          </div>
        </div>
        <FloatButton />
        <div className="w-full bg-[#fff]">
          <Footer />
        </div>
      </div>
      {/* Phan reponsive */}
      <div className="800px:hidden">
        <div>
          <Header />
          <MenuReponsive/>
        </div>
        <div className="block bg-[#f4f4f4]">
          <ChooseLocation />
          {/* Carousel bannrt */}
          <div className="py-[12px] my-0 mx-[auto] rounded-tl-lg rounded-tr-lg ">
            <div className="min-h-[162px] h-[10vh] rounded-[8px] mb-[10px] bg-[#fff]">
              <CarouselBanner />
            </div>
            {/* phần submenu */}
            <div className="pt-0 px-[12px] pb-[12px] mx-[auto] my-0 max-w-[960px] bg-[#FFFFFF] rounded-bl-lg rounded-br-lg">
              <div className="text-center flex items-stretch bg-[#fff] justify-between list-none overflow-x-auto">
                {SubMenuElectroniceDevice.map((SubMenuElectroniceDevice) => (
                  <div
                    key={SubMenuElectroniceDevice.id}
                    className="outline-0 flex-grow-0 flex-shrink-0 flex-auto min-h-[60px] mr-0 w-[95px] "
                  >
                    <div className="text-[#000000] flex outline-0 relative flex-col items-center pt-[7px]">
                      <div className="z-[0] h-[33px] ">
                        <div className="h-fit relative w-fit ">
                          {/* div cho phan icon mới  */}
                          <div></div>
                          {/* div icon */}
                          <div className="inline-block max-w-full overflow-hidden relative m-0 ">
                            <img
                              className="w-[33px] h-[33px]"
                              src={SubMenuElectroniceDevice.ImgUrl}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <span className="leading-[18px] text-[12px] w-full my-[6px] mx-0">
                        {SubMenuElectroniceDevice.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phần danh muc nổi bật */}
            <div className="mx-[auto] my-0 max-w-[960px] ">
              <div className="bg-[#FFFFFF] p-[16px] rounded-[8px] ">
                <div className="flex items-center justify-between mb-[16px]">
                  <h2 className="font-bold m-0 text-[18px]">
                    Danh mục nổi bật
                  </h2>
                  <div className="flex items-center">
                    <span className="font-bold mr-[4px] text-[12px] text-[#2a70df]">
                      Xem tất cả tin đăng
                    </span>
                    <img
                      className="w-[12px] h-[12px]"
                      src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/chevron_right.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="flex h-[225px] content-between items-start bg-[#fff] flex-col flex-wrap list-none overflow-x-auto p-0">
                    {CategoriesElectroniceDevice.map(
                      (CategoriesElectroniceDevice) => (
                        <li
                          key={CategoriesElectroniceDevice.id}
                          className="px-[4px] pb-[8px] overflow-hidden h-[100px] pt-0 outline-0 rounded-[8px] list-none cursor-pointer w-[80px]"
                        >
                          <div className="bg-cover flex items-center flex-col ">
                            <div className="inline-block max-w-full overflow-hidden relative m-0 ">
                              <img
                                className=""
                                src={CategoriesElectroniceDevice.ImgUrl}
                                alt=""
                              />
                            </div>
                            <h3 className="leading-[13px] text-[10px] mt-[4px] text-center ml-0 overflow-hidden text-ellipsis">
                              {CategoriesElectroniceDevice.title}
                            </h3>
                          </div>
                        </li>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Có gì hot hôm nay */}
            <div className="mx-[auto] px-[5px] my-0 max-w-[960px] mt-[12px]">
              <div
                style={{
                  background:
                    "linear-gradient(rgb(255, 154, 0) 0%, rgb(255, 255, 255) 50%)",
                  borderRadius: "8px",
                  padding: "16px 0px 16px 16px",
                }}
              >
                <h2 className="text-[18px] m-0 text-[#fff] mb-[8px] font-bold leading-[1.5] text-left">
                  Có gì hot hôm nay
                </h2>
                <div>
                  <div
                    style={{
                      scrollbarWidth: "thin",
                      whiteSpace: "nowrap",
                    }}
                    className="flex gap-[8px] list-none mb-[16px] overflow-x-auto pt-0 pl-0 pr-0 pb-[4px] w-full "
                  >
                    {homeProducts.map((homeProducts) => (
                      <div className="rounded-[4px] min-w-[170px] border-b-[1px] border-solid border-[#F4F4F4] hover:shadow-bl border-r-[1px] p-[8px] basis-[20%] bg-[#fff]">
                        <div className="flex justify-center relative h-[20vh]">
                          <div
                            style={{
                              background:
                                "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                              backgroundsize: "cover",
                              borderRadius: "2px",
                              display: "inline-block",
                              overflow: "hidden",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <img
                              className="h-full object-cover absolute w-full"
                              src={homeProducts.ImgUrl}
                              alt=""
                            />
                          </div>
                          <div className="absolute bottom-[4px] right-[8px] z-[9]">
                            <img
                              className="h-full object-cover absolute w-full"
                              src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                              alt=""
                            />
                          </div>
                          <div></div>
                        </div>
                        <div className="pb-[8px]">
                          <div className="text-[#222] block text-[14px] h-[65px] leading-[1.43] mt-[8px] whitespace-normal font-[400] overflow-hidden text-ellipsis">
                            <h3>{homeProducts.Nameproduct}</h3>
                          </div>
                        </div>
                        <div className="text-left">
                          <span className="text-[#d0021b] inline-block text-[14px] font-bold leading-[1.3] mt-[2px] mr-[4px] mb-0 ml-0">
                            {homeProducts.Price} d
                          </span>
                        </div>
                        <div className="w-full text-[#9b9b9b] text-left">
                          <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                            <img
                              className="align-middle inline-block"
                              src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                              alt=""
                            />
                            <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                              {homeProducts.Address}
                            </span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pr-[16px]">
                  <button className="w-full flex justify-center cursor-pointer bg-[#fff] border-[#c0c0c0] border-[1px] border-solid rounded-[4px] py-[9px] px-[19px] font-bold text-[1rem] leading-[1.25] ">
                    Xem tất cả sản phẩm
                  </button>
                </div>
              </div>
            </div>
            {/* Offical store */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "16px 0px 16px 16px",
                }}
              >
                <h2 className="text-[18px] m-0 text-[#222] mb-[8px] font-bold leading-[1.5] text-left">
                  Official Store
                </h2>
                <div className="overflow-x-hidden">
                  <div
                    style={{
                      scrollbarWidth: "thin",
                      whiteSpace: "nowrap",
                    }}
                    className="flex items-center flex-col flex-wrap list-none my-0 mx-[-16px] overflow-x-auto py-0 px-[16px]"
                  >
                    <div className="flex gap-[16px] mt-[16px]">
                      {OfficalStoreData.map((item, i) => (
                        <div
                          key={item.id}
                          className="w-[293px] border-[1px] rounded-tl-lg rounded-tr-lg border-solid border-[#e8e8e8] hover:shadow-bl"
                        >
                          {/* Thông tin shop */}
                          <div className="flex items-center w-full gap-[12px] p-[12px]">
                            <img
                              className="w-[32px] h-[32px] rounded-[50%]"
                              src={item.logoImg}
                              alt=""
                            />
                            <h3 className="max-w-[215px] overflow-hidden text-ellipsis whitespace-nowrap font-bold text-[14px] m-0 ">
                              {" "}
                              {item.nameStore}
                            </h3>
                            <img
                              src="https://static.chotot.com/storage/chotot-icons/svg/verify-fill.svg"
                              alt=""
                            />
                            <div className="ml-[auto] ">
                              <button className="cursor-pointer px-[8px] ">
                                <img
                                  src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/vector.svg"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                          {/* Danh sách sanr phẩm */}
                          <div className="flex flex-nowrap gap-[1px] overflow-y-auto overflow-x-hidden border-t-[1px] border-solid border-[#e8e8e8]">
                            {item.listProduct.map((item, i) => (
                              <div
                                key={item.id}
                                style={{
                                  borderBottom: "none",
                                  maxWidth: "calc(50% - 1px)",
                                  minWidth: " 49%",
                                  minwidth: "auto",
                                }}
                                className="flex-1 p-[8px] hover:shadow-bl"
                              >
                                <div className="relative justify-center flex h-[20vh] ">
                                  <div
                                    style={{
                                      background:
                                        "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                                      backgroundSize: "cover",
                                      borderRadius: " 2px",
                                      display: "inline-block",
                                      overflow: "hidden",
                                      position: "relative",
                                      width: "100%",
                                    }}
                                  >
                                    <img
                                      className="h-full object-cover absolute w-full"
                                      src={item.imgUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="absolute bottom-[4px] right-[8px] z-[9] ">
                                    <img
                                      className="w-[20px]"
                                      src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="relative pb-[8px] text-left ">
                                  <div className="block h-[65px] leading-[1.43] mt-[8px] whitespace-normal text-ellipsis overflow-hidden">
                                    <img
                                      className="inline-block mr-[2px]"
                                      src="https://static.chotot.com/storage/chotot-icons/svg/official_store.svg"
                                      alt=""
                                    />
                                    <h3 className="inline text-[14px] font-[400] m-0">
                                      {item.nameProduct}
                                    </h3>
                                  </div>
                                  <div>
                                    <span className="text-[#d0021b] inline-block font-bold text-[14px] leading-[1.33] mt-[2px] mr-[4px] ml-0 mb-0">
                                      {item.priceProduct}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full text-[#9b9b9b] text-left">
                                  <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                                    <img
                                      className="align-middle inline-block"
                                      src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                                      alt=""
                                    />
                                    <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                                      {item.adress}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Đối tác uy tín */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "16px 0px 16px 16px",
                }}
              >
                <div className="flex items-center mb-[8px]">
                  <h2 className="text-[18px] m-0 text-[#222] font-bold leading-[1.5] text-left">
                    Đối tác uy tín
                  </h2>
                  <img
                    className="align-middle ml-[3px]"
                    src="https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "-webkit-box",
                  
                    overflowX: "scroll",
                    overflowY: "hidden",
                  }}
                >
                  <div className="items-center bg-[#f4f4f4] rounded-[99px] mr-[20px] flex py-[8px] px-[16px]">
                    <img
                      className="align-middle"
                      src="https://static.chotot.com/storage/elt_homepage/thumb_up_static.svg"
                      alt=""
                    />
                    <b className="text-[.875rem] font-bolder ml-[5px]">
                      Hàng đúng mô tả
                    </b>
                  </div>

                  <div className="items-center bg-[#f4f4f4] mr-[20px] rounded-[99px] flex py-[8px] px-[16px]">
                    <img
                      src="https://static.chotot.com/storage/chotot-icons/svg/protected_icon.svg"
                      alt=""
                    />
                    <b className="text-[.875rem] font-bolder ml-[5px]">
                      Có mô tả
                    </b>
                  </div>
                  <div className="items-center bg-[#f4f4f4] mr-[20px] rounded-[99px] flex py-[8px] px-[16px]">
                    <img
                      src="https://static.chotot.com/storage/elt_homepage/recycle.svg"
                      alt=""
                    />
                    <b className="text-[.875rem] font-bolder ml-[5px]">
                      Có hỗ trợ đổi trả
                    </b>
                  </div>
                </div>
                <div className="overflow-x-hidden">
                  <div
                    style={{
                      scrollbarWidth: "thin",
                      whiteSpace: "nowrap",
                    }}
                    className="flex items-center flex-col flex-wrap list-none my-0 mx-[-16px] overflow-x-auto py-0 px-[16px]"
                  >
                    <div className="flex gap-[16px] mt-[16px]">
                      {PrestigiousPartnerData.map((item, i) => (
                        <div
                          key={item.id}
                          className="w-[293px] border-[1px] rounded-tl-lg rounded-tr-lg border-solid border-[#e8e8e8] hover:shadow-bl"
                        >
                          {/* Thông tin shop */}
                          <div className="flex items-center w-full gap-[12px] p-[12px]">
                            <img
                              className="w-[32px] h-[32px] rounded-[50%]"
                              src={item.logoImg}
                              alt=""
                            />
                           <h3 className="max-w-[215px] overflow-hidden text-ellipsis whitespace-nowrap font-bold text-[14px] m-0 ">
                              {" "}
                              {item.nameStore}
                            </h3>
                            <img
                              src="https://static.chotot.com/storage/chotot-icons/svg/verify-fill.svg"
                              alt=""
                            />
                            <div className="ml-[auto] ">
                              <button className="cursor-pointer px-[8px] ">
                                <img
                                  src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/vector.svg"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                          {/* Danh sách sanr phẩm */}
                          <div className="flex flex-nowrap gap-[1px] overflow-y-auto overflow-x-hidden border-t-[1px] border-solid border-[#e8e8e8]">
                            {item.listProduct.map((item, i) => (
                              <div
                                key={item.id}
                                style={{
                                  borderBottom: "none",
                                  maxWidth: "calc(50% - 1px)",
                                  minWidth: " 49%",
                                  minwidth: "auto",
                                }}
                                className="flex-1 p-[8px] hover:shadow-bl"
                              >
                                <div className="relative justify-center flex h-[20vh] ">
                                  <div
                                    style={{
                                      background:
                                        "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                                      backgroundSize: "cover",
                                      borderRadius: " 2px",
                                      display: "inline-block",
                                      overflow: "hidden",
                                      position: "relative",
                                      width: "100%",
                                    }}
                                  >
                                    <img
                                      className="h-full object-cover absolute w-full"
                                      src={item.imgUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="absolute bottom-[4px] right-[8px] z-[9] ">
                                    <img
                                      className="w-[20px]"
                                      src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="relative pb-[8px] text-left ">
                                  <div className="block h-[65px] leading-[1.43] mt-[8px] whitespace-normal text-ellipsis overflow-hidden">
                                    {/* <img
                                    className="inline-block mr-[2px]"
                                    src="https://static.chotot.com/storage/chotot-icons/svg/official_store.svg"
                                    alt=""
                                  /> */}
                                    <h3 className="inline text-[14px] font-[400] m-0">
                                      {item.nameProduct}
                                    </h3>
                                  </div>
                                  <div>
                                    <span className="text-[#d0021b] inline-block font-bold text-[14px] leading-[1.33] mt-[2px] mr-[4px] ml-0 mb-0">
                                      {item.priceProduct}
                                    </span>
                                  </div>
                                </div>
                                <div className="w-full text-[#9b9b9b] text-left">
                                  <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                                    <img
                                      className="align-middle inline-block"
                                      src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                                      alt=""
                                    />
                                    <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                                      {item.adress}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pr-[16px]">
                  <button className="w-full flex justify-center cursor-pointer bg-[#fff] border-[#c0c0c0] border-[1px] border-solid rounded-[4px] py-[9px] px-[19px] font-bold text-[1rem] leading-[1.25] ">
                    Xem tin đăng từ Đối tác uy tín
                  </button>
                </div>
              </div>
            </div>
             {/*Gợi ý hôm nay */}
             <div className="mx-[auto] my-0 max-w-[960px] mt-[12px]">
              <div className="mt-[12px] bg-[#FFFFFF] ">
                <h2 className="text-[18px] m-[0] font-bold px-[14px] py-[16px] leading-[1.41] tracking-normal text-left">
                  Gợi ý hôm nay
                </h2>
                {/* Phan danh sach san pham */}
                <div className=" flex flex-wrap border-t-[1px] border-solid border-[#F4F4F4]">
                  {homeProducts.map((homeProducts) => (
                    <div className="rounded-[4px] min-w-[170px] border-b-[1px] border-solid border-[#F4F4F4] border-r-[1px] gap-[4px] p-[8px] basis-[50%] bg-[#fff] hover:shadow-bl">
                      <div className="flex justify-center relative h-[20vh]">
                        <div
                          style={{
                            background:
                              "url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat",
                            backgroundsize: "cover",
                            borderRadius: "2px",
                            display: "inline-block",
                            overflow: "hidden",
                            position: "relative",
                            width: "100%",
                          }}
                        >
                          <img
                            className="h-full object-cover absolute w-full"
                            src={homeProducts.ImgUrl}
                            alt=""
                          />
                        </div>
                        <div className="absolute bottom-[4px] right-[8px] z-[9]">
                          <img
                            className="h-full object-cover absolute w-full"
                            src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                            alt=""
                          />
                        </div>
                        <div></div>
                      </div>
                      <div className="pb-[8px]">
                        <div className="text-[#222] block text-[14px] h-[65px] leading-[1.43] mt-[8px] whitespace-normal font-[400] overflow-hidden text-ellipsis">
                          <h3>{homeProducts.Nameproduct}</h3>
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="text-[#d0021b] inline-block text-[14px] font-bold leading-[1.3] mt-[2px] mr-[4px] mb-0 ml-0">
                          {homeProducts.Price} d
                        </span>
                      </div>
                      <div className="w-full text-[#9b9b9b] text-left">
                        <span className="max-w-[125px] w-full inline-block text-[11px] overflow-hidden text-ellipsis capitalize align-middle whitespace-nowrap">
                          <img
                            className="align-middle inline-block"
                            src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/subtract.svg"
                            alt=""
                          />
                          <span className="mr-0 text-[#595959] text-[12px] my-0 ml-[3px] whitespace-nowrap">
                            {homeProducts.Address}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center w-full p-[12px] mx-[auto] my-0 bg-[#FFFFFF]">
                  <button className="bg-[#fff] w-full border-[1px] rounded-[4px] border-[#c0c0c0] border-solid text-[#222] font-bold py-[9px] px-[19px]">
                    {" "}
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
            {/* Phan Footer */}
            <div className="mx-[auto] my-0 max-w-[960px] mt-[12px] pt-[12px]">
              <FooterEctroniceDevice />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#fff]">
          <Footer />
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { categoriesData } from "../../Constant/indexData";
import DropDown from "../../Layout/DropDown";
import DropDownMenu from "../../Layout/DropDownMenu";
import SubBanner from "../../Home/SubBanner/SubBanner";

import { useRouter } from "next/navigation";

import DialogNextPage from "../../Layout/DialogNextPage";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Lay thong tin user
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  console.log(isAuthenticated);

  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [scrollUser, setScrollUser] = useState("sticky");
  const [openDialogNextPage, setOpenDiaLogNextPage] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const SwitchDropDown = () => {
    if (openDropDown === false) {
      setOpenDropDown(true);
    } else {
      setOpenDropDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    if (clientWindowHeight > 50) {
      setScrollUser("fixed");
    } else {
      setScrollUser("sticky");
    }
  };
  const OpenDialog = () => {
    if (openDialogNextPage === false) {
      setOpenDiaLogNextPage(true);
    } else {
      setOpenDiaLogNextPage(false);
    }
  };

  return (
    <>
      <div className="800px:fixed 800px:w-[100%]">
        <div className="hidden 800px:flex 800px:w-[100%] 800px:bg-[#2E64AF] text-[#ffff] 800px:leading-6">
          <div className=" flex pt-[8px] pl-[16px] pb-[6px] pr-[24px] w-full justify-between text-sm">
            <span className="text-xs">
              <span>
                <a className="mt-[0] ml-[12px]" href="https://www.chotot.com/">
                  Chợ tốt
                </a>
              </span>
              <span>
                <a className="mt-[0] ml-[12px]" href="https://www.nhatot.com/">
                  Nhà tốt
                </a>
              </span>
              <span>
                <a className="mt-[0] ml-[12px]" href="https://xe.chotot.com/">
                  Xe tốt
                </a>
              </span>
              <span>
                <a
                  className="mt-[0] ml-[12px]"
                  href="https://www.vieclamtot.com/"
                >
                  Việc làm tốt
                </a>
              </span>
            </span>
            <span className="text-xs">
              <span>
                <a
                  className="mt-[0] ml-[12px]"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc5begvG3B5NE29iy3JnXya_6zY_DyHdIIfb3TnnQTNqr5ZVQ/viewform?vc=0&c=0&w=1&flr=0"
                >
                  Đóng góp ý kiến
                </a>
              </span>
              <span>
                <a className="mt-[0] ml-[12px]" href="/">
                  Tải ứng dụng
                </a>
              </span>
              <span>
                <a
                  className="mt-[0] ml-[12px]"
                  href="https://trogiup.chotot.com/"
                >
                  Trợ giúp
                </a>
              </span>
            </span>
          </div>
          <div className="w-[15%] flex justify-between items-center gap-[8px] h-[32px] bg-[#fff4e0] rounded-bl-lg pl-[12px] cursor-pointer">
            <span className="w-[20px] h-[20px]">
              <img
                className="object-cover"
                src="https://storage.googleapis.com/static-chotot-com/storage/APP_WRAPPER/icons/icon-suitcase.png"
                alt=""
              />
            </span>
            <span className="text-xs text-[#050505]">Dành cho người bán</span>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M4.67154 5.99959C4.9323 5.74067 5.35336 5.74141 5.6132 6.00125L8.19653 8.58458L10.7863 6.00048C11.0461 5.74125 11.4668 5.74148 11.7263 6.00099C11.986 6.26071 11.986 6.68179 11.7263 6.94151L8.90364 9.76414C8.51312 10.1547 7.87995 10.1547 7.48943 9.76414L4.66987 6.94459C4.40872 6.68344 4.40947 6.25981 4.67154 5.99959Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <header className="hidden 800px:flex w-[100%] 800px:h-[56px] 800px:items-center 800px:justify-center 800px:sticky 800px:text-[0.875rem] text-[#ffff] 800px:bg-[#2E64AF] 800px:leading-6 800px:pb-[10px]">
          <div className=" flex justify-center items-center content-center w-[54%] pt-[0px] pl-[24px]">
            {/* Phan logo */}
            <div className="w-[100%] text-center flex mr-[12px]">
              <div onClick={() => router.push("/")}>
                <img
                  className="w-[188px] h-[35px]"
                  src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
                  alt=""
                />
              </div>
              <div className="flex flex-row items-center justify-center cursor-pointer">
                <svg
                  width="24px"
                  height="25px"
                  viewBox="0 0 48 48"
                  version="1"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 48 48"
                >
                  <g fill="#ffff">
                    <rect x="6" y="22" width="36" height="4" />
                    <rect x="6" y="10" width="36" height="4" />
                    <rect x="6" y="34" width="36" height="4" />
                  </g>
                </svg>
                <span
                  className="w-full h-[100%] flex items-center justify-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="m-1">Danh mục</span>
                  {isDropdownVisible && (
                    <DropDown categoriesData={categoriesData} />
                  )}
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h48v48H0z" fill="none" />
                    <g id="Shopicon" fill="#ffff">
                      <polygon points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586  " />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center content-center w-[100%] pt-[10px]">
            {/* Thanh tim kiem */}
            <div className="flex mt-[0px] w-[100%] mr-[auto] ml-[auto] rounded mb-[10px]">
              <div className="flex relative w-[100%]">
                <div className="border-0 flex items-center content-center rounded justify-center p-1 w-[100%] ml-[0px] bg-white">
                  <input
                    className="w-full text-[0.875rem] text-[#222222] border-none outline-none md:indent-[12px]"
                    type="text"
                    placeholder="Tìm kiếm sản phẩm trên chợ tốt"
                  />
                  <button className="flex flex-col justify-center items-center content-center bg-[#FF8800] border-0 rounded cursor-pointer w-[58px] h-[38px] text-white text-sm ml-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="monochrome"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M6.4 0a6.369 6.369 0 00-4.525 1.873A6.425 6.425 0 00.502 3.906v.002A6.383 6.383 0 000 6.398a6.372 6.372 0 001.875 4.524 6.385 6.385 0 008.428.537l-.006.006 4.295 4.293a.827.827 0 001.166-1.166l-4.295-4.295a6.368 6.368 0 00-.537-8.424A6.372 6.372 0 006.4 0zm0 1.615a4.75 4.75 0 013.383 1.4c.44.44.785.95 1.028 1.522h-.002c.249.59.377 1.214.377 1.861 0 .648-.128 1.27-.377 1.862h.002a4.783 4.783 0 01-2.55 2.545c-.59.25-1.213.377-1.86.377a4.761 4.761 0 01-1.864-.377A4.749 4.749 0 013.016 9.78c-.44-.44-.783-.95-1.024-1.521a4.735 4.735 0 01-.377-1.862c0-.647.127-1.272.377-1.863a4.75 4.75 0 011.024-1.52 4.754 4.754 0 013.384-1.4z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Phan mmenu */}
          <div className="flex justify-center items-center content-center w-full pt-[10px]">
            <div className="flex w-[80%] justify-center items-center content-center ">
              <div className="w-[12%]">
                <a href="/">
                  <svg
                    fill="#000000"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4045 18.7012H4.58447C4.33116 18.6997 4.08267 18.6319 3.86373 18.5044C3.64479 18.377 3.46306 18.1945 3.33662 17.975C3.21018 17.7555 3.14344 17.5067 3.14307 17.2534C3.14269 17.0001 3.20868 16.7511 3.33447 16.5312C4.25656 14.6713 4.68036 12.6039 4.56447 10.5312V9.75119C4.56208 8.76941 4.75587 7.79705 5.13447 6.89119C5.50399 5.9826 6.05527 5.15909 6.75447 4.47119C7.44834 3.77705 8.27473 3.22952 9.18447 2.86119C10.0896 2.48125 11.0629 2.29067 12.0445 2.30119C14.0179 2.33276 15.8994 3.14096 17.2809 4.55055C18.6624 5.96015 19.4326 7.8575 19.4245 9.83119V10.5012C19.3053 12.5742 19.7293 14.6423 20.6545 16.5012C20.7789 16.7226 20.8442 16.9723 20.8442 17.2262C20.8442 17.4801 20.7789 17.7298 20.6545 17.9512C20.5307 18.1738 20.3494 18.359 20.1295 18.4874C19.9096 18.6159 19.6591 18.6828 19.4045 18.6812V18.7012ZM11.9945 3.70119C11.2051 3.70057 10.4234 3.85571 9.69411 4.15773C8.96481 4.45974 8.30228 4.90269 7.74447 5.46119C7.17636 6.03386 6.72767 6.71369 6.42447 7.46119C6.13287 8.1891 5.98679 8.9671 5.99447 9.75119V9.75119V10.5012C6.11944 12.8302 5.62973 15.1512 4.57447 17.2312L19.4345 17.3012C18.4083 15.1855 17.914 12.8513 17.9945 10.5012V9.83119C18 8.22614 17.3737 6.68338 16.251 5.53633C15.1283 4.38928 13.5993 3.73008 11.9945 3.70119V3.70119Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.9945 22.4508C11.5081 22.4529 11.0261 22.3585 10.5764 22.1731C10.1267 21.9877 9.71819 21.715 9.37453 21.3708C8.68295 20.6741 8.29475 19.7324 8.29453 18.7508V18.0008C8.29453 17.8151 8.36827 17.6371 8.49955 17.5058C8.63083 17.3745 8.80887 17.3008 8.99452 17.3008C9.18018 17.3008 9.35822 17.3745 9.4895 17.5058C9.62078 17.6371 9.69452 17.8151 9.69452 18.0008V18.7508C9.69584 19.3609 9.9364 19.9461 10.3645 20.3808C10.8081 20.7912 11.3902 21.0192 11.9945 21.0192C12.5989 21.0192 13.181 20.7912 13.6245 20.3808C14.0526 19.9461 14.2932 19.3609 14.2945 18.7508V18.0008C14.2945 17.8151 14.3683 17.6371 14.4995 17.5058C14.6308 17.3745 14.8089 17.3008 14.9945 17.3008C15.1802 17.3008 15.3582 17.3745 15.4895 17.5058C15.6208 17.6371 15.6945 17.8151 15.6945 18.0008V18.7508C15.6958 19.237 15.601 19.7188 15.4156 20.1683C15.2301 20.6178 14.9576 21.0262 14.6138 21.37C14.2699 21.7139 13.8615 21.9863 13.412 22.1718C12.9625 22.3573 12.4808 22.4521 11.9945 22.4508Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-[12%]">
                <a href="https://id.chotot.com/?continue=https://chat.chotot.com/chat">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.7499 4.34844C3.71012 4.34844 3.67197 4.36424 3.64384 4.39237C3.61571 4.4205 3.5999 4.45866 3.5999 4.49844V15.2422L6.33529 13.0318C6.44205 12.9455 6.57515 12.8984 6.7124 12.8984H15.7499C15.7897 12.8984 15.8278 12.8826 15.856 12.8545C15.8841 12.8264 15.8999 12.7882 15.8999 12.7484V4.49844C15.8999 4.45865 15.8841 4.4205 15.856 4.39237C15.8278 4.36424 15.7897 4.34844 15.7499 4.34844H3.7499ZM2.79531 3.54384C3.04848 3.29067 3.39186 3.14844 3.7499 3.14844H15.7499C16.1079 3.14844 16.4513 3.29067 16.7045 3.54384C16.9577 3.79702 17.0999 4.1404 17.0999 4.49844V12.7484C17.0999 13.1065 16.9577 13.4499 16.7045 13.703C16.4513 13.9562 16.1079 14.0984 15.7499 14.0984H6.92453L3.37701 16.9651C3.19721 17.1104 2.94992 17.1395 2.74132 17.0399C2.53271 16.9402 2.3999 16.7296 2.3999 16.4984V4.49844C2.3999 4.14039 2.54213 3.79702 2.79531 3.54384Z"
                      fill="#ffff"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8999 8.24844C15.8999 7.91707 16.1685 7.64844 16.4999 7.64844H20.2499C20.6079 7.64844 20.9513 7.79067 21.2045 8.04384C21.4577 8.29702 21.5999 8.6404 21.5999 8.99844V20.9984C21.5999 21.2296 21.4671 21.4402 21.2585 21.5399C21.0499 21.6395 20.8026 21.6104 20.6228 21.4651L17.0753 18.5984H8.2499C7.89186 18.5984 7.54848 18.4562 7.29531 18.203C7.04213 17.9499 6.8999 17.6065 6.8999 17.2484V13.4984C6.8999 13.1671 7.16853 12.8984 7.4999 12.8984C7.83127 12.8984 8.0999 13.1671 8.0999 13.4984V17.2484C8.0999 17.2882 8.11571 17.3264 8.14384 17.3545C8.17197 17.3826 8.21012 17.3984 8.2499 17.3984H17.2874C17.4247 17.3984 17.5578 17.4455 17.6645 17.5318L20.3999 19.7422V8.99844C20.3999 8.95865 20.3841 8.9205 20.356 8.89237C20.3278 8.86424 20.2897 8.84844 20.2499 8.84844H16.4999C16.1685 8.84844 15.8999 8.57981 15.8999 8.24844Z"
                      fill="#ffff"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.7998 7.23047C6.7998 6.95433 6.99168 6.73047 7.22838 6.73047H12.3712C12.6079 6.73047 12.7998 6.95433 12.7998 7.23047C12.7998 7.50661 12.6079 7.73047 12.3712 7.73047H7.22838C6.99168 7.73047 6.7998 7.50661 6.7998 7.23047Z"
                      fill="#ffff"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.7998 10.2305C6.7998 9.95433 6.99168 9.73047 7.22838 9.73047H12.3712C12.6079 9.73047 12.7998 9.95433 12.7998 10.2305C12.7998 10.5066 12.6079 10.7305 12.3712 10.7305H7.22838C6.99168 10.7305 6.7998 10.5066 6.7998 10.2305Z"
                      fill="#ffff"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-[12%]">
                <a href="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.38278 7.30078H18.6172C19.8276 7.30078 20.8486 8.20207 20.9987 9.4031L22.2487 19.4031C22.4277 20.8355 21.3108 22.1008 19.8672 22.1008H4.13278C2.68918 22.1008 1.57225 20.8355 1.75131 19.4031L3.00131 9.4031C3.15144 8.20207 4.1724 7.30078 5.38278 7.30078ZM5.38278 8.70078H18.6172C19.1215 8.70078 19.5469 9.07632 19.6095 9.57675L20.8595 19.5767C20.9341 20.1736 20.4687 20.7008 19.8672 20.7008H4.13278C3.53128 20.7008 3.06589 20.1736 3.1405 19.5767L4.3905 9.57675C4.45305 9.07632 4.87845 8.70078 5.38278 8.70078Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 4.2C10.3713 4.2 9.05105 5.46639 9.05105 7.02857V10.8C9.05105 11.1314 8.77099 11.4 8.42552 11.4C8.08005 11.4 7.79999 11.1314 7.79999 10.8V7.02857C7.79999 4.80365 9.68039 3 12 3C14.3196 3 16.2 4.80365 16.2 7.02857V10.8C16.2 11.1314 15.9199 11.4 15.5745 11.4C15.229 11.4 14.9489 11.1314 14.9489 10.8V7.02857C14.9489 5.46639 13.6286 4.2 12 4.2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                {/* <ul>
                <li>
                  <a href="/">Don mua</a>
                </li>
                <li>
                  <a href="/"> Don ban</a>
                </li>
              </ul> */}
              </div>
              <div className="w-[25%] flex cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="aw__irp38gy"
                >
                  <path
                    d="M6.28571 2C5.14907 2 4.05898 2.45153 3.25526 3.25526C2.45153 4.05898 2 5.14907 2 6.28571V17.7143C2 18.8509 2.45153 19.941 3.25526 20.7447C4.05898 21.5485 5.14907 22 6.28571 22H17.7143C18.8509 22 19.941 21.5485 20.7447 20.7447C21.5485 19.941 22 18.8509 22 17.7143V6.28571C22 5.14907 21.5485 4.05898 20.7447 3.25526C19.941 2.45153 18.8509 2 17.7143 2H6.28571ZM3.42857 6.28571C3.42857 5.52795 3.72959 4.80123 4.26541 4.26541C4.80123 3.72959 5.52795 3.42857 6.28571 3.42857H17.7143C18.472 3.42857 19.1988 3.72959 19.7346 4.26541C20.2704 4.80123 20.5714 5.52795 20.5714 6.28571V17.7143C20.5714 18.472 20.2704 19.1988 19.7346 19.7346C19.1988 20.2704 18.472 20.5714 17.7143 20.5714H6.28571C5.52795 20.5714 4.80123 20.2704 4.26541 19.7346C3.72959 19.1988 3.42857 18.472 3.42857 17.7143V6.28571Z"
                    fill="currentColor"
                  ></path>
                  <rect
                    x="6"
                    y="7"
                    width="3"
                    height="3"
                    rx="1.5"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M12 8.5C12 8.08579 12.3358 7.75 12.75 7.75H17.25C17.6642 7.75 18 8.08579 18 8.5C18 8.91421 17.6642 9.25 17.25 9.25H12.75C12.3358 9.25 12 8.91421 12 8.5Z"
                    fill="currentColor"
                  ></path>
                  <rect
                    x="6"
                    y="14"
                    width="3"
                    height="3"
                    rx="1.5"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M12 15.5C12 15.0858 12.3358 14.75 12.75 14.75H17.25C17.6642 14.75 18 15.0858 18 15.5C18 15.9142 17.6642 16.25 17.25 16.25H12.75C12.3358 16.25 12 15.9142 12 15.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-[8px] whitespace-nowrap text-[0.875]">
                  Quản lý tin
                </span>
              </div>
              <div className="flex w-[25%] justify-center items-center content-center cursor-pointer">
                <svg
                  fill="#ffff"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.03531778,18.739764 C7.62329979,20.146176 9.71193925,21 12,21 C14.2880608,21 16.3767002,20.146176 17.9646822,18.739764 C17.6719994,17.687349 15.5693823,17 12,17 C8.43061774,17 6.32800065,17.687349 6.03531778,18.739764 Z M4.60050358,17.1246475 C5.72595131,15.638064 8.37060189,15 12,15 C15.6293981,15 18.2740487,15.638064 19.3994964,17.1246475 C20.4086179,15.6703183 21,13.9042215 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,13.9042215 3.59138213,15.6703183 4.60050358,17.1246475 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,10 C8,7.75575936 9.57909957,6 12,6 C14.4141948,6 16,7.92157821 16,10.2 C16,13.479614 14.2180861,15 12,15 C9.76086382,15 8,13.4273743 8,10 Z M10,10 C10,12.2692568 10.8182108,13 12,13 C13.1777063,13 14,12.2983927 14,10.2 C14,8.95041736 13.2156568,8 12,8 C10.7337387,8 10,8.81582479 10,10 Z"
                  />
                </svg>
                {isAuthenticated && isAuthenticated ? (
                  <>
                    <span
                      className="ml-[8px] whitespace-nowrap text-[0.875]"
                      onClick={SwitchDropDown}
                    >
                      {user.name}
                    </span>
                    <div>{openDropDown && <DropDownMenu />}</div>
                  </>
                ) : (
                  <>
                    <span
                      className="ml-[8px] whitespace-nowrap text-[0.875]"
                      onClick={SwitchDropDown}
                    >
                      Tài khoản
                    </span>
                    <div>{openDropDown && <DropDownMenu />}</div>
                  </>
                )}

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.67154 5.99959C4.9323 5.74067 5.35336 5.74141 5.6132 6.00125L8.19653 8.58458L10.7863 6.00048C11.0461 5.74125 11.4668 5.74148 11.7263 6.00099C11.986 6.26071 11.986 6.68179 11.7263 6.94151L8.90364 9.76414C8.51312 10.1547 7.87995 10.1547 7.48943 9.76414L4.66987 6.94459C4.40872 6.68344 4.40947 6.25981 4.67154 5.99959Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <a
              className="flex w-[140px] h-[36px] justify-center cursor-pointer mr-[16px] items-center content-center font-bold rounded text-[#FFFFFF] bg-[#FF8800] border-[FF8800]"
              href="https://id.chotot.com/?continue=https%3A%2F%2Fwww.chotot.com%2Fdang-tin%3Fservice%3Dflashad%26utm_source%3D&service=flashad"
            >
              <svg
                fill="#000000"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.288 0a.759.759 0 110 1.518H3.396a1.88 1.88 0 00-1.877 1.877v16.438a1.88 1.88 0 001.877 1.877h16.437a1.88 1.88 0 001.877-1.877V9.488a.76.76 0 011.518 0v10.344a3.399 3.399 0 01-3.395 3.395H3.396A3.4 3.4 0 010 19.832V3.395A3.4 3.4 0 013.396 0zm6.022.21c.273-.1.564-.078.835-.038.276.042.57.205.83.461l.54.54 1.117 1.117c.24.24.394.497.46.766a1.68 1.68 0 01-.4 1.545l-.058.062c-.344.352-.7.707-1.048 1.05l-.631.63-6.33 6.328-.488.493-.038.04c-.307.31-.621.628-.939.932-.153.148-.339.219-.619.236l-3.014.184h-.03a.719.719 0 01-.484-.218c-.158-.156-.249-.358-.24-.543l.135-3.097c.016-.253.095-.443.248-.598l.157-.16.003-.002.082-.081 5.416-5.415a719.16 719.16 0 011.747-1.745l1.68-1.682c.144-.146.27-.275.397-.396a1.8 1.8 0 01.672-.408zm.493 1.428l-.221.219c-.153.151-.306.305-.457.456l-.536.537-8.151 8.152-.086 1.957 1.906-.115.312-.312.226-.224.05-.049.385-.38 8.401-8.403-1.211-1.209a8.233 8.233 0 01-.172-.175l-.027-.029c-.065-.068-.13-.137-.2-.206l-.22-.219z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="ml-[8px] whitespace-nowrap text-[0.875]">
                Đăng tin
              </span>
            </a>
          </div>
        </header>
      </div>

      {/* Mobile header */}
      <div className="w-full 800px:hidden">
        <header className="w-full 800px:hidden bg-[#ffba00] h-[56px] sticky text-[0.875rem] z-[100]">
          <div className="mex-w-[100%] w-[100%] text-center flex items-center justify-center mr-[12px]">
            <div className="flex-grow flex-shrink text-center basis-[auto]">
              <div
                onClick={() => router.push("/")}
                className="w-[142px] h-[52px] inline-flex items-center "
              >
                {" "}
                <img
                  style={{
                    objectFit: "contain",
                    objectPosition: "0 0",
                    marginRight: "-124px",
                    height: "30px",
                    paddingLeft: "15px",
                  }}
                  src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>
        {/* Thanh tim kiem tren mobile */}
        <div
          className={`${scrollUser} 800px:hidden pt-2 pr-2 pl-2 leading-normal bg-[#ffba00] w-full pb-3 top-0 z-[100]`}
        >
          <div className="w-full">
            <div className="w-full flex justify-center items-center relative gap-[12px]">
              <div
                style={{
                  transitionProperty: " width, margin-left",
                  transitionDuration: " 0.2s",
                }}
                className="w-[100%] flex ml-0 border-none"
              >
                <div className="bg-transparent cursor-pointer w-5 absolute h-[80%] p-0 shadow-none flex items-center border-none z-[1] outline-none">
                  <svg
                    className="pl-[6px] text-[25px] text-[#C0C0C0]"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="monochrome"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 0a6.369 6.369 0 00-4.525 1.873A6.425 6.425 0 00.502 3.906v.002A6.383 6.383 0 000 6.398a6.372 6.372 0 001.875 4.524 6.385 6.385 0 008.428.537l-.006.006 4.295 4.293a.827.827 0 001.166-1.166l-4.295-4.295a6.368 6.368 0 00-.537-8.424A6.372 6.372 0 006.4 0zm0 1.615a4.75 4.75 0 013.383 1.4c.44.44.785.95 1.028 1.522h-.002c.249.59.377 1.214.377 1.861 0 .648-.128 1.27-.377 1.862h.002a4.783 4.783 0 01-2.55 2.545c-.59.25-1.213.377-1.86.377a4.761 4.761 0 01-1.864-.377A4.749 4.749 0 013.016 9.78c-.44-.44-.783-.95-1.024-1.521a4.735 4.735 0 01-.377-1.862c0-.647.127-1.272.377-1.863a4.75 4.75 0 011.024-1.52 4.754 4.754 0 013.384-1.4z"
                    ></path>
                  </svg>
                </div>
                <input
                  style={{
                    border: "none",
                    fontStretch: "normal",
                    lineHeight: "1.33",
                    letterSpacing: "normal",
                    outline: " none",
                    background: "#fff",
                    textIndent: "35px",
                  }}
                  className="text-[1rem] w-full h-8 rounded relative p-0 pr-8 text-sm font-normal not-italic text-gray-900 border-none "
                  placeholder="Tìm kiếm sản phẩm trên Chợ Tốt"
                  type="text"
                />
              </div>
              <div className="text-gray-600 no-underline block relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="aw__ih32wb2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.7499 4.34844C3.71012 4.34844 3.67197 4.36424 3.64384 4.39237C3.61571 4.4205 3.5999 4.45866 3.5999 4.49844V15.2422L6.33529 13.0318C6.44205 12.9455 6.57515 12.8984 6.7124 12.8984H15.7499C15.7897 12.8984 15.8278 12.8826 15.856 12.8545C15.8841 12.8264 15.8999 12.7882 15.8999 12.7484V4.49844C15.8999 4.45865 15.8841 4.4205 15.856 4.39237C15.8278 4.36424 15.7897 4.34844 15.7499 4.34844H3.7499ZM2.79531 3.54384C3.04848 3.29067 3.39186 3.14844 3.7499 3.14844H15.7499C16.1079 3.14844 16.4513 3.29067 16.7045 3.54384C16.9577 3.79702 17.0999 4.1404 17.0999 4.49844V12.7484C17.0999 13.1065 16.9577 13.4499 16.7045 13.703C16.4513 13.9562 16.1079 14.0984 15.7499 14.0984H6.92453L3.37701 16.9651C3.19721 17.1104 2.94992 17.1395 2.74132 17.0399C2.53271 16.9402 2.3999 16.7296 2.3999 16.4984V4.49844C2.3999 4.14039 2.54213 3.79702 2.79531 3.54384Z"
                    fill="#222222"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8999 8.24844C15.8999 7.91707 16.1685 7.64844 16.4999 7.64844H20.2499C20.6079 7.64844 20.9513 7.79067 21.2045 8.04384C21.4577 8.29702 21.5999 8.6404 21.5999 8.99844V20.9984C21.5999 21.2296 21.4671 21.4402 21.2585 21.5399C21.0499 21.6395 20.8026 21.6104 20.6228 21.4651L17.0753 18.5984H8.2499C7.89186 18.5984 7.54848 18.4562 7.29531 18.203C7.04213 17.9499 6.8999 17.6065 6.8999 17.2484V13.4984C6.8999 13.1671 7.16853 12.8984 7.4999 12.8984C7.83127 12.8984 8.0999 13.1671 8.0999 13.4984V17.2484C8.0999 17.2882 8.11571 17.3264 8.14384 17.3545C8.17197 17.3826 8.21012 17.3984 8.2499 17.3984H17.2874C17.4247 17.3984 17.5578 17.4455 17.6645 17.5318L20.3999 19.7422V8.99844C20.3999 8.95865 20.3841 8.9205 20.356 8.89237C20.3278 8.86424 20.2897 8.84844 20.2499 8.84844H16.4999C16.1685 8.84844 15.8999 8.57981 15.8999 8.24844Z"
                    fill="#222222"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.7998 7.23047C6.7998 6.95433 6.99168 6.73047 7.22838 6.73047H12.3712C12.6079 6.73047 12.7998 6.95433 12.7998 7.23047C12.7998 7.50661 12.6079 7.73047 12.3712 7.73047H7.22838C6.99168 7.73047 6.7998 7.50661 6.7998 7.23047Z"
                    fill="#222222"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.7998 10.2305C6.7998 9.95433 6.99168 9.73047 7.22838 9.73047H12.3712C12.6079 9.73047 12.7998 9.95433 12.7998 10.2305C12.7998 10.5066 12.6079 10.7305 12.3712 10.7305H7.22838C6.99168 10.7305 6.7998 10.5066 6.7998 10.2305Z"
                    fill="#222222"
                  ></path>
                </svg>
              </div>
              {/* Open dialog next page */}
              <span
                onClick={OpenDialog}
                className="text-gray-600 no-underline block relative"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.29701 5.2338C3.52243 4.27279 4.27279 3.52243 5.2338 3.29701V3.29701C6.06663 3.10165 6.93337 3.10165 7.7662 3.29701V3.29701C8.72721 3.52243 9.47757 4.27279 9.70299 5.2338V5.2338C9.89835 6.06663 9.89835 6.93337 9.70299 7.7662V7.7662C9.47757 8.72721 8.72721 9.47757 7.7662 9.70299V9.70299C6.93337 9.89835 6.06663 9.89835 5.2338 9.70299V9.70299C4.27279 9.47757 3.52243 8.72721 3.29701 7.7662V7.7662C3.10166 6.93337 3.10166 6.06663 3.29701 5.2338V5.2338Z"
                    stroke="#363853"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3.29701 16.2338C3.52243 15.2728 4.27279 14.5224 5.2338 14.297V14.297C6.06663 14.1017 6.93337 14.1017 7.7662 14.297V14.297C8.72721 14.5224 9.47757 15.2728 9.70299 16.2338V16.2338C9.89835 17.0666 9.89835 17.9334 9.70299 18.7662V18.7662C9.47757 19.7272 8.72721 20.4776 7.7662 20.703V20.703C6.93337 20.8983 6.06663 20.8983 5.2338 20.703V20.703C4.27279 20.4776 3.52243 19.7272 3.29701 18.7662V18.7662C3.10166 17.9334 3.10166 17.0666 3.29701 16.2338V16.2338Z"
                    stroke="#363853"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14.297 5.2338C14.5224 4.27279 15.2728 3.52243 16.2338 3.29701V3.29701C17.0666 3.10165 17.9334 3.10165 18.7662 3.29701V3.29701C19.7272 3.52243 20.4776 4.27279 20.703 5.2338V5.2338C20.8983 6.06663 20.8983 6.93337 20.703 7.7662V7.7662C20.4776 8.72721 19.7272 9.47757 18.7662 9.70299V9.70299C17.9334 9.89835 17.0666 9.89835 16.2338 9.70299V9.70299C15.2728 9.47757 14.5224 8.72721 14.297 7.7662V7.7662C14.1017 6.93337 14.1017 6.06663 14.297 5.2338V5.2338Z"
                    stroke="#363853"
                    stroke-width="1.5"
                  />
                  <path
                    d="M14.297 16.2338C14.5224 15.2728 15.2728 14.5224 16.2338 14.297V14.297C17.0666 14.1017 17.9334 14.1017 18.7662 14.297V14.297C19.7272 14.5224 20.4776 15.2728 20.703 16.2338V16.2338C20.8983 17.0666 20.8983 17.9334 20.703 18.7662V18.7662C20.4776 19.7272 19.7272 20.4776 18.7662 20.703V20.703C17.9334 20.8983 17.0666 20.8983 16.2338 20.703V20.703C15.2728 20.4776 14.5224 19.7272 14.297 18.7662V18.7662C14.1017 17.9334 14.1017 17.0666 14.297 16.2338V16.2338Z"
                    stroke="#363853"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {openDialogNextPage ? <DialogNextPage /> : null}
      </div>
    </>
  );
};

export default Navbar;

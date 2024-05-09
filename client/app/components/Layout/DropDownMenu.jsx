import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const DropDownMenu = () => {
  const router = useRouter();

  // Lay thong tin user
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div
      class="absolute right-[176px] z-10 top-[48px] mt-2 w-[300px] origin-top-right h-[auto] max-h-[70vh] overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1 h-[70vh] cursor-pointer" role="none">
        <div className="relative p-3 w-full">
          {isAuthenticated && isAuthenticated ? (
            <div>
              <span className="block float-left relative rounded-[50%] h-[48px] w-[48px]">
                <img
                  src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
                  alt=""
                />
              </span>
              <div className="flex flex-col">
                <span
                  onClick={() => router.push("/pages/authentication/Login")}
                  className="float-left leading-5 text-gray-900 text-base font-bold no-underline whitespace-no-wrap overflow-hidden ml-[8px] mt-[4px] w-[calc(100% - 100px)] text-ellipsis"
                >
                  {user.name}
                </span>
                <div className="leading-5 pt-0 pb-2 px-0 flex text-lg cursor-pointer border-b-[#E8E8E8] border-b border-solid ml-[8px] mt-[8px]">
                  <div className="font-bold text-xs leading-4">
                    <span className="text-xs leading-4 font-bold">1.0</span>
                  </div>
                  {/* rating user */}
                  <div className="mx-0.5 my-0">
                    <div className="text-[#C0C0C0] text-sm flex flex-row items-center justify-center">
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        className="text-[#FF8800]"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="star"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="star"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="star"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        data-type="monochrome"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        class="star"
                      >
                        <path
                          fill="currentColor"
                          d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-[#777777] text-[0.625rem] leading-4 font-normal">
                    <span className="text-xs leading-4">(1.0)</span>
                  </div>
                </div>
                {/* nguoi theo doi va nguoi dang thep doi */}
                <div className="w-full text-xs whitespace-pre mt-2 flex">
                  <div className="w-fit leading-5 float-left">
                    <span className="font-normal leading-5 text-[#777777]">
                      <b className="text-[#222]">{user.followers}</b>
                      &nbsp;Người theo dõi
                    </span>
                  </div>
                  <div className="h-4 mx-2 my-0 border-l-[#E8E8E8] border-l border-solid"></div>
                  <div className="w-fit leading-5 float-left">
                    <span className="font-normal leading-5 text-[#777777]">
                      <b className="text-[#222]">{user.NumPeopleWatching}</b>
                      &nbsp;Đang theo dõi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <span className="block float-left relative rounded-[50%] h-[48px] w-[48px]">
                <img
                  src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
                  alt=""
                />
              </span>
              <span
                onClick={() => router.push("/pages/authentication/Login")}
                className="float-left leading-5 text-gray-900 text-base font-bold no-underline whitespace-no-wrap overflow-hidden ml-[8px] mt-[14px] w-[calc(100% - 100px)] text-ellipsis"
              >
                Đăng nhập/ Đăng ký
              </span>
            </div>
          )}

          <div className="w-full mt-2 text-xs flex flex-col pt-3 mb-3 flex-nowrap">
            <div className="flex items-center justify-between p-2 pr-0 rounded-lg not-italic font-bold leading-5 bg-blue-600 text-white text-[11px]">
              <div className="flex items-center pl-12 relative">
                <img
                  className="w-12 h-10 absolute bottom-0 left-[-3px]"
                  src="https://static.chotot.com/storage/icons/png/virtual-account-banner-icon.png"
                  alt=""
                />
                <span>Nạp đồng tốt giá trị linh hoạt</span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="M5.37301 3.12235C5.58129 2.91407 5.91893 2.91407 6.12721 3.12235L10.6273 7.62235C10.8356 7.83063 10.8356 8.16827 10.6273 8.37655L6.12721 12.8766C5.91893 13.0849 5.58129 13.0849 5.37301 12.8766C5.16473 12.6683 5.16473 12.3307 5.37301 12.1224L9.49588 7.99951L5.37301 3.87664C5.16473 3.66836 5.16473 3.33072 5.37301 3.0183Z"></path>
                </g>
              </svg>
            </div>
           
          </div>
          
        </div>
        {user && user ? (
              <div className="flex flex-row items-center justify-center ">
                <div
                  style={{
                    width: "calc(50% - 4px)",
                    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.15)",
                  }}
                  className="border leading-5 ml-2 mr-1 px-3 py-2 rounded-lg border-solid border-[#f8f8f8]"
                >
                  <span className="text-[#777777] text-xs leading-5 block">
                    Điểm Tốt
                  </span>
                  <span className="text-[#222222] text-base leading-5 font-bold inline-block mr-1 mt-0.5">
                    {user.GoodPoint}
                  </span>
                  <span className="h-4 align-text-bottom inline-block">
                    <img
                      className="w-4 h-4"
                      src="https://static.chotot.com/storage/icons/svg/good-point.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div
                  style={{
                    width: "calc(50% - 4px)",
                    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.15)",
                  }}
                  className="border leading-5 whitespace-nowrap ml-1 mr-2 px-3 py-2 rounded-lg border-solid border-[#f8f8f8]"
                >
                  <span className="text-[#777777] text-xs leading-5 block">
                    Đồng Tốt
                  </span>
                  <span className="text-[#222222] text-base leading-5 font-bold inline-block mr-1 mt-0.5">
                    {user.GoodCopper}
                  </span>
                  <span className="h-4 align-text-bottom inline-block">
                    <svg
                      data-type="color"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 60"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <g transform="translate(1 1)">
                        <g fill="#9C6C18">
                          <path d="M29.451.462c-5.5 0-10.5 1.5-14.8 4.1-.1 0-.1.1-.2.1-.2 0-.2.1-.2.1-.5.5-.5 1.2-.1 1.7h.1v.1c.4.3.9.3 1.3.1l.1-.1c1.1-.6 2.1-1.2 3.2-1.7 3.3-1.4 6.8-2 10.3-2s7.1.7 10.3 2 6 3.2 8.5 5.6 4.4 5.2 5.8 8.5c1.4 3.3 2 6.7 2 10.3s-.7 7.1-2 10.3c-.5 1.1-1 2.1-1.7 3.2 0 .1-.1.1-.1.2-.2.4-.2 1 .1 1.3l.2.1.1.1c.5.4 1.2.4 1.7-.1l.1-.1c.1-.1.1-.2.1-.2 2.5-4.3 4.1-9.3 4.1-14.7.2-16-12.8-28.9-28.9-28.9m18.8 47.6c-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.8 0s.5-1.3 0-1.7c-.5-.4-1.3-.4-1.8 0m-37.8-37.5c.5-.5.5-1.3 0-1.7s-1.2-.5-1.7 0-.5 1.2 0 1.7 1.3.5 1.7 0m34.1 41.7c-.5-.4-1-.4-1.4-.2-.1 0-.1.1-.2.1-1.1.6-2.1 1.2-3.2 1.7-3.3 1.4-6.8 2-10.3 2s-7.1-.7-10.3-2-6.1-3.3-8.6-5.7-4.4-5.2-5.7-8.5c-1.4-3.3-2-6.7-2-10.3s.7-7.1 2-10.3c.5-1.1 1-2.1 1.7-3.2 0 0 .1-.1.1-.2.2-.4.2-.9-.1-1.3 0-.1-.1-.1-.2-.2l-.2-.2c-.5-.3-1.2-.3-1.6.2-.1.1-.1.1-.1.2s-.1.1-.1.2c-2.6 4.3-4.1 9.3-4.1 14.8 0 16 13.1 29 29.2 29 5.5 0 10.5-1.5 14.9-4.1l.1-.1c.1 0 .1-.1.2-.1.5-.5.5-1.2.1-1.7-.1 0-.1 0-.2-.1"></path>
                          <path d="M51.251 28.662c-.4-11.7-10-21-21.9-21-12 0-21.8 9.7-21.8 21.7s9.8 21.7 21.9 21.7c.6 0 1.2 0 1.8-.1 6-.5 11.4-3.4 15.1-7.8.5-.6 1-1.3 1.4-1.8 2.3-3.4 3.6-7.6 3.6-12v-.7"></path>
                        </g>
                        <linearGradient
                          id="ct-coin_svg__a"
                          gradientUnits="userSpaceOnUse"
                          x1="-81.354"
                          y1="195.971"
                          x2="-81.795"
                          y2="197.119"
                          gradientTransform="matrix(44.4799 0 0 -44.3003 3666.846 8728.15)"
                        >
                          <stop offset="0.15" stop-color="#ffe182"></stop>
                          <stop offset="0.158" stop-color="#fddd7e"></stop>
                          <stop offset="0.25" stop-color="#eab14c"></stop>
                          <stop offset="0.321" stop-color="#de962d"></stop>
                          <stop offset="0.36" stop-color="#d98c21"></stop>
                          <stop offset="0.53" stop-color="#ffc737"></stop>
                          <stop offset="0.75" stop-color="#fff1be"></stop>
                          <stop offset="0.94" stop-color="#fef6a5"></stop>
                          <stop offset="1" stop-color="#fdfdd1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="ct-coin_svg__b"
                          gradientUnits="userSpaceOnUse"
                          x1="-81.355"
                          y1="195.973"
                          x2="-81.778"
                          y2="197.074"
                          gradientTransform="matrix(44.4799 0 0 -44.3003 3666.846 8728.15)"
                        >
                          <stop offset="0" stop-color="#9f7623"></stop>
                          <stop offset="1" stop-color="#ffe799"></stop>
                        </linearGradient>
                        <path
                          fill="url(#ct-coin_svg__a)"
                          stroke="url(#ct-coin_svg__b)"
                          stroke-width="0.25"
                          d="M29.1 0c-5.5 0-10.5 1.5-14.8 4.1-.1 0-.1.1-.2.1s-.1.1-.2.1c-.5.5-.5 1.2-.1 1.7h.1l.1.1c.4.3.9.3 1.3.1l.1-.1c1.1-.6 2.1-1.2 3.2-1.7 3.3-1.4 6.8-2 10.3-2s7.1.7 10.3 2c3.2 1.4 6 3.2 8.5 5.6s4.4 5.2 5.8 8.5c1.4 3.3 2 6.7 2 10.3s-.7 7.1-2 10.3c-.5 1.1-1 2.1-1.7 3.2 0 .1-.1.1-.1.2-.2.4-.2 1 .1 1.3l.1.1.1.1c.5.4 1.2.4 1.7-.1l.1-.1c.1-.1.1-.2.1-.2C56.4 39.4 58 34.3 58 29c.3-16.1-12.8-29-28.9-29"
                        ></path>
                        <linearGradient
                          id="ct-coin_svg__c"
                          gradientUnits="userSpaceOnUse"
                          x1="-42.026"
                          y1="122.438"
                          x2="-50.543"
                          y2="144.626"
                          gradientTransform="matrix(2.4877 0 0 -2.4779 173.657 404.235)"
                        >
                          <stop offset="0.15" stop-color="#ffe182"></stop>
                          <stop offset="0.158" stop-color="#fddd7e"></stop>
                          <stop offset="0.25" stop-color="#eab14c"></stop>
                          <stop offset="0.321" stop-color="#de962d"></stop>
                          <stop offset="0.36" stop-color="#d98c21"></stop>
                          <stop offset="0.53" stop-color="#ffc737"></stop>
                          <stop offset="0.75" stop-color="#fff1be"></stop>
                          <stop offset="0.94" stop-color="#fef6a5"></stop>
                          <stop offset="1" stop-color="#fdfdd1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="ct-coin_svg__d"
                          gradientUnits="userSpaceOnUse"
                          x1="-49.94"
                          y1="143.053"
                          x2="-50.329"
                          y2="144.068"
                          gradientTransform="matrix(2.4877 0 0 -2.4779 173.657 404.235)"
                        >
                          <stop offset="0" stop-color="#9f7623"></stop>
                          <stop offset="1" stop-color="#ffe799"></stop>
                        </linearGradient>
                        <path
                          fill="url(#ct-coin_svg__c)"
                          stroke="url(#ct-coin_svg__d)"
                          stroke-width="0.25"
                          d="M48.1 47.6c-.5.5-.5 1.3 0 1.7s1.3.5 1.8 0 .5-1.3 0-1.7-1.4-.5-1.8 0"
                        ></path>
                        <linearGradient
                          id="ct-coin_svg__e"
                          gradientUnits="userSpaceOnUse"
                          x1="-50.056"
                          y1="143.356"
                          x2="-58.573"
                          y2="165.544"
                          gradientTransform="matrix(2.4877 0 0 -2.4779 134.146 365.075)"
                        >
                          <stop offset="0.15" stop-color="#ffe182"></stop>
                          <stop offset="0.158" stop-color="#fddd7e"></stop>
                          <stop offset="0.25" stop-color="#eab14c"></stop>
                          <stop offset="0.321" stop-color="#de962d"></stop>
                          <stop offset="0.36" stop-color="#d98c21"></stop>
                          <stop offset="0.53" stop-color="#ffc737"></stop>
                          <stop offset="0.75" stop-color="#fff1be"></stop>
                          <stop offset="0.94" stop-color="#fef6a5"></stop>
                          <stop offset="1" stop-color="#fdfdd1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="ct-coin_svg__f"
                          gradientUnits="userSpaceOnUse"
                          x1="-49.945"
                          y1="143.068"
                          x2="-50.335"
                          y2="144.082"
                          gradientTransform="matrix(2.4877 0 0 -2.4779 134.146 365.075)"
                        >
                          <stop offset="0" stop-color="#9f7623"></stop>
                          <stop offset="1" stop-color="#ffe799"></stop>
                        </linearGradient>
                        <path
                          fill="url(#ct-coin_svg__e)"
                          stroke="url(#ct-coin_svg__f)"
                          stroke-width="0.25"
                          d="M10.3 10.2c.5-.5.5-1.3 0-1.7C9.8 8 9 8 8.5 8.5s-.5 1.3 0 1.7c.5.5 1.3.5 1.8 0"
                        ></path>
                        <linearGradient
                          id="ct-coin_svg__g"
                          gradientUnits="userSpaceOnUse"
                          x1="-81.502"
                          y1="195.988"
                          x2="-81.94"
                          y2="197.13"
                          gradientTransform="matrix(44.7678 0 0 -44.5104 3677.551 8783.702)"
                        >
                          <stop offset="0.15" stop-color="#ffe182"></stop>
                          <stop offset="0.158" stop-color="#fddd7e"></stop>
                          <stop offset="0.25" stop-color="#eab14c"></stop>
                          <stop offset="0.321" stop-color="#de962d"></stop>
                          <stop offset="0.36" stop-color="#d98c21"></stop>
                          <stop offset="0.53" stop-color="#ffc737"></stop>
                          <stop offset="0.75" stop-color="#fff1be"></stop>
                          <stop offset="0.94" stop-color="#fef6a5"></stop>
                          <stop offset="1" stop-color="#fdfdd1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="ct-coin_svg__h"
                          gradientUnits="userSpaceOnUse"
                          x1="-81.502"
                          y1="195.988"
                          x2="-81.922"
                          y2="197.084"
                          gradientTransform="matrix(44.7678 0 0 -44.5104 3677.551 8783.702)"
                        >
                          <stop offset="0" stop-color="#9f7623"></stop>
                          <stop offset="1" stop-color="#ffe799"></stop>
                        </linearGradient>
                        <path
                          fill="url(#ct-coin_svg__g)"
                          stroke="url(#ct-coin_svg__h)"
                          stroke-width="0.25"
                          d="M44.3 51.9h0c-.5-.4-1-.4-1.4-.2-.1 0-.1.1-.2.1-1.1.6-2.1 1.2-3.2 1.7-3.3 1.4-6.8 2-10.3 2s-7.1-.7-10.3-2-6-3.2-8.5-5.6-4.4-5.3-5.8-8.5c-1.4-3.3-2-6.7-2-10.3s.7-7.1 2-10.3c.5-1.1 1-2.1 1.7-3.2 0 0 .1-.1.1-.2.2-.4.2-.9-.1-1.3 0-.1-.1-.1-.2-.2l-.2-.2c-.5-.3-1.2-.3-1.6.2v.2c0 .1-.1.1-.1.2C1.6 18.6.1 23.6.1 29.1c0 15.9 13.1 29 29.2 29 5.5 0 10.5-1.5 14.9-4.1l.1-.1c.1 0 .1-.1.2-.1.5-.5.5-1.2.1-1.7-.2-.2-.3-.2-.3-.2"
                        ></path>
                        <linearGradient
                          id="ct-coin_svg__i"
                          gradientUnits="userSpaceOnUse"
                          x1="-81.367"
                          y1="195.84"
                          x2="-81.852"
                          y2="197.109"
                          gradientTransform="matrix(43.7058 0 0 -43.3397 3595.566 8543.065)"
                        >
                          <stop offset="0.15" stop-color="#ffe182"></stop>
                          <stop offset="0.158" stop-color="#fddd7e"></stop>
                          <stop offset="0.25" stop-color="#eab14c"></stop>
                          <stop offset="0.321" stop-color="#de962d"></stop>
                          <stop offset="0.36" stop-color="#d98c21"></stop>
                          <stop offset="0.53" stop-color="#ffc737"></stop>
                          <stop offset="0.75" stop-color="#fff1be"></stop>
                          <stop offset="0.94" stop-color="#fef6a5"></stop>
                          <stop offset="1" stop-color="#fdfdd1"></stop>
                        </linearGradient>
                        <linearGradient
                          id="ct-coin_svg__j"
                          gradientUnits="userSpaceOnUse"
                          x1="-81.421"
                          y1="195.981"
                          x2="-81.78"
                          y2="196.922"
                          gradientTransform="matrix(43.7058 0 0 -43.3397 3595.566 8543.065)"
                        >
                          <stop offset="0" stop-color="#9f7623"></stop>
                          <stop offset="1" stop-color="#ffe799"></stop>
                        </linearGradient>
                        <path
                          fill="url(#ct-coin_svg__i)"
                          stroke="url(#ct-coin_svg__j)"
                          stroke-width="0.25"
                          d="M51 28.2c-.4-11.7-10-21-21.9-21C17 7.2 7.3 16.9 7.3 28.9S17 50.5 29.1 50.5c.6 0 1.2 0 1.8-.1 6-.5 11.4-3.4 15.1-7.8.5-.6 1-1.3 1.4-1.8 2.3-3.4 3.6-7.6 3.6-12v-.6"
                        ></path>
                        <path
                          fill="#9C6C18"
                          d="M45.882 18.391v3.7h-5v18.5h-4.6v-18.5h-5.1v-3.7zm-31.2 12.4h-1.8v-3.3h1.8v-9.1h7.5c6.3 0 7.5 4.3 7.5 10.8 0 7.9-1.8 11.5-7.8 11.5h-7.2v-9.9zm4.6-3.3h2.9v3.3h-2.9v6.5h2c3.2 0 3.8-1.9 3.8-8 0-5.1-.4-7.7-3.9-7.7h-2v5.9h.1z"
                        ></path>
                        <path
                          d="M14.482 30.091h-1.7v-3.3h1.8v-9.1h7.4c6.2 0 7.4 4.3 7.4 10.8 0 7.9-1.7 11.5-7.7 11.5h-7.2v-9.9h0zm4.5-3.3h2.9v3.3h-2.9v6.5h2c3.1 0 3.8-1.9 3.8-8 0-5.1-.4-7.7-3.9-7.7h-2v5.9h.1zm26.4-9.1v3.7h-4.8v18.5h-4.6v-18.5h-4.9v-3.7z"
                          fill="#FFF"
                          stroke="#9C6C18"
                          stroke-width="0.25"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
        <div className="block h-[38px] bg-[#f5f5f5] pt-[10px] pl-3 pb-[10px] pr-3 m-0">
          <span className="text-[#777777] leading-4 font-bold block text-sm">
            {" "}
            Quản lý đơn hàng
          </span>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/escrow_buy_orders.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Đơn mua
            </div>
          </div>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/escrow-orders.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Đơn bán
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="bg-[#fff7ea] flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div className="float-left">
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/escrow.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="text-sm ml-[10px]">Ví bán hàng</div>
            <div className="flex items-center text-center ml-auto mr-2 leading-4 text-sm">
              <b className="text-center ml-auto mr-2 leading-4 text-[#ffba00] text-sm">
                Liên kết ngay
              </b>
              <Image
                src="https://static.chotot.com/storage/chotot-icons/svg/chervon_right_orange.svg"
                width={8}
                height={8}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="block h-10 bg-gray-200 m-0 pt-[10px] pr-0 pb-[10px] pl-[12px] ">
          <span className="text-[#777777] leading-4 text-sm font-bold block">
            Tiện ích
          </span>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/menu-saved-ad.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Tin đăng đã lưu
            </div>
          </div>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/menu-saved-search.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Tìm kiếm đã lưu
            </div>
          </div>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/menu-rating-management.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Đánh giá từ tôi
            </div>
          </div>
        </div>
        <div className="block h-10 bg-gray-200 m-0 pt-[10px] pr-0 pb-[10px] pl-[12px] ">
          <span className="text-[#777777] leading-4 text-sm font-bold block">
            Dịch vụ trả phí
          </span>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/ct-coin.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Đồng tốt
            </div>
          </div>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/sub-pro.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Gói PRO
            </div>
            <div className="bg-[#B01730] text-white flex items-center justify-center h-4 font-bold p-1 ml-2 rounded-[10%] text-[10px]">
              Mới
            </div>
          </div>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/circle-list.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Lịch sử giao dịch
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="bg-[#fff7ea] flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div className="float-left">
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/chotot-icons/svg/shop-more.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="text-sm ml-[10px]">Cửa hàng/ chuyên trang</div>
            <div className="flex items-center text-center ml-auto leading-4 text-[10px]">
              <b className=" mr-2 leading-4 text-[#ffba00] text-[10px]">
                Tạo ngay
              </b>
              <Image
                src="https://static.chotot.com/storage/chotot-icons/svg/chervon_right_orange.svg"
                width={6}
                height={6}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="block h-10 bg-gray-200 m-0 pt-[10px] pr-0 pb-[10px] pl-[12px] ">
          <span className="text-[#777777] leading-4 text-sm font-bold block">
            Ưu đãi, khuyến mãi
          </span>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/icons/svg/reward-icon.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Chợ tốt ưu đãi
            </div>
          </div>
        </div>
        <div className="block h-10 bg-gray-200 m-0 pt-[10px] pr-0 pb-[10px] pl-[12px] ">
          <span className="text-[#777777] leading-4 text-sm font-bold block">
            Khác
          </span>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/icons/svg/setting.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Cài đặt tài khoản
            </div>
          </div>
        </div>
        <div className="p-0 ">
          <div className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3">
            <div>
              <Image
                className="w-6 h-6 align-middle"
                src="https://static.chotot.com/storage/icons/svg/help.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
            <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
              Trợ giúp
            </div>
          </div>
        </div>
        <div className="p-0 ">
          {isAuthenticated && isAuthenticated ? (
            <div
              onClick={logoutHandler}
              className=" flex items-center h-10 w-full leading-6 no-underline text-gray-900 text-base pt-2 pr-3 pb-2 pl-3"
            >
              <div>
                <Image
                  className="w-6 h-6 align-middle"
                  src="https://static.chotot.com/storage/icons/svg/help.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </div>
              <div className="float-left text-gray-900 leading-6 ml-3 text-sm">
                Đăng xuất
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

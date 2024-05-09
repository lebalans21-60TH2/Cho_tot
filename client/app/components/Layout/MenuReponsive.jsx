"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";

// lay router cua trang
import { usePathname, useSearchParams, useRouter } from "next/navigation";
const MenuReponsive = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [urlActive, setUrlActive] = useState(pathname);

  useEffect(() => {
    if (pathname === urlActive) {
      setUrlActive(pathname);
    } else {
      console.log(`Đường dẫn hiện tại không phải là `);
    }
  }, [pathname]);
  const isActive = (pathname) => pathname === urlActive;

  return (
    <div className="block 800px:hidden fixed bottom-[0] h-[50px] w-full min-w-[320px] bg-[#ffffff] my-[0] mx-[auto] z-[40] will-change-transform">
      <ul className="flex h-full p-0 m-0 list-none ">
        <li className="flex-grow flex-shrink basis-[auto] relative text-center">
          <div className="px-[4px] py-0 float-none h-full cursor-pointer ">
            <span>
              <Link href="/">
                <div
                  className={
                    isActive("/")
                      ? "text-[#ff8800] flex items-center relative float-none h-full flex-col pt-[4px]"
                      : "text-[#8C8C8C] flex items-center relative float-none h-full flex-col pt-[4px]"
                  }
                >
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7343 2.5C14.9171 2.5 15.0938 2.56527 15.2327 2.68405L25.966 11.884C26.1359 12.0297 26.2343 12.2429 26.2343 12.4667V23.2C26.2343 23.81 25.992 24.395 25.5607 24.8263C25.1293 25.2577 24.5443 25.5 23.9343 25.5H17.801C17.5977 25.5 17.4027 25.4192 17.2589 25.2754C17.1151 25.1317 17.0343 24.9367 17.0343 24.7333V20.1333C17.0343 19.5233 16.792 18.9383 16.3607 18.507C15.9294 18.0757 15.3443 17.8333 14.7343 17.8333C14.1244 17.8333 13.5393 18.0757 13.108 18.507C12.6767 18.9383 12.4344 19.5233 12.4344 20.1333V24.7333C12.4344 24.9367 12.3536 25.1317 12.2098 25.2754C12.066 25.4192 11.871 25.5 11.6677 25.5H5.53437C4.92437 25.5 4.33936 25.2577 3.90803 24.8263C3.4767 24.395 3.23438 23.81 3.23438 23.2V12.4667C3.23438 12.2429 3.33276 12.0297 3.50271 11.884L14.236 2.68405C14.3749 2.56527 14.5516 2.5 14.7343 2.5Z"
                      fill="#FE9900"
                    ></path>
                  </svg>
                  <span className=" text-[#ff8800] float-none block text-[0.625rem] h-[16px] w-full bottom-[0px] absolute">
                    Trang chủ
                  </span>
                </div>
              </Link>
            </span>
          </div>
        </li>
        <li className="flex-grow flex-shrink basis-[auto] relative text-center">
          <div className="px-[4px] py-0 float-none h-full cursor-pointer ">
            <span>
              <Link href="/pages/categories/electroniceDevice">
                <div
                  className={
                    isActive("/pages/categories/electroniceDevice")
                      ? "text-[#ff8800] flex items-center relative float-none h-full flex-col pt-[4px]"
                      : "text-[#8C8C8C] flex items-center relative float-none h-full flex-col pt-[4px]"
                  }
                >
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
                  <span className="float-none block text-[0.625rem] h-[16px] w-full bottom-[0px] absolute">
                    Quản lý tin
                  </span>
                </div>
              </Link>
            </span>
          </div>
        </li>
        <li className="flex-grow flex-shrink basis-[auto] relative text-center">
          <div
            style={{ left: "calc(50% - 35px)" }}
            className="absolute bottom-[50px] text-center w-[70px] h-[43px]"
          >
            <img
              className="w-[100%] h-[70px]"
              src="https://static.chotot.com/storage/default/combined-shape.svg"
              alt=""
            />
          </div>
          <div
            style={{ left: "calc(50% - 35px)" }}
            className="w-[70px] h-[70px] bg-[#FFBA00] text-[#FFFFFF] text-[0.875rem] font-normal not-italic leading-[3.7] tracking-normal rounded-[50%] absolute top-[-10px] p-0"
          ></div>
          <div className="py-0 px-[4px] leading-[35px] h-full float-none cursor-pointer ">
            <div className="flex justify-center p-[2px] text-[#8C8C8C] h-full relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-type="monochrome"
                viewBox="0 0 23.228 23.227"
                width="1em"
                height="1em"
                fill="none"
                className="align-middle text-[28px] text-[#222222]"
              >
                <path
                  d="M13.288 0a.759.759 0 110 1.518H3.396a1.88 1.88 0 00-1.877 1.877v16.438a1.88 1.88 0 001.877 1.877h16.437a1.88 1.88 0 001.877-1.877V9.488a.76.76 0 011.518 0v10.344a3.399 3.399 0 01-3.395 3.395H3.396A3.4 3.4 0 010 19.832V3.395A3.4 3.4 0 013.396 0zm6.022.21c.273-.1.564-.078.835-.038.276.042.57.205.83.461l.54.54 1.117 1.117c.24.24.394.497.46.766a1.68 1.68 0 01-.4 1.545l-.058.062c-.344.352-.7.707-1.048 1.05l-.631.63-6.33 6.328-.488.493-.038.04c-.307.31-.621.628-.939.932-.153.148-.339.219-.619.236l-3.014.184h-.03a.719.719 0 01-.484-.218c-.158-.156-.249-.358-.24-.543l.135-3.097c.016-.253.095-.443.248-.598l.157-.16.003-.002.082-.081 5.416-5.415a719.16 719.16 0 011.747-1.745l1.68-1.682c.144-.146.27-.275.397-.396a1.8 1.8 0 01.672-.408zm.493 1.428l-.221.219c-.153.151-.306.305-.457.456l-.536.537-8.151 8.152-.086 1.957 1.906-.115.312-.312.226-.224.05-.049.385-.38 8.401-8.403-1.211-1.209a8.233 8.233 0 01-.172-.175l-.027-.029c-.065-.068-.13-.137-.2-.206l-.22-.219z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="float-none block text-[0.625rem] w-full h-[29px] bottom-[0px] absolute text-[#000]">
                Đăng tin
              </span>
            </div>
          </div>
        </li>
        <li className="flex-grow flex-shrink basis-[auto] relative text-center">
          <div className="px-[4px] py-0 float-none h-full cursor-pointer ">
            <span>
              <div className="text-[#8C8C8C] flex items-center relative float-none h-full flex-col pt-[4px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="aw__ie1ow2r"
                >
                  <g clip-path="url(#clip0_5790_635)">
                    <g clip-path="url(#clip1_5790_635)">
                      <path
                        d="M19.4045 18.7012H4.58447C4.33116 18.6997 4.08267 18.6319 3.86373 18.5044C3.64479 18.377 3.46306 18.1945 3.33662 17.975C3.21018 17.7555 3.14344 17.5067 3.14307 17.2534C3.14269 17.0001 3.20868 16.7511 3.33447 16.5312C4.25656 14.6713 4.68036 12.6039 4.56447 10.5312V9.75119C4.56208 8.76941 4.75587 7.79705 5.13447 6.89119C5.50399 5.9826 6.05527 5.15909 6.75447 4.47119C7.44834 3.77705 8.27473 3.22952 9.18447 2.86119C10.0896 2.48125 11.0629 2.29067 12.0445 2.30119C14.0179 2.33276 15.8994 3.14096 17.2809 4.55055C18.6624 5.96015 19.4326 7.8575 19.4245 9.83119V10.5012C19.3053 12.5742 19.7293 14.6423 20.6545 16.5012C20.7789 16.7226 20.8442 16.9723 20.8442 17.2262C20.8442 17.4801 20.7789 17.7298 20.6545 17.9512C20.5307 18.1738 20.3494 18.359 20.1295 18.4874C19.9096 18.6159 19.6591 18.6828 19.4045 18.6812V18.7012ZM11.9945 3.70119C11.2051 3.70057 10.4234 3.85571 9.69411 4.15773C8.96481 4.45974 8.30228 4.90269 7.74447 5.46119C7.17636 6.03386 6.72767 6.71369 6.42447 7.46119C6.13287 8.1891 5.98679 8.9671 5.99447 9.75119V9.75119V10.5012C6.11944 12.8302 5.62973 15.1512 4.57447 17.2312L19.4345 17.3012C18.4083 15.1855 17.914 12.8513 17.9945 10.5012V9.83119C18 8.22614 17.3737 6.68338 16.251 5.53633C15.1283 4.38928 13.5993 3.73008 11.9945 3.70119V3.70119Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.9945 22.4508C11.5081 22.4529 11.0261 22.3585 10.5764 22.1731C10.1267 21.9877 9.71819 21.715 9.37453 21.3708C8.68295 20.6741 8.29475 19.7324 8.29453 18.7508V18.0008C8.29453 17.8151 8.36827 17.6371 8.49955 17.5058C8.63083 17.3745 8.80887 17.3008 8.99452 17.3008C9.18018 17.3008 9.35822 17.3745 9.4895 17.5058C9.62078 17.6371 9.69452 17.8151 9.69452 18.0008V18.7508C9.69584 19.3609 9.9364 19.9461 10.3645 20.3808C10.8081 20.7912 11.3902 21.0192 11.9945 21.0192C12.5989 21.0192 13.181 20.7912 13.6245 20.3808C14.0526 19.9461 14.2932 19.3609 14.2945 18.7508V18.0008C14.2945 17.8151 14.3683 17.6371 14.4995 17.5058C14.6308 17.3745 14.8089 17.3008 14.9945 17.3008C15.1802 17.3008 15.3582 17.3745 15.4895 17.5058C15.6208 17.6371 15.6945 17.8151 15.6945 18.0008V18.7508C15.6958 19.237 15.601 19.7188 15.4156 20.1683C15.2301 20.6178 14.9576 21.0262 14.6138 21.37C14.2699 21.7139 13.8615 21.9863 13.412 22.1718C12.9625 22.3573 12.4808 22.4521 11.9945 22.4508Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5790_635">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                    <clipPath id="clip1_5790_635">
                      <rect
                        width="17.71"
                        height="20.15"
                        fill="white"
                        transform="translate(3.14453 2.30078)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="float-none block text-[0.625rem] h-[16px] w-full bottom-[0px] absolute">
                  Thông báo
                </span>
              </div>
            </span>
          </div>
        </li>
        <li className="flex-grow flex-shrink basis-[auto] relative text-center">
          <div
            onClick={() => router.push("/pages/authentication/Login")}
            className="px-[4px] py-0 float-none h-full cursor-pointer "
          >
            <span>
              <div className="text-[#8C8C8C] flex items-center relative float-none h-full flex-col pt-[4px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="aw__irp38gy"
                >
                  <path
                    fill="currentColor"
                    d="M6.03531778,18.739764 C7.62329979,20.146176 9.71193925,21 12,21 C14.2880608,21 16.3767002,20.146176 17.9646822,18.739764 C17.6719994,17.687349 15.5693823,17 12,17 C8.43061774,17 6.32800065,17.687349 6.03531778,18.739764 Z M4.60050358,17.1246475 C5.72595131,15.638064 8.37060189,15 12,15 C15.6293981,15 18.2740487,15.638064 19.3994964,17.1246475 C20.4086179,15.6703183 21,13.9042215 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,13.9042215 3.59138213,15.6703183 4.60050358,17.1246475 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,10 C8,7.75575936 9.57909957,6 12,6 C14.4141948,6 16,7.92157821 16,10.2 C16,13.479614 14.2180861,15 12,15 C9.76086382,15 8,13.4273743 8,10 Z M10,10 C10,12.2692568 10.8182108,13 12,13 C13.1777063,13 14,12.2983927 14,10.2 C14,8.95041736 13.2156568,8 12,8 C10.7337387,8 10,8.81582479 10,10 Z"
                  />
                </svg>
                <span className="float-none block text-[0.625rem] h-[16px] w-full bottom-[0px] absolute">
                  Tài khoản
                </span>
              </div>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuReponsive;

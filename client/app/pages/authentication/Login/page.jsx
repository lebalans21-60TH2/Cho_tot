"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { server } from "../../../server";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const router = useRouter();
  const [phoneNumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  // state cho label input 
  const [haveNumberPhone, setHaveNumberPhone] = useState("");
  const [havePassWord, setHavePassWord] = useState("")


  const setPhoneNumber = (e)=>{
    // setPhonenumber(e.target.value)
    const { value } = e.target
    if(value !== ""){
      setHaveNumberPhone("-translate-y-2.5 font-bold scale-[0.7143]")
      } 
    if (value === '' || /^[0-9]+$/.test(value)) {
      setPhonenumber(value);
    }
  
  }
const SetPassWord = (e)=>{
  setPassword(e.target.value);
  if(password !== ""){
    setHavePassWord("-translate-y-2.5 font-bold scale-[0.7143]")
    }
}

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        {
          phoneNumber,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        router.push("/");
        // window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
      <div
        style={{ overflow: "unset" }}
        className="hidden 800px:m-0 800px:p-0 800px:block"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100svh",
            padding: "16px",
            background:
              "url(https://static.chotot.com/storage/marketplace/login-background.webp) no-repeat",
            backgroundSize: "contain",
            justifyContent: "center",
            backgroundPositionY: "60%",
          }}
        >
          {/* phan login */}
          <div
            style={{
              width: "440px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              padding: "32px 40px",
              boxShadow: "0 0 8px rgba(30,40,60,.1)",
              minHeight: "unset",
            }}
          >
            <div
              onClick={() => router.push("/")}
              className="flex justify-center"
            >
              <img
                className={"w-[124px] h-[44px] align-middle"}
                src="https://static.chotot.com/storage/marketplace/logo.png"
                alt=""
              />
            </div>
            <h3 className="mt-[20px] mb-[24px] text-[24px] font-bold text-[#222]">
              Đăng nhập
            </h3>
            {/* sdt vs pass */}
            <form onSubmit={handleSubmit}>
              <div className="w-full ">
                <div className="w-full h-[48px] relative rounded-[4px] border-[1px] border-solid border-[#c0c0c0]">
                  <input
                    // className="w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible"
                    style={{
                      width: "100%",
                      height: "100%",
                      fontSize: ".875rem",
                      color: "#222",
                
                      appearance: "none",
                      outline: "none",
                      border: "none",
                      padding: "14px 12px 0",
                      borderRadius: "4px",
                      backgroundColor: "#fff",
                    }}
                    type="text"
                 
                    name="phomenumber"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />
                  <label
                   className={`absolute cursor-text pointer-events-none origin-top-left transition-transform duration-[0.1s] ease-[ease] text-[#8c8c8c] text-sm left-3 top-[13px] ${haveNumberPhone} `}
                    htmlFor=""
                  >
                    Số điện thoại
                  </label>
                </div>
                <p className="text-[#8c8c8c] text-[.625rem] min-h-[16px] ml-[12px] leading-[1.5] text-left"></p>
              </div>
              <div className="w-full ">
                <div className="w-full h-[48px] relative rounded-[4px] border-[1px] border-solid border-[#c0c0c0]">
                  <input
                    // className="w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible"
                    className="peer w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    type="password"
                    name="password"
                    value={password}
                    onChange={SetPassWord}
                  />
                  <label
                    // style={{
                    //   pointerEvents: "none",
                    //   transformOrigin: "top left",
                    //   transition: "transform .1s ease",
                    // }}
                    // className="absolute top-[13px] left-[12px] cursor-text text-[#8c8c8c] text-[.875rem]"
                    className={`absolute cursor-text pointer-events-none origin-top-left transition-transform duration-[0.1s] ease-[ease] text-[#8c8c8c] text-sm left-3 top-[13px] ${havePassWord} `}

                    htmlFor=""
                  >
                    Mật khẩu
                  </label>
                </div>
                <p className="text-[#8c8c8c] text-[.625rem] min-h-[16px] ml-[12px] leading-[1.5] text-left"></p>
              </div>
              <a className="inline-block text-[#306bd9] mb-[16px]" href="">
                Quên mật khẩu?
              </a>
              <button
                type="submit"
                className="w-full flex justify-center cursor-pointer uppercase font-bold rounded-[4px] text-[#fff] bg-[#f80] border-[#f80] text-[1rem] leading-[1.25rem] py-[9px] px-[19px]"
              >
                Đăng nhập
              </button>
            </form>
            <div className="mt-[16px] flex items-center mb-[16px] ">
              <hr className="w-full text-[#8c8c8c]" />
              <span className="whitespace-nowrap text-[#595959] mx-[12px] my-0">
                Hoặc đăng nhập bằng
              </span>
              <hr className="w-full text-[#8c8c8c]" />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "8px",
                gap: "8px",
              }}
            >
              <button className="cursor-pointer h-[40px] flex items-center justify-center w-full rounded-[4px] border-[1px] border-[solid] border-[#c0c0c0] bg-[#fff] font-bold text-[#222]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0005 1.66797C5.3988 1.66797 1.66797 5.32786 1.66797 9.84202C1.66797 13.9213 4.71464 17.3024 8.6988 17.918V12.2054H6.58214V9.84202H8.6988V8.0411C8.6988 5.99084 9.94297 4.86025 11.8455 4.86025C12.7571 4.86025 13.7121 5.01966 13.7121 5.01966V7.02986H12.6588C11.6255 7.02986 11.3021 7.66096 11.3021 8.3076V9.84038H13.6113L13.2421 12.2037H11.3021V17.9163C15.2863 17.304 18.333 13.9221 18.333 9.84202C18.333 5.32786 14.6021 1.66797 10.0005 1.66797Z"
                    fill="#2561CF"
                  ></path>
                </svg>
                Facebook
              </button>
              <div className="relative ">
                <button className="cursor-pointer h-[40px] flex items-center justify-center w-full rounded-[4px] border-[1px] border-[solid] border-[#c0c0c0] bg-[#fff] font-bold text-[#222]">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2992 10.1951C19.2992 9.47569 19.2395 8.95069 19.1102 8.40625H10.7031V11.6534H15.6379C15.5384 12.4604 15.0012 13.6757 13.8072 14.4923L13.7905 14.601L16.4487 16.6133L16.6328 16.6312C18.3242 15.1048 19.2992 12.859 19.2992 10.1951Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M10.7042 18.75C13.1219 18.75 15.1515 17.9722 16.634 16.6306L13.8084 14.4916C13.0522 15.0069 12.0374 15.3666 10.7042 15.3666C8.33635 15.3666 6.32663 13.8403 5.61022 11.7306L5.50522 11.7393L2.74122 13.8296L2.70508 13.9278C4.17754 16.7861 7.2021 18.75 10.7042 18.75Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.61025 11.7322C5.42122 11.1878 5.31182 10.6044 5.31182 10.0016C5.31182 9.39881 5.42122 8.8155 5.6003 8.27106L5.59529 8.15511L2.79666 6.03125L2.7051 6.07381C2.09823 7.25994 1.75 8.59191 1.75 10.0016C1.75 11.4113 2.09823 12.7432 2.7051 13.9294L5.61025 11.7322Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M10.7042 4.63331C12.3856 4.63331 13.5198 5.34303 14.1665 5.93612L16.6936 3.525C15.1416 2.11528 13.1219 1.25 10.7042 1.25C7.2021 1.25 4.17754 3.21387 2.70508 6.07218L5.60028 8.26944C6.32664 6.15972 8.33636 4.63331 10.7042 4.63331Z"
                      fill="#EB4335"
                    ></path>
                  </svg>
                  Google
                </button>
                {/* Iframe button google cchua phat trien */}
                <div></div>
              </div>
              <button className="cursor-pointer h-[40px] flex items-center justify-center w-full rounded-[4px] border-[1px] border-[solid] border-[#c0c0c0] bg-[#fff] font-bold text-[#222]">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1386 4.09766C12.5636 4.09766 11.898 4.84922 10.8011 4.84922C9.67652 4.84922 8.81871 4.10312 7.45386 4.10312C6.11793 4.10312 4.69332 4.91875 3.78863 6.3082C2.51832 8.26758 2.73394 11.9578 4.79136 15.1016C5.5273 16.227 6.51011 17.4891 7.79918 17.5027H7.82261C8.94293 17.5027 9.27574 16.7691 10.8175 16.7605H10.841C12.3597 16.7605 12.6644 17.4984 13.78 17.4984H13.8035C15.0925 17.4848 16.1281 16.0863 16.864 14.9652C17.3937 14.159 17.5906 13.7543 17.9968 12.8422C15.0207 11.7125 14.5425 7.49336 17.4859 5.87578C16.5875 4.75078 15.325 4.09922 14.1347 4.09922L14.1386 4.09766Z"
                    fill="#222222"
                  ></path>
                  <path
                    d="M13.7921 0C12.8546 0.0636719 11.7609 0.660547 11.1203 1.43984C10.539 2.14609 10.0609 3.19375 10.2484 4.20977H10.3234C11.3218 4.20977 12.3437 3.60859 12.9406 2.83828C13.5156 2.10508 13.9515 1.06602 13.7921 0Z"
                    fill="#222222"
                  ></path>
                </svg>
                Apple ID
              </button>
            </div>
            <p className="text-center text-[#595959] mt-[24px] mb-0 ">
              {" "}
              Chưa có tài khoản?
              <span
                onClick={() => router.push("/pages/authentication/Register")}
                className="text-[#306bd9] font-bold ml-[3px] cursor-pointer"
              >
                Đăng ký tài khoản mới
              </span>
            </p>
          </div>
          {/* chinh sach */}
          <div className="mb-0 text-[12px] mt-[20px] flex gap-[5px] justify-center flex-wrap ">
            <a className="text-[#595959]" href="">
              Quy chế hoạt động sàn
            </a>
            <span>•</span>
            <a className="text-[#595959]" href="">
              Chính sách bảo mật
            </a>
            <span>•</span>
            <a className="text-[#595959]" href="">
              Liên hệ hỗ trợ
            </a>
          </div>
          {/* Danh sach dau tu */}
          <div className="fixed bottom-[24px] left-[40px] w-[unset] flex flex-1 flex-col justify-end">
            <p className="font-bold text-[12px] text-[#8c8c8c]">
              Được phát triển bởi
            </p>
            <div className="flex gap-[20px]">
              <a href="">
                <img
                  className="h-[20px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/logo.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-[20px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/pty-orange-logo.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-[20px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/job-green-logo.png"
                  alt=""
                />
              </a>
              <a
                className="flex items-center h-[21.5px] overflow-hidden ml-[-3px]"
                href=""
              >
                <img
                  className="w-[93px] h-[93px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/veh-red-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      {/* Reponsive */}
      <div style={{ overflow: "unset" }} className="800px:hidden m-0 p-0">
        <div className="flex flex-col items-center min-h-[100svh] p-[16px]">
          <div className="w-[100%] ">
            {/* logo */}
            <div onClick={() => router.push("/")}>
              <img
                className="w-[121px] h-[44px] align-middle "
                src="https://static.chotot.com/storage/marketplace/logo.png"
                alt=""
              />
            </div>
            <h3 className="text-[#222] text-[20px] font-bold mt-[32px] mb-[24px] leading-[1.5] ">
              Đăng nhập
            </h3>
            <form action="POST">
              <div className="w-full ">
                <div className="w-full h-[48px] relative rounded-[4px] border-[1px] border-solid border-[#c0c0c0]">
                  <input
                    // className="w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible"
                    className="peer w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    type="tel"
                  />
                  <label
                    // style={{
                    //   pointerEvents: "none",
                    //   transformOrigin: "top left",
                    //   transition: "transform .1s ease",
                    // }}
                    // className="absolute top-[13px] left-[12px] cursor-text text-[#8c8c8c] text-[.875rem]"
                    className="pointer-events-none absolute left-[12px] top-[13px] mb-0 max-w-[100%] max-h-[100%] origin-[0_0] truncate text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    htmlFor=""
                  >
                    Số điện thoại
                  </label>
                </div>
                <p className="text-[#8c8c8c] text-[.625rem] min-h-[16px] ml-[12px] leading-[1.5] text-left"></p>
              </div>
              <div className="w-full ">
                <div className="w-full h-[48px] relative rounded-[4px] border-[1px] border-solid border-[#c0c0c0]">
                  <input
                    // className="w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible"
                    className="peer w-full h-full text-[.875rem] outline-0 appearance-none border-0 pt-[14px] pr-[12px] pl-[12px] pb-0 rounded-[4px] bg-[#fff] overflow-x-visible transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    type="password"
                  />
                  <label
                    // style={{
                    //   pointerEvents: "none",
                    //   transformOrigin: "top left",
                    //   transition: "transform .1s ease",
                    // }}
                    // className="absolute top-[13px] left-[12px] cursor-text text-[#8c8c8c] text-[.875rem]"
                    className="pointer-events-none absolute left-[12px] top-[13px] mb-0 max-w-[100%] max-h-[100%] origin-[0_0] truncate text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    htmlFor=""
                  >
                    Mật khẩu
                  </label>
                </div>
                <p className="text-[#8c8c8c] text-[.625rem] min-h-[16px] ml-[12px] leading-[1.5] text-left"></p>
              </div>
              <a className="inline-block text-[#306bd9] mb-[16px]" href="">
                Quên mật khẩu?
              </a>
              <button className="w-full flex justify-center cursor-pointer uppercase font-bold rounded-[4px] text-[#fff] bg-[#f80] border-[#f80] text-[1rem] leading-[1.25rem] py-[9px] px-[19px]">
                Đăng nhập
              </button>
            </form>
            <div className="mt-[16px] flex items-center mb-[16px] ">
              <hr className="w-full h-[1px] text-[#8c8c8c]" />
              <span className="whitespace-nowrap text-[#595959] mx-[12px] my-0">
                Hoặc đăng nhập bằng
              </span>
              <hr className="w-full h-[1px] text-[#8c8c8c]" />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "8px",
                gap: "8px",
              }}
            >
              <button className="cursor-pointer h-[40px] flex items-center justify-center w-full rounded-[4px] border-[1px] border-[solid] border-[#c0c0c0] bg-[#fff] font-bold text-[#222]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0005 1.66797C5.3988 1.66797 1.66797 5.32786 1.66797 9.84202C1.66797 13.9213 4.71464 17.3024 8.6988 17.918V12.2054H6.58214V9.84202H8.6988V8.0411C8.6988 5.99084 9.94297 4.86025 11.8455 4.86025C12.7571 4.86025 13.7121 5.01966 13.7121 5.01966V7.02986H12.6588C11.6255 7.02986 11.3021 7.66096 11.3021 8.3076V9.84038H13.6113L13.2421 12.2037H11.3021V17.9163C15.2863 17.304 18.333 13.9221 18.333 9.84202C18.333 5.32786 14.6021 1.66797 10.0005 1.66797Z"
                    fill="#2561CF"
                  ></path>
                </svg>
                Facebook
              </button>
              <div className="relative ">
                <button className="cursor-pointer h-[40px] flex items-center justify-center w-full rounded-[4px] border-[1px] border-[solid] border-[#c0c0c0] bg-[#fff] font-bold text-[#222]">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2992 10.1951C19.2992 9.47569 19.2395 8.95069 19.1102 8.40625H10.7031V11.6534H15.6379C15.5384 12.4604 15.0012 13.6757 13.8072 14.4923L13.7905 14.601L16.4487 16.6133L16.6328 16.6312C18.3242 15.1048 19.2992 12.859 19.2992 10.1951Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M10.7042 18.75C13.1219 18.75 15.1515 17.9722 16.634 16.6306L13.8084 14.4916C13.0522 15.0069 12.0374 15.3666 10.7042 15.3666C8.33635 15.3666 6.32663 13.8403 5.61022 11.7306L5.50522 11.7393L2.74122 13.8296L2.70508 13.9278C4.17754 16.7861 7.2021 18.75 10.7042 18.75Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.61025 11.7322C5.42122 11.1878 5.31182 10.6044 5.31182 10.0016C5.31182 9.39881 5.42122 8.8155 5.6003 8.27106L5.59529 8.15511L2.79666 6.03125L2.7051 6.07381C2.09823 7.25994 1.75 8.59191 1.75 10.0016C1.75 11.4113 2.09823 12.7432 2.7051 13.9294L5.61025 11.7322Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M10.7042 4.63331C12.3856 4.63331 13.5198 5.34303 14.1665 5.93612L16.6936 3.525C15.1416 2.11528 13.1219 1.25 10.7042 1.25C7.2021 1.25 4.17754 3.21387 2.70508 6.07218L5.60028 8.26944C6.32664 6.15972 8.33636 4.63331 10.7042 4.63331Z"
                      fill="#EB4335"
                    ></path>
                  </svg>
                  Google
                </button>
                {/* Iframe button google cchua phat trien */}
                <div></div>
              </div>
              <button className="cursor-pointer h-[40px] flex items-center justify-center w-full rounded-[4px] border-[1px] border-[solid] border-[#c0c0c0] bg-[#fff] font-bold text-[#222]">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1386 4.09766C12.5636 4.09766 11.898 4.84922 10.8011 4.84922C9.67652 4.84922 8.81871 4.10312 7.45386 4.10312C6.11793 4.10312 4.69332 4.91875 3.78863 6.3082C2.51832 8.26758 2.73394 11.9578 4.79136 15.1016C5.5273 16.227 6.51011 17.4891 7.79918 17.5027H7.82261C8.94293 17.5027 9.27574 16.7691 10.8175 16.7605H10.841C12.3597 16.7605 12.6644 17.4984 13.78 17.4984H13.8035C15.0925 17.4848 16.1281 16.0863 16.864 14.9652C17.3937 14.159 17.5906 13.7543 17.9968 12.8422C15.0207 11.7125 14.5425 7.49336 17.4859 5.87578C16.5875 4.75078 15.325 4.09922 14.1347 4.09922L14.1386 4.09766Z"
                    fill="#222222"
                  ></path>
                  <path
                    d="M13.7921 0C12.8546 0.0636719 11.7609 0.660547 11.1203 1.43984C10.539 2.14609 10.0609 3.19375 10.2484 4.20977H10.3234C11.3218 4.20977 12.3437 3.60859 12.9406 2.83828C13.5156 2.10508 13.9515 1.06602 13.7921 0Z"
                    fill="#222222"
                  ></path>
                </svg>
                Apple ID
              </button>
            </div>
            <p className="text-center text-[#595959] mt-[24px] mb-0 ">
              {" "}
              Chưa có tài khoản?
              <span
                onClick={() => router.push("/pages/authentication/Register")}
                className="text-[#306bd9] font-bold ml-[3px] cursor-pointer"
              >
                Đăng ký tài khoản mới
              </span>
            </p>
          </div>
          <div className="flex gap-[5px] justify-center text-[10px] mb-[100px] mt-[12px] flex-wrap">
            <a className="text-[#595959]" href="">
              Quy chế hoạt động sàn
            </a>
            <span>•</span>
            <a className="text-[#595959]" href="">
              Chính sách bảo mật
            </a>
            <span>•</span>
            <a className="text-[#595959]" href="">
              Liên hệ hỗ trợ
            </a>
          </div>
          {/* Danh sach dau tu */}
          <div className=" w-[100%] flex flex-1 flex-col justify-end">
            <p className="font-bold text-[12px] text-[#8c8c8c]">
              Được phát triển bởi
            </p>
            <div className="flex gap-[12px]">
              <a href="">
                <img
                  className="h-[18px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/logo.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-[18px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/pty-orange-logo.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="h-[18px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/job-green-logo.png"
                  alt=""
                />
              </a>
              <a
                className="flex items-center h-[21.5px] overflow-hidden ml-[-3px]"
                href=""
              >
                <img
                  className="w-[93px] h-[93px] align-middle"
                  src="https://static.chotot.com/storage/marketplace/veh-red-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

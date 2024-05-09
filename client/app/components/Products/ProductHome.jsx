"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { homeProducts } from "../Constant/indexData";
// import router 
import { useRouter } from "next/navigation";
const ProductHome = () => {
  const[numProductShow, setNumProductShow] = useState(20);
// Lấy 20 sản phẩm trong mảng sản phẩm để hiển thị
let listProduct = homeProducts.slice(0, numProductShow);
useEffect(() => {
  return () => {
    // Code dọn dẹp nếu cần
  };
}, [numProductShow]);

  const router = useRouter(numProductShow);
  return (
    <>
     <div className="hidden 800px:relative 800px:flex 800px:justify-center">
      <div className="w-full max-w-[1024px] bg-[#F4F4F4] pb-4 min-h-[700px] mt-3">
        <div className="bg-white mt-3">
          <p className="text-base font-bold m-0 p-3 not-italic text-gray-900 leading-[1.41] tracking-normal">
            Tin đăng mới
          </p>
          <div className="flex flex-wrap border-t-[1px] border-[#f6f6f6f3]">
            <ProductCard/>   
          </div>
        </div>
      </div>
    </div>
    {/* Phan reponsive danh sach san pham */}
      {/* Danh sach san pham */}
      <div className="bg-white mt-3 min-h-[300px] pt-3 pr-0 pb-0 pl-0 400px:top-[135vh] 375px:top-[148vh] 360px:top-[145vh] 390px:top-[135vh] z-[20] 800px:hidden ">
          <p className="text-base font-bold m-0 p-3 not-italic text-gray-900 leading-[1.41]">
            Tin đăng mới
          </p>
          <div className="flex flex-wrap border-t border-gray-200">
            {listProduct?.map((item) => (
              <div 
              onClick={()=>router.push("/pages/productDetails")}
                key={item.id}
                className="relative border-t-0 border-1 border-solid border-[#f4f4f4] p-[12px] basis-[50%]"
              >
                <div className="block h-[100%] relative">
                  {/* Hinh anh */}
                  <div className="flex justify-center h-[150px]">
                    <div className="justify-center relative h-full w-full inline-block ">
                      <img
                        className="absolute object-cover rounded-[2px] w-full h-full"
                        src={item.ImgUrl}
                        alt=""
                      />
                    </div>
                    <div className="400px:bottom-[116px] 390px:bottom-[122px] absolute right-[8px] 375px:bottom-[122px] 360px:bottom-[146px] z-[9]">
                      <img
                        src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* ten */}
                  <div className="pb-[8px] relative w-[100%] ">
                    <div
                      style={{
                        color: "#222",
                        display: "block",
                        fontSize: "14px !important",
                        height: " 40px !important",
                        lineHeight: "1.43 !important",
                        marginTop: " 8px",
                        overflowWrap: "anywhere",
                        textDecoration: " none",
                        textOverflow: "unset",
                        whiteSpace: "unset",
                        width: "calc(100% - 16px)",
                        maxHeight:"40px",
                        overflow:"hidden"
                      }}
                    >
                      {item.Nameproduct}
                    </div>
                    <div className="absolute right-0 top-0 ">
                      <button>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8"
                            cy="2"
                            r="2"
                            transform="rotate(90 8 2)"
                            fill="#222222"
                          ></circle>
                          <circle
                            cx="8"
                            cy="8"
                            r="2"
                            transform="rotate(90 8 8)"
                            fill="#222222"
                          ></circle>
                          <circle
                            cx="8"
                            cy="14"
                            r="2"
                            transform="rotate(90 8 14)"
                            fill="#222222"
                          ></circle>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <span className="text-[#d0021b] inline-block text-[15px] font-bold leading-[1.35] mt-[2px] mr-1">
                        {item.Price}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#9b9b9b] w-full relative ">
                    <img
                    className="inline-block"
                      src="https://static.chotot.com/storage/chotot-icons/svg/user.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <div className=" mt-[1px] inline-block overflow-hidden text-ellipsis capitalize align-middle truncate">
                      <span className="text-[10px] mx-[3px]">
                        {item.Datesubmited}
                      </span>
                    </div>
                    <div className=" mt-[1px] inline-block overflow-hidden text-ellipsis capitalize align-middle truncate">
                      <span className="mr-0 text-[10px]">
                        {item.Address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[44px] w-full text-center p-[12px] mx-[auto] bg-[#f4f4f4]">
            <button onClick={() => setNumProductShow(numProductShow + 10)} className="cursor-pointer block w-[120px] font-bold leading-[1.33] mx-[auto] text-[#2c62ad]">Xem thêm</button>
          </div>
        </div>
    </>  
  );
};

export default ProductHome;

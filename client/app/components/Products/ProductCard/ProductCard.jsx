"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { homeProducts } from "../../Constant/indexData";

const ProductCard = () => {
  const router = useRouter();
  // Lấy 20 sản phẩm trong mảng sản phẩm để hiển thị
  const [numProductShow, setNumProductShow] = useState(20);
  let listProduct = homeProducts.slice(0, numProductShow);
  useEffect(() => {
    return () => {
      // Code dọn dẹp nếu cần
    };
  }, [numProductShow]);

  return (
    <>
      {listProduct?.map((item) => (
        <div
          onClick={() => router.push("/pages/productDetails")}
          key={item.id}
          className="relative overflow-hidden bg-white border-[2px] border-[#d8d8d8] basis-[20%] p-3 w-[200px] min-w-[200px] transition-transform duration-300 ease-in-out hover:shadow-bl mt-1 mb-[1px]"
        >
          <div className="relative block h-[100%]">
            {/* Hinh anh */}
            <div className="flex justify-center">
              <div className="bg-cover h-[150px] rounded-sm inline-block overflow-hidden w-full">
                <Image
                  className="h-full object-cover w-full"
                  src={item.ImgUrl}
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
                {item.Nameproduct}
              </div>
              <div className="relative pb-[10px]">
                <span className="text-[15px] font-bold leading-[1.33] text-[#d0021b] inline-block m-[2px_4px_0_0]">
                  {item.Price}đ
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
                {item.Datesubmited}
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
                {item.Address}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="h-full w-full text-center p-3 pt-4 bg-[#F4F4F4]">
        <button
          onClick={() => setNumProductShow(numProductShow + 10)}
          className="cursor-pointer block w-32 text-blue-700 text-base font-bold not-italic outline-none border-0 leading-[1.33] mt-0 mr-auto mb-0 ml-auto bg-[#F4F4F4]"
        >
          Xem thêm
        </button>
      </div>
    </>
  );
};

export default ProductCard;

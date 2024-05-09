"use client";
import React, { useEffect, useState } from "react";
// import components
import Header from "../../../components/Header/Header";
import FooterHouseWare from "../../../components/Footer/FooterHouseWare";
import MenuReponsive from "../../../components/Layout/MenuReponsive";
import Footer from "../../../components/Footer/Footer";
import Categories from "../../../components/Categories/Categories";
import Filter from "../../../components/Layout/Filter";
import ProductCardItems from "../../../components/Products/ProductCardPage/ProductCardItems";
import Directions from "../../../components/Layout/Directions";
import Pagination from "../../../components/Layout/Pagination";

// Import data product
import { homeProducts, DataOfficeSupplies } from "../../../components/Constant/indexData";
// lay router cua trang
import { usePathname, useSearchParams } from "next/navigation";
import './style.css'


const page = () => {
    const pathname = usePathname();
    // const category = "officeSupplies";
    let FilterNormar = DataOfficeSupplies
    // Lọc sản phẩm theo thể loại đồ gia dụng
    // let officeSuppliesProducts = homeProducts.filter((sp) => sp.category === category);
    // const DataProducts = officeSuppliesProducts;
    const Datadirections = DataOfficeSupplies[0];
      // test phần filter
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categorySub, setCategorySub] = useState("");
  const [category, setCategory] = useState("officeSupplies");

   // Lấy dữ liệu từ file JSON
   useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/products.json");
      const data = await response.json();

      setProducts(data);
      // setFilteredProducts(()=>data.filter((sp) => sp.category === category));
      setFilteredProducts(() => data.filter((sp) => sp.category === category));
    };

    fetchData();
  }, []);

  // Xử lý lọc sản phẩm
  const handleFilterChange = (item) => {
    const selectedCategory = item;
    setCategorySub(selectedCategory);
    if (selectedCategory === "" && category !== "") {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      const filtered = products.filter(
        (product) => product.categorySub === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  const DataProducts = filteredProducts;

  return (
    <>
      <div className="hidden 800px:w-full bg-[#f4f4f4] 800px:flex 800px:flex-col">
        <Header />
        <div
          style={{ minHeight: "calc(100vh - 245px)" }}
          className="mt-[13vh] w-[980px] mx-[auto] p-0 "
        >
          {/* Thanh loc thong tin tim kiem */}
          <Filter handleFilterChange={handleFilterChange} FilterNormar={FilterNormar} />
          {/* Phần dirrection */}
          <div className="text-center overflow-hiddenmy-[12px] pt-[10vh] mx-auto w-[970px]"></div>
          <div>
          <Directions Datadirections={Datadirections} />
          </div>
          <div>
            <h1 className="text-[16px] font-bold mt-[4px] mb-[15px] mr-[0] ml-[12px] leading-[1.5] ">
            {DataOfficeSupplies[0].Title}
            </h1>
          </div>
          {/*Phaanf main  */}
          <div className="float-left w-full ">
            <div className="max-w-[66.666%] p-0 ">
               {/* Goi y khu vuc */}
               <div className="bg-[#fff] my-[8px] ">
                <span className="text-[#222] text-sm font-bold block px-3 py-2">
                  Gợi ý khu vực
                </span>
                <div
                  style={{ scrollbarWidth: "none" }}
                  className="flex flex-wrap gap-2 overflow-x-auto p-3 whitespace-nowrap"
                >
                  <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full text-center max-w-[initial]">
                    <img
                      src="https://static.chotot.com/storage/icons/svg/location-pin.svg"
                      alt=""
                    />
                    Khu vực gần tôi
                  </div>
                  <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full text-center max-w-[initial]">
                    Tp Hồ Chí Minh
                  </div>
                  <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full text-center max-w-[initial]">
                    Hà Nội
                  </div>
                  <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full text-center max-w-[initial]">
                    Đà Nẵng
                  </div>
                  <span className="text-center text-[#222] text-xs flex justify-center items-center cursor-pointer p-2">
                    Xem thêm
                    <svg className="ml-[4px] "
                      data-type="monochrome"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                    >
                      <g fill="currentColor">
                        <path d="M11.997 4.68353C12.3094 4.37111 12.816 4.37111 13.1284 4.68353L19.8784 11.4335C20.1908 11.746 20.1908 12.2525 19.8784 12.5649L13.1284 19.3149C12.816 19.6273 12.3094 19.6273 11.997 19.3149C11.6846 19.0025 11.6846 18.496 11.997 18.1835L17.3813 12.7992H4.6877C4.24587 12.7992 3.8877 12.441 3.8877 11.9992C3.8877 11.5574 4.24587 11.1992 4.6877 11.1992H17.3813L11.997 5.8149C11.6846 5.50248 11.6846 4.99595 11.997 4.68353Z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              {/* danh mujc */}
              <div className="relative">
                <Categories pathname={pathname} />
              </div>
              {/* Phan main danh sach san pham */}
              <div className="w-full h-[56px] inline-block bg-[#fff] mb-[-4px] ">
                <div className="gap-[8px] inline-flex leading-[56px] w-[66.6%] h-[56px] float-left">
                  <div className="text-[#f80] text-[.875rem] font-bold py-0 px-[12px] cursor-pointer">
                    <span>Tất cả</span>
                  </div>
                  <div className="text-[#222] text-[.875rem] py-0 px-[12px] cursor-pointer">
                    <span>Cá nhân</span>
                  </div>
                  <div className="text-[#222] text-[.875rem] py-0 px-[12px] cursor-pointer">
                    <span>Bán chuyên</span>
                  </div>
                </div>
                <div className="h-[56px] relative w-[33.4%] inline-flex justify-end float-right">
                  <div className="h-[56px] relative flex justify-center items-center ">
                    <div className="border-[1px] border-solid border-[#f80] h-[32px] py-[6px] px-[10px] bg-[#fff4e0] text-[#f80] font-bold relative inline-flex justify-center items-center gap-[2px] w-[fit-content] text-center cursor-pointer min-w-[initial] rounded-[9999px]">
                      <span>Tin mới trước</span>
                      <svg
                        className="w-[20px] h-[20px] "
                        data-type="monochrome"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        fill="none"
                      >
                        <g fill="currentColor">
                          <path d="M12.4495 14.8316C12.2013 15.0561 11.7987 15.0561 11.5505 14.8316L6.18623 9.98133C6.0044 9.81692 5.95001 9.56967 6.04841 9.35486C6.14682 9.14006 6.37864 9 6.63578 9L17.3642 9C17.6214 9 17.8532 9.14006 17.9516 9.35487C18.05 9.56967 17.9956 9.81693 17.8138 9.98133L12.4495 14.8316Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="inline-block py-0 px-[10px] text-center leading-[56px] h-[56px] ">
                    <button
                      style={{
                        background:
                          "url(https://static.chotot.com/storage/chotot-icons/svg/grid.svg) 50% no-repeat",
                        cursor: " pointer",
                        border: "none",
                        outline: " none",
                        padding: "5px",
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                        backgroundSize: "cover",
                        color: "#222",
                      }}
                    ></button>
                  </div>
                </div>
              </div>
              {/* list san pham */}
              <div>
              <ProductCardItems DataProducts={DataProducts} />
              </div>
            
            </div>
          </div>
          {/* So trang */}
          <Pagination />

          {/* phan footer */}
          <FooterHouseWare />
        </div>
        <div className="block w-full">
          <Footer />
        </div>
      </div>

       {/* Phan responsive */}
       <div className="relative 800px:hidden">
        <Header />
        <MenuReponsive />
        <div style={{ minHeight: "calc(100vh - 245px)" }} className="mt-0 ">
          {/* Thanh loc */}
          <div>
          <Filter handleFilterChange={handleFilterChange} FilterNormar={FilterNormar} />
            <div>
              {/* directions */}
              <div className="block">
                <div>
                <Directions Datadirections={Datadirections} />
                 
                </div>
              </div>
              {/* Phan main */}
              <div>
                {/* goi y khu vuc */}
                <div className="bg-[#fff] my-[8px] ">
                  <span className="text-[#222] text-[14px] font-bold py-[8px] px-[12px] block">
                    Gợi ý khu vực
                  </span>
                  <div className="flex p-[12px] gap-[4px] flex-wrap overflow-x-auto whitespace-nowrap">
                    <div className="h-[32px] text-[.875rem] py-[6px] px-[10px] leading-[20px] relative inline-flex justify-center gap-[2px] w-[fit-content] rounded-[999px] bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center">
                      <img
                        src="https://static.chotot.com/storage/icons/svg/location-pin.svg"
                        alt=""
                      />
                      Khu vực gần tôi
                    </div>
                    <div className="h-[32px] text-[.875rem] py-[6px] px-[10px] leading-[20px] relative inline-flex justify-center gap-[2px] w-[fit-content] rounded-[999px] bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center">
                      TP. Hồ Chí Minh
                    </div>
                    <div className="h-[32px] text-[.875rem] py-[6px] px-[10px] leading-[20px] relative inline-flex justify-center gap-[2px] w-[fit-content] rounded-[999px] bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center">
                      Hà Nội
                    </div>
                    <div className="h-[32px] text-[.875rem] py-[6px] px-[10px] leading-[20px] relative inline-flex justify-center gap-[2px] w-[fit-content] rounded-[999px] bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center">
                      Đà Nẵng
                    </div>
                    <span className="text-center text-[#222] text-[12px] flex justify-center items-center cursor-pointer p-[8px] ">
                      Xem thêm
                      <svg
                        className="ml-[4px]"
                        data-type="monochrome"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="none"
                      >
                        <g fill="currentColor">
                          <path d="M11.997 4.68353C12.3094 4.37111 12.816 4.37111 13.1284 4.68353L19.8784 11.4335C20.1908 11.746 20.1908 12.2525 19.8784 12.5649L13.1284 19.3149C12.816 19.6273 12.3094 19.6273 11.997 19.3149C11.6846 19.0025 11.6846 18.496 11.997 18.1835L17.3813 12.7992H4.6877C4.24587 12.7992 3.8877 12.441 3.8877 11.9992C3.8877 11.5574 4.24587 11.1992 4.6877 11.1992H17.3813L11.997 5.8149C11.6846 5.50248 11.6846 4.99595 11.997 4.68353Z"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Danh muc */}
                <div className="relative">
                <Categories pathname={pathname}/>
                </div>
                {/* Phan thanh phia tren list san phảm */}
                <div className="w-full h-[56px] inline-block bg-[#fff] mb-[-4px] ">
                  <div className=" inline-flex leading-[56px] w-[66.6%] h-[56px] float-left ">
                    <div className="leading-[56px]">
                      <div className="text-[#f80] py-0 px-[8px] curosr-pointer relative whitespace-nowrap">
                        <span className="text-[#f80] cursor-pointer whitespace-nowrap">
                          Tất cả
                        </span>
                      </div>
                    </div>
                    <div className="leading-[56px]">
                      <div className="text-[#222] py-0 px-[8px] curosr-pointer relative whitespace-nowrap">
                        <span className="text-[#222] cursor-pointer whitespace-nowrap">
                          Cá nhân
                        </span>
                      </div>
                    </div>
                    <div className="leading-[56px]">
                      <div className="text-[#222] py-0 px-[8px] curosr-pointer relative whitespace-nowrap">
                        <span className="text-[#222] cursor-pointer whitespace-nowrap">
                          Bán chuyên
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[56px] relative w-[33.4%] inline-flex justify-end float-right">
                    <div className="h-[56px] w-[70%] relative flex justify-center items-center ">
                      <div className="bg-[#fff4e0] overflow-hidden text-ellipsis whitespace-nowrap text-[#f80] font-bold h-[24px] border-[1px] border-solid border-[#f80] text-[.75rem] py-[4px] px-[8px] leading-[16px] relative inline-flex justify-center items-center gap-[2px] w-[fit-content] rounded-[999px] cursor-pointer text-center min-w-[initial] ">
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                          Tin mới trước
                        </span>
                        <svg
                          className="w-[16px] h-[16px] "
                          data-type="monochrome"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="1em"
                          height="1em"
                          fill="none"
                        >
                          <g fill="currentColor">
                            <path d="M12.4495 14.8316C12.2013 15.0561 11.7987 15.0561 11.5505 14.8316L6.18623 9.98133C6.0044 9.81692 5.95001 9.56967 6.04841 9.35486C6.14682 9.14006 6.37864 9 6.63578 9L17.3642 9C17.6214 9 17.8532 9.14006 17.9516 9.35487C18.05 9.56967 17.9956 9.81693 17.8138 9.98133L12.4495 14.8316Z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="inline-block py-0 px-[10px] text-center leading-[56px] h-[56px] ">
                      <button
                        style={{
                          background:
                            "url(https://static.chotot.com/storage/chotot-icons/svg/grid.svg) 50% no-repeat",
                          cursor: " pointer",
                          border: "none",
                          outline: " none",
                          padding: "5px",
                          fontSize: "20px",
                          height: "20px",
                          width: "20px",
                          backgroundSize: "cover",
                          color: "#222",
                        }}
                      ></button>
                    </div>
                  </div>
                </div>
                {/* list san pham */}
                <div>
                <ProductCardItems DataProducts={DataProducts} />
                </div>
             
                {/* So trang */}
                <Pagination />
                {/* phan footer */}
                <div className="w-full mb-[-4px] mt-[14px] bg-[#fff]">
                <FooterHouseWare />
                </div>
               
              </div>
              <div className="w-full mt-[14px]">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style/style.css";

// import filter
import CategoryFilter from "../Filter/CategoryFilter/CategoryFilter";
import LocationFilter from "../Filter/LocationsFilter/LocationFilter";
import PriceFilter from "../Filter/PriceFilter/PriceFilter";
import StatusFilter from "../Filter/StatusFilter/StatusFilter";

const Filter = (props) => {
  const { FilterNormar } = props;
  const {handleFilterChange} = props


  const DataFilter = FilterNormar.find((filter) => filter.id === 1);
  const DataFiltermap = DataFilter.Filter;
  const [openFilter, setOpenFilter] = useState(false);
  const [openFilterLocation, setOpenFilterLocation] = useState(false);
  const [openFilterPrice, setOpenFilterPrice] = useState(false);
  const [openFilterStatus, setOpenFilterStatus] = useState(false);

  const openFilterCategory = () => {
    if (
      openFilter === false &&
      (openFilterLocation === false ||
        openFilterPrice === false ||
        openFilterStatus === false)
    ) {
      setOpenFilter(true);
      setOpenFilterLocation(false);
      setOpenFilterPrice(false);
      setOpenFilterStatus(false);
    } else if (
      openFilter === true &&
      (openFilterLocation === false ||
        openFilterPrice === false ||
        openFilterStatus === false)
    ) {
      setOpenFilter(false);
      setOpenFilterLocation(false);
      setOpenFilterPrice(false);
      setOpenFilterStatus(false);
    } else if (
      openFilter === false &&
      (openFilterLocation === true ||
        openFilterPrice === true ||
        openFilterStatus === true)
    ) {
      setOpenFilter(true);
      setOpenFilterLocation(false);
      setOpenFilterPrice(false);
      setOpenFilterStatus(false);
    }
  };
  const openFilterProvince = () => {
    if (
      openFilterLocation === false &&
      (openFilter === false ||
        openFilterPrice === false ||
        openFilterStatus === false)
    ) {
      setOpenFilterLocation(true);
      setOpenFilter(false);
      setOpenFilterPrice(false);
      setOpenFilterStatus(false);
    } else if (
      openFilterLocation === true &&
      (openFilter === false ||
        openFilterPrice === false ||
        openFilterStatus === false)
    ) {
      setOpenFilterLocation(false);
      setOpenFilter(false);
      setOpenFilterPrice(false);
      setOpenFilterStatus(false);
    } else if (
      openFilterLocation === false &&
      (openFilter === true ||
        openFilterPrice === true ||
        openFilterStatus === true)
    ) {
      setOpenFilterLocation(true);
      setOpenFilter(false);
      setOpenFilter(false);
      setOpenFilterPrice(false);
      setOpenFilterStatus(false);
    }
  };
  const ClickOpenFilterPrice = () => {
    if (
      openFilterPrice === false &&
      (openFilter === false ||
        openFilterLocation === false ||
        openFilterStatus === false)
    ) {
      setOpenFilterPrice(true);
      setOpenFilter(false);
      setOpenFilterLocation(false);
      setOpenFilterStatus(false);
    } else if (
      openFilterPrice === true &&
      (openFilter === false ||
        openFilterLocation === false ||
        openFilterStatus === false)
    ) {
      setOpenFilterPrice(false);
      setOpenFilter(false);
      setOpenFilterLocation(false);
      setOpenFilterStatus(false);
    } else if (
      openFilterPrice === false &&
      (openFilter === true ||
        openFilterLocation === true ||
        openFilterStatus === true)
    ) {
      setOpenFilterPrice(false);
      setOpenFilter(false);
      setOpenFilterLocation(false);
      setOpenFilterStatus(false);
    }
  };

  const ClickOpenFilterStatus = () => {
    if (
      openFilterStatus === false &&
      (openFilter === false ||
        openFilterLocation === false ||
        openFilterPrice === false)
    ) {
      setOpenFilterStatus(true);
      setOpenFilterPrice(false);
      setOpenFilter(false);
      setOpenFilterLocation(false);
    } else if (
      openFilterStatus === true &&
      (openFilter === false ||
        openFilterLocation === false ||
        openFilterPrice === false)
    ) {
      setOpenFilterStatus(false);
      setOpenFilterPrice(false);
      setOpenFilter(false);
      setOpenFilterLocation(false);
    } else if (
      openFilterStatus === false &&
      (openFilter === true ||
        openFilterLocation === true ||
        openFilterPrice === false)
    ) {
      setOpenFilterStatus(false);
      setOpenFilterPrice(false);
      setOpenFilter(false);
      setOpenFilterLocation(false);
    }
  };

  return (
    <>
      <div className=" hidden fixed 800px:flex justify-center left-0 z-[9] vf-[#fff] w-full border-[1px] border-solid border-[#f4f4f4] bg-[#fff]">
        <div className="flex items-center justify-center w-full overflow-x-auto flex-nowrap">
          <div className="relative z-[10] flex justify-center items-center max-h-[32px] cursor-pointer whitespace-nowrap border-r-[1px] border-solid border-[#e8e8e8]">
            <div className="h-[32px] text-[.875rem] py-[6px] px-[10px] leading-[20px] relative inline-flex justify-center gap-[2px] w-[fit-content] cursor-pointer min-w-[initial] text-center">
              <svg
                className="w-[20px] h-[20px]"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.21276 3H20.7908C21.0224 3.00036 21.249 3.06709 21.4437 3.19228C21.6385 3.31746 21.7933 3.49586 21.8898 3.70633C21.9863 3.9168 22.0204 4.15052 21.9882 4.37979C21.9559 4.60903 21.8586 4.82422 21.7079 4.99987C21.7078 4.9999 21.7078 4.99993 21.7078 4.99996L14.6509 13.2222C14.6492 13.224 14.6476 13.2259 14.646 13.2278C14.6388 13.236 14.6346 13.2464 14.6342 13.2573V19.3615C14.6348 19.513 14.5994 19.6625 14.5309 19.7977C14.4621 19.9336 14.3619 20.0511 14.2386 20.1405C14.1152 20.2298 13.9724 20.2885 13.8218 20.3116C13.6713 20.3346 13.5174 20.3215 13.373 20.2731C13.373 20.2731 13.373 20.2732 13.373 20.2731L10.0191 19.1572L10.0163 19.1562C9.82518 19.0916 9.65936 18.9682 9.54254 18.8037C9.42647 18.6403 9.36467 18.4445 9.36583 18.2441V13.2555C9.36554 13.2445 9.36142 13.2339 9.35415 13.2255L9.3513 13.2222L2.29222 4.99996C2.29221 4.99996 2.29222 4.99997 2.29222 4.99996C2.14116 4.82402 2.04377 4.60838 2.01166 4.37872C1.97956 4.14905 2.01407 3.91499 2.11109 3.70436C2.20812 3.49373 2.36358 3.31539 2.559 3.19053C2.75421 3.0658 2.9811 2.99967 3.21276 3ZM20.7039 4.25012H3.29608L10.2986 12.4065C10.5012 12.6401 10.6138 12.9384 10.6159 13.2477L10.6159 13.2521V18.0382L13.3841 18.9593V13.2521C13.3841 13.2498 13.3841 13.2476 13.3841 13.2454C13.3874 12.9362 13.5009 12.6384 13.7043 12.4056L20.7039 4.25012Z"
                  fill="currentColor"
                ></path>
              </svg>
              Lọc
            </div>
          </div>
          <div className="relative ">
            <div
              style={{
                scrollbarWidth: "thin",
                whiteSpace: "nowrap",
              }}
              className="w-[936px] whitespace-nowrap text-ellipsis flex gap-[8px] relative py-[10px] px-[8px] overflow-x-auto "
            >
              <div>
                <div
                  onClick={openFilterProvince}
                  className="rounded-[114px] border-[1px] border-solid cursor-pointer border-[#f80] bg-[#fff4e0] text-[#f80] font-bold h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]"
                >
                  <span>Toàn quốc</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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
                {/* dropdown vij tris */}
                {openFilterLocation && openFilterLocation ? (
                  <LocationFilter />
                ) : (
                  ""
                )}
              </div>

              <div>
                <div
                  onClick={openFilterCategory}
                  className="rounded-[114px] border-[1px] border-solid cursor-pointer border-[#f80] bg-[#fff4e0] text-[#f80] font-bold h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]"
                >
                  <span>{`${DataFilter.Filter[0].title}`}</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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
                {openFilter && openFilter ? (
                  <>
                    {/* Dropdown chọn filter danh muc */}
                    <CategoryFilter handleFilterChange={handleFilterChange} DataFiltermap={DataFiltermap} />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div
                  onClick={ClickOpenFilterPrice}
                  className="cursor-pointer rounded-[114px] border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]"
                >
                  <span>Giá</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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

                {/* Dropdown filter loc theo gia san pham */}
                {openFilterPrice && openFilterPrice ? <PriceFilter /> : ""}
              </div>
              <div>
                <div
                  onClick={ClickOpenFilterStatus}
                  className="cursor-pointer rounded-[114px] border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]"
                >
                  <span>Tình trạng</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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

                {/* dropdown filter tinh trang */}
                {openFilterStatus && openFilterStatus ? <StatusFilter /> : ""}
              </div>
              <div>
                <div className="rounded-[114px] border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]">
                  <span>SHIP COD</span>
                </div>
              </div>
              <div>
                <div className="rounded-[114px] border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]">
                  <span>Thanh toán đảm bảo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phan reponsive */}
      <div className="static flex flex-col justify-center bg-[#fff] w-full border-b-[1px] border-solid border-[#362f2f] 800px:hidden">
        <div className="flex items-center px-[12px] pt-[16px] pb-[4px]">
          <div
            onClick={openFilterProvince}
            className="flex justify-center items-center "
          >
            <span
              style={{
                width: "16px",
                height: "16px",
                color: " #222",
                backgroundImage:
                  "url(https://static.chotot.com/storage/chotot-icons/svg/new-location.svg)",
                backgroundSize: "16px 16px",
                backgroundRepeat: "no-repeat",
              }}
            ></span>
            <span className="ml-[4px] flex justify-center items-center leading-[20px]">
              <span className="text-[#9B9B9C]">Khu vuc:</span>
              <p
                style={{ maxWidth: "calc(100vw - 175px)" }}
                className="inline-block overflow-hidden text-ellipsis whitespace-nowrap mb-0 "
              >
                Toàn quốc
              </p>
              <svg
                data-type="monochrome"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
              >
                <g fill="currentColor">
                  <path d="M12.4495 14.8316C12.2013 15.0561 11.7987 15.0561 11.5505 14.8316L6.18623 9.98133C6.0044 9.81692 5.95001 9.56967 6.04841 9.35486C6.14682 9.14006 6.37864 9 6.63578 9L17.3642 9C17.6214 9 17.8532 9.14006 17.9516 9.35487C18.05 9.56967 17.9956 9.81693 17.8138 9.98133L12.4495 14.8316Z"></path>
                </g>
              </svg>
            </span>
            <LocationFilter openFilterLocation={openFilterLocation} />
          </div>
        </div>
        <div className="flex items-center w-full flex-nowrap overflow-x-hidden justify-start">
          <div className="relative z-[10] flex justify-center items-center max-h-[32px] cursor-pointer whitespace-nowrap border-r-[1px] border-solid border-[#e8e8e8] bg-[#fff]">
            <div className="relative inline-flex justify-center gap-[2px] w-[fit-content] text-center min-w-[initial] h-[32px] text-[.875rem] py-[6px] px-[10px] leading-[20px] bg-[#fff]">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.21276 3H20.7908C21.0224 3.00036 21.249 3.06709 21.4437 3.19228C21.6385 3.31746 21.7933 3.49586 21.8898 3.70633C21.9863 3.9168 22.0204 4.15052 21.9882 4.37979C21.9559 4.60903 21.8586 4.82422 21.7079 4.99987C21.7078 4.9999 21.7078 4.99993 21.7078 4.99996L14.6509 13.2222C14.6492 13.224 14.6476 13.2259 14.646 13.2278C14.6388 13.236 14.6346 13.2464 14.6342 13.2573V19.3615C14.6348 19.513 14.5994 19.6625 14.5309 19.7977C14.4621 19.9336 14.3619 20.0511 14.2386 20.1405C14.1152 20.2298 13.9724 20.2885 13.8218 20.3116C13.6713 20.3346 13.5174 20.3215 13.373 20.2731C13.373 20.2731 13.373 20.2732 13.373 20.2731L10.0191 19.1572L10.0163 19.1562C9.82518 19.0916 9.65936 18.9682 9.54254 18.8037C9.42647 18.6403 9.36467 18.4445 9.36583 18.2441V13.2555C9.36554 13.2445 9.36142 13.2339 9.35415 13.2255L9.3513 13.2222L2.29222 4.99996C2.29221 4.99996 2.29222 4.99997 2.29222 4.99996C2.14116 4.82402 2.04377 4.60838 2.01166 4.37872C1.97956 4.14905 2.01407 3.91499 2.11109 3.70436C2.20812 3.49373 2.36358 3.31539 2.559 3.19053C2.75421 3.0658 2.9811 2.99967 3.21276 3ZM20.7039 4.25012H3.29608L10.2986 12.4065C10.5012 12.6401 10.6138 12.9384 10.6159 13.2477L10.6159 13.2521V18.0382L13.3841 18.9593V13.2521C13.3841 13.2498 13.3841 13.2476 13.3841 13.2454C13.3874 12.9362 13.5009 12.6384 13.7043 12.4056L20.7039 4.25012Z"
                  fill="currentColor"
                ></path>
              </svg>
              Loc
            </div>
          </div>
          <div className="relative ">
            <div className="w-[85vw] pb-[12px] pl-[12px] pr-[12px] flex gap-[8px] relative pt-[10px] overflow-x-auto ">
              <div>
                <div
                  onClick={openFilterCategory}
                  className="rounded-[114px] border-[1px] border-solid border-[#f80] bg-[#fff4e0] text-[#f80] whitespace-nowrap font-bold h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]"
                >
                  <span>{`${DataFilter.Filter[0].title}`}</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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
                  <CategoryFilter
                    openFilter={openFilter}
                    DataFilter={DataFilter}
                    DataFiltermap={DataFiltermap}
                    handleFilterChange={handleFilterChange}
                  />
                </div>
              </div>
              <div>
                <div onClick={ClickOpenFilterPrice} className="rounded-[114px] whitespace-nowrap border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]">
                  <span>Giá</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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
                  <PriceFilter openFilterPrice={openFilterPrice} ClickOpenFilterPrice={ClickOpenFilterPrice}/>
                </div>
              </div>
              <div>
                <div onClick={ClickOpenFilterStatus} className="rounded-[114px] whitespace-nowrap border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]">
                  <span>Tình trạng</span>
                  <svg
                    className="w-[20px] h-[20px] inline-block"
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
                 <StatusFilter openFilterStatus={openFilterStatus} ClickOpenFilterStatus={ClickOpenFilterStatus}/>
                </div>
              </div>
              <div>
                <div className="rounded-[114px] whitespace-nowrap border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]">
                  <span>SHIP COD</span>
                </div>
              </div>
              <div>
                <div className="rounded-[114px] whitespace-nowrap border-[1px] border-solid border-[#c0c0c0] bg-[#fff] text-[#222] h-[32px] py-[6px] px-[10px] leading-[20px] flex justify-center hover:bg-[#f4f4f4]">
                  <span>Thanh toán đảm bảo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

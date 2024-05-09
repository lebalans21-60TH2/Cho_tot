import React from "react";

const Pagination = () => {
  return (
    <>
      <div className=" hidden 800px:block float-left w-full ">
        <div className="max-w-[66.666%] p-0 relative ">
          <div className="flex my-[2px] mx-0 justify-center py-[12px] px-[0] flex-wrap ">
            <span className="inline m-[6px] ">
              <button className="p-0 h-[fit-content] cursor-pointer ">
                <i
                  style={{
                    cursor: "not-allowed",
                    background:
                      "url(https://static.chotot.com/storage/chotot-icons/svg/left-icon-disable.svg) 50% center no-repeat rgb(255, 255, 255)",
                  }}
                  className="h-[32px] min-w-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]"
                ></i>
              </button>
            </span>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px] bg-[#FFBA00]">
                1
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                2
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                3
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                4
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                5
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                6
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                7
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                8
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff] h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                9
              </span>
            </div>
            <span className="inline m-[6px] ">
              <button className="p-0 h-[fit-content] cursor-pointer ">
                <i
                  style={{
                    cursor: "not-allowed",
                    background:
                      "url(	https://static.chotot.com/storage/chotot-icons/svg/right-chevron.svg) 50% center no-repeat rgb(255, 255, 255)",
                  }}
                  className="h-[32px] min-w-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]"
                ></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* phan reponsive */}
      {/* So trang */}
      <div className="800px:hidden float-left w-full mb-[4px] mt-[14px] bg-[#fff]">
        <div className="p-0 relative ">
          <div className="flex my-[2px] mx-0 justify-center py-[12px] px-[0] flex-wrap ">
            <span className="inline m-[6px] ">
              <button className="p-0 h-[fit-content] cursor-pointer ">
                <i
                  style={{
                    cursor: "not-allowed",
                    background:
                      "url(https://static.chotot.com/storage/chotot-icons/svg/left-icon-disable.svg) 50% center no-repeat rgb(255, 255, 255)",
                  }}
                  className="h-[32px] min-w-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]"
                ></i>
              </button>
            </span>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px] bg-[#FFBA00]">
                1
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                2
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                3
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                4
              </span>
            </div>
            <div className="inline m-[6px]">
              <span className="z-[2] cursot-pointer bg-[#fff]  h-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]">
                5
              </span>
            </div>

            <span className="inline m-[6px] ">
              <button className="p-0 h-[fit-content] cursor-pointer ">
                <i
                  style={{
                    cursor: "not-allowed",
                    background:
                      "url(	https://static.chotot.com/storage/chotot-icons/svg/right-chevron.svg) 50% center no-repeat rgb(255, 255, 255)",
                  }}
                  className="h-[32px] min-w-[32px] relative float-left px-[12px] pt-[5px] pb-[6px] ml-[-1px] text-[15px] leading-[1.4857] border-[1px] border-solid border-[#DDDDDD] rounded-[4px]"
                ></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;

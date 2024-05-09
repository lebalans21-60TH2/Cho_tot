import React, { useState } from "react";

const LocationFilter = (props) => {
  const {openFilterLocation} = props

  return (
    <div>
      <div className="hidden 800px:block">
        <div className="fixed z-[200] will-change-[top,left,width,height] left-[126.088px] top-[150px]">
          <div
            style={{
              maxHeight: "calc(100vh - 170px - var(40px, 0px))",
            }}
            className="w-[360px] bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.25)] rounded flex flex-col overflow-auto "
          >
            {/* thanh tim kiem khu vuc */}
            <div>
              <div className="flex gap-2 p-3">
                <img
                  src="https://static.chotot.com/storage/icons/svg/location-pin.svg"
                  alt=""
                />
                <span className="text-sm font-bold leading-5 text-[#222]">
                  Tìm kiếm quanh bạn
                </span>
              </div>
              <div className="pt-2 pb-3 px-3">
                <div
                  style={{
                    borderTop: "1px solid #E8E8E8",
                    borderBottom: "1px solid #E8E8E8",
                    borderLeft: "1px solid #E8E8E8",
                    borderRight: "1px solid #E8E8E8",
                  }}
                  className="text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 gap-[12px] flex flex-row"
                >
                  <div className="hidden max-w-fit w-auto"></div>
                  <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Nhập vị trí và khoảng cách tìm kiếm
                  </div>
                  <div className="flex items-center justify-center max-w-fit w-auto">
                    <svg
                      data-type="monochrome"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <g fill="currentColor">
                        <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* tim kiem theo khu vuc */}
            <div>
              <div className="flex p-3 gap-[8px]">
                <img
                  className="h-[20px] w-[20px]"
                  src="https://static.chotot.com/storage/icons/svg/city.svg"
                  alt=""
                />
                <span className="text-sm font-bold leading-5 text-[#222]">
                  Tìm theo khu vực
                </span>
              </div>
              <div className="gap-[4px] flex p-3">
                <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center rounded-full">
                  Tp Hồ Chí Minh
                </div>
                <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center rounded-full">
                  Hà Nội
                </div>
                <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer min-w-[initial] text-center rounded-full">
                  Đà Nẵng
                </div>
              </div>
              <div className="gap-3 flex flex-col pt-2 pb-3 px-3">
                {/* thanh chon tinh thanh */}
                <div
                  style={{
                    gap: "12px",
                    borderTop: "1px solid #E8E8E8",
                    borderBottom: "1px solid #E8E8E8",
                    borderLeft: "1px solid #E8E8E8",
                    borderRight: "1px solid #E8E8E8",
                    display: "flex",
                    flexdirection: "1px solid #E8E8E8",
                  }}
                  className="text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 w-full rounded relative cursor-pointer"
                >
                  <div className="max-w-fit w-auto hidden"></div>
                  <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Chọn tỉnh thành
                  </div>
                  <div className="flex items-center justify-center max-w-fit w-auto">
                    <svg
                      data-type="monochrome"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <g fill="currentColor">
                        <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    gap: "12px",
                    borderTop: "1px solid #E8E8E8",
                    borderBottom: "1px solid #E8E8E8",
                    borderLeft: "1px solid #E8E8E8",
                    borderRight: "1px solid #E8E8E8",
                    display: "flex",
                    flexdirection: "1px solid #E8E8E8",
                  }}
                  className="text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 w-full rounded relative cursor-pointer"
                >
                  <div className="max-w-fit w-auto hidden"></div>
                  <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Chọn quận huyện
                  </div>
                  <div className="flex items-center justify-center max-w-fit w-auto">
                    <svg
                      data-type="monochrome"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <g fill="currentColor">
                        <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    gap: "12px",
                    borderTop: "1px solid #E8E8E8",
                    borderBottom: "1px solid #E8E8E8",
                    borderLeft: "1px solid #E8E8E8",
                    borderRight: "1px solid #E8E8E8",
                    display: "flex",
                    flexdirection: "1px solid #E8E8E8",
                  }}
                  className="text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 w-full rounded relative cursor-pointer"
                >
                  <div className="max-w-fit w-auto hidden"></div>
                  <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Chọn phường xã
                  </div>
                  <div className="flex items-center justify-center max-w-fit w-auto">
                    <svg
                      data-type="monochrome"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <g fill="currentColor">
                        <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shadow-[0_-2px_8px_0_rgba(89,89,89,0.1)] p-3">
                <button className="font-bold rounded-[4px] text-[#222] border-[#c0c0c0] border-[1px] border-solid text-sm leading-none px-4 py-2 w-full flex justify-center">
                  Xoá Lọc
                </button>
                <button className="font-bold rounded-[4px] text-white bg-[#f80] border-[#f80] text-sm leading-none px-4 py-2 w-full flex justify-center">
                  Xoá Lọc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* phan reponsive */}
      {openFilterLocation && openFilterLocation? (
          <div
          style={{ maxHeight: "calc(100vh - 12px)" }}
          className="absolute 800px:hidden bottom-0 left-0 w-full bg-[#FFFFFF] rounded-t-[12px] z-50 overflow-hidden"
        >
          <div className="justify-center w-full items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none">
            <div
              style={{ maxHeight: "calc(69vh - 12px)" }}
              className="relative mt-[6px] mx-auto w-full"
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center flex-col h-[48px] justify-center relative">
                  <div className="flex w-full h-[48px] justify-center items-center rounded-t-[12px] ">
                    <button className="absolute top-[16px] left-[16px] bg-[transparent] outline-none whitespace-nowrap text-[1.5rem] grid rounded-[100%] w-[40px] h-[40px] p-[8px] m-[-12px]">
                      <svg
                        className="overflow-hidden text-[#222222] w-[24px] h-[24px] "
                        width="1em"
                        height="1em"
                        data-type="monochrome"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5866 12.0008L5.29501 17.2924C4.90449 17.6829 4.90449 18.3161 5.29501 18.7066C5.68554 19.0971 6.3187 19.0971 6.70923 18.7066L12.0008 13.415L17.2924 18.7066C17.6829 19.0971 18.3161 19.0971 18.7066 18.7066C19.0971 18.3161 19.0971 17.6829 18.7066 17.2924L13.415 12.0008L18.7087 6.70711C19.0993 6.31658 19.0993 5.68342 18.7087 5.29289C18.3182 4.90237 17.685 4.90237 17.2945 5.29289L12.0008 10.5866L6.70711 5.29289Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div>
                      <h5>Khu vực</h5>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="relative w-full my-0 ">
                  <div className="opacity-0 top-0 absolute left-0 z-[100] h-[6px] w-[200%] ml-[-64px] "></div>
                  <div className="opacity-0 top-0 absolute left-0 z-[100] h-[6px] w-[200%] ml-[-64px] "></div>
                  <div
                    style={{
                      maxHeight: "calc(100vh - 76px)",
                      width: "calc(100% + 16px* 2)",
                    }}
                    className="relative leading-[1.5] py-0 px-[15px] my-0 mx-[-16px] overflow-x-auto"
                  >
                    <div className="w-full">
                      <div className="flex gap-2 mx-2 p-3">
                        <img
                          className="w-[20px] h-[20px]"
                          src="https://static.chotot.com/storage/icons/svg/location-pin.svg"
                          alt=""
                        />
                        <span className="text-sm font-bold leading-5 text-[#222]">
                          Tìm kiếm quanh bạn
                        </span>
                      </div>
                      <button className="pt-2 pb-3 px-3 w-full ">
                        <div className="gap-3 flex w-full rounded relative text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-4 py-0 cursor-pointer justify-between items-center bg-white border-l-[#E8E8E8] border-r-[#E8E8E8)] border-y-[#E8E8E8] border-t border-solid border-b border-l border-r">
                          <div className="hidden max-w-fit w-auto "></div>
                          <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis flex items-center">
                            Nhập vị trí và khoảng cách tìm kiếm
                          </div>
                          <div className="flex items-center justify-center max-w-fit w-auto ">
                            <svg
                              data-type="monochrome"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="none"
                            >
                              <g fill="currentColor">
                                <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div>
                      <div className="flex p-3 gap-2">
                        <img
                          className="w-5 h-5"
                          src="https://static.chotot.com/storage/icons/svg/city.svg"
                          alt=""
                        />
                        <span className="text-sm font-bold leading-5 text-[#222]">
                          Tìm theo khu vực
                        </span>
                      </div>
                      <div className="gap-1 p-3 flex ">
                        <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full min-w-fit text-center">
                          Tp Hồ Chí Minh
                        </div>
                        <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full min-w-fit text-center">
                          Hà Nội
                        </div>
                        <div className="h-8 text-sm leading-5 px-2.5 py-1.5 relative inline-flex justify-center items-center gap-0.5 w-fit bg-[#f4f4f4] cursor-pointer rounded-full min-w-fit text-center">
                          Đà Nẵng
                        </div>
                      </div>
                      <div className="gap-3 flex flex-col pt-2 pb-3 px-3">
                        <div className="gap-3 flex flex-row border-t border-solid border-b border-l border-[#E8E8E8] border-r text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 w-full rounded relative cursor-pointer justify-between items-center bg-white">
                          <div className="hidden max-w-fit w-auto "></div>
                          <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                            Chọn tỉnh thành
                          </div>
                          <div className="flex items-center justify-center max-w-fit w-auto">
                            <svg
                              data-type="monochrome"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="none"
                            >
                              <g fill="currentColor">
                                <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="gap-3 flex flex-row border-t border-solid border-b border-l border-[#E8E8E8] border-r text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 w-full rounded relative cursor-pointer justify-between items-center bg-white">
                          <div className="hidden max-w-fit w-auto "></div>
                          <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                            Chọn Quận, huyện
                          </div>
                          <div className="flex items-center justify-center max-w-fit w-auto">
                            <svg
                              data-type="monochrome"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="none"
                            >
                              <g fill="currentColor">
                                <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="gap-3 flex flex-row border-t border-solid border-b border-l border-[#E8E8E8] border-r text-sm not-italic font-normal leading-5 text-[#595959] h-10 px-3 py-0 w-full rounded relative cursor-pointer justify-between items-center bg-white">
                          <div className="hidden max-w-fit w-auto "></div>
                          <div className="flex items-center w-full whitespace-nowrap overflow-hidden text-ellipsis">
                            Chọn phường, xã
                          </div>
                          <div className="flex items-center justify-center max-w-fit w-auto">
                            <svg
                              data-type="monochrome"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="none"
                            >
                              <g fill="currentColor">
                                <path d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 shadow-[0_-2px_8px_0_rgba(89,89,89,0.1)] p-3">
                        <button className="font-bold rounded text-[#222] border-[1px] border-solid border-[#c0c0c0] text-sm leading-none px-4 py-2 w-full flex justify-center">
                          Xóa lọc
                        </button>
                        <button className="font-bold rounded text-white bg-[#f80] border-[#f80] border-[1px] border-solid text-sm leading-none px-4 py-2 w-full flex justify-center">
                          Áp dụng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ):('')}
    
    </div>
  );
};

export default LocationFilter;

"use client";
import React from "react";

const StatusFilter = (props) => {
  const {ClickOpenFilterStatus} = props;
  const {openFilterStatus} = props;
  
  return (
    <div>
      {" "}
      <div className="hidden 800px:fixed 800px:block z-[200] will-change-[top,left,width,height] left-[800.4px] top-[150px]">
        <div
          style={{
            maxHeight: "calc(100vh - 170px - var(40px, 0px))",
          }}
          className="w-[360px] bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.25)] rounded overflow-auto"
        >
          <div className="flex justify-between pt-3 pb-0 px-3">
            <span className="text-sm not-italic font-bold leading-[18px]">
              Tình trạng
            </span>
            <span className="text-sm not-italic font-bold leading-[18px] text-[#306bd9] cursor-pointer">
              Xóa lọc
            </span>
          </div>
          <div className="pt-3 ">
            <div className=" py-1 px-3 ">
              <div className="w-full ">
                <div className="w-full h-12 relative rounded border bg-white border-solid border-[#c0c0c0]">
                  <div className="absolute w-5 h-5 text-xl left-3 top-3">
                    <svg
                      data-type="monochrome"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="none"
                    >
                      <g fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.88351 3.65974C7.20956 2.7737 8.76857 2.30078 10.3634 2.30078C12.5019 2.30092 14.5529 3.15051 16.0651 4.66269C17.5773 6.17487 18.4269 8.22579 18.427 10.3643C18.427 11.9592 17.9541 13.5182 17.068 14.8443C16.182 16.1703 14.9226 17.2038 13.4492 17.8142C11.9758 18.4245 10.3545 18.5842 8.79027 18.273C7.22609 17.9619 5.78929 17.1939 4.66158 16.0662C3.53387 14.9385 2.76588 13.5017 2.45475 11.9375C2.14361 10.3733 2.3033 8.752 2.91361 7.27857C3.52393 5.80514 4.55746 4.54578 5.88351 3.65974ZM10.3634 3.70078C12.1307 3.7009 13.8255 4.403 15.0751 5.65264C16.3248 6.90228 17.0269 8.59712 17.027 10.3644M10.3634 3.70078C9.04548 3.70079 7.75712 4.0916 6.66131 4.8238C5.56549 5.556 4.7114 6.59672 4.20704 7.81433C3.70269 9.03194 3.57073 10.3718 3.82785 11.6644C4.08496 12.957 4.71961 14.1443 5.65153 15.0762C6.58345 16.0082 7.77079 16.6428 9.0634 16.8999C10.356 17.157 11.6958 17.0251 12.9135 16.5207C14.1311 16.0164 15.1718 15.1623 15.904 14.0665C16.6362 12.9707 17.027 11.6823 17.027 10.3644"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.3623 15.3613C15.6356 15.0879 16.0788 15.0879 16.3522 15.3613L21.4949 20.5039C21.7682 20.7773 21.7682 21.2205 21.4949 21.4939C21.2215 21.7672 20.7783 21.7672 20.5049 21.4939L15.3623 16.3512C15.0889 16.0779 15.0889 15.6346 15.3623 15.3613Z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <input
                    className="pl-[40px] pr-[36px] w-full h-full text-[#222] appearance-none rounded bg-white text-ellipsis px-3 border-[none]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Nhập tìm tình trạng"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                scrollbarWidth: "thin",
                whiteSpace: "nowrap",
              }}
              className="max-h-[430px] pb-[8px] overflow-y-scroll "
            >
              <div className="shadow-[inset_0_-1px_0_0_#f4f4f4] p-3 rounded-none">
                <div className="gap-[12px] flex flex-row shadow-[inset_0_-1px_0_0_#f4f4f4] p-3 rounded-none">
                  <div className="hidden max-w-fit w-auto"></div>
                  <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Đã sử dụng
                  </div>
                  <div className="max-w-fit w-auto">
                    <div className="inline-block w-5">
                      <label
                        className="relative select-none cursor-pointer w-full h-5 inline-block"
                        htmlFor=""
                      >
                        <input
                          className=""
                          type="radio"
                          name="trangthai"
                          id=""
                        />
                        {/* <span></span> */}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="gap-[12px] flex flex-row shadow-[inset_0_-1px_0_0_#f4f4f4] p-3 rounded-none">
                  <div className="hidden max-w-fit w-auto"></div>
                  <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Mới
                  </div>
                  <div className="max-w-fit w-auto">
                    <div className="inline-block w-5">
                      <label
                        className="relative select-none cursor-pointer w-full h-5 inline-block"
                        htmlFor=""
                      >
                        <input
                          className=""
                          type="radio"
                          name="trangthai"
                          id=""
                        />
                        {/* <span></span> */}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* phan reponsive */}
      {openFilterStatus && openFilterStatus? (
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
                  <button className="absolute top-[16px] left-[16px] bg-[transparent] outline-none whitespace-nowrap text-[1.5rem] grid rounded-[100%] w-[40px] h-[40px] m-[-12px]">
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
                    <h5 className="text-sm not-italic font-bold leading-5 absolute -translate-x-2/4 -translate-y-2/4 text-[#222] left-2/4 top-2/4">
                      Tình trạng
                    </h5>
                  </div>
                  <div className="absolute right-[16px] text-sm not-italic font-bold leading-5 text-[#306bd9] mr-2">
                    <h5>Xóa lọc</h5>
                  </div>
                </div>
              </div>
              <div className="min-h-[70vh] max-h-[70vh]">
                {/* group radio box */}
                <div className="pt-3">
                  <div className="px-3 py-1">
                  <div className="w-full h-12 relative rounded border bg-white border-solid border-[#c0c0c0]">
                    <div className="absolute w-5 h-5 text-xl left-3 top-3">
                      <svg
                        data-type="monochrome"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        fill="none"
                      >
                        <g fill="currentColor">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.88351 3.65974C7.20956 2.7737 8.76857 2.30078 10.3634 2.30078C12.5019 2.30092 14.5529 3.15051 16.0651 4.66269C17.5773 6.17487 18.4269 8.22579 18.427 10.3643C18.427 11.9592 17.9541 13.5182 17.068 14.8443C16.182 16.1703 14.9226 17.2038 13.4492 17.8142C11.9758 18.4245 10.3545 18.5842 8.79027 18.273C7.22609 17.9619 5.78929 17.1939 4.66158 16.0662C3.53387 14.9385 2.76588 13.5017 2.45475 11.9375C2.14361 10.3733 2.3033 8.752 2.91361 7.27857C3.52393 5.80514 4.55746 4.54578 5.88351 3.65974ZM10.3634 3.70078C12.1307 3.7009 13.8255 4.403 15.0751 5.65264C16.3248 6.90228 17.0269 8.59712 17.027 10.3644M10.3634 3.70078C9.04548 3.70079 7.75712 4.0916 6.66131 4.8238C5.56549 5.556 4.7114 6.59672 4.20704 7.81433C3.70269 9.03194 3.57073 10.3718 3.82785 11.6644C4.08496 12.957 4.71961 14.1443 5.65153 15.0762C6.58345 16.0082 7.77079 16.6428 9.0634 16.8999C10.356 17.157 11.6958 17.0251 12.9135 16.5207C14.1311 16.0164 15.1718 15.1623 15.904 14.0665C16.6362 12.9707 17.027 11.6823 17.027 10.3644"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.3623 15.3613C15.6356 15.0879 16.0788 15.0879 16.3522 15.3613L21.4949 20.5039C21.7682 20.7773 21.7682 21.2205 21.4949 21.4939C21.2215 21.7672 20.7783 21.7672 20.5049 21.4939L15.3623 16.3512C15.0889 16.0779 15.0889 15.6346 15.3623 15.3613Z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <input
                      className="pl-10 pr-9 pt-0 w-full h-full text-sm text-[#222] appearance-none rounded bg-white text-ellipsis pb-0 border-[none]"
                      type="text"
                      name=""
                      id=""
                      placeholder="Nhập tìm tình trạng"
                    />
                  </div>
                  </div>
                 <div className="max-h-[610px] overflow-y-scroll pb-2">
                  <div className="shadow-[inset_0_-1px_0_0_#f4f4f4] p-3 rounded-none gap-3 flex flex-row">
                    <div className="hidden max-w-fit w-auto"></div>
                    <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">Mới</div>
                    <div className="inline-block w-5">
                      <label
                        className="relative select-none cursor-pointer w-full h-5 inline-block"
                        htmlFor=""
                      >
                        <input
                          className=""
                          type="radio"
                          name="trangthai"
                          id=""
                        />
                        {/* <span></span> */}
                      </label>
                    </div>
                  </div>
                  <div className="shadow-[inset_0_-1px_0_0_#f4f4f4] p-3 rounded-none gap-3 flex flex-row">
                    <div className="hidden max-w-fit w-auto"></div>
                    <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">Đã sử dụng</div>
                    <div className="inline-block w-5">
                      <label
                        className="relative select-none cursor-pointer w-full h-5 inline-block"
                        htmlFor=""
                      >
                        <input
                          className=""
                          type="radio"
                          name="trangthai"
                          id=""
                        />
                        {/* <span></span> */}
                      </label>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ):('')}
      
    </div>
  );
};

export default StatusFilter;

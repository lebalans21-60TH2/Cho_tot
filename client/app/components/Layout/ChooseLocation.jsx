"use client";
import React, { useState } from "react";
// Import data tỉnh thành
import { ProvinceData } from "../Constant/indexData";

const ChooseLocation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="my-0 mx-[auto] max-w-[960px] ">
      <div className="items-center bg-[transparent] rounded-[8px] flex my-[4px] mx-[auto] relative z-[1]">
        <button
          className="items-center bg-[#fff] rounded-[8px] cursor-pointer border-[1px] border-solid border-[#e6e6e6] flex h-[48px] my-[8px] mx-[auto] py-[12px] px-[16px] w-full hover:shadow-bl"
          onClick={() => setShowModal(true)}
        >
          <div className="items-center bg-[transparent] flex flex-row justify-between w-full">
            <div className="items-center flex gap-[4px]">
              <img
                src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/location.svg"
                alt=""
              />
              <b className="font-bold">Vị trí: </b>
              <b className="text-[#f80] font-bold">Toàn quốc</b>
            </div>
            <div>
              <img
                className="align-middle"
                src="https://static.chotot.com/storage/CT_WEB_GDS_ELT_HOMEPAGE_CDN/icons/chevron_down.svg"
                alt=""
              />
            </div>
          </div>
        </button>
        {showModal ? (
          <>
            <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none">
              <div style={{maxHeight: "calc(69vh - 12px)"}}  className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center flex-col h-[48px] justify-center relative">
                    <h3 className="text-xl font-semibold text-center">
                      Chọn tỉnh, thành phố
                    </h3>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "100%",
                        display: "grid",
                        fontSize: " 1.5rem",
                        height: "40px",
                        left: "16px",
                        margin: "-12px",
                        outline: " 0",
                        padding: " 8px",
                        placeItems: "center",
                        position: "absolute",
                        top: "16px",
                        whiteSpace: "nowrap",
                        width: " 40px",
                      }}
                      onClick={() => setShowModal(false)}
                    >
                      <svg
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
                  </div>
                  {/*body*/}
                  <div className="relative flex-auto py-0 px-[24px]">
                    <div
                      style={{
                        maxHeight: "calc(80vh - 144px)",
                        margin: " 0 -24px",
                        padding: "0 24px",
                        width: "calc(100% + 48px)",
                        overflowY: "auto",
                      }}
                    >
                      <div className="max-h-[500px] leading-[1.5]">
                       
                          <div key={ProvinceData.id} className="inline-block w-full ">
                          <label
                            key={ProvinceData.id}
                              style={{
                                borderTop: "1px solid #e8e8e8",
                                height: "auto",
                                padding:" 14px 0",
                                width:"100%",
                                cursor:"pointer",
                                position:"relative",
                                display:"inline-block"
                              }}
                              htmlFor=""
                            >
                              <input className="right-[0] top-[auto] absolute" type="radio" name="Provice" id="" value="Toàn quốc" />
                              {/* <span className="bg-[#f4f4f4] border-[#c0c0c0] text-[#f80] right-[0] top-[auto] rounded-[100%] border-[1px] border-solid h-[20px] w-[20px] absolute "></span> */}
                              Toàn quốc
                            </label>
                             {ProvinceData.map((ProvinceData) => (
                            <label
                            key={ProvinceData.id}
                              style={{
                                borderTop: "1px solid #e8e8e8",
                                height: "auto",
                                padding:" 14px 0",
                                width:"100%",
                                cursor:"pointer",
                                position:"relative",
                                display:"inline-block"
                              }}
                              htmlFor=""
                            >
                              <input className="right-[0] top-[auto] absolute" type="radio" name="Provice" id={ProvinceData.id} value={ProvinceData.Ten}/>
                              {/* <span className="bg-[#f4f4f4] border-[#c0c0c0] text-[#f80] right-[0] top-[auto] rounded-[100%] border-[1px] border-solid h-[20px] w-[20px] absolute "></span> */}
                              {ProvinceData.Ten}
                            </label>
                              ))}
                          </div>
                      
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="w-full justify-center py-[12px] px-[16px] flex items-center">
                    <button
                      className="font-[400] rounded-[4px] w-full border-[#f80] bg-[#f80] text-[#fff] h-[40px]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                     Xác nhận
                    </button>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ChooseLocation;

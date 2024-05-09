"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const PriceFilter = (props) => {
  let { openFilterPrice } = props;
  const { ClickOpenFilterPrice } = props;

  let min = 0;
  let max = 100;
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div>
      {" "}
      <div className="hidden 800px:block 800px:fixed z-[200] will-change-[top,left,width,height] left-[700.812px] top-[140px]">
        <div
          style={{
            maxHeight: "calc(100vh - 170px - var(40px, 0px))",
          }}
          className="w-[360px] bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.25)] rounded overflow-auto"
        >
          {/* phan thanh truot */}
          <div className="p-3">
            <div className="flex justify-center items-center">
              <span>0</span>
              <div className="h-full w-full px-3 py-3.5">
                <div className="w-full relative h-[20px] flex flex-row">
                  <div className="w-full h-full relative ">
                    <div className="slider">
                      <div className="slider__track" />
                      <div ref={range} className="slider__range" />

                      <div className="h-1 relative ">
                        <div class="relative mt-1">
                          <input
                            type="range"
                            min={min}
                            max={max}
                            value={minVal}
                            onChange={(event) => {
                              const value = Math.min(
                                Number(event.target.value),
                                maxVal - 1
                              );
                              setMinVal(value);
                              minValRef.current = value;
                            }}
                            className="thumb thumb--left"
                            style={{
                              zIndex: minVal > max - 100 && "5",
                            }}
                          />
                          <input
                            type="range"
                            min={min}
                            max={max}
                            value={maxVal}
                            onChange={(event) => {
                              const value = Math.max(
                                Number(event.target.value),
                                minVal + 1
                              );
                              setMaxVal(value);
                              maxValRef.current = value;
                            }}
                            className="thumb thumb--right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span>100 triệu</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <div className="w-full h-12 relative rounded border bg-white border-solid border-[silver]">
                  <input
                    style={{
                      "-webkit-appearance": "none",
                      "-moz-appearance": "none",
                      outline: "none",
                    }}
                    className="w-full h-full text-sm text-[#222] appearance-none rounded bg-white pt-3.5 pb-0 px-3 border-[none]"
                    type="text"
                    value={minVal}
                  />
                  <label className="labelPrice" htmlFor="">
                    Giá tối thiểu
                  </label>
                  <div className="absolute text-[#8c8c8c] right-3 top-5">
                    <span>₫</span>
                  </div>
                </div>
                <div className="h-12 flex justify-center items-center mx-3">
                  -
                </div>
                <div className="w-full">
                  <div className="w-full h-12 relative rounded border bg-white border-solid border-[silver]">
                    <input
                      style={{
                        "-webkit-appearance": "none",
                        "-moz-appearance": "none",
                        outline: "none",
                      }}
                      className="w-full h-full text-sm text-[#222] appearance-none rounded bg-white pt-3.5 pb-0 px-3 border-[none]"
                      type="text"
                      value={maxVal}
                    />
                    <label className="labelPrice" htmlFor="">
                      Giá tối đa
                    </label>
                    <div className="absolute text-[#8c8c8c] right-3 top-5">
                      <span>₫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* phan button loc */}
          <div className="flex gap-2 shadow-[0_-2px_8px_0_rgba(89,89,89,0.1)] px-3 py-2.5">
            <button className="font-bold rounded text-[#222] border-[#c0c0c0] border-[1px] border-solid text-sm leading-none px-4 py-2 w-full flex justify-center">
              Xóa lọc
            </button>
            <button className="font-bold rounded text-[#fff] border-[#f80] bg-[#f80] border-[1px] border-solid text-sm leading-none px-4 py-2 w-full flex justify-center">
              Áp dụng
            </button>
          </div>
        </div>
      </div>
      {/* phan reponsive */}
      {openFilterPrice ? (
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
                    <button
                      onClick={ClickOpenFilterPrice}
                      className="absolute top-[16px] left-[16px] bg-[transparent] outline-none whitespace-nowrap text-[1.5rem] grid rounded-[100%] w-[40px] h-[40px] m-[-12px]"
                    >
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
                        Giá
                      </h5>
                    </div>
                    <div className="absolute right-[16px] text-sm not-italic font-bold leading-5 text-[#306bd9] mr-2">
                      <h5>Xóa lọc</h5>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="relative w-full my-0 p-3 ">
                  <div className="opacity-0 top-0 absolute left-0 z-[100] h-[6px] w-[200%] ml-[-64px] "></div>
                  <div className="opacity-0 top-0 absolute left-0 z-[100] h-[6px] w-[200%] ml-[-64px] "></div>
                  <div
                    style={{
                      maxHeight: "calc(100vh - 76px)",
                      width: "calc(100% + 16px* 2)",
                    }}
                    className="relative leading-[1.5] py-0 px-3 my-0 mx-[-16px] overflow-x-auto"
                  >
                    <div className="p-3">
                      <div className="flex justify-center items-center">
                        <span>0</span>
                        <div className="h-full w-full px-3 py-3.5">
                          <div className="w-full relative h-[20px] flex flex-row">
                            <div className="w-full h-full relative ">
                              <div className="slider">
                                <div className="slider__track" />
                                <div ref={range} className="slider__range" />

                                <div className="h-1 relative ">
                                  <div class="relative mt-1">
                                    <input
                                      type="range"
                                      min={min}
                                      max={max}
                                      value={minVal}
                                      onChange={(event) => {
                                        const value = Math.min(
                                          Number(event.target.value),
                                          maxVal - 1
                                        );
                                        setMinVal(value);
                                        minValRef.current = value;
                                      }}
                                      className="thumb thumb--left"
                                      style={{
                                        zIndex: minVal > max - 100 && "5",
                                      }}
                                    />
                                    <input
                                      type="range"
                                      min={min}
                                      max={max}
                                      value={maxVal}
                                      onChange={(event) => {
                                        const value = Math.max(
                                          Number(event.target.value),
                                          minVal + 1
                                        );
                                        setMaxVal(value);
                                        maxValRef.current = value;
                                      }}
                                      className="thumb thumb--right"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span>100 triệu</span>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center items-center">
                          <div className="w-full h-12 relative rounded border bg-white border-solid border-[silver]">
                            <input
                              style={{
                                "-webkit-appearance": "none",
                                "-moz-appearance": "none",
                                outline: "none",
                              }}
                              className="w-full h-full text-sm text-[#222] appearance-none rounded bg-white pt-3.5 pb-0 px-3 border-[none]"
                              type="text"
                              value={minVal}
                            />
                            <label className="labelPrice" htmlFor="">
                              Giá tối thiểu
                            </label>
                            <div className="absolute text-[#8c8c8c] right-3 top-5">
                              <span>₫</span>
                            </div>
                          </div>
                          <div className="h-12 flex justify-center items-center mx-3">
                            -
                          </div>
                          <div className="w-full">
                            <div className="w-full h-12 relative rounded border bg-white border-solid border-[silver]">
                              <input
                                style={{
                                  "-webkit-appearance": "none",
                                  "-moz-appearance": "none",
                                  outline: "none",
                                }}
                                className="w-full h-full text-sm text-[#222] appearance-none rounded bg-white pt-3.5 pb-0 px-3 border-[none]"
                                type="text"
                                value={maxVal}
                              />
                              <label className="labelPrice" htmlFor="">
                                Giá tối đa
                              </label>
                              <div className="absolute text-[#8c8c8c] right-3 top-5">
                                <span>₫</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 shadow-[0_-2px_8px_0_rgba(89,89,89,0.1)] px-3 py-2.5">
                      <button className="rounded font-bold text-white bg-[#f80] text-base leading-tight w-full flex justify-center px-[19px] py-[9px] border-[#f80]">
                        Áp dụng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PriceFilter;

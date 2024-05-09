import React from "react";

const DialogNextPage = () => {
  return (
    <div
      style={{ maxHeight: "calc(100vh - 12px)" }}
      className="absolute 800px:hidden bottom-0 left-0 w-full bg-[#FFFFFF] rounded-t-[12px] z-50 overflow-hidden"
    >
      <div className="justify-center w-full items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none">
        <div
          style={{ maxHeight: "calc(69vh - 12px)" }}
          className="relative w-auto mt-[6px] mx-auto max-w-xl"
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
                  <h5>Chuyển trang</h5>
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="relative mx-[16px] my-0 ">
              <div className="opacity-0 top-0 absolute left-0 z-[100] h-[6px] w-[200%] ml-[-64px] "></div>
              <div className="opacity-0 top-0 absolute left-0 z-[100] h-[6px] w-[200%] ml-[-64px] "></div>
              <div
                style={{
                  maxHeight: "calc(100vh - 76px)",
                  width: "calc(100% + 16px* 2)",
                }}
                className="relative leading-[1.5] py-0 px-[15px] my-0 mx-[-16px] overflow-x-auto"
              >
                <span className="flex flex-wrap justify-between gap-[12px] pb-[12px]">
                  <div className="border-[1px] border-solid border-[#FF8800] rounded-[4px] w-[48%] h-[44px] flex justify-center items-center">
                    <img
                      className="w-[86px] object-contain"
                      src="https://static.chotot.com/storage/default/logo-chotot.png"
                      alt=""
                    />
                  </div>
                  <div className="border-[1px] border-solid border-[#E8E8E8] rounded-[4px] w-[48%] h-[44px] flex justify-center items-center">
                    <img
                      className="w-[86px] object-contain"
                      src="https://static.chotot.com/storage/default/logo-job.png"
                      alt=""
                    />
                  </div>
                  <div className="border-[1px] border-solid border-[#E8E8E8] rounded-[4px] w-[48%] h-[44px] flex justify-center items-center">
                    <img
                      className="w-[86px] object-contain"
                      src="https://static.chotot.com/storage/default/logo_veh1.png"
                      alt=""
                    />
                  </div>
                  <div className="border-[1px] border-solid border-[#E8E8E8] rounded-[4px] w-[48%] h-[44px] flex justify-center items-center">
                    <img
                      className="w-[86px] object-contain"
                      src="https://static.chotot.com/storage/APP_WRAPPER/logo/PTY_logo_appwrapper.png"
                      alt=""
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default DialogNextPage;

import React from "react";

const NavbarContact = () => {
  return (
    <div className="800px:hidden flex fixed bottom-[0] left-0 h-[50px] w-full border-t-[1px] border-solid border-[#e5e5e5] bg-[#ffffff] my-[0] mx-[auto] z-[8] will-change-transform">
      <div className="text-[#fff] bg-[#33a837] w-full border-none font-bold flex flex-col items-center text-[14px] py-[6px] px-[12px] mb-0 text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer ">
        <img className="w-[20px] align-middle h-[20px]" src="https://static.chotot.com/storage/chotot-icons/png/call.png" alt="" />
        <span className="text-[12px] h-[12px] font-bold">Gọi điện</span>
      </div>
      <div className="text-[#333] bg-[##fff] w-full border-none font-bold flex flex-col items-center text-[14px] py-[6px] px-[12px] mb-0 text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer ">
        <img className="w-[20px] align-middle h-[20px]" src="https://static.chotot.com/storage/chotot-icons/png/sms.png" alt="" />
        <span className="text-[12px] h-[12px] font-bold">SMS</span>
      </div>
      <div className="text-[#333] bg-[##fff] w-full border-none font-bold flex flex-col items-center text-[14px] py-[6px] px-[12px] mb-0 text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer ">
        <img className="w-[20px] align-middle h-[20px]" src="https://static.chotot.com/storage/chotot-icons/png/chat.png" alt="" />
        <span className="text-[12px] h-[12px] font-bold">Chat</span>
      </div>
    </div>
  );
};

export default NavbarContact;

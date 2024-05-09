'use client';

import React, { useState } from "react";

const WrapperHeader = () => {
  const[noti,setNotiOff] = useState('flex');

  return (
    <div
      className={`${noti} hidden 800px:items-center 800px:justify-center 800px:text-sm 800px:h-[40px] 800px:gap-[8px] `}
      width="22"
      height="24"
      alt="ct-shield"
    >
      <img
        src="https://static.chotot.com/storage/APP_WRAPPER/icons/ct-shield.png"
        className="w-[22px] h-[24px"
      />
      <p>
        Chợ Tốt chỉ cung cấp dịch vụ &amp; chương trình trên các trang chính
        thức. Hãy cảnh giác với các hình thức liên hệ dưới tên Chợ Tốt!
      </p>
      <span>
        <a
          target="blank"
          className="inline-block text-sm font-bold decoration-solid p-0"
          href="https://trogiup.chotot.com/nguoi-mua/canh-bao-lua-dao-mao-danh-cong-ty-cho-tot/"
        >
          Xem thêm
        </a>
      </span>
      <button onClick={()=>setNotiOff('hidden')}>
        <svg
          fill="#000000"
          width="10px"
          height="10px"
          viewBox="-28 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>cancel</title>
          <path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z" />
        </svg>
      </button>
      {/* <span onClick={TurnOffNoti(e)}>X</span> */}
    </div>
  );
};

export default WrapperHeader;

import React from 'react'

const NewFeed = () => {
  return (
    <div className="w-full h-full 800px:hidden">
         {/* Chơ tốt có gì mới */}
         <div className="bg-[#fff] 800px:hidden 375px:top-[80vh] 400px:top-[75vh] 390px:top-[80vh] 360px:top-[80vh] mt-2">
          <p className="text-base px-3 py-3 pt-0 font-bold leading-snug text-gray-800">
            Chợ tốt có gì mới?
          </p>
          <ul className="list-none flex m-0 px-[12px] pb-[12px]">
            <li className="ml-0 outline-none flex-1 cursor-pointer">
              <img
                className="bg-cover flex no-underline flex-col justify-between items-center h-full rounded-[4px]"
                src="https://cdn.chotot.com/admincentre/XARQYh1FplKGQrayKukn_00dXuTru3W71CDplMwZW4g/preset:raw/plain/201ca478d297efdaebbc660ff36215ce-2872304595750809406.jpg"
                alt=""
              />
            </li>
            <li className="ml-[12px] outline-none flex-1 cursor-pointer">
              <img
                className="bg-cover flex no-underline flex-col justify-between items-center h-full rounded-[4px]"
                src="https://cdn.chotot.com/admincentre/_IYHSgsbsfVm8XInsHP3FrwSpsThZHntLnhVw_cpFEk/preset:raw/plain/b7f299a509d6dcc36d662f32a7584a92-2868303379218485627.jpg"
                alt=""
              />
            </li>
          </ul>
          <ul className="list-none flex m-0 px-[12px] pl-[12px]">
            <li className="ml-0 outline-none flex-1 cursor-pointer">
              <img
                className="bg-cover flex no-underline flex-col justify-between items-center h-full rounded-[4px]"
                src="https://cdn.chotot.com/admincentre/8QV4y_SoeF1Je4LTI6gzRbX2u0SJOsHl4eKe-VAxHVo/preset:raw/plain/348113ce94fe12816a36cdacd64141c5-2861345876585237174.jpg"
                alt=""
              />
            </li>
            <li className="ml-[12px] outline-none flex-1 cursor-pointer">
              <img
                className="bg-cover flex no-underline flex-col justify-between items-center h-full rounded-[4px]"
                src="https://cdn.chotot.com/admincentre/aSGLsopmSpE9C-cOt57Kxgrr4XdHi6x9HTI66asUGyQ/preset:raw/plain/4607d9ea1e5e95616b080e9ed9c751bf-2862621424316852321.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default NewFeed
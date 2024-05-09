import React from "react";

const CategoryFilter = (props) => {
  const { DataFiltermap } = props;
  const {DataFilter} = props;
  const {openFilter} = props
  const {handleFilterChange} = props


  return (
    <div>
      <div className=" fixed z-[200] will-change-[top,left,width,height] left-[462.3px] top-[150px]">
        <div
          style={{
            maxHeight: "calc(100vh - 170px - var(40px, 0px))",
          }}
          className="bg-white w-[280px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)] rounded overflow-auto"
        >
          <ul>
            {DataFiltermap.map((item) => (
              <li key={item.id} className="transition-opacity duration-[0.5s] ease-[ease-in] relative h-[45px] cursor-pointer flex items-center border-b-[#f4f4f4] border-b border-solid">
                <div
                
                  className="text-inherit flex items-center w-full text-sm absolute whitespace-normal h-[45px] px-[25px] py-0"
                >
                  <span onClick={()=>handleFilterChange(`${item.value}`)}>{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* phan reponsive */}
      {openFilter && openFilter? (
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
                     <h5>Tất cả danh mục</h5>
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
                   <div className="flex flex-col gap-y-2 p-3">
                     <div className="px-0 py-3 border-b-[#e8e8e8] border-b border-solid">
                       <a className="h-8 text-sm leading-5 px-2.5 font-[400] py-1.5 w-fit bg-[#f4f4f4] text-[#222] cursor-pointer rounded-full relative inline-flex justify-center items-center gap-0.5 min-w-[initial] text-center" href="">
                       Xem tất cả danh mục
                       </a>
                     </div>
                     <div className="flex items-center justify-between px-0 py-2">
                       <div>
                       <img className="w-5 h-5 text-sm leading-5 inline" src="https://static.chotot.com/storage/categories/all-category-v6/4000.png" alt="" />
                       <span className="inline text-sm not-italic font-bold leading-5 text-[#222] ml-2">{DataFiltermap[0].title}</span>
                       </div>
                     </div>
                   </div>
                   {/* danh sách danh mục */}
                   <ul className="flex gap-x-1 gap-y-2 flex-wrap mb-0 pl-0">
                   {DataFiltermap.map((item) => (
                     <li >
                       <div className="h-8 text-sm leading-5 px-2.5 py-1.5 w-fit bg-[#f4f4f4] text-[#222] cursor-pointer font-[400] rounded-full relative inline-flex justify-center items-center gap-0.5 min-w-[initial] text-center">
                         <span>{item.title}</span>
                       </div>
                     </li>
                     
                   ))}
                    <li >
                       <div className="h-8 text-sm leading-5 px-2.5 py-1.5 w-fit bg-[#fff4e0] text-[#f80] cursor-pointer font-[700] rounded-full relative inline-flex justify-center items-center gap-0.5 min-w-[initial] text-center">
                         <span>Xem tất cả <p className="lowercase inline">{DataFiltermap[0].title}</p></span>
                       </div>
                     </li>
                   </ul>
                  
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

export default CategoryFilter;

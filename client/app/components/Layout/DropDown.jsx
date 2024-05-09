import React from 'react';
import { useRouter } from "next/navigation";


const DropDown = ({ categoriesData}) => {
  const router = useRouter();
  return (
    <div className="pb-4 w-[270px] bg-[#fff] text-[#060606] absolute top-[40px] z-[999] rounded-b-md shadow-sm">

     {categoriesData &&
       categoriesData.map((i, index) => (
         <div onClick={()=>router.push(i.router)}
           key={index}
     className='flex flex-row content-center items-center border-b-2 border-[#4848481c]'
        
         >
           <img
             src={i.srcImg}
             style={{
               width: "20px",
               height: "20px",
               objectFit: "contain",
               marginLeft: "10px",
               userSelect: "none",
              
             }}
             alt=""
           />
           <h3 className="m-3 cursor-pointer select-none ">{i.title}</h3>
         </div>
       ))}
   </div>
  )
}

export default DropDown
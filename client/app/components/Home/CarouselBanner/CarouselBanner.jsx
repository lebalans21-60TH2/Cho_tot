import React from 'react';
import banner1 from './../../../Asset/banner1.jpg';
import banner2 from '../../../Asset/banner2.jpg';
import banner3 from '../../../Asset/banner3.jpg';
import banner4 from '../../../Asset/banner4.png';
import banner5 from '../../../Asset/bann5.png';
import banner6 from '../../../Asset/banner6.png';
import banner7 from '../../../Asset/banner7.png';
import banner8 from '../../../Asset/banner8.png';
import banner9 from '../../../Asset/banner9.jpg';
import banner10 from '../../../Asset/banner10.png';
import banner11 from '../../../Asset/banner11.png';
import { Carousel } from "flowbite-react";
import Image from 'next/image';



const CarouselBanner = () => {
  return (
    <>
   
    <Carousel className='hidden 800px:block' slideInterval={4000}>
      <Image className='rounded ' src={banner1} alt="..." />
      <Image className='rounded ' src={banner2} alt="..." />
      <Image className='rounded ' src={banner3} alt="..." />
      <Image className='rounded ' src={banner4} alt="..." />
      <Image className='rounded ' src={banner5} alt="..." />
      <Image className='rounded ' src={banner6} alt="..." />
      <Image className='rounded ' src={banner7} alt="..." />
      <Image className='rounded ' src={banner8} alt="..." />
      <Image className='rounded ' src={banner9} alt="..." />
      <Image className='rounded ' src={banner10} alt="..." />
      <Image className='rounded ' src={banner11} alt="..." />
    </Carousel>
    
     {/* carrousel mobile */}
     <div className=" 375px:top-[90px] h-[23vh] 800px:hidden w-[100%] 800px:h-[100%] 360px:top-[99px]">
          <Carousel slideInterval={4000}>
            <Image
              className=" absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner1}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner2}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner3}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner4}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner5}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner6}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner7}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner8}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner9}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner10}
              alt="..."
            />
            <Image
              className="absolute box-border top-[85px] p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-[80%] max-h-[80%] object-cover border-none"
              src={banner11}
              alt="..."
            />
          </Carousel>
        </div>
    
</>
  )
}

export default CarouselBanner
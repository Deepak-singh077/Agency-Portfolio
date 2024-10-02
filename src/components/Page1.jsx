import React, { useEffect } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";
import { gsap } from 'gsap';
const Page1 = () => {
   useEffect(()=>{
    var vc= document.querySelector(".canvas");
    var glass= document.querySelector(".glass")
    vc.addEventListener("mouseenter", function() {
        gsap.to(glass, {
            opacity:1 ,
            scale:1
        })});
        vc.addEventListener("mouseleave", function() {
            gsap.to(glass, {
                opacity:0 ,
                scale:0
            })});
         vc.addEventListener("mousemove", function(dets) {
                gsap.to(glass, {
                    left:dets.x-300,
                    top:dets.y-100
                })});
   })
  return (
    <div className='canvas  h-[78vh] bg-[url("/pic1.webp")] bg-cover bg-center relative '>
        <div className='glass scale-0 opacity-0  text-center pt-[30px] h-[80px] w-[90px] border-black border-[50%] fixed bg-white  rounded-[50%]'>play</div>
    <div className='flex w-full '>
   <div className='text-[150px]  leading-[18vh] pt-[250px]  px-[3.5vw]'>
   <h1 className='text-[#B3E926] '> Where ideas  </h1>
   <p className='text-white '> races to victory!</p>
   </div>
   <AiOutlineArrowDown className='text-[#B3E926] text-[100px] mt-[390px] ml-[200px] animate-bounce transition-transform duration-4000 ease-in-out' />

   </div>
    </div>
  )
}

export default Page1
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
const Page3 = () => {

  useEffect(()=>{
    var rightelms= document.querySelectorAll(".elems")
    rightelms.forEach(function(elem){
         elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[1],{
                opacity:1,
                scale:1
            })
         })
         elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[1],{
                opacity:0,
                scale:0
            })
         })
         elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[1],{
                x:dets.x - elem.getBoundingClientRect().x -250,
                y:dets.y - elem.getBoundingClientRect().y -50
            })
         })
    })
  })
  return (
    <div className='h-screen w-full bg-[#FFFFFF] flex  '>
        <div className="left w-[32%] mr-5 pt-[90px] pl-[3.2vw] ">
            <h3>SIMPLICITY AND CLARITY ARE OUR <br /> GUIDING PRINCIPLES, FROM START TO FINISH - FROM DESIGN TO PRODUCT DEVELOPMENT.</h3>
            <li className=' underline'>VIEW ALL WORK</li>
        </div>

        <div className="right w-[68%]   pt-[70px] pr-[3vw] ">
            <div className="elems relative  pl-[70px]   flex justify-between border-b-2 border-black pb-[10px]">
                <div>
                     <h1 className='flex'> .01 <p className='text-[6.3vw] font-normal'>ORBITAL</p></h1>
                <h3 className='pl-[40px]'>WEBSITE + WEB APP PORTAL</h3>
                </div>
                <img className='h-full scale-0 absolute opacity-0 w-[22vw] mt-[-50px]' src="/orbit.webp" alt="" />

                <img src="https://grainient.b-cdn.net/Inspirux/arrowRight.svg" className='  w-[40px]' alt="" />
            </div>
            <div className="elems relative  pl-[70px] pt-[20px] flex justify-between border-b-2 border-black pb-[10px]">
                <div>
                     <h1 className='flex'> .02 <p className='text-[6.3vw] font-normal'>BENTLEY</p></h1>
                <h3 className='pl-[40px]'>BRANDING + VISUAL IDENTITY</h3></div>
                <img className='h-full scale-0 absolute opacity-0 w-[22vw] ' src="/bently.png" alt="" />
                <img src="https://grainient.b-cdn.net/Inspirux/arrowRight.svg" className='  w-[40px]' alt="" />
            </div> 
            <div className="elems relative pl-[70px] pt-[20px] flex justify-between border-b-2 border-black pb-[10px]">
                <div>
                     <h1 className='flex'> .03 <p className='text-[6.3vw] font-normal'>ACREMADE</p></h1>
                <h3 className='pl-[40px]'>BRANDING + VISUAL IDENTITY</h3></div>
                <img className='h-full  scale-0 absolute opacity-0 w-[22vw] ' src="/acre.png" alt="" />
                <img src="https://grainient.b-cdn.net/Inspirux/arrowRight.svg" className='  w-[40px]' alt="" />
            </div>
            <div className="elems relative  pl-[70px] pt-[20px] flex justify-between border-b-2 border-black pb-[10px]">
                <div>
                     <h1 className='flex'> .04 <p className='text-[6.3vw] font-normal'>MUNCH</p></h1>
                <h3 className='pl-[40px]'>WEBSITE + WEB APP PORTAL</h3></div>
                <img className='h-full scale-0  absolute opacity-0 w-[22vw] ' src="/dog.webp" alt="" />
                <img src="https://grainient.b-cdn.net/Inspirux/arrowRight.svg" className='  w-[40px]' alt="" />
            </div> 
            <div className="elems relative  pl-[70px] pt-[20px] flex justify-between border-b-2 border-black pb-[10px]">
                <div>
                     <h1 className='flex'> .05 <p className='text-[6.3vw] font-normal'>MONT</p></h1>
                <h3 className='pl-[40px]'>WEBSITE + WEB APP PORTAL</h3></div>
                <img className='h-full scale-0 w-[22vw]  absolute opacity-0 ' src="/mont.webp" alt="" />
                <img src="https://grainient.b-cdn.net/Inspirux/arrowRight.svg" className='  w-[40px]' alt="" />
            </div>   
            <div className="elems relative  pl-[70px] pt-[20px] flex justify-between border-b-2 border-black pb-[10px]">
                <div>
                     <h1 className='flex'> .06 <p className='text-[6.3vw] font-normal'>SWIFTPAL</p></h1>
                <h3 className='pl-[40px]'>WEBSITE + WEB APP PORTAL</h3></div>
                <img className='h-full scale-0 w-[22vw]  absolute opacity-0 ' src="/swift.webp" alt="" />
                <img src="https://grainient.b-cdn.net/Inspirux/arrowRight.svg" className='  w-[40px]' alt="" />
            </div>                         
            <div><h1 className='text-[3vw]  pt-[60px]'>— CREATIVELY DRIVEN  <br />SOLUTION ORIENTATED</h1></div>
      
        </div>
            
    </div>
  )
}

export default Page3
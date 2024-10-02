import React from 'react'
import { FaPlay } from "react-icons/fa";
const Home = () => {
  return (
    <>

    <div className='h-[225vh] w-full border-b-2 border-[black]'>
        <div className=' bg-[#F9FAF7] h-[15vh] w-full flex'>
            <div className='w-full h-full bg-[#3B4EFF]'>
                <h3 className='pt-[30px] pl-[3.5vw] text-white relative group inline-block'>
                    EXPLORE WORKS
                    <span className='absolute bottom-0 left-[25px] right-[50px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
                </h3>
            </div>
            <div className='video1 bg-[#B3EC11] w-[10%] h-full group'>
                <video 
                    className='w-full h-full object-cover hidden group-hover:block' 
                    src="/vd2.mp4" 
                    autoPlay
                    muted 
                    loop
                >
                </video>
                <div className='w-full h-full flex items-center justify-center group-hover:hidden'>
                    <FaPlay className='text-1xl' />
                </div>
            </div>
            <div className='bg-[#EEEEEE] h-full flex justify-between items-center px-[30px] w-[50%]'> 
                <p  >PLAY REEL </p> 
                <p>SCROLL DOWN</p>
                
            </div>
        </div>

        <div className="wrapper flex px-[3.5vw]  pt-[150px]">
        <div className='2 leading-[18px]'><p>WE BELIEVE IN THE POWER OF DESIGN AND ITS ABILITY TO DEFINE AND TRANSFORM BRANDS.</p></div>
        <div className='3 ml-[300px] '><p className='text-[44px]  '>— Its our commitment to excellence that distinguishes us. Our expertise spans the realms of branding, UI/UX design, and development, where we employ a strategic approach. We seamlessly coordinate across various disciplines and services to craft exceptional products. <br />
  
</p> <p className='mt-[10px] text-[44px]'>Our mission is to empower global enterprises to unlock their maximum capabilities.</p>  
<li className='mt-5 underline'>READ MORE ABOUT US</li> 
 </div>
        </div>
   <div className=' h-screen w-full text-center '>
   <h1 className='text-[250px] tracking-tight mb-[-60px] ' > SELECTED  </h1>
   <div className='flex h-[50vh] justify-center text-center  '>
       <video src="/vd1.mp4" muted autoPlay loop className='w-[250px] mr-[30px] mt-[-100px]'/>
       <h1 className='text-[250px] mt-[-90px] '> WORKS</h1>
   </div>
   </div>
         </div>
         </>

  )
}

export default Home
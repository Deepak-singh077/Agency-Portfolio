import React from 'react'

const Nav = () => {
  return (
    <div className='h-[7vh] bg-[#0F0F11] items-center flex justify-between text-[#e1d8d8] px-7 border-[#4b4a4a] border-b  '>
        <h1 className='text-[30px] font-semibold '>inspirux</h1>
        <div className=''>
            <a href="#" className='ml-[4.5vw] font-semibold relative group'>
                WORK
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#e1d8d8] transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="" className='ml-[4.5vw] font-semibold relative group'>
                EXPERTISE
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#e1d8d8] transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="" className='ml-[4.5vw] font-semibold relative group'>
                ABOUT
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#e1d8d8] transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href="" className='ml-[4.5vw] font-semibold relative group'>
                INSIGHT
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#e1d8d8] transition-all duration-300 group-hover:w-full'></span>
            </a>
        </div>
    <h2 className='text-[20px]' >CONTACT</h2>

    </div>
  )
}

export default Nav
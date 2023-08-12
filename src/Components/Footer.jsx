import React from 'react'
import kodecamp from '../assets/kodecamp.png'
import kodeHauz from '../assets/kodeHauz.png'

const Footer = () => {
  return (
    <div className='w-full h-[40px] flex flex-col gap-2 lg:gap-0 lg:flex-row items-start lg:items-center lg:justify-between mt-4'>
      <img src={kodecamp} className='lg:h-[40px] h-[30px]'/>
      <p className='text-gray-400 lg:text-[12px] text-[10px]'>KodeCamp internship Task</p>
      <img src={kodeHauz} className='lg:h-[40px] h-[30px]'/>
    </div>
  )
}

export default Footer

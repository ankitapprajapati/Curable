import React from 'react'
import { assets } from '../assets/assets_frontend/assets_frontend'

const Header = () => {
  return (
    <div>
        <div className=' flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-16 bg-primary '>
            <div className='  md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 py-10 md:py-[10vw] md:mb-[-30px] text-white'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight '>
                    Book Appointment 
                    <br /> 
                    With Trusted Doctors
                </p>
                <div className='flex flex-col lg:flex-row gap-4 items-center md:items-start font font-light'>
                    <img className='h-12' src={assets.group_profiles} alt="" />
                    <p>
                        Simply browse through our extensive list of trusted doctors,
                        <br className='hidden md:block' />
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <div className=' w-full flex justify-center md:justify-start md:ml-8 lg:ml-16'>
                    <a className='bg-white text-[#262626] rounded-full px-4 py-2 hover:scale-105 duration-300' href="#speciality">Book appointment</a>
                </div>

            </div>
            <div className=' md:w-1/2 flex justify-center md:flex-col   lg:justify-end'>
                <img className='  md:w-full h-auto mb-[1/4] ' src={assets.header_img} alt="" />
            </div>
        </div>      
    </div>
  )
}

export default Header

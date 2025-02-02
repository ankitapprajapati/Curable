import React from 'react'
import { assets } from '../assets/assets_frontend/assets_frontend'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-primary  flex flex-col md:flex-row px-6 md:px-10 lg:px-16 rounded-lg  '>
        <div className='md:w-1/2 flex flex-col justify-center items-center gap-6  py-10 md:py-[10vh] '>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight '>Book Appointment <br /> With 100+ Trusted Doctors </p>
            <button onClick={()=>{navigate("/login")}} className='bg-white text-sm text-gray-600 px-8 py-3 rounded-full mt-6 transform hover:scale-105 transition-all duration-300'>Create account</button>
        </div>
        <div className='hidden md:flex justify-center mt-12 items-center'>
            <img className='w-[60%] h-auto ml:h-20' src={assets.appointment_img} alt="" />
        </div>      
    </div>
  )
}

export default Banner

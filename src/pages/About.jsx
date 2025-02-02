import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div >

      <div className='  text-center text-2xl pt-10 text-gray-500 font-semibold'>
        <p>ABOUT <span className='text-gray-800'>US</span></p>
      </div>
      
      <div className='flex flex-col sm:flex-row justify-center  mt-8 gap-12'>
        <img className='w-full max-w-[360px]  rounded-sm px-auto' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-2 text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div>

        <div className='text-xl my-4 mt-12 text-gray-500'>
          <p>Why <span className='text-gray-800'>CHOOSE US </span>?</p>
        </div>

        <div className='grid grid-cols-12  text-center'>
          <div className='col-span-full sm:col-span-4 border py-4 sm:py-8 px-8 sm:px-[20%] text-gray-600 hover:bg-primary hover:text-white cursor-pointer'>
            <b className='text-lg text'>EFFICIENCY:</b>
            <p className='' >Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='col-span-full sm:col-span-4 border  py-4 sm:py-8 px-8 sm:px-[20%] text-gray-600 hover:bg-primary hover:text-white cursor-pointer'>
            <b className='text-lg text'>CONVENIENCE:</b>
            <p className='' >Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='col-span-full sm:col-span-4 border  py-4 sm:py-8 px-8 sm:px-[20%] text-gray-600 hover:bg-primary hover:text-white cursor-pointer'>
            <b className='text-lg text'>PERSONALIZATION:</b>
            <p className='' >Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

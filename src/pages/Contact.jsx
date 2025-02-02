import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='  text-center text-2xl pt-10 text-gray-500 font-semibold'>
        <p>CONTACT <span className='text-gray-800'>US</span></p>
      </div>   

      <div className='flex flex-col sm:flex-row justify-center  mt-8 gap-12 mb-12'>
        <img className='w-full max-w-[360px]  rounded-sm px-auto' src={assets.contact_image} alt="" />
        <div className='flex flex-col text-gray-600 gap-4 justify-center items-start'>
          <h6 className='font-semibold text-lg text-gray-600'>OUR OFFICE</h6>
          <p className='text-gray-500'>439 Mbh-B <br/> Jalandhar,Punjab, INDIA</p>
          <p className='text-gray-500'>Tel: (+91) 626879XXXX <br/> Email: ankitapprajapati6268@gmail.com</p>
          <h6 className='font-semibold text-lg text-gray-600'>CAREER AT <span>CURABLE</span></h6>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border px-6 py-2 text-sm text-black hover:text-white hover:bg-black transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

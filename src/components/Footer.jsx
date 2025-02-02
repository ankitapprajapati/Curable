import React from 'react'
import { assets } from '../assets/assets_frontend/assets_frontend'

const Footer = () => {
  return (<>
        <div className='grid grid-cols-12 pt-6 gap-4'>
            <div className='col-span-full md:col-span-6 md:px-4'>
                <div onClick={()=>{scroll(0,0)}} className='flex items-center cursor-pointer'>
                    <img className='h-12' src={assets.medical_logo_img} alt="" />
                    <h2 className='text-2xl font-bold text-primary'>Curable</h2>
                </div>
                <div>
                    <p className='text-gray-600 text-sm'>Join the Curable community and take charge of your health.
                    Sign up today to find and book appointments with top-class doctors in your area. <br className='hidden md:block'/>
                    Visit our website at <a className='text-primary' href="/">Curable.com</a> and embark on your journey to better health!
                    </p>
                </div>
            </div>
            <div className='col-span-full md:col-span-3 md:px-4'>
                <h3 className='text-xl font-semibold text-gray-800 h-12 flex items-center'>COMPONY</h3>
                <ul>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact us</li>
                    <li className='cursor-pointer'>Privacy Policy</li>
                </ul>
            </div >
            <div className='col-span-full md:col-span-3 md:px-4'>
                <h3 className='text-xl font-semibold text-gray-800 h-12 flex items-center'>GET IN TOUCH</h3>
                <ul >
                    <li className='cursor-pointer'>+91-6268793323</li>
                    <li className='cursor-pointer'>ankitapprajapati6268@gmail.com</li>
                </ul>
            </div>
            
            
        
        </div>
        
        <div className='flex flex-col mt-4 '>
            <hr/>
            <p className='font-normal text-gray-950 text-sm text-center py-4 '>Copyright 2024 @Curable.com - All Right Reserved.</p>
        </div>
    </>
  )
}

export default Footer

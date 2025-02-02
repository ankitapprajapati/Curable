import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets_frontend.js'
import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const [showMenu,setShowMenu]=useState(false)
  const [token,setToken]= useState(true)

  return (
    <div className=' flex items-center justify-between test-sm py-4 mb-5 border-b border-b-gray-400  ' >
        <img onClick={()=>navigate('/')} className='w-16 cursor-pointer' src={assets.medical_logo_img} alt="" />
        <ul className='flex space-x-8 '>
          <NavLink to='/'  >
            <li >HOME</li>
            <hr className='bg-primary hidden'/>
          </NavLink>
          <NavLink to={'/doctors'}>
            <li >ALL DOCTORS</li>
            <hr className='bg-primary hidden'/>
          </NavLink>
          <NavLink to={'/about'}>
            <li >ABOUT</li>
            <hr className='bg-primary hidden'/>
          </NavLink>
          <NavLink to={'/contact'}>
            <li >CONTACT</li>
            <hr className='bg-primary hidden'/>
          </NavLink>
        </ul>

        <div className='flex items-center cursor-pointer group'>
          { token ? 
            <div className=' flex items-center relative '>
              <img className='h-12 rounded-full hidden md:block cursor-pointer' src={assets.profile_pic} alt="" />
              <img className='w-4 ml-2' src={assets.dropdown_icon} alt="" />      

              {/* sub-Menu */}
              <div className='absolute top-full mt-2 right-0 text-sm z-20 font-normal text-gray-600 hidden group-hover:block'>
                <div className='bg-neutral-100 p-4 rounded-lg shadow-lg'>
                  <p onClick={()=>navigate('/user/profile')} className='hover:font-medium cursor-pointer'>Profile</p>
                  <p onClick={()=>navigate('/user/appointment')} className='hover:font-medium cursor-pointer'>Appointment</p>
                  <p onClick={()=>setToken((e)=>!e)} className='hover:font-medium cursor-pointer'>Log-out</p>
                </div>
              </div>
            </div>
            :
            <button onClick={()=>navigate("/login")} className='bg-primary pl-3 pr-3 p-0.5 rounded-xl text-white hidden md:block'>Create account</button>}
        </div>
        
    </div>
  )
}

export default Navbar
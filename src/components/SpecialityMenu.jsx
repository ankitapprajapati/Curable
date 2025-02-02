import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets.js'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center py-16 gap-4 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1> 
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors,
        <br className='hidden md:block'/>
        schedule your appointment hassle-free.
      </p>           
      <div className='flex flex-row justify-center gap-4  overflow-scroll'>
        {specialityData.map((item,index)=>{
          return (
            <Link className=' flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300 px-1' key={index} to={`/doctors/${item.speciality}`}>
              <img className='w-20' src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SpecialityMenu

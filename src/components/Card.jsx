import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({doctor}) => {
    const navigate = useNavigate()
  return (
    <div className=' m-auto border rounded-xl border-blue-100 overflow-hidden flex flex-col cursor-pointer hover:translate-y-[-8px] transition-all duration-300' onClick={()=>{ navigate(`/appointment/${doctor._id}`)}} >
        <img className='bg-blue-50' src={doctor.image} alt="" />   
        <div className='flex flex-row items-center justify-center mt-2'>
            <p className=' bg-green-500 h-2 w-2 rounded-full mr-1'></p>
            <p className='text-green-500'>Avaible</p>
        </div>  
        <div className='flex flex-col items-center'>
            <p className='text-gray-900 text-lg font-lg'>{doctor.name}</p>
            <p className='text-gray-600 text-sm font-normal'>{doctor.speciality}</p>
        </div>
    </div>
  )
}

export default Card

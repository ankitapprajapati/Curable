import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Card from './Card';

const TopDoctor = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-4 my-16  text-gray-800'>
        <h1 className='text-3xl font-medium' >Top Doctor for Appointment</h1>
        <p className='sm:w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors.</p>



        <div className='w-full grid grid-cols-auto gap-4 pt-4  '>
            {doctors.slice(0,10).map((doctor)=>{
                return (
                    <Card key={doctor._id} doctor={doctor} />
                )
            })}
        </div>



        
        <button onClick={()=>{navigate('/doctors')}} className='bg-blue-50 px-6 py-1 border border-blue-100 rounded-3xl transform hover:scale-110'>more</button>              
    </div>
  )
}

export default TopDoctor
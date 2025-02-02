import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Card from '../components/Card'
import { assets } from '../assets/assets_frontend/assets'
import BookingDateTime from '../components/BookingDateTime'
import RelatedDoctor from '../components/RelatedDoctor'

const Appointment = () => {
  const {id} = useParams()
  const {doctors} = useContext(AppContext);
  const [doctorInfo,setDoctorInfo] = useState(null);

  

    const fetchDoctorInfo = async ()=>{
      const foundDoctor = doctors.find( (doctor)=> doctor._id===id )
      setDoctorInfo( foundDoctor || null )
    }

    useEffect(()=>{
      fetchDoctorInfo();
    },[id])

   

    return doctorInfo &&  (
      <div>

        {/* ---- doctor detials --- */}
        <div className='flex flex-col sm:flex-row gap-4 w-[100%]'>
          <div>
            <img className='bg-primary rounded-lg w-full sm:max-w-72 min-w-48' src={doctorInfo.image} alt="" />
          </div >

          <div className=' flex flex-1 flex-col w-full flex-wrap'>
            <div className=' flex flex-col border border-gray-400 rounded-lg p-8  mt-[-72px] m-2 sm:m-0  bg-white sm:mt-0'>
              <div className='flex flex-row '>
                <h1 className=' text-3xl font-semibold text-gray-700'>{doctorInfo.name}</h1>
                <img className='w-6 ml-3' src={assets.verified_icon} alt="" />
              </div>
              <h4 className='text-base text-gray-600'>{doctorInfo.degree} - {doctorInfo.speciality} 
                <button className=' text-sm border ml-2 px-2 py-0 rounded-xl'>{doctorInfo.experience}</button>
              </h4>
              <p className='flex gap-2 flex-row text-black pt-6'>
                About 
                <img className='w-3' src={assets.info_icon} alt="" />
              </p>
              <p className='text-gray-600'>{doctorInfo.about}</p>
              <h4 className='text-lg text-gray-600'>Appointement fees :
                <span className='text-gray-900'>  &#8377;{doctorInfo.fees.toLocaleString("en-IN")}</span>
              </h4>
            </div> 


            {/* Appointment booking Date */}
            <BookingDateTime doctorInfo={doctorInfo} />           

          </div>
        </div>

        {/* Related Doctors */}
        <RelatedDoctor docId={doctorInfo._id} speciality={doctorInfo.speciality}/>         
      </div>
  )
}

export default Appointment

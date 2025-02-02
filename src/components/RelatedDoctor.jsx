import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'

const RelatedDoctor = ({docId,speciality}) => {

    const {doctors} = useContext(AppContext)

    const [relatedDoctor,setRelatedDoctor] = useState([])

    useEffect( ()=>{
        if(doctors.length && speciality){
            const relDoc =  doctors.filter(doctor=>doctor.speciality===speciality && doctor._id!==docId)
            setRelatedDoctor(relDoc)
        }
    },[speciality,docId,doctors])


    return (
    <div className='flex flex-col items-center gap-4 my-16  text-gray-800'>
        <h1 className='text-3xl font-medium' >Top Doctor for Appointment</h1>
        <p className='sm:w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors.</p>



        <div className='w-full grid grid-cols-auto gap-4 pt-4  '>
            {relatedDoctor.map((doctor)=>{
                return (
                    <Card key={doctor._id} doctor={doctor} />
                )
            })}
        </div>
    </div>
    )
}

export default RelatedDoctor

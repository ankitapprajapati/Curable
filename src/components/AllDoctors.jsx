import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Card from './Card';

const AllDoctors = () => {

    const {speciality} = useParams();
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
    const [filteredDoctors,setFilteredDoctors] = useState([])
    
    const applyFilter = ()=>{
        if(speciality){
            setFilteredDoctors( doctors.filter( doctor => doctor.speciality===speciality))
        }else{
            setFilteredDoctors(doctors);
        }
    }

    useEffect( ()=>{
        applyFilter()
    },[doctors,speciality])

    return (
        <div >
            <p className='text-lg text-gray-600'>Browse through the doctors specialist.</p>

            <div className='flex flex-col sm:flex-row w-full pt-4  '>
                <div className='flex flex-col w-5/12 gap-4'>
                    <p onClick={ ()=>{ speciality==='General physician'? navigate('/doctors') : navigate('/doctors/General physician')}} className={` ${speciality==='General physician'? "bg-indigo-100":""} rounded-md border border-slate-200 px-4 py-1 text-start cursor-pointer text-gray-700 `} >General Physician</p>
                    <p onClick={ ()=>{ speciality==='Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')}} className={` ${speciality==='Gynecologist'? "bg-indigo-100":""} rounded-md border border-slate-200 px-4 py-1 text-start cursor-pointer text-gray-700`}>Gynecologist</p>
                    <p onClick={ ()=>{ speciality==='Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')}} className={` ${speciality==='Dermatologist'? "bg-indigo-100":""} rounded-md border border-slate-200 px-4 py-1 text-start cursor-pointer text-gray-700`}>Dermatologist</p>
                    <p onClick={ ()=>{ speciality==='Pediatricians'? navigate('/doctors') : navigate('/doctors/Pediatricians')}} className={` ${speciality==='Pediatricians'? "bg-indigo-100":""} rounded-md border border-slate-200 px-4 py-1 text-start cursor-pointer text-gray-700`}>Pediatricians</p>
                    <p onClick={ ()=>{ speciality==='Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')}} className={` ${speciality==='Neurologist'? "bg-indigo-100":""} rounded-md border border-slate-200 px-4 py-1 text-start cursor-pointer text-gray-700`}>Neurologist</p>
                    <p onClick={ ()=>{ speciality==='Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}} className={` ${speciality==='Gastroenterologist'? "bg-indigo-100":""} rounded-md border border-slate-200 px-4 py-1 text-start cursor-pointer text-gray-700`}>Gastroenterologist</p>
                </div>

                <div className='md:ml-4 w-full grid grid-cols-auto gap-4 '>
                    {filteredDoctors.map((doctor)=>{
                        return (
                            <Card key={doctor._id} doctor={doctor}/>
                        )
                    })}
                </div>
            </div>           
        </div>
    )
}

export default AllDoctors
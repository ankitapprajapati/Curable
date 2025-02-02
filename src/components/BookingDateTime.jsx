import React, { useEffect, useState } from 'react'

const BookingDateTime = ({doctorInfo}) => {
    const [doctorSlot,setDoctorSlot] = useState([])
    const [slotIndex,setSlotIndex] = useState(0)
    const [slotTime,setSlotTime] = useState('')

    const dayOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

    const getAvaibleSlots = async ()=>{

        //currentdate
        let today = new Date();
        //  accumulate slots to update state once
        const allSlots = []
        
        for(let i=0; i<7; i++){
            // get date with index
            let currDate = new Date(today)
            currDate.setDate(currDate.getDate()+i)

            let endTime = new Date(currDate);
            endTime.setHours(21,0,0,0)
            
            if( today.getDate() === currDate.getDate() ){
                currDate.setHours(currDate.getHours()>10? currDate.getHours()+1:10 )
                currDate.setMinutes( currDate.getMinutes()>30 ? 30:0)
            }else{
                currDate.setHours(10)
                currDate.setMinutes(0)
            }

            let timeSlots = []

            while( currDate<endTime  ){
                let formettedTime = currDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
                timeSlots.push({
                    datetime:new Date(currDate),
                    time:formettedTime
                })

                currDate.setMinutes( currDate.getMinutes()+30)
            }

            setDoctorSlot( prev=> ([...prev,timeSlots]))            
        }

    }

    useEffect( ()=>{
        getAvaibleSlots()
    },[doctorInfo])

    function indexSetter({index}){
        setSlotIndex(index)        
    }

    return (
        <div className='mt-12 w-full max-w-xl '>
            <p className='text-gray-600 font-semibold'>Booking slots</p>

            {/* daySlot*/ }
            <div className='flex flex-row gap-3 w-full overflow-x-scroll mt-8'>
                
                { doctorSlot.length && doctorSlot.map( (item,index)=>{  
                    return item[0] && <div key={index} onClick={()=>setSlotIndex(index)} className={`flex flex-col border px-3 py-5 rounded-full items-center cursor-pointer ${slotIndex===index && 'bg-primary text-white'}`} >
                            <p>{ dayOfWeek[item[0].datetime.getDay()] }</p>
                            <p>{ item[0].datetime.getDate()}</p>
                        </div>}
                )}
            </div>

            {/** timeSlot */}
            <div className='flex flex-row gap-3 overflow-x-scroll mt-4 items-center w-auto'>
                { doctorSlot.length && doctorSlot[slotIndex].map((slot,index)=>{ 
                    return <div key={index} onClick={()=>setSlotTime(slot.time)} className={`border border-gray-300 rounded-full min-w-28 px-5 cursor-pointer ${slotTime === slot.time ? 'bg-primary text-white ':'text-gray-400'} `}>{slot.time}</div>                                        
                })
                }
            </div>

            <button onClick={()=> console.log(slotTime,slotIndex)} className='bg-primary text-white rounded-full px-8 py-2 mt-8'>Book an appointment</button>


        </div>
    )
}

export default BookingDateTime

import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const UserProfile = () => {

  const [isEdit,setIsEdit] = useState(false)

  const [userData,setUserData] = useState({
    name:"Ankit Prajapati",
    image: assets.profile_pic,
    email:"ankitp.ic.22@nitj.ac.in",
    phone: "6268793323",
    address:{
      line1:"439 Mbh-A",
      line2:"punjab"
    },
    gender:"male",
    dob:"2000-01-20",
  })

  return (
    <div className='flex flex-col items-start'>
      <img className='w-40' src={userData.image} alt="" />
      { isEdit?
        <input onChange={(e)=>setUserData( prev=>({...prev,name:e.target.value}))} type="text" value={userData.name} />:
        <p>{userData.name}</p>
      }
      <hr className='w-full'/>
      <div className='flex flex-col'>
        <p>CONTACT INFO</p>
        <div className='flex'>
          <p>Email id : &nbsp;</p>
          <p>{userData.email}</p>
        </div>
        <div className='flex'>
          <p>Phone : &nbsp;</p>
          { isEdit?
            <input onChange={(e)=>setUserData( prev=>({...prev,phone:e.target.value}))} type="text" value={userData.phone} />:
            <p>{userData.phone}</p>
          }
        </div>
        <div className='flex'>
          <p>Address : &nbsp;</p>
          { isEdit?
            <p>
              <input onChange={(e)=>setUserData( prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} type="text" value={userData.address.line1} />
              <br />
              <input onChange={(e)=>setUserData( prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} type="text" value={userData.address.line2} />:
            </p>:
            <p>
              <p>{userData.address.line1}</p>
              <p>{userData.address.line2}</p>
            </p>
          }
        </div>

        <p>BASIC INFO</p>
        <div className='flex'>
          <p>Gender : &nbsp;</p>
          { isEdit?
            <input onChange={(e)=>setUserData( prev=>({...prev,gender:e.target.value}))} type="text" value={userData.gender} />:
            <p>{userData.gender}</p>
          }
        </div>
        <div className='flex'>
          <p>BirthDay : &nbsp;</p>
          { isEdit?
            <input onChange={(e)=>setUserData( prev=>({...prev,dob:e.target.value}))} type="text" value={userData.dob} />:
            <p>{userData.dob}</p>
          }
        </div>
        

      </div>

      <div className=' flex gap-4'>
        {!isEdit && <button className='border px-4 rounded-full ' onClick={()=>setIsEdit(true)}>Edit</button>}
        {isEdit && <button className='border px-4 rounded-full ' onClick={()=>setIsEdit(false)}>Save</button> }
      </div>
    </div>
  )
}

export default UserProfile

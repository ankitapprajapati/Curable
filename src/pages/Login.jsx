import React, { useState } from 'react'

const Login = () => {

  console.log("re-render")
  
  const [state,setState] = useState("Login");
  
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassWord] = useState("")

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }

  return (
      <form className='mt-16 mb-16' action="">
        <div className='flex flex-col items-start gap-3 m-auto p-8 border rounded-xl text-zinc-600 text-sm shadow-lg max-w-[340px] sm:max-w-72' >
          <p className='text-2xl font-semibold'>{state==="Login"? "Login": "Create Acount" }</p>
          <p>Please {state==="Login"? "login": "sign up" } to book an appointment</p>
          <div className='w-full'>
            { state!=="Login" && <div>
              <p className='mt-3'>Full Name</p>
              <input className='border w-full rounded px-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} required/>
            </div>}
            <div>
              <p className='mt-3'>Email</p>
              <input className='border w-full rounded px-2 mt-1' type="text" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            </div>
            <div>
              <p className='mt-3'>Password</p>
              <input className='border w-full rounded px-2 mt-1' type="text" onChange={(e)=>setPassWord(e.target.value)} value={password} required/>
            </div>
          </div>
          <button onClick={console.log(`name-${name} email-${email} password-${password} `)} className='bg-primary w-[60%]  rounded-full text-white py-1'>{state==="Login"? "login": "sign up" }</button>
          {
            state==="Login"? <p>Create a new account ? <span onClick={()=>setState("Sign-Up")} className='text-blue-500 cursor-pointer'>click here</span> </p> : <p>Already have an account ? <span onClick={()=>setState("Login")} className='text-blue-500 cursor-pointer'>Login here</span> </p>
          }
        </div>
      </form>
  )
}

export default Login

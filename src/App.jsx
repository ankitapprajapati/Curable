import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import UserAppointment from './pages/UserAppointment'
import UserProfile from './pages/UserProfile'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'

function App() {

  return (
    <>
      <div className=' mx-12 sm:mx-[10%] ' >
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path = '/doctors/:speciality' element={<Doctors/>}/>
          <Route path = '/appointment/:id' element={<Appointment/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user/profile' element={<UserProfile/>}/>
          <Route path='/user/appointment' element={<UserAppointment/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App

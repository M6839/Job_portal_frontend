import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile';
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [profile,setProfile]=useState(false);
  const [openmenu,setOpenmenu]=useState(false);
  return (
    <div className='bg-black'> 
    <div className='flex justify-between items-center bg-black px-4 md:px-8 py-4 border-b-2 border-[#8C52FF]'>
    <Link to={'/'}><h1 className='text-[23px] md:text-[32px] font-extrabold text-[#8C52FF] '>Job Portal</h1></Link> 
      <div className='hidden md:flex justify-between gap-6 items-center'>
        <Link to='/'><p className='text-white hover:text-[#8C52FF] text-[20px] '>Home</p></Link>
        <Link to='/jobs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Jobs</p></Link>
         <Link to='/aboutUs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>About US</p></Link>
          <Link to='/contactUs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Contact US</p></Link> 
      </div>
      <div className='hidden md:flex justify-between gap-6 items-center'>
      <Link to='/login'><p className='text-white text-[20px]  px-4 py-1' onMouseOver={()=>setProfile(true)} onMouseLeave={()=>setProfile(false)}>Login</p></Link>
      <Link to='/register'><p className='bg-[#8C52FF] text-white text-[20px] rounded-[10px] px-4 py-1'>Register</p></Link>
      </div>
      {/* <div className='relative flex gap-4'>
             {
    profile && <div className=' bg-[#111111] space-y-2 absolute -left-[100px]  text-white  py-2 text-[18px] rounded-2xl' onMouseOver={()=>setProfile(true)} onMouseLeave={()=>setProfile(false)}>
     <p className='hover:bg-[#8C52FF] px-6'>profile</p>
     <p className='hover:bg-[#8C52FF]  px-6'>My Applications</p>
     <p className='hover:bg-[#8C52FF]  px-6'>saved jobs</p>
     <p className='hover:bg-[#8C52FF]  px-6'>Sign out</p>
      </div>
   }
        </div> */}
    {openmenu ?  <IoClose className='block md:hidden text-white text-[28px] font-bold' onClick={()=>setOpenmenu(!openmenu)}/>:<IoMenu className='block md:hidden text-white text-[28px] font-bold' onClick={()=>setOpenmenu(!openmenu)}/>}
    </div>
    {openmenu && <div className='absolute bg-black w-full  py-4 px-4 space-y-6'>
        <Link to='/'><p className='text-white hover:text-[#8C52FF] text-[24px] '>Home</p></Link>
        <Link to='/jobs'><p className='text-white hover:text-[#8C52FF] text-[24px]'>Jobs</p></Link>
         <Link to='/aboutUs'><p className='text-white hover:text-[#8C52FF] text-[24px]'>About US</p></Link>
          <Link to='/contactUs'><p className='text-white hover:text-[#8C52FF] text-[24px]'>Contact US</p></Link> 
        <Link to='/login'><p className='text-[#8C52FF]  text-[24px] '>Login</p></Link>
         <Link to='/register'><p className='bg-[#8C52FF] text-white text-[24px] rounded-[10px] px-4 py-1 mt-2'>Register</p></Link>
      </div>
}
   
    </div>
  )
}

export default Navbar
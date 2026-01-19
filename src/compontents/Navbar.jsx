import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import Profilepopup from './admin/Profilepopup';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { JobContextData } from '../context/JobContext';
const Navbar = () => {
  const location = useLocation();
  const [profile, setProfile] = useState(false);
  const [openmenu, setOpenmenu] = useState(false);
  const { user } = useContext(JobContextData);

  const recruiterRoutes = ['/createCompany', '/companyUpdate', '/createJob','/companies','/admin/jobs'];
  const isRecruiterRoute = recruiterRoutes.includes(location.pathname);
  useEffect(() => {
    setProfile(false);
    setOpenmenu(false);
  }, [location.pathname]);
  return (
    <div className='bg-black'>
      <div className='flex justify-between items-center bg-black px-4 md:px-8 py-2 border-b-2 border-[#8C52FF]'>
        <Link to={'/'}><h1 className='flex items-center gap-2 text-[23px] md:text-[32px] font-extrabold text-[#8C52FF] '><IoBriefcaseOutline className='' />Job Portal</h1></Link>
        {
          isRecruiterRoute ?(<div className='hidden md:flex justify-between gap-6 items-center'>
          <Link to='/companies'><p className='text-white hover:text-[#8C52FF] text-[20px] '>Companies</p></Link>
          <Link to='/admin/jobs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Jobs</p></Link>
        </div>):
          (<div className='hidden md:flex justify-between gap-6 items-center'>
          <Link to='/'><p className='text-white hover:text-[#8C52FF] text-[20px] '>Home</p></Link>
          <Link to='/jobs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Jobs</p></Link>
          <Link to='/aboutUs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>About US</p></Link>
          <Link to='/contactUs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Contact US</p></Link>
        </div>)
        }
        {user?
          (<div className="relative text-white text-[20px] cursor-pointer hidden md:block" onClick={(e) => e.stopPropagation()}>
            <img src={user?.profile?.profilePhoto} alt='profile' onClick={() => setProfile(!profile)} className='w-12 h-12 rounded-full'/>
            {profile && <Profilepopup close={() => setProfile(false)} />}
          </div>) : (<div className='hidden md:flex justify-between gap-6 items-center'>
            <Link to='/login'><p className='text-white text-[20px]  px-4 py-1'>Login</p></Link>
            <Link to='/register'><p className='bg-[#8C52FF] text-white text-[20px] rounded-[10px] px-4 py-1'>Register</p></Link>
          </div>)}

        {openmenu ? <IoClose className='block md:hidden text-white text-[28px] font-bold' onClick={() => setOpenmenu(!openmenu)} /> : <IoMenu className='block md:hidden text-white text-[28px] font-bold' onClick={() => setOpenmenu(!openmenu)} />}
      </div>
      {openmenu && <div className='absolute flex flex-col bg-black w-full  py-4 px-4 space-y-6'>
         {
          isRecruiterRoute ?(<div className='flex flex-col  gap-6 '>
          <Link to='/companies'><p className='text-white hover:text-[#8C52FF] text-[20px] '>Companies</p></Link>
          <Link to='/admin/jobs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Jobs</p></Link>
        </div>):
          (<div className='flex flex-col  gap-6 '>
          <Link to='/'><p className='text-white hover:text-[#8C52FF] text-[20px] '>Home</p></Link>
          <Link to='/jobs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Jobs</p></Link>
          <Link to='/aboutUs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>About US</p></Link>
          <Link to='/contactUs'><p className='text-white hover:text-[#8C52FF] text-[20px]'>Contact US</p></Link>
        </div>)
        }
        {user?
          (<div className=" text-white text-[20px] cursor-pointer " onClick={(e) => e.stopPropagation()}>
             <Profilepopup  />
          </div>) : (<div className='flex flex-col  gap-6 '>
            <Link to='/login'><p className='text-white text-[20px]  px-4 py-1'>Login</p></Link>
            <Link to='/register'><p className='bg-[#8C52FF] text-white text-[20px] rounded-[10px] px-4 py-1'>Register</p></Link>
          </div>)}
      </div>
      }

    </div>
  )
}

export default Navbar

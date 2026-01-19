import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'
import { JobContextData } from '../../context/JobContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { API_URI } from '../../data'
const Profilepopup = ({ close }) => {
  const {user,setUser}=useContext(JobContextData);
  const navigate=useNavigate();
const logout = async () => {
    try {
      await axios.get(
        `${API_URI}/api/v1/user/logout`,
        { withCredentials: true }
      );
      setUser(null);
      close();
      toast.success("Logged out successfully");
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
  <div className=' bg-[#111111] space-y-2 md:absolute md:z-50 md:top-12 md:-left-[220px]   flex flex-col  text-white px-2  py-2 text-[18px] rounded-2xl'>
    <div className='flex gap-2 items-center'>
      <img  src={user?.profile?.profilePhoto} alt='profile' className='w-12 h-12 rounded-full'/>
      <div>
        <h1>{user?.fullname}</h1>
      <p className='text-sm text-gray-100'>{user?.email}</p>
      </div>
      </div>
      <Link to='/profile' onClick={close}>
      <p className=''>Edit profile</p>
      </Link>
     <p className='text-red-500 cursor-pointer' onClick={logout}>LogOut</p>
 </div>
  )
}

export default Profilepopup
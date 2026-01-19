import React from 'react'
import Input from '../ui/Input';
import { X } from "lucide-react"
import Button from '../ui/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { JobContextData } from '../../context/JobContext';  
import { useContext } from 'react';
import { API_URI } from '../../data';
const UpdateProfile = ({open, setOpen}) => {
  const navigate=useNavigate();
  const {user}=useContext(JobContextData);
  const [loading, setLoading] = useState(false);
     const [formData, setFormData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
     bio: user?.profile?.bio || "",
      skills: user?.profile?.skills || [],
      resume: null
     });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  if (e.target.type === "file") {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  } else {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};
  if (!formData.resume) newErrors.resume = "resume is required";
  if (!formData.fullname) newErrors.fullname = "Full name is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
  if (!formData.skills) newErrors.skills = "Skills are required";
  if (!formData.bio) newErrors.bio = "Bio is required";

  setErrors(newErrors);
  if (Object.keys(newErrors).length === 0) {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("fullname", formData.fullname);
      data.append("email", formData.email);
      data.append("bio", formData.bio);
      data.append("skills", formData.skills);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("resume", formData.resume);
      
      await axios.post(
        `${API_URI}/api/v1/user/profile/update`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("update successfully");
      setOpen(false);
      navigate("/profile");

    } catch (err) {
      toast.error(err.response?.data?.message || "update failed");
    } finally {
      setLoading(false);
    }
  }
};

  return (
    <div className='fixed inset-0 bg-black/90   z-50 w-full h-full flex justify-center items-center'>
        <div className='bg-[#111111] rounded-xl px-8 py-4 w-[400px] space-y-4'>
            <div className='flex justify-between'><h1 className='text-white text-xl font-bold'>Update Profile</h1><X className='text-white' onClick={() => setOpen(false)}/></div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <Input label="Full Name" name="fullname"  value={formData.fullname} onChange={handleChange} placeholder="Enter name" error={errors.fullname} />
            <Input label="Email" name="email"  value={formData.email} onChange={handleChange} placeholder="Enter email" error={errors.email} />
           <Input label="Phone Number" name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} placeholder="Enter phone number" error={errors.phoneNumber} />
          <Input label="Bio" name="bio"  value={formData.bio} onChange={handleChange} placeholder="Enter bio" error={errors.bio} />
          <Input label="Skills" name="skills"  value={formData.skills} onChange={handleChange} placeholder="Enter skills separated by ," error={errors.skills} />
          <Input type='file' label="upload Resume" name="resume" onChange={handleChange}  error={errors.resume} />  
             <Button className='font-bold text-[20px]' disabled={loading}>{loading ? "Loading..." : "Update Profile"}</Button>
            </form>
        </div>

    </div>
  )
}

export default UpdateProfile
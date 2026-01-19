import React from 'react'
import Input from './ui/Input'
import Button from './ui/Button'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URI } from '../data';
const JobCreate = () => {
  const navigate=useNavigate();
   const [companies,setCompanies]=React.useState([]);
   const [formData,setFormData]=React.useState({
        title:"",
        description:"",
        requirements:"",
        salary:"",
        location:"",
        jobType:"",
        experience:"",
        position:"",
        companyId:""
   });
   const [errors,setErrors]=React.useState({});
   const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });
   }
      useEffect(()=>{
         
      },[]);
   const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.title) newErrors.title = "Title is required";
  if (!formData.description) newErrors.description = "Description is required";
  if (!formData.salary) newErrors.salary = "Salary is required";
  if (!formData.location) newErrors.location = "Location is required";
  if (!formData.jobType) newErrors.jobType = "Job Type is required";
  if (!formData.experience) newErrors.experience = "Experience is required";
  if (!formData.position) newErrors.position = "Positions required";
  if (!formData.companyId) newErrors.companyId = "Company is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  try {
    const res = await axios.post(
      `${API_URI}/api/v1/job/post`,
      formData,
      { withCredentials: true }
    );

    toast.success("Job created successfully");
    navigate(-1);
  } catch (err) {
    toast.error(err.response?.data?.message || "Error creating job");
  }
};

  return (
    <div className='min-h-screen bg-black flex  justify-center h-[80vh]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-[#111111] w-[600px] h-fit p-4 text-white rounded-md mt-16'>
            <div className='grid grid-cols-2 gap-4'> 
            <Input  label="Title" name="title" error={errors.title} value={formData.title} onChange={handleChange} className=''></Input>
            <Input  label="Description" name="description" error={errors.description} value={formData.description} onChange={handleChange} className=''></Input>
            </div>
            <div className='grid grid-cols-2 gap-4'> 
            <Input  label="Requirements" name="requirements" error={errors.requirements} value={formData.requirements} onChange={handleChange} className='w-full'></Input>
            <Input type="number" label="salary" name="salary" error={errors.salary} value={formData.salary} onChange={handleChange} className='w-full'></Input>
            </div>
             <div className='grid grid-cols-2 gap-4'> 
            <Input  label="Location" name="location" error={errors.location} value={formData.location} onChange={handleChange} className='w-full'></Input>
            <Input  label="Job Type" name="jobType" error={errors.jobType} value={formData.jobType} onChange={handleChange} className='w-full'></Input>
            </div>
             <div className='grid grid-cols-2 gap-4'> 
            <Input type="number" name="experience" label="Experience Level" error={errors.experience} value={formData.experience} onChange={handleChange} className='w-full'></Input>
            <Input type="number" name="position" label="No.of Positions" error={errors.position} value={formData.position} onChange={handleChange} className='w-full'></Input>
            </div>
            <select className='bg-black w-1/2 text-white p-2 rounded-md border border-gray-600 outline-none focus:border-[#8C52FF]'   value={formData.companyId}
  onChange={handleChange} name="companyId">
                <option value="" >Select Company</option>
                {
                    companies.map((company)=>(
                        <option key={company._id} value={company._id}>{company.name}</option>
                    ))
                }
            </select>
            {errors.companyId && <p className='text-red-500 text-sm'>{errors.companyId}</p>}
           <Button>Post New Job</Button>
        </form>
        </div>
     
  )
}

export default JobCreate
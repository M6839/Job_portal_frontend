import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../compontents/ui/Button';
import Input from '../compontents/ui/Input';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URI } from '../data'
const Register = () => {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
     const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role:"",
     profilePhoto: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  if (e.target.type === "file") {
    setFormData({
      ...formData,
      profilePhoto: e.target.files[0],
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
  if (!formData.profilePhoto) newErrors.profilePhoto = "Profile photo is required";
  if (!formData.fullname) newErrors.fullname = "Full name is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
  if (!formData.password) newErrors.password = "Password is required";
  if (!formData.role) newErrors.role = "Role is required";

  setErrors(newErrors);
  if (Object.keys(newErrors).length === 0) {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("fullname", formData.fullname);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("password", formData.password);
      data.append("role", formData.role);
      data.append("file", formData.profilePhoto); 

      await axios.post(
        `${API_URI}/api/v1/user/register`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Register successful");
      navigate("/login");

    } catch (err) {
      toast.error(err.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  }
};

  
  return (
   <div className='flex flex-col justify-center items-center px-4 md:px-0 bg-black min-h-screen'>
        <h1 className='text-[32px] text-center text-[#8C52FF] font-bold mb-4'>Sign up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center text-white md:w-[600px] bg-[#111111] shadow-xl p-4 md:p-12 rounded-xl'>    
        <Input type='file' label="profilePhoto" name="profilePhoto" onChange={handleChange}  error={errors.profilePhoto} />
        <Input label="Full Name" name="fullname"  value={formData.fullname} onChange={handleChange} placeholder="Enter name" error={errors.fullname} />
        <Input label="Email" name="email"  value={formData.email} onChange={handleChange} placeholder="Enter email" error={errors.email} />
        <Input label="Phone Number" name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} placeholder="Enter phone number" error={errors.phoneNumber} />
        <Input label="Password" name="password" error={errors.password}  value={formData.password} onChange={handleChange} type="password" placeholder="Enter password"/>
        <div className='flex items-center gap-6'>
         <label className='flex items-center gap-4'> <Input type="radio"  name="role" error={errors.role}  value="student" checked={formData.role === "student"} onChange={handleChange}/>student</label>
          <label className='flex items-center gap-4'> <Input type="radio"  name="role" error={errors.role}   value="recruiter" checked={formData.role === "recruiter"} onChange={handleChange}/>recruiter</label>
        </div>
           <p className='text-[18px] md:text-[23px]'>Do you have already an account? sign in<Link to='/login'><span className='text-[#8C52FF] underline'> here</span></Link></p>
           <Button className='font-bold text-[20px]' disabled={loading}>{loading ? "Loading..." : "Sign Up"}</Button>
        </form>
    </div>
  )
}

export default Register
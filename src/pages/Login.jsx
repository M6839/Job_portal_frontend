import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../compontents/ui/Button'
import Input from '../compontents/ui/Input'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { JobContextData } from '../context/JobContext'
import { API_URI } from '../data' 
const Login = () => {
  const navigate=useNavigate();
     const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const {setUser}=useContext(JobContextData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  let newErrors = {};
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.password) newErrors.password = "Password is required";
  if (!formData.role) newErrors.role = "Role is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URI}/api/v1/user/login`,
        formData,
        { withCredentials: true }
      );
      setUser(res.data.user);
      setLoading(false);
      toast.success("Login successful");
      console.log("Login successful:", res.data);
      if (res.data.user.role === "recruiter") {
         navigate("/companies");
      } else {
        navigate("/jobs");
     }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      console.log(err.response?.data?.message);
    }
  }
};




  return (
    <div className='flex flex-col justify-center items-center px-4 md:px-0  bg-black min-h-screen'>
        <h1 className='text-[32px] text-center text-[#8C52FF] font-bold mb-4'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center  text-white md:w-[600px] bg-[#111111] shadow-xl p-4 md:p-12 rounded-xl'>
           <Input label="Email" name="email"  value={formData.email} onChange={handleChange} placeholder="Enter email" error={errors.email} />
        <Input label="Password" name="password" error={errors.password}  value={formData.password} onChange={handleChange} type="password" placeholder="Enter password"/>
        <div className='flex items-center gap-6'>
         <label className='flex items-center gap-4'> <Input type="radio"  name="role" error={errors.role}  value="student" checked={formData.role === "student"} onChange={handleChange}/>student</label>
          <label className='flex items-center gap-4'> <Input type="radio"  name="role" error={errors.role}   value="recruiter" checked={formData.role === "recruiter"} onChange={handleChange}/>recruiter</label>
        </div>
          <p className='text-[18px] md:text-[23px]'>Do you have no account? Register<Link to='/register'><span className='text-[#8C52FF] underline'> here</span></Link></p>
          <Button className='font-bold text-[20px]' disabled={loading}> {loading ? "Logging in..." : "Login"}</Button>
        </form>
    </div>
  )
}

export default Login
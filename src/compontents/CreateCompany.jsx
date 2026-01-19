import Input from './ui/Input'
import React from 'react'
import Button from './ui/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URI } from '../data'
const CreateCompany = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!companyName) {
      setError("Company name is required");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URI}/api/v1/company/register`,
        { companyName },
        { withCredentials: true }
      );

      toast.success("Company created successfully");
      const companyId = res.data.company._id;
      navigate(`/companyUpdate/${companyId}`);

    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create company");
    }
  };

  return (
    <div className='min-h-screen bg-black px-4 md:px-[100px] py-16'>
      <h1 className='text-[30px] text-[#8C52FF]'>Your Company Name</h1>
      <p className='text-white text-lg'>
        What would you like to give your company name? After you can change it.
      </p>

      <form onSubmit={handleSubmit} className='mt-6'>
        <Input
          placeholder='Microsoft, Google etc'
          label="Company Name"
          error={error}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className='w-full md:w-[700px]'
        />

        <div className='flex gap-6 items-center mt-6'>
          <Button variant='outline' type="button" onClick={() => navigate('/companies')}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;

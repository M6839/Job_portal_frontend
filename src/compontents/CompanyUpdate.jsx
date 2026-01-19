

import React from 'react'
import Input from './ui/Input'
import Button from './ui/Button'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { API_URI } from '../data'
const CompanyUpdate = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [companyData, setCompanyData] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    logo: null,
  })

  const [errors, setErrors] = useState({})

 useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const res = await axios.get(
          `${API_URI}/api/v1/company/get/${id}`,
          { withCredentials: true }
        )
        setCompanyData({
          name: res.data.company.name || "",
          description: res.data.company.description || "",
          website: res.data.company.website || "",
          location: res.data.company.location || "",
          logo: res.data.company.logo || null,
        })
        console.log("company data:",res.data.company);
      } catch (err) {
        toast.error("Failed to load company details")
      }
    }

    fetchCompanyDetails()
  }, [id])

  const handleChange = (e) => {
    const { name, value, files, type } = e.target

    if (type === "file") {
      setCompanyData({ ...companyData, [name]: files[0] })
    } else {
      setCompanyData({ ...companyData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!companyData.name) newErrors.name = "Company name is required"
    if (!companyData.description) newErrors.description = "Description is required"
    if (!companyData.website) newErrors.website = "Website is required"
    if (!companyData.location) newErrors.location = "Location is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    try {
      const formData = new FormData()
      formData.append("name", companyData.name)
      formData.append("description", companyData.description)
      formData.append("website", companyData.website)
      formData.append("location", companyData.location)

      if (companyData.logo instanceof File) {
        formData.append("logo", companyData.logo)
      }

      await axios.put(
        `${API_URI}/api/v1/company/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      )

      toast.success("Company setup successfully")
      navigate("/companies")

    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update company")
    }
  }

  return (
    <div className='min-h-screen bg-black flex justify-center items-center'>
      <div className='bg-[#111111] w-[600px] p-6 text-white rounded-md space-y-6'>
        <h1 className='text-center text-[28px] font-semibold'>Company Setup</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='grid grid-cols-2 gap-4'>
            <Input
              label="Company Name"
              name="name"
              value={companyData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              label="Description"
              name="description"
              value={companyData.description}
              onChange={handleChange}
              error={errors.description}
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <Input
              label="Website"
              name="website"
              value={companyData.website}
              onChange={handleChange}
              error={errors.website}
            />
            <Input
              label="Location"
              name="location"
              value={companyData.location}
              onChange={handleChange}
              error={errors.location}
            />
          </div>

          <Input
            type="file"
            name="logo"
            label="Logo"
            onChange={handleChange}
          />

          <Button>Update</Button>
        </form>
      </div>
    </div>
  )
}

export default CompanyUpdate

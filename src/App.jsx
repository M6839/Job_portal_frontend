import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import JobDescription from './pages/JobDescription'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import CreateCompany from './compontents/CreateCompany'
import CompanyUpdate from './compontents/CompanyUpdate'
import Profile from './compontents/admin/Profile'
import JobCreate from './compontents/JobCreate'
import Navbar from './compontents/Navbar'
import Companies from './compontents/Companies'
import AdminJobs from './compontents/Jobs'
  import { ToastContainer } from 'react-toastify';

const Layout = () => {

  return (
    <>
       <Navbar />
      <Routes>
        {/* General routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobDes/:id' element={<JobDescription />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/profile' element={<Profile />} />

        {/* Recruiter routes */}
        <Route path='/createCompany' element={<CreateCompany />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companyUpdate/:id' element={<CompanyUpdate />} />
        <Route path='/admin/jobs' element={<AdminJobs />}/>
        <Route path='/createJob' element={<JobCreate />} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <>
      <ToastContainer position="top-right"/>
      <Router>
        <Layout />
      </Router>
    </>
  )
}

export default App
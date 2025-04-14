import React, { useState } from 'react'
import { doctorSignUp } from '../services/doctor.service.js';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';
const DoctorSignUp = () => {
    //STORE AND UPDATE ALL FIELDS
    const navigate=useNavigate()
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        specialization: '',
        experience: '',
        contactNumber: '',
    });
    //SHOW ERROR OR SUCCESS MESSAGES IN UI
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleChange = (req) => {
        setFormData({ ...formdata, [req.target.name]: req.target.value })
        setError('');
        setSuccess('')
    }
    const handleSubmit = async (req) => {
        req.preventDefault()//PREVENT PAGE RELOAD
        try {
            //POST DATA INTO BACKEND AND FETCH AND STORE IN RES
            const res = await doctorSignUp(formdata)
            //STORE TOKEN
            localStorage.setItem('doctorToken', res.token)
            setSuccess('Signup successfull !')
            navigate("/login")
        }
        catch (err) {
            console.log(err)
            ///setError(err.response?.data?.message || 'signup failed');
        }
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">
            <h2 className="text-2xl font-bold mb-4 text-center">Doctor Signup</h2>
            {error && <div className="text-red-500 mb-3">{error}</div>}
            {success && <div className="text-green-600 mb-3">{success}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" name="name" placeholder="name" value={formdata.name} onChange={handleChange} ></Input>
                <Input type="email" name="email" placeholder="email" value={formdata.email} onChange={handleChange}></Input>
                <Input type="password" name="password" placeholder="password" value={formdata.password} onChange={handleChange}></Input>
                <select name="gender" required onChange={handleChange} className="w-full border px-3 py-2 rounded">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <Input type="text" name="specialization" placeholder="specialization" value={formdata.specialization} onChange={handleChange}></Input>
                <Input type="number" name="experience" placeholder="years of experience" value={formdata.experience} onChange={handleChange}></Input>
                <Input type="text" name="contactNumber" placeholder="Contact Number " value={formdata.contactNumber} onChange={handleChange}></Input>
                <Button type="submit" buttonName="SignUp"></Button>
            </form>

        </div>
    )
}

export default DoctorSignUp

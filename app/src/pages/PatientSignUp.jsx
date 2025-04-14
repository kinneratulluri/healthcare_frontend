import React, { useState } from 'react';
import { patientSignUp } from '../services/patient.service';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

const PatientSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    contactNumber: '',
    medicalIssue: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const fixedData = {
            ...formData,
            age: Number(formData.age)
            
          };
      const res = await patientSignUp(fixedData);
      localStorage.setItem('patientToken', res.token);
      setSuccess('Signup successful!');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-center">Patient Signup</h2>
      {error && <div className="text-red-500 mb-3">{error}</div>}
      {success && <div className="text-green-600 mb-3">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <Input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border px-3 py-2 rounded" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <Input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" />
        <Input name="contactNumber" type="text" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
        <Input name="medicalIssue" value={formData.medicalIssue} onChange={handleChange} placeholder="Medical Issue" />
        <Button type="submit" buttonName="Sign Up" />
      </form>
    </div>
  );
};

export default PatientSignUp;

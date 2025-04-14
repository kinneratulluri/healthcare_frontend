import React, { useState } from 'react';
import { patientLogin } from '../services/patient.service';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

const PatientLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const res = await patientLogin(formData);
      localStorage.setItem('patientToken', res.token);
      setSuccess('Login successful!');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-center">Patient Login</h2>
      {error && <div className="text-red-500 mb-3">{error}</div>}
      {success && <div className="text-green-600 mb-3">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <Input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <Button type="submit" buttonName="Login" />
      </form>
    </div>
  );
};

export default PatientLogin;

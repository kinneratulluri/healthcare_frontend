import React, { useState } from 'react';
import { doctorLogin } from '../services/doctor.service.js';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

const DoctorLogin = () => {
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await doctorLogin(formdata);
            localStorage.setItem('doctorToken', res.token);
            setSuccess('Login successful!');
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">
            <h2 className="text-2xl font-bold mb-4 text-center">Doctor Login</h2>
            {error && <div className="text-red-500 mb-3">{error}</div>}
            {success && <div className="text-green-600 mb-3">{success}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formdata.email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formdata.password}
                    onChange={handleChange}
                />
                <Button type="submit" buttonName="Login" />
            </form>
        </div>
    );
};

export default DoctorLogin;

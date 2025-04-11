import axios from "axios"
const apiUrl = import.meta.env.VITE_BASE_URL;
export const doctorSignUp = async(formData)=>{
    const response =await axios.post(`${apiUrl}/api/v1/doctor/signup`,formData)
    return response.data
}

export const fetchDoctorProfile = async(id)=>{
    const res = await axios.get(`${apiUrl}/api/v1/doctor/doctorProfile/${id}`)
    return res.data
}

export const allDoctors = async()=>{
    const response = await axios.get(`${apiUrl}/api/v1/patient/availableDoctors`)

    return response.data
}
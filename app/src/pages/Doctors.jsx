import {React,useEffect} from 'react'
import axios from "axios"


function Doctors() {
    async function getDoctors() {
        try {
            const apiUrl = import.meta.env.VITE_BASE_URL;
            const response = await axios.get(`${apiUrl}/api/v1/patient/availableDoctors`)
            console.log(response.data)
        } catch (error) {
            console.error("error",error)
        }
    }
    useEffect(()=>{
        getDoctors()
    },[])
    return (
        <div>All Doctors</div>
    )
}


export default Doctors

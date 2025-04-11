import { React, useEffect, useState } from 'react'
import { ViewDetailsButton } from '../components/ui/Button.jsx';
import { allDoctors } from '../services/doctor.service.js';

function Doctors() {
    //SET AND UPDATE DOCTORS DETAILS
    const [doctors, setDoctors] = useState([])
    //FETCH DETAILS FROM BACKEND AND ONLY RUNS ONCE AFTER COMPONENT MOUNTS
    useEffect(() => {
        async function getDoctors() {
            try {
                const response = await allDoctors()

                setDoctors(response.doctors)
                console.log(response.data)

            } catch (error) {
                console.error("error", error)
            }
        }

        getDoctors()
    }, [])//
    return (
        <div className=" min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-red-800">All Doctors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {doctors.map((doctor, index) => (
                    <div key={index}
                        className="bg-white shadow-md rounded-2xl p-6 transition-transform hover:scale-105 hover:shadow-2xs"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">Name : {doctor.name}</h2>
                        <p className="text-gray-600 mt-1"> Experience: {doctor.experience} year(s)</p>
                        <p className="text-gray-600">Specialization: {doctor.specialization || "General"}</p>
                        <ViewDetailsButton doctorId={doctor._id} />
                    </div>

                )

                )}
            </div>
        </div>

    )
}


export default Doctors

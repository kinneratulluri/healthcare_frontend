
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDoctorProfile } from '../services/doctor.service.js';


function DoctorProfile() {
    //DESTRUCTURING ID FROM URL
    const { id } = useParams();
    //INITIALIZING STATE FOR STORING DOCTOR DATA
    const [doctor, setDoctor] = useState({})
    useEffect(() => {
        //FETCHING DOCTOR DETAILS FROM SERVICE
        async function fetchDoctor() {
            try {
                const res = await fetchDoctorProfile(id)

                setDoctor(res.doctorDetails)
                console.log(res)
            }
            catch (error) {
                console.error("Failed to fetch doctor details:", error)
            }
        }
        fetchDoctor()
    }, [id])//THE EFFECT RUNS WHEN ID CHANGES
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-xl mt-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">{doctor.name}</h1>
    
            <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Email:</span> {doctor.email}</p>
                <p><span className="font-semibold">Gender:</span> {doctor.gender}</p>
                <p><span className="font-semibold">Specialization:</span> {doctor.specialization}</p>
                <p><span className="font-semibold">Experience:</span> {doctor.experience} years</p>
                <p><span className="font-semibold">Contact:</span> {doctor.contactNumber}</p>
            </div>
    
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Slots</h2>
    
            {doctor.availability && doctor.availability.length > 0 ? (
                doctor.availability.map((day, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">Date: {day.date}</h3>
                        <div className="flex flex-wrap gap-3">
                            {day.slots.map((slot) => (
                                <div
                                    key={slot._id}
                                    className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
                                        slot.isBooked
                                            ? 'bg-gray-300 text-gray-600'
                                            : 'bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer'
                                    }`}
                                >
                                    {slot.time} {slot.isBooked ? '(Booked)' : '(Available)'}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No slots available.</p>
            )}
        </div>
    )
    
}

export default DoctorProfile

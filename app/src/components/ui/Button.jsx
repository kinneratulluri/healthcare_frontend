import React from 'react'
import { useNavigate } from 'react-router-dom';
function Button({type,buttonName}) {
    return (
        <button type={type} className="mt-4 text-white py-2 px-4  bg-blue-500  rounded-md  hover:bg-pink-200  transition-colors cursor-pointer">{buttonName}</button>

    )
}
export function ViewDetailsButton({ doctorId }) {
    const navigate = useNavigate();

    return (
        <button
            className="mt-4 text-white py-2 px-4 bg-blue-500 rounded-md hover:bg-pink-200 transition-colors cursor-pointer"
            onClick={() => navigate(`/doctor/${doctorId}`)}
        >
            View Details
        </button>
    );
}

export default Button

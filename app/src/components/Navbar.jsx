import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userRole, setUserRole] = useState(null);
  const [doctorId, setDoctorId] = useState(null);  // Store doctor's ID
  const navigate = useNavigate();

  useEffect(() => {
    const doctorToken = localStorage.getItem("doctorToken");
    const patientToken = localStorage.getItem("patientToken");

    if (doctorToken) {
      setUserRole("doctor");
      // Assuming the doctor’s ID is in the token, or retrieve it from localStorage if possible.
      const decodedToken = JSON.parse(atob(doctorToken.split('.')[1])); // Decoding JWT token to extract doctorId
      setDoctorId(decodedToken.id); // Set the doctor ID
    } else if (patientToken) {
      setUserRole("patient");
    } else {
      setUserRole(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("doctorToken");
    localStorage.removeItem("patientToken");
    setUserRole(null);
    setDoctorId(null);
    navigate("/");
  };

  const handleLoginRedirect = () => {
    navigate("/patient/login");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 cursor-pointer" onClick={handleHome}>
          MyApp
        </div>

        {/* Desktop Links */}
        <div className="flex items-center space-x-6">
          {userRole === "doctor" && doctorId && (
            <button
              className="text-blue-600 hover:underline"
              onClick={() => navigate(`/doctor/${doctorId}`)}  // Use the actual doctor ID
            >
              Profile
            </button>
          )}
          {userRole === "patient" && (
            <button
              className="text-blue-600 hover:underline"
              onClick={() => navigate("/")}
            >
              Doctors
            </button>
          )}
          {userRole ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={handleLoginRedirect}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

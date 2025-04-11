import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import Doctors from "./pages/Doctors.jsx";
import DoctorSignUp from "./pages/DoctorSignUp.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Doctors/>}></Route>
      <Route path="/doctor/:id" element={<DoctorProfile/>}></Route>
      <Route path="/signup" element={<DoctorSignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

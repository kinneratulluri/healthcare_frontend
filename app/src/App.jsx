import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import Doctors from "./pages/Doctors.jsx";
import DoctorSignUp from "./pages/DoctorSignUp.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
import DoctorLogin from "./pages/DoctorLogin.jsx";
import PatientSignUp from './pages/PatientSignUp.jsx';
import PatientLogin from './pages/PatientLogin.jsx';
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Doctors />}></Route>
          <Route path="/doctor/:id" element={<DoctorProfile />}></Route>
          <Route path="/signup" element={<DoctorSignUp />}></Route>
          <Route path="/login" element={<DoctorLogin />} />
          <Route path="/patient/signup" element={<PatientSignUp />} />
          <Route path="/patient/login" element={<PatientLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

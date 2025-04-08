import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import Doctors from "./pages/doctors";

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Doctors/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './App.css';
import Background from "./components/Background";
import Contact from "./components/Contact";
import Corp from "./components/Corp";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Thanks from "./components/Thanks";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Homepage />} />
        <Route path ="/Testimonials" element={<Testimonials />} />
        <Route path ="/ThanksTo" element={<Thanks />} />
        <Route path ="/Corp" element={<Corp />} />
        <Route path ="/Contact" element={<Contact />} />
        <Route path ="/Background" element={<Background />} />

      </Routes>   
 </Router>
   
  )
}

export default App

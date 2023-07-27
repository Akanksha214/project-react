import React from 'react';
import RegistrationForm from './Components/RegistrationForm';

import Show from './Components/Show';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DataEdit from './Components/DataEdit';
import Navbar from './Components/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/show-data" element={<Show />} />
        <Route path="/register-data" element={<RegistrationForm />} />
        <Route path="/edit-data" element={< DataEdit/>} />
        
      </Routes>
    </Router>


  )
}

export default App;

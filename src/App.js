import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/Navbar/Navbar" exact component={Appointments} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
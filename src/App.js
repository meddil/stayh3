import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Layout from './components/Landing_Page/Landing_page';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              </Routes>
              <Route path="/" element={<Landing_Page/>}/>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;
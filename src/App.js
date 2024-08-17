
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './component/Login';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Welcomepage from './Welcomepage';
import React from 'react';
import Signup from './Signup';
import Login from './Login';


function App() {
  return (
      <BrowserRouter>
      <Routes >
        <Route index element={<Home /> } />
        <Route path='/Home' element={<Home /> } />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Welcomepage' element={<Welcomepage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;




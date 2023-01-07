import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';

const App = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/velocity' element={<Home />} />
            <Route path='/velocity/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
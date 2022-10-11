
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Offers } from './Pages/Offers/Offers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/offers/"element={<Offers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Offers } from './Pages/Offers/Offers';
import GlobalStyled from './GlobalStyled/GlobalStyled';
import Header from './Components/Header/Header';
import { ResultsContextProvider } from './Contexts/addressContext';

function App() {
  return (
    <ResultsContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/offers/"element={<Offers />} />
        </Routes>
        <GlobalStyled />
      </BrowserRouter>
    </ResultsContextProvider>
  );
}

export default App;

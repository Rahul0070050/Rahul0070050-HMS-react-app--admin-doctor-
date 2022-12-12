import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './App.scss';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

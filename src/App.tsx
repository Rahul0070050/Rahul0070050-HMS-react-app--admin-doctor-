import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Appointments from './components/home/appointments'
import Login from './pages/login'
// import TodoList from './components/todos'
import './App.scss';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}>
          <Route index element={<Appointments />} />
        </Route>
        {/* <Route path='/docters' element={}> */}
        {/* <Route index element={<Appointments />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

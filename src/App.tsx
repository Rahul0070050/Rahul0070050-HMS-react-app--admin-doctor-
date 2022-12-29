import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DoctorHome from './pages/doctor/home';
import AdminHome from './pages/admin/home';
import Appointments from './components/doctor/home/appointments'
import Login from './pages/login'
// import TodoList from './components/todos'
import './App.scss';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/doctor' element={<DoctorHome />}>
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

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DoctorHome from './pages/doctor/home';
import AdminHome from './pages/admin/home';
import Appointments from './components/doctor/home/appointments'
import Login from './pages/login'
import Charts from './components/admin/Charts';
import Doctors from './pages/admin/doctors';
import Receptionists from './pages/admin/receptionist';
import ReceptionistHome from './pages/receptionist/home';
import DepartmentList from './components/receptionist/home/departmentList'

import './App.scss';
import TopCard from './components/receptionist/home/cards';
import DoctorsList from './components/receptionist/home/doctorsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<AdminHome />}>
          <Route index element={<Charts />} />
          <Route path='/admin/doctors' element={<Doctors />} />
          <Route path='/admin/receptionists' element={<Receptionists />} />
        </Route>
        <Route path='/doctor' element={<DoctorHome />}>
          <Route index element={<Appointments />} />
        </Route>
        <Route path='/receptionist' element={<ReceptionistHome />}>
          <Route index element={
            <>
              <TopCard />
              <DepartmentList />
              {/* <DoctorsList /> */}
            </>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

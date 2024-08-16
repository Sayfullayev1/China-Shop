import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import HomePage from './pages/homePage/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>




    <BrowserRouter>



      <Routes>


        <Route element={<DashboardLayout/>}>


          <Route element={<HomePage/>} path='/'/>

        </Route>


      </Routes>
    


    </BrowserRouter>




  // </React.StrictMode> 
);

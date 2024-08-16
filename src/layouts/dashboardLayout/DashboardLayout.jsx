import React from 'react'
import './dashboardLayout.scss'


import HeaderComponent from '../../components/headerComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../../components/navbarComponent/NavbarComponent'
import FooterComponent from '../../components/footerComponent/FooterComponent'



export default function DashboardLayout() {
  return (
    <div className='container'>



        <HeaderComponent/>


        <NavbarComponent/>


            <Outlet/>


        <FooterComponent/>



    </div>
  )
}

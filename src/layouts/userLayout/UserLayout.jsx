import React from 'react'
import  './userLayout.scss'


import { Outlet } from 'react-router-dom'


export default function UserLayout() {
  return (
    <div className='container'>


        <Outlet/>


    </div>
  )
}

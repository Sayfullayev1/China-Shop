import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';


import HomePage from './pages/homePage/HomePage';
import MensShopingPage from './pages/GlobalShopingPage/mensShopingPage/MensShopingPage';
import WomensShopingPage from './pages/GlobalShopingPage/womensShopingPage/WomensShopingPage';
import SaleShopingPage from './pages/GlobalShopingPage/saleShopingPage/SaleShopingPage';




import UserLayout from './layouts/userLayout/UserLayout';


import ProductPage from './pages/productPage/ProductPage';
import SearchProductPage from './pages/searchProductPage/SearchProductPage';
import CartPage from './pages/cartPage/CartPage';
import WishesPage from './pages/wishesPage/WishesPage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>




    <BrowserRouter>



      <Routes>


        <Route element={<DashboardLayout/>}>


          <Route element={<HomePage/>} path='/'/>

          <Route element={<MensShopingPage/>} path='/mens'/>

          <Route element={<WomensShopingPage/>} path='/womens'/>

          <Route element={<SaleShopingPage/>} path='/sale'/>


        </Route>


        <Route element={<UserLayout/>}>


          <Route element={<ProductPage/>} path='/product/:id'/>


          <Route element={<SearchProductPage/>} path='/search'/>


          <Route element={<CartPage/>} path='/cart'/>


          <Route element={<WishesPage/>} path='/wishes'/>


        </Route>
          

      </Routes>
    


    </BrowserRouter>




  // </React.StrictMode> 
);

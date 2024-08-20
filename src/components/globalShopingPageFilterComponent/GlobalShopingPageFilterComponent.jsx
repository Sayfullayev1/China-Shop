import React from 'react'
import './globalShopingPageFilterComponent.scss'


import globalShopingPageFilterImg from '../../phootos/globalShopingPageFilterImg/sort-tool.svg'


export default function GlobalShopingPageFilterComponent() {
  return (
    <div className='global_shoping_page-filter'>


        <div className='global_shoping_page-filter__filter_item'>

            <div className='global_shoping_page-filter__filter_item__text'>
                <h1>Filter  & Sort</h1>
            </div>

            <div className='global_shoping_page-filter__filter_item__img'>
                <img src={globalShopingPageFilterImg} alt="" />
            </div>

        </div>


        <div className='global_shoping_page-filter__squares_wrapper'>

            <div className='global_shoping_page-filter__smallSquares_wrapper'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className='global_shoping_page-filter__bigSquare'></div>

        </div>


    </div>
  )
}

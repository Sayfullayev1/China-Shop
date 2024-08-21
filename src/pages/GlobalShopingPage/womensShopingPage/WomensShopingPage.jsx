import React from 'react'
import './womensShopingPage.scss'



import GlobalShopingPageFilterComponent from '../../../components/globalShopingPageFilterComponent/GlobalShopingPageFilterComponent'
import GlobalShopingPageCardComponent from '../../../components/globalShopingPageCardComponent/GlobalShopingPageCardComponent'


import { mensShopingCardData } from '../../../localStorage/globalShopingListData/globalShopingListData'



export default function womensShopingPage() {
  return (
    <main className='page-main_womensShoping'>


      <div className='page-main_womensShoping__filtr'>

        <GlobalShopingPageFilterComponent/>

      </div>


      <div className='page-main_womensShoping__card_wrapper'>

        {
          mensShopingCardData?.map((item,index) => {
            return(
              <GlobalShopingPageCardComponent cardData={item} key={index}/>
            )
          })
        }

      </div>


    </main>
  )
}

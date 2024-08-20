import React from 'react'
import './mensShopingPage.scss'



import GlobalShopingPageFilterComponent from '../../../components/globalShopingPageFilterComponent/GlobalShopingPageFilterComponent'
import GlobalShopingPageCardComponent from '../../../components/globalShopingPageCardComponent/GlobalShopingPageCardComponent'



import { mensShopingCardData } from '../../../localStorage/globalShopingListData/globalShopingListData'





export default function MensShopingPage() {
  return (
    <main className='page-main_mensShoping'>


      <div className='page-main_mensShoping__filtr'>

        <GlobalShopingPageFilterComponent/>

      </div>


      <div className='page-main_mensShoping__card_wrapper'>

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

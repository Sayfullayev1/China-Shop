import React from 'react'
import './homePage.scss'



import GlobalShopingPageFilterComponent from '../../components/globalShopingPageFilterComponent/GlobalShopingPageFilterComponent'
import GlobalShopingPageCardComponent from '../../components/globalShopingPageCardComponent/GlobalShopingPageCardComponent'



import { mensShopingCardData } from '../../localStorage/globalShopingListData/globalShopingListData'




export default function HomePage() {
  return (
    <main className='page-main_popularShoping'>


      <div className='page-main_popularShoping__filtr'>

        <GlobalShopingPageFilterComponent/>

      </div>


      <div className='page-main_popularShoping__card_wrapper'>

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

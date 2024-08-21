import React from 'react'
import './saleShopingPage.scss'




import GlobalShopingPageFilterComponent from '../../../components/globalShopingPageFilterComponent/GlobalShopingPageFilterComponent'
import GlobalShopingPageCardComponent from '../../../components/globalShopingPageCardComponent/GlobalShopingPageCardComponent'



import { mensShopingCardData } from '../../../localStorage/globalShopingListData/globalShopingListData'



export default function SaleShopingPage() {
  return (
    <main className='page-main_saleShoping'>


      <div className='page-main_saleShoping__filtr'>

        <GlobalShopingPageFilterComponent/>

      </div>


      <div className='page-main_saleShoping__card_wrapper'>

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

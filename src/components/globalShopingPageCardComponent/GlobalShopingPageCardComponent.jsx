import React, { useEffect, useState } from 'react'
import './globalShopingPageCardComponent.scss'


import LikeButtonComponent from '../likeButtonComponent/LikeButtonComponent';



export default function GlobalShopingPageCardComponent(props) {

    const cardData = props.cardData

    const [productPrice, setProductPrice] = useState( { theMainPartOfThePrice: "", restOfPrice: "", } )


    useEffect(() => {
        editingProductPrice()
    }, [])
    

    function editingProductPrice() {

        let priceArray = cardData.cardPrice.split(".")

        setProductPrice(
            {
                theMainPartOfThePrice: priceArray[0],
                restOfPrice: priceArray[1],
            }
        )
    }
    

  return (
    <div className='global_shoping-card'>


        <div className='global_shoping-card__img_wrapper'>

            <div className='global_shoping-card__img_wrapper__btn'>
                <LikeButtonComponent/>
            </div>

            <div className='global_shoping-card__img'>
                <img src={cardData.cardImage} alt="" />
            </div>

        </div>


        <div className='global_shoping-card__text_wrapper'>

            <div className='global_shoping-card__text'>
                <h1>{cardData.cardName}</h1>
                <p>
                    <span>{`$${productPrice.theMainPartOfThePrice}`}</span>
                    <span>{`.${productPrice.restOfPrice}usd`}</span>
                </p>
            </div>

        </div>


    </div>
  )
}

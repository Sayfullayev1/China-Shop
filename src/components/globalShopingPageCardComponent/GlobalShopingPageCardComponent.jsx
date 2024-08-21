import React, { useEffect, useRef, useState } from 'react'
import './globalShopingPageCardComponent.scss'


import LikeButtonComponent from '../likeButtonComponent/LikeButtonComponent';
import { useNavigate } from 'react-router-dom';



export default function GlobalShopingPageCardComponent(props) {

    const cardData = props.cardData

    const [productPrice, setProductPrice] = useState( { theMainPartOfThePrice: "", restOfPrice: "", } )

    const cardImgWrapper = useRef()

    useEffect(() => {
        editingProductPrice()

        goToProductPage()
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

    const navigate = useNavigate();


    function goToProductPage() {
        
        let scrollPositionIndex = window.scrollY
    
        cardImgWrapper.current.addEventListener('touchstart', function() {
          scrollPositionIndex = window.scrollY
        });
    
        cardImgWrapper.current.addEventListener('touchend', function(event) {
    
          let newScrollPositionIndex = window.scrollY
          
          if (newScrollPositionIndex===scrollPositionIndex) {

            if (!event.target.closest('.global_shoping-card__img_wrapper__btn')) {
                // Только если нажатие не на кнопку лайка
                navigate('/another-page');
            }
          }
        });
        
    }
    

  return (
    <div className='global_shoping-card'>


        <div className='global_shoping-card__img_wrapper' ref={cardImgWrapper}>

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

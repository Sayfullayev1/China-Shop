import React, { useEffect, useRef, useState } from 'react'
import './productPage.scss'


import { productData } from '../../localStorage/productData/productData'
import { useLocation } from 'react-router-dom';


import buyBtnImage from '../../phootos/buyBtnImage/buyIcon.svg'
import addTOCartImage from '../../phootos/addTOCartImage/tote.svg'




import StarRatingComponent from '../../components/starRatingComponent/StarRatingComponent';
import ProductPageDescription from '../../components/productPageDescription/ProductPageDescription';
import SelectProductSizeComponent from '../../components/selectProductSizeComponent/SelectProductSizeComponent';




export default function ProductPage() {

    const location = useLocation();

    const [productPrice, setProductPrice] = useState( { theMainPartOfThePrice: "", restOfPrice: "", } )

    const [data, setData] = useState([])



    const [productSize, setProductSize] = useState()
    const quantityOfProductOfThisSize = 10
    const [orderQuantityOfThisProduct, setOrderQuantityOfThisProduct] = useState(0)



    const pageProductMain = useRef()
    const pageProductMainImgWrapper = useRef()
    



    useEffect(() => {

        getUniqueIdFromLink()

    }, [])

    function getUniqueIdFromLink() {
        let uniqueProductIndex = location.pathname.split("-")

        uniqueProductIndex = uniqueProductIndex[uniqueProductIndex.length-1]

        setData(productData[uniqueProductIndex])


    }


    useEffect(() => {
        if (data.length !== 0) {
            let priceArray = data.producPrice.split(".")


            setProductPrice(
                {
                    theMainPartOfThePrice: priceArray[0],
                    restOfPrice: priceArray[1],
                }
            )
        }
    }, [data])
    
    
    useEffect(() => {
        if (pageProductMain && pageProductMainImgWrapper) {
            const fixedElement = pageProductMainImgWrapper.current
            const height = fixedElement.offsetHeight;
            
            
            const parentElement = pageProductMain.current
            parentElement.style.height = `${height}px`;
        }
        
    }, [pageProductMain , pageProductMainImgWrapper, data])


    console.log(data);


    const getInformationFromProductSizeButton = (info) => {
        setProductSize(info)
    };
      

    function changeTheQuantityOfTheProductBeingPurchased(btnMeaning) {
        if (btnMeaning==="+") {
            setOrderQuantityOfThisProduct(orderQuantityOfThisProduct+1)
        } else if (btnMeaning==="-") {
            setOrderQuantityOfThisProduct(orderQuantityOfThisProduct-1)
            
        }
    }


  return (
    <div className='page-product'>



        <main className='page-product__main' ref={pageProductMain}>


            <div className='page-product__main__wrap'>

                <div className='page-product__main__content'>

                    <div className='page-product__main__img_wrapper' ref={pageProductMainImgWrapper}>
                        <img className='page-product__main__img' src={data.producImage} alt="" />
                    </div>

                </div>

            </div>


        </main>



        <section className='page-product__section'>


            <div className='page-product__section__title'>

                <div className='page-product__section__title__type'>
                    <h3>Geeta Mens</h3>
                </div>

                <div className='page-product__section__title__info'>

                    <div className='page-product__section__title__info__name'>
                        <h1>{data.producName}</h1>
                    </div>

                    <div className='page-product__section__title__info__price'>
                        <p>
                            <span>{`$${productPrice.theMainPartOfThePrice}`}</span>
                            <span>{`.${productPrice.restOfPrice}usd`}</span>
                        </p>
                    </div>

                </div>

                <div className='page-product__section__title__rating'>
                    <StarRatingComponent rating = {data?.productRating}/>
                </div>

            </div>


            <div className='page-product__section__buy_btnWrapper'>

                <div className='page-product__section__buy_btnWrapper__show_quantity'>
                    <div className='page-product__section__buy_btnWrapper__show_quantity__change'>
                        <button onClick={() => changeTheQuantityOfTheProductBeingPurchased("-")}>-</button>
                    </div>
                    <div className='page-product__section__buy_btnWrapper__show_quantity__quantity'>
                        <h1>{orderQuantityOfThisProduct}</h1>
                    </div>
                    <div className='page-product__section__buy_btnWrapper__show_quantity__change'>
                        <button onClick={() => changeTheQuantityOfTheProductBeingPurchased("+")}>+</button>
                    </div>
                </div>

                <div className='page-product__section__buy_btnWrapper__order'>
                    <button className='page-product__section__buy_btnWrapper__order__button'>
                        <img src={buyBtnImage} alt="" />
                    </button>
                </div>

            </div>


            <div className='page-product__section__description'>

                <ProductPageDescription text={data?.productDescription}/>
            
            </div>


            <div className='page-product__section__select_size'>

                <SelectProductSizeComponent getInfo={getInformationFromProductSizeButton} />

            </div>


        </section>



        <article className='page-product__article'>
            <div className='page-product__article__btn_wrapper'>
                <button className='page-product__article__btn'>
                    <span>
                        <img src={addTOCartImage} alt="" />
                    </span>
                    ADD TO Cart
                </button>
            </div>
        </article>



    </div>

   
  )
}

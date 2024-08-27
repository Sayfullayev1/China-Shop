import React, { useEffect, useRef, useState } from 'react'
import './selectProductSizeComponent.scss'




export default function SelectProductSizeComponent(props) {

    const selectSizeBtn =useRef([])


    const productSize = [ "S", "M", , "L", "XL", "XXL",]


    const [specifyProductSize, setSpecifyProductSize ] = useState("S")




    useEffect(() => {

        selectSizeBtnClick()

        checkWhatSizeOfProductIsLeft()

    }, [selectSizeBtn])

    

    useEffect(() => {
        checkWhatSizeOfProductIsLeft(props.data)
    }, [props.data])


    
    function checkWhatSizeOfProductIsLeft(infoData) {
        if (infoData) {
            productSize.map((item, index) => {
                if (infoData[`productQuantity_${item}`]===0) {
                        selectSizeBtn.current[index].classList.add('select_size__btn__check-mark_line-through'); 
                }
            })
        }
    }


    function selectSizeBtnClick(index) {
        
        if (selectSizeBtn) {
            if (index===undefined) {
                selectSizeBtn.current[0].style.cssText = `
                    background: #6342E8;
                    color: white;
                `
            } else if (index || index===0) {
                    
                selectSizeBtn.current.map((item, i) => {
                    item.style.cssText = `
                        background: #F1F4FB; 
                        color: black;
                    ` 
                })

                selectSizeBtn.current[index].style.cssText = `
                    background: #6342E8;
                    color: white;
                `

                setSpecifyProductSize(productSize[index])
                
            }
            
        }
    }

    



    useEffect(() => {
        handleClick()
    }, [specifyProductSize])


    const handleClick = () => {
        props.getInfo(specifyProductSize); 
    };


  return (
    <div className='select_size'>


        <div className='select_size__text'>
            <h3>select size</h3>
        </div>


        <div className='select_size__btn-wrapper'>
            {
                productSize.map((item, index) => {
                    return(
                        <div className='select_size__btn' key={index} >
                            <div className='select_size__btn__check-mark'>
                                ✓
                            </div>
                            <button onClick={() => selectSizeBtnClick(index)} ref={(el) => (selectSizeBtn.current[index] = el)}>
                                {item}
                            </button>
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

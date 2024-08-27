import React, { useEffect, useRef } from 'react'
import './selectProductSizeComponent.scss'




export default function SelectProductSizeComponent() {

    const selectSizeBtn =useRef([])


    const productSize = [ "S", "M", , "L", "XL", "XXL",]


    useEffect(() => {
        selectSizeBtnClick()
    }, [selectSizeBtn])


    function selectSizeBtnClick(index) {
        
        if (selectSizeBtn) {
            if (index===undefined) {
                selectSizeBtn.current[0].style.cssText = `
                    background: #6342E8;
                    color: white;
                `
            } else if (index || index===0) {
                selectSizeBtn.current.forEach((item) => {
                    item.style.cssText = `
                        background: #F1F4FB; 
                        color: black;
                    `
                })

                selectSizeBtn.current[index].style.cssText = `
                    background: #6342E8;
                    color: white;
                `
            }
            
        }
    }


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

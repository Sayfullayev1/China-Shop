import React from 'react'
import './dropdownMenuComponent.scss'


import pencilImg from '../../phootos/dropdownMenuImages/Vector.svg'
import exitBtnImg from '../../phootos/dropdownMenuImages/Group 6892.svg'

import { dropdownMenuListData } from '../../localStorage/dropdownMenuListData/dropdownMenuListData'
import { Link } from 'react-router-dom'






export default function DropdownMenuComponent({ click }) {


    
    function closeDropdownMenu() {
        click(false)
    }

    
  return (
    <div className='dropdown-menu'>
        

        <div className='dropdown-menu__btn-wrapper'>

            <button className='dropdown-menu__btn' onClick={() => closeDropdownMenu()}>×</button>
        
        </div>

        <div className='dropdown-menu__user'>

            <div>
                <div className='dropdown-menu__user__img-wrapper'>
                    <img className='dropdown-menu__user__img' src="https://s3-alpha-sig.figma.com/img/9ee6/ac14/e654a35420421d6bf4fae4ca2ffeb54a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~JTsn9K5yvhd6VX9ciG-Woni26ui4ja3Y3x4Yk7m2X~UN20O2gByTj-4xAns-dDeAszYhpA47PSasklpCtzLA2zZAUuV5FTrP4XmRVi2rwiERtf-Ww7C2PJsoyL3B1rSeQ0TPbLlMBp9QKv5DC9O2ilAOfBeq6Bs80-VtB7l0obrqTBWd1sco0KifF5plQUyo4blo1tPZnvjgyDWFYY7nhgoMDgMOue0jdXucH7GRpaISVU28WYdbMrryz1I5l4YKTXHQ7yXK7wGKqYV6R9Gcr83cANGf1tfcjo79bXEF3gNFzVtG83PLmMpKCKmo50I7v67Mopvvr9PafCWyniLw__" alt="" />
                </div>
            </div>

            <div className='dropdown-menu__user__info'>
                <h1 className='dropdown-menu__user__info__nickname'>
                    Varat Singh Sh
                    <div>
                        <img src={pencilImg} alt="" />
                    </div>
                </h1>
                <p className='dropdown-menu__user__info__gmail'>jr.varat@gmail.com</p>
            </div>

        </div>

        <div className='dropdown-menu__wrap'>

            <div className='dropdown-menu__menu'>
                <ul className='dropdown-menu__menu__list'>
                    {
                        dropdownMenuListData.map((item, index) => {
                            return(
                                <li className='dropdown-menu__menu__item' key={index}>
                                    <Link className='dropdown-menu__menu__link' to={item.itemLink}>
                                        <div className='dropdown-menu__menu__link__img'>
                                            <img src={item.itemImg} alt="" />
                                        </div>
                                        <h1 className='dropdown-menu__menu__link__text'>{item.itemText}</h1>
                                    </Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='dropdown-menu__exit-btn'>
                <div className='dropdown-menu__exit-btn__img'>
                    <img src={exitBtnImg} alt="" />
                </div>
                <h1 className='dropdown-menu__exit-btn__text'>Log Out</h1>
            </div>

        </div>

    </div>
  )
}

import React from 'react'
import './headerComponent.scss'

import { Link } from 'react-router-dom'


import menuBtnImage from '../../phootos/headerMenuImages/btnImage/Menu.svg'
import { headerMenuListData } from '../../localStorage/headerMenuListImages/headerMenuListData'



export default function HeaderComponent() {

  
  return (
    <header className='header'>

      <div className='header__logo-text'>
        <h1>Uzchinetrade</h1>
      </div>

      <div className='header__menu'>

        <div className='header__menu__wrap'>

          <ul className='header__menu_list'>
            {
              headerMenuListData?.map((item, index) => {
                return(
                  <li className='header__menu_item' key={index}>
                    <Link className='header__menu_item__link'>
                      <img src={item.btnImage} alt="" />
                    </Link>
                  </li>
                )
              })
            }
          </ul>

        </div>

        <div className='header__menu_btn'>
          <img src={menuBtnImage} alt="" />
        </div>

      </div>

    </header>
  )
}

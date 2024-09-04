import React, { useState } from 'react'
import './headerComponent.scss'

import { Link } from 'react-router-dom'


import menuBtnImage from '../../phootos/headerMenuImages/btnImage/Menu.svg'


import { headerMenuListData } from '../../localStorage/headerMenuListImages/headerMenuListData'
import DropdownMenuComponent from '../dropdownMenuComponent/DropdownMenuComponent'



export default function HeaderComponent() {

  const [ dropDownMenuExit, setDropDownMenuExit ] = useState(false) 

  const dropdownMenuWorking = (meaning) => {
    setDropDownMenuExit(meaning)
  };


  
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

        <div className='header__menu_btn' onClick={() => dropdownMenuWorking(true)}>
          <img src={menuBtnImage} alt="" />
        </div>

      </div>

      <div className={`header__dropdown-menu ${ dropDownMenuExit===false ? 'header__dropdown-menu_passive' : 'header__dropdown-menu_active'}`}>
          <DropdownMenuComponent click={dropdownMenuWorking}/>
      </div>

    </header>
  )
}

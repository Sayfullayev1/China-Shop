import React, { useEffect, useState } from 'react'
import './headerComponent.scss'

import { Link } from 'react-router-dom'


import menuBtnImage from '../../phootos/headerMenuImages/btnImage/Menu.svg'


import { headerMenuListData } from '../../localStorage/headerMenuListImages/headerMenuListData'
import DropdownMenuComponent from '../dropdownMenuComponent/DropdownMenuComponent'



export default function HeaderComponent() {

  const [ dropDownMenuExit, setDropDownMenuExit ] = useState(false) 

  const dropdownMenuWorking = (meaning) => {
    setDropDownMenuExit(meaning)

    let container = document.querySelector(".container")

    

    let fogOverla = document.createElement('div');

    fogOverla.classList.add("fogOverla")


    if (meaning) {
      document.body.style.overflow = 'hidden';

      container.appendChild(fogOverla);
      
      fogOverla.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      background-color: white;
      z-index: 18;
      transition: opacity 1.5s;
    `;
    
    setTimeout(() => {
      fogOverla.style.opacity = '0.9';
    }, 10);
        

    } else {
      let fogOverlaRemove = document.querySelector('.fogOverla');

      document.body.style = "";

      setTimeout(() => {
        fogOverlaRemove.style.opacity = '0';
      }, 10);

      setTimeout(() => {
        fogOverlaRemove.style.opacity = '0';
        fogOverlaRemove.remove();
      }, 1500);
      
    }

  };

  useEffect(() => {
    if (true) {
      let fogOverlaRemove = document.querySelector('.fogOverla');

      if (fogOverlaRemove) {
        fogOverlaRemove.addEventListener("click", function () {
          dropdownMenuWorking(false)
        })
      }
    }
  }, [dropDownMenuExit])


  
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
                    <Link className='header__menu_item__link' to={`${item.btnLink}`}>
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

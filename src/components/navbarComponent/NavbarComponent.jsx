import React, { useEffect, useRef, useState } from 'react'
import './navbarComponent.scss'


import { navbarMenuList } from '../../localStorage/navbarMenuList/navbarMenuList'
import { Link, useLocation } from 'react-router-dom'


export default function NavbarComponent() {

  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(null);

  const menuListItemLocation = useLocation();

  const menuItemsComponent = useRef([])


  useEffect(() => {

    menuItemsComponent.current.forEach((item) => {
      item.style.cssText=`
          color: #A1A1A1; 
        `
    })

    navbarMenuList.forEach((item, index) => {
      if (item.itemLink === menuListItemLocation.pathname) {
        setActiveMenuItemIndex(index)
        menuItemsComponent.current[index].style.cssText = `
            color: #6C40F7;
          `
      }
    })
    
  }, [menuListItemLocation]);



  return (
    <nav className='navbar'>


      <div className='navbar__wrap'>

        <ul className='navbar__list'>
          {
            navbarMenuList?.map((item, index) => {
              return(
                <li className='navbar__item' key={index}>
                  <Link className={`navbar__link  ${activeMenuItemIndex === index ? 'navbar__link-active' : ''}`} to={item.itemLink} ref={(el) => (menuItemsComponent.current[index] = el)}>{item.itemTitle}</Link>
                </li>
              )
            })
          }
        </ul>

      </div>

    </nav>
  )
}

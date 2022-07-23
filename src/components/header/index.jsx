import React, { useState } from 'react'
import Logo from '../../assets/svg/logo.svg'
import IconAngleDown from '../../assets/svg/Icon awesome-angle-down (1).svg'
import IconHeadphone from "../../assets/svg/Icon feather-headphones.svg"
import { HeaderWrapper } from './style'
import MegaMenu from './megaMenu'


function Header() {
  const [openNavMenu, setOpenNavMenu] = useState(true)
  const handleClickNavMenu = () => {
    setOpenNavMenu(!openNavMenu)
  }
  return (
    <HeaderWrapper>
      <nav>
        <div className='logo'>
          <img src={Logo} alt="tatilbudur-logo" />
        </div>
        <div className='navMenu'>
          <div className='manuItem'>Otel
            <div className='menuIcon'>
              <img src={IconAngleDown} alt="angle-down-icon" />
            </div>
          </div>
          <div className='manuItem'>Tur
            <div className='menuIcon'>
              <img src={IconAngleDown} alt="angle-down-icon" />
            </div>
          </div>
          <div className='manuItem'>Kampanyalar
            <div className='menuIcon'>
              <img src={IconAngleDown} alt="angle-down-icon" />
            </div>
          </div>
        </div>
        <div className='navbarRight'>
          <div className='phoneButton'>
            <div className='phoneIcon'>
              <img src={IconHeadphone} alt="icon-headphone" />
            </div>
            <div className='phoneNumber'>0 850 333 3 33</div>
          </div>
          <button  className='login'>Giriş Yapın</button>
        </div>

        <div className='hamburgerIcon' onClick={handleClickNavMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </nav>
      {/* <MegaMenu/> */}
    </HeaderWrapper>
  )
}

export default Header
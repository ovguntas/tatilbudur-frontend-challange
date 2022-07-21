import React from 'react'
import Logo from '../../assets/svg/logo.svg'
import IconAngleDown from '../../assets/svg/Icon awesome-angle-down (1).svg'
import IconHeadphone from "../../assets/svg/Icon feather-headphones.svg"
import { HeaderWrapper } from './style'


function Header() {
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
          <button className='login'>Giriş Yapın</button>
        </div>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
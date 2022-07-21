import React from 'react'
import { SearchWrapper } from './style'
import OtelIcon from '../../assets/svg/Group 717.svg'
import PlaneIcon from '../../assets/svg/Group 714.svg'
import TourIcon from '../../assets/svg/Group 724.svg'
import LocationIcon from '../../assets/svg/Path 40.svg'
import Calender from '../../assets/svg/Group 1279.svg'
import Bed from '../../assets/svg/Group 687.svg'
import IconAngleDown from '../../assets/svg/Icon awesome-angle-down (1).svg'

function Search() {
  return (
    <SearchWrapper>
      <section className='searchPart'>
        <div className='holidayTypes'>
          <div className='holidayType'>
            <div className='holidayIcon'>
              <img src={OtelIcon} alt="otel-icon" />
            </div>
            <span>Otel Ara</span>
          </div>
          <div className='holidayType'>
            <div className='holidayIcon'>
              <img src={PlaneIcon} alt="plane-icon" />
            </div>
            <span>Uçuş Ara</span>
          </div>
          <div className='holidayType'>
            <div className='holidayIcon'>
              <img src={TourIcon} alt="luggage-icon" />
            </div>
            <span>Tur Ara</span>
          </div>
        </div>
        <div className='filters'>
          {/* filters altındakiler modal açacak */}
          <div className='filterInputContainer searchHotel'>
            <input placeholder='Otel, Şehir, Bölge veya Tema Adı' id='searchInput' />
            <div className='filterIcon'>
              <img src={LocationIcon} alt="location-icon" />
            </div>
          </div>
          <div className='filterInputContainer searchDate'>
            <div className='filterIcon'>
              <img src={Calender} alt="calender-icon" />
            </div>
            <div className='filterModal'>
              Konaklama Tarihi
            </div>
          </div>
          <div className='filterInputContainer searchHowMany'>
            <div className='filterIcon'>
              <img src={Bed} alt="bed-icon" />
            </div>
            <div className='filterModal'>
              Kişi Sayısı
            </div>
            <div className='modalOpaner'>
              <img src={IconAngleDown} alt="icon-angle-down" />
            </div>
          </div>
          <button>Otel Ara</button>
        </div>
      </section>
    </SearchWrapper>
  )
}

export default Search
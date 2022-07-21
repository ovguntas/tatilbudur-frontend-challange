import React from 'react'
import { SearchWrapper } from './style'
import OtelIcon from '../../assets/svg/Group 717.svg'
import PlaneIcon from '../../assets/svg/Group 714.svg'
import TourIcon from '../../assets/svg/Group 724.svg'

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
          <div className='filterInputContainer'>
            <input type="text" placeholder='Otel, Şehir, Bölge veya Tema Adı' id='searchInput' />
            <div className='filterIcon'>
              <img src="" alt="" />
            </div>
          </div>
          <div className='filterInputContainer'>
            <div className='filterModal'>
              Konaklama Tarihi
            </div>
            <div className='filterIcon'>
              <img src="" alt="" />
            </div>
          </div>
          <div className='filterInputContainer'>
            <div className='filterModal'>
              Kişi Sayısı
            </div>
            <div className='filterIcon'>
              <img src="" alt="" />
            </div>
            <div className='modalOpaner'>
              <img src="" alt="" />
            </div>
          </div>
          <button>Otel Ara</button>
        </div>
      </section>
    </SearchWrapper>
  )
}

export default Search
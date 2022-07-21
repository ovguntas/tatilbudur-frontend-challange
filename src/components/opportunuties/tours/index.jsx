import React from 'react'
import { ToursWrapper } from './style'
import ToursSlider from './toursSlider/ToursSlider';

function Tours() {
  return (
    <ToursWrapper>
      <div className="ToursWrapperContainer">
        <div className='heading'>Her Zevke Uygun Turları Keşfet</div>
        <div className='featureFiltersContainer'>
          <div className='featureFilter'>
            Yurt dışı Turları
          </div>
          <div className='featureFilter'>
            Gemi Turları
          </div>
          <div className='featureFilter'>
            Kültür Turları
          </div>
          <div className='featureFilter'>
            Haftasonu Turları
          </div>
          <div className='featureFilter'>
            Mavi Turları
          </div>
        </div>
        <ToursSlider/>
      </div>
    </ToursWrapper>
  )
}

export default Tours;
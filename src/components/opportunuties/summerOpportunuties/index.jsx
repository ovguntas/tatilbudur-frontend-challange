import React from 'react'
import { SummerOpportunutiesWrapper } from './style'
import SummerCard from './summerCard'
function SummerOpportunuties() {
  return (
    <SummerOpportunutiesWrapper>
      <div className="SummerOpportunutiesWrapperContainer">
        <div className='heading'>Yazın ilk fırsatlarını kaçırma!</div>
        <div className="featureFiltersContainerWrapper">
          <div className='featureFiltersContainer'>
            <div className='featureFilter'>
              Son Gezdiğiniz Oteller
            </div>
            <div className='featureFilter'>
              En Çok Aranan Oteller
            </div>
            <div className='featureFilter'>
              Tükenmek Üzere Olan Oteller
            </div>
          </div>
          <a href="#" className='justifyRight'> Daha fazla göster</a>
        </div>

        <SummerCard/>
      </div>
    </SummerOpportunutiesWrapper>
  )
}

export default SummerOpportunuties
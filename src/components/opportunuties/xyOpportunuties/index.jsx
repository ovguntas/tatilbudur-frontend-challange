import React from 'react'
import { XyOpportunutiesWrapper } from './style'
import XyOpportunutiesCard from './xyOpportunutiesCard'

function XyOpportunuties() {
  return (
    <XyOpportunutiesWrapper>
      <div className='heading'>
        Kararsız mı kaldınız
      </div>
      <div className='text'>
        Nasıl bir Tatil istediğinize karar veremediyseniz size önerdiğimiz tatil temalarını inceleyin!
      </div>
      <XyOpportunutiesCard />
    </XyOpportunutiesWrapper>
  )
}

export default XyOpportunuties
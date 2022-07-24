import React from 'react'

import EarlyOpportunuties from './earlyOpportunuties'
import SummerOpportunuties from './summerOpportunuties'
import XyOpportunuties from './xyOpportunuties'
import Tours from './tours'
import { OpportunutiesWrapper } from './style'
function Opportunuties() {
  return (
    <div>
      <OpportunutiesWrapper>
        <EarlyOpportunuties />
        <SummerOpportunuties />
        <Tours />
        <XyOpportunuties />
      </OpportunutiesWrapper>
    </div>
  )
}

export default Opportunuties
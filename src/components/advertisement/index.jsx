import React from 'react'
import AdvertisementContent from './advertisementContent'
import AdvertisementJumbotron from './advertisementJumbotron'
import AdvertisementPartners from './advertisementPartners'
import { AdvertisementWrapper } from './style'

function Advertisement() {
  return (
    <AdvertisementWrapper>
      <AdvertisementJumbotron />
      <AdvertisementPartners />
      <AdvertisementContent />
    </AdvertisementWrapper>
  )
}

export default Advertisement
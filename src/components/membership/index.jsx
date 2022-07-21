import React from 'react'
import MembershipForm from './membershipForm'
import { MembershipWrapper } from './style'

function Memebership() {
  return (
    <MembershipWrapper>
      <div className='membershipContainer'>
        <div className='membershipLeftImageContainer'>
          <img src="" alt="" />
        </div>
        <div className='membershipContainerBody'>
          <div className="heading">Üyelere özel indirimlere ve harika fiyatlara erişim sağlayın</div>
          <MembershipForm/>
        </div>
      </div>
    </MembershipWrapper>
  )
}

export default Memebership
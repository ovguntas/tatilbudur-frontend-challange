import React from 'react'
import MembershipForm from './membershipForm'
import { MembershipWrapper } from './style'
import BitchManPic from "../../assets/images/model.png"

function Memebership() {
  return (
    <MembershipWrapper>
      <div className='membershipContainer'>
        <div className='membershipLeftImageContainer'>
          <img src={BitchManPic} alt="" />
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
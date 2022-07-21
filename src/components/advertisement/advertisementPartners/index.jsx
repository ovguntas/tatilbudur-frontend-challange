import React from 'react'
import { AdvertisementPartnersWrapper } from './style'

function AdvertisementPartners() {
    return (
        <AdvertisementPartnersWrapper>
            <div className='partnersContainer'>
                <div className="partner">
                    <div className="partnerlogo">
                        <img src="" alt="basketbol-milli-takımlar" />
                    </div>
                    <div className="partnerContent">
                        <div className='partnerContentHeading'>
                            #milligururbudur
                        </div>
                        <div className='partnerContentBody'>
                            <div className="partnerContentBodyText">
                                Tatilbudur.com
                            </div>
                            <div className="partnerContentBodyText">
                                Basketbal Milli Takımlar
                            </div>
                            <div className="partnerContentBodyText">
                                ANA SPONSORU
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerlogo">
                        <img src="" alt="basketbol-milli-takımlar" />
                    </div>
                    <div className="partnerContent">
                        <div className='partnerContentBody'>
                            <div className="partnerContentBodyText">
                                Tatilbudur.com bir 
                            </div>
                            <div className="partnerContentBodyImageContainer">
                                <img src="" alt="iş-girişim-sermayesi-logo" />
                            </div>
                            <div className="partnerContentBodyText">
                                ortaklığıdır
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdvertisementPartnersWrapper>
    )
}

export default AdvertisementPartners
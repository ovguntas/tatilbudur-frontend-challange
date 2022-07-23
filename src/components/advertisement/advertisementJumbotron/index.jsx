import React from 'react'
import { AdvertisementJumbotronWrapper } from './style'
import AppPlayStore from "../../../assets/svg/appstore.svg"
import PlayStore from "../../../assets/svg/googleplay.svg"
import AppGallery from "../../../assets/svg/appstore.svg"
import QrCode from "../../../assets/svg/qr.svg"
import MobileApp from "../../../assets/images/app.png"

function AdvertisementJumbotron() {
    return (
        <AdvertisementJumbotronWrapper>
            <div className='jumbotronContainer'>
                <div className='jumbotronLeft'>
                    <div className='heading'>TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!</div>
                    <div className='downloadLinksContainer'>
                        <div className='downloadLink'>
                            <img src={AppPlayStore} alt="app-store-link" />
                        </div>
                        <div className='downloadLink'>
                            <img src={PlayStore} alt="play-store-link" />
                        </div>
                        <div className='downloadLink'>
                            <img src={AppGallery} alt="app-gallery-link" />
                        </div>
                    </div>
                </div>
                <div className='jumbotronRight'>
                    <div className='qrCode'>
                        <img src={QrCode} alt="download-link-qr-code" />
                    </div>
                    <div className='mobileAppImage'>
                        <img src={MobileApp} alt="mobile-site-image" />
                    </div>
                </div>

            </div>
        </AdvertisementJumbotronWrapper>
    )
}

export default AdvertisementJumbotron
import React from 'react'
import { AdvertisementJumbotronWrapper } from './style'

function AdvertisementJumbotron() {
    return (
        <AdvertisementJumbotronWrapper>
            <div className='jumbotronContainer'>
                <div className='jumbotronLeft'>
                    <div className='heading'>TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!</div>
                    <div className='downloadLinksContainer'>
                        <div className='downloadLink'>
                            <img src="" alt="app-store-link" />
                        </div>
                        <div className='downloadLink'>
                            <img src="" alt="play-store-link" />
                        </div>
                        <div className='downloadLink'>
                            <img src="" alt="app-gallery-link" />
                        </div>
                    </div>
                </div>
                <div className='jumbotronRight'>
                    <div className='qrCode'>
                        <img src="" alt="download-link-qr-code" />
                    </div>
                    <div className='mobileAppImage'>
                        <img src="" alt="mobile-site-image" />
                    </div>
                </div>

            </div>
        </AdvertisementJumbotronWrapper>
    )
}

export default AdvertisementJumbotron
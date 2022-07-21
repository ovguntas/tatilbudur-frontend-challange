import React from 'react'
import { ToursSliderWrapper } from './style'
function ToursSlider() {
    return (
        <ToursSliderWrapper>
            <div className='slider'>
                <div className='sliderImage'>
                    <img src="" alt="slider-image" />
                </div>
                <div className="sliderContent">
                    <div className='sliderContentHeading'>Roma’yı Keşfetme Mevsimi</div>
                    <div className="sliderContentBody">
                        <div className='sliderContentText'>
                            Haydi, siz de Tatilbudur’un uygun fiyatlı yurt dışı turlarını incelemeye başlayın,
                            yurt dışında daha fazla yeni yerler keşfetmenin keyfine varın!
                        </div>
                        <a href="#" className='link'>Fırsatları Gör</a>
                    </div>
                </div>
                <div className="badge">
                    <div className='badgeImage'>
                        <img src="" alt="badge" />
                        <div className='badgeText'>
                            200€’dan başlayan fiyatlarla
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='sliderBottom'>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src="" alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        Ülkelere Göre Turlar
                    </div>
                </div>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src="" alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        2022 Erken Rezervasyon Turları
                    </div>
                </div>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src="" alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        Amerika Turları
                    </div>
                </div>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src="" alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        Balayı Turları
                    </div>
                </div>
            </div>
        </ToursSliderWrapper>
    )
}

export default ToursSlider
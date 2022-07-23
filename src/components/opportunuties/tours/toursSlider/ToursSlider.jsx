import React from 'react'
import { ToursSliderWrapper } from './style'
import TourSliderPic from "../../../../assets/images/Scroll Group 26.png"
import Badge from "../../../../assets/svg/badge.svg"
import WorldMapPic from "../../../../assets/images/Rectangle 615.png"
function ToursSlider() {
    return (
        <ToursSliderWrapper>
            <div className='slider'>
                <div className='sliderImage'>
                    <img src={TourSliderPic} alt="slider-image" />
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
                        <img src={Badge} alt="badge" />
                        <div className='badgeText'>
                            200€’dan başlayan fiyatlarla
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='sliderBottom'>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src={WorldMapPic} alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        Ülkelere Göre <br/>Turlar
                    </div>
                </div>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src={WorldMapPic} alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        2022 Erken <br/> Rezervasyon Turları
                    </div>
                </div>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src={WorldMapPic} alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        Amerika <br/>Turları
                    </div>
                </div>
                <div className="sliderBottomCard">
                    <div className="sliderBottomCardImage">
                        <img src={WorldMapPic} alt="card-ımage" />
                    </div>
                    <div className='sliderBottomCardText'>
                        Balayı <br/>Turları
                    </div>
                </div>
            </div>
        </ToursSliderWrapper>
    )
}

export default ToursSlider
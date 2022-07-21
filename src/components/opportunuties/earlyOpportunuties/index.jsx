import React from 'react'
import { EarlyOpportunutiesWrapper } from './style'
import sliderpic from '../../../assets/images/Mask Group 69.png'
function EarlyOpportunuties() {
    return (
        <EarlyOpportunutiesWrapper>
            <div className='earlyOpportunutiesWrapper'>
                <div className='showOpportunutiesPart'>
                    <div className='earlyOpportunutiesSlider'>
                        <div className='sliderImage'>
                            <img src={sliderpic} alt="booking hotel couples" />
                        </div>
                        <div>
                            <div className="sliderContent">
                                <p>Erken Rezarvasyon</p>
                                <p>Festivali</p>
                                <a href="#">Fırsatları Gör</a>
                            </div>
                        </div>
                    </div>
                    <div className="opportunityCardsContainer">
                        <div className='opportunityCard'>
                            <div className='opportunityCardContent'>
                                <div className="opportunityCardLeft">
                                    <p>Yılbaşına Özel Kültür Turlarını Keşfedin!</p>
                                    <a href="#"> Fırsatları Gör</a>
                                </div>
                                <div className="opportunityCardRight"></div>
                            </div>
                        </div>
                        <div className='opportunityCard'>
                            <div className='opportunityCardContent'>
                                <div className="opportunityCardLeft">
                                    <p>Yılbaşına Özel Kültür Turlarını Keşfedin!</p>
                                    <a href="#"> Fırsatları Gör</a>
                                </div>
                                <div className="opportunityCardRight"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='advantages'>
                    <div className="adventegeCard">
                        <div className='adventegeCardContent'>
                            <p className='adventegeCardContentText'>
                                Şimdi Al, 4 Ay Sonra Ödemeye Başla
                            </p>
                            <div className='adventegeCardContentIcon'>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <p>Maximum karta özel 4 ay erteleme</p>
                    </div>
                    <div className="adventegeCard">
                        <div className='adventegeCardContent'>
                            <p className='adventegeCardContentText'>
                                2 Gece ve Üstü Konaklamalarda +1 Gece Ücretsiz
                            </p>
                            <div className='adventegeCardContentIcon'>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="adventegeCard">
                        <div className='adventegeCardContent'>
                            <p className='adventegeCardContentText'>
                                Kayak Otellerinde %45’e Varan Erken Rezervasyon Fırsatı!
                            </p>
                            <div className='adventegeCardContentIcon'>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='specialForMemebers'>
                <div className='memberIcon'>
                    <img src="" alt="" />
                </div>
                <div className='specialForMemebersText'>
                    Üyelere özel indirimli fiyatlar
                </div>
                <div>
                    Giriş yaptığınızda daha düşük fiyatlar görürsünüz!
                </div>
                <a href="#" className='login'>Giriş Yapın</a>
            </div>
        </EarlyOpportunutiesWrapper>
    )
}

export default EarlyOpportunuties
import React from 'react'
import { EarlyOpportunutiesWrapper } from './style'
import sliderpic from '../../../assets/images/shutterstock_1606560286.png'
import winterHomePic from '../../../assets/images/clarisse-meyer-wHUFmZRMpLc-unsplash.png'
import BalloonTourPic from '../../../assets/images/shutterstock_1317409001.png'
import Calender from '../../../assets/images/5-2-calendar-download-png.png'
import CrescentMoonPng from '../../../assets/images/crescent-moon-png-35138 (1).png'
import SkiIcon from '../../../assets/images/skiing-stickman.png'
import UserPng from '../../../assets/images/user.png'
function EarlyOpportunuties() {
    return (
        <EarlyOpportunutiesWrapper>
            <div className='earlyOpportunutiesWrapperContainer'>
                <div className='showOpportunutiesPart'>
                    <div className='earlyOpportunutiesSlider'>
                        <div className='sliderImage'>
                            <img src={sliderpic} alt="booking hotel couples" />
                        </div>
                        <div>
                            <div className="sliderContent">
                                <div className='paragraph'>Erken Rezarvasyon</div>
                                <div className='paragraph'>Festivali</div>
                                <a href="#">Fırsatları Gör</a>
                            </div>
                        </div>
                    </div>
                    <div className="opportunityCardsContainer">
                        <div className='opportunityCard'>
                            <div className='opportunityCardContent'>
                                <div className="opportunityCardLeft">
                                    <div className='paragraph'>Yılbaşına Özel Kültür Turlarını Keşfedin!</div>
                                    <a href="#"> Fırsatları Gör</a>
                                </div>
                                <div className="opportunityCardRight">
                                    <img src={winterHomePic} alt="Winter-home-pic" />
                                </div>
                            </div>
                        </div>
                        <div className='opportunityCard'>
                            <div className='opportunityCardContent'>
                                <div className="opportunityCardLeft">
                                    <div className='paragraph'>Yılbaşına Özel Kültür Turlarını Keşfedin!</div>
                                    <a href="#"> Fırsatları Gör</a>
                                </div>
                                <div className="opportunityCardRight">
                                    <img src={BalloonTourPic} alt="Balloon-tour-pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='advantages'>
                    <div className="adventegeCard">
                        <div className='adventegeCardContent'>
                            <p className='adventegeCardContentText'>
                                Şimdi Al, <strong>4 Ay Sonra</strong>
                                <br/>
                                 Ödemeye Başla
                            </p>
                            <div className='adventegeCardContentIcon'>
                                <img src={Calender} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="adventegeCard">
                        <div className='adventegeCardContent'>
                            <p className='adventegeCardContentText'>
                                2 Gece ve Üstü Konaklamalarda <br/>
                                <strong>+1 Gece Ücretsiz</strong>
                            </p>
                            <div className='adventegeCardContentIcon'>
                                <img src={CrescentMoonPng} alt="Crescent-moon-png" />
                            </div>
                        </div>
                    </div>
                    <div className="adventegeCard">
                        <div className='adventegeCardContent'>
                            <p className='adventegeCardContentText'>
                                Kayak Otellerinde <br/>
                                 <strong>%45’e Varan</strong> Erken Rezervasyon <br/>
                                  Fırsatı!
                            </p>
                            <div className='adventegeCardContentIcon'>
                                <img src={SkiIcon} alt="skiing-man-png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='muteText'>Maximum karta özel 4 ay erteleme</div>
            </div>
            <div className='specialForMemebers'>
                <div className='specialForMemebersText'>
                <div className='memberIcon'>
                    <img src={UserPng} alt="user-icon-png" />
                </div>
                    Üyelere özel indirimli fiyatlar
                </div>
                <div className='specialForMemebersText'>
                    Giriş yaptığınızda <span>daha düşük fiyatlar</span> görürsünüz!
                </div>
                <a href="#" className='login'>Giriş Yapın</a>
            </div>
        </EarlyOpportunutiesWrapper>
    )
}

export default EarlyOpportunuties
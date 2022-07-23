import React from 'react'
import {SummerCardWrapper} from "../summerCard/style"
import HotelViewPic from "../../../../assets/images/Mask Group 49.png"

function SummerCard() {
    return (
        <SummerCardWrapper>
            <div className='reservationCardsContainer'>
                <div className='reservationCard'>
                    <div className='reservationCardImage'>
                        <img src={HotelViewPic} alt="hotel-pic" />
                        <div className='rating'>
                            <div className='ratingNum'>9/10</div>
                            <div className='ratingText'>Çok iyi</div>
                        </div>
                    </div>
                    <div className='reservationCardBody'>
                        <div className='reservationCardBodyText'>
                            <span className='textTag'>Vikingen İnfinity Resort &#38; Spa Hotel</span>
                            <br/><div className='addTag'>Ultra Her Şey Dahil</div> 
                        </div>
                    </div>
                    <div className="reservationCardFooter">
                        <div className="location">Antalya, Alanya</div>
                        <div className="firstPrice">
                                <span className='price'> <strong>230 ₺</strong></span>
                                <span className='priceText'>' den <br/>
                                başlayan fiyatlarla
                                </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='reservationCardsContainer'>
                <div className='reservationCard'>
                    <div className='reservationCardImage'>
                        <img src={HotelViewPic} alt="hotel-pic" />
                        <div className='rating'>
                            <div className='ratingNum'>9/10</div>
                            <div className='ratingText'>Çok iyi</div>
                        </div>
                    </div>
                    <div className='reservationCardBody'>
                        <div className='reservationCardBodyText'>
                            <span className='textTag'>Vikingen İnfinity Resort &#38; Spa Hotel</span>
                            <br/><div className='addTag'>Ultra Her Şey Dahil</div> 
                        </div>
                    </div>
                    <div className="reservationCardFooter">
                        <div className="location">Antalya, Alanya</div>
                        <div className="firstPrice">
                                <span className='price'> <strong>230 ₺</strong></span>
                                <span className='priceText'>' den <br/>
                                başlayan fiyatlarla
                                </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='reservationCardsContainer'>
                <div className='reservationCard'>
                    <div className='reservationCardImage'>
                        <img src={HotelViewPic} alt="hotel-pic" />
                        <div className='rating'>
                            <div className='ratingNum'>9/10</div>
                            <div className='ratingText'>Çok iyi</div>
                        </div>
                    </div>
                    <div className='reservationCardBody'>
                        <div className='reservationCardBodyText'>
                            <span className='textTag'>Vikingen İnfinity Resort &#38; Spa Hotel</span>
                            <br/><div className='addTag'>Ultra Her Şey Dahil</div> 
                        </div>
                    </div>
                    <div className="reservationCardFooter">
                        <div className="location">Antalya, Alanya</div>
                        <div className="firstPrice">
                                <span className='price'> <strong>230 ₺</strong></span>
                                <span className='priceText'>' den <br/>
                                başlayan fiyatlarla
                                </span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='reservationCardsContainer'>
                <div className='reservationCard'>
                    <div className='reservationCardImage'>
                        <img src={HotelViewPic} alt="hotel-pic" />
                        <div className='rating'>
                            <div className='ratingNum'>9/10</div>
                            <div className='ratingText'>Çok iyi</div>
                        </div>
                    </div>
                    <div className='reservationCardBody'>
                        <div className='reservationCardBodyText'>
                            <span className='textTag'>Vikingen İnfinity Resort &#38; Spa Hotel</span>
                            <br/><div className='addTag'>Ultra Her Şey Dahil</div> 
                        </div>
                    </div>
                    <div className="reservationCardFooter">
                        <div className="location">Antalya, Alanya</div>
                        <div className="firstPrice">
                                <span className='price'> <strong>230 ₺</strong></span>
                                <span className='priceText'>' den <br/>
                                başlayan fiyatlarla
                                </span>
                        </div>
                    </div>

                </div>
            </div>
        </SummerCardWrapper>
    )
}

export default SummerCard
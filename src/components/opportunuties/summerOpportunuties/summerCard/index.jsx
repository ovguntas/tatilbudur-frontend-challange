import React from 'react'
import {SummerCardWrapper} from "../summerCard/style"

function SummerCard() {
    return (
        <SummerCardWrapper>
            <div className='reservationCardsContainer'>
                <div className='reservationCard'>
                    <div className='reservationCardImage'>
                        <img src="" alt="hotel-pic" />
                        <div className='rating'>
                            <div className='ratingNum'>9/10</div>
                            <div className='ratingText'>Çok iyi</div>
                        </div>
                    </div>
                    <div className='reservationCardBody'>
                        <div className='reservationCardBodyText'>
                            <span>Vikingen İnfinity Resort &#38; Spa Hotel</span>
                            <span>Ultra Her Şey Dahil</span>
                        </div>
                    </div>
                    <div className="reservationCardFooter">
                        <div className="location">Antalya, Alanya</div>
                        <div className="firstPrice">
                            <div className='top'>
                                <span className='price'>230</span>
                                <span className='price'>t</span>
                                <span className='priceText'>' den</span>
                            </div>
                            <div className="bottom">
                                başlayan fiyatlarla
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </SummerCardWrapper>
    )
}

export default SummerCard
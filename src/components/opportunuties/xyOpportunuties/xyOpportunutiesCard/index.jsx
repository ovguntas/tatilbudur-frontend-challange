import React from 'react'
import { XyOpportunutiesCardWrapper } from "./style"
function XyOpportunutiesCard() {
    return (
        <div>
            <XyOpportunutiesCardWrapper>
                <div className='imageCardsContainer'>
                    <div className='imageCard'>
                        <div className='imageCardImage'>
                            <img src="" alt="fullycardImage" />
                        </div>
                        <div className='imageCardFooter'>
                            <div className='imageCardFooterTextTop'>Kayak Otelleri</div>
                            <div className='imageCardFooterTextBottom'>2243 Otel</div>
                        </div>
                    </div>
                </div>
            </XyOpportunutiesCardWrapper>
        </div>
    )
}

export default XyOpportunutiesCard
import styled from "styled-components";

export const SummerCardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-left: 50px;
    margin-top: 50px;
    .reservationCardsContainer{
        width: 310px;
        height: 320px;
        background-color: #FFFFFF;
        border-radius: 13px;
        border: 1px solid #CFD4DA;
        .reservationCard{
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .reservationCardImage{
                width: 100%;
                height: 160px;
                img{
                    width: 100%;
                    height: 100%;
                }
                .rating{
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    
                    .ratingNum{
                        color: #fff;
                        background-color: #115BB9;
                        border-radius:3px;
                        padding: 5px;
                    }
                    .ratingText{
                        color:#115BB9;
                        background-color: #fff;
                        font-weight: 700;
                        line-height: 16px;
                        padding: 5px;
                        padding-top: 7px;
                    }
                }
            }
            .reservationCardBody{
                height: 75px;
                width: 85%;
                .reservationCardBodyText{
                    .textTag{
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 22px;
                        color: #3F536C;
                    }
                    .addTag{
                        display: inline-block;
                        font-size: 10px;
                        line-height: 22px;
                        color: #fff;
                        background-color:#3F536C;
                        opacity: 0.4;
                        border-radius: 10px;
                        padding: 2px 5px;

                    }
                }
            }
            .reservationCardFooter{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .location{
                    font-size: 12px;
                    line-height: 22px;
                    opacity: 0.5;
                    color: #3F536C;
                }
                .firstPrice{
                    .price{
                        font-size: 20px;
                        line-height: 30px;
                        color:#115BB9;   
                    }
                    .priceText{
                        font-size: 10px;
                        line-height: 16px;
                        color: #3F536C;
                        opacity: 0.7;
                    }
                }
            }
        }
    }
.asd{
    background-color: black;
}
#sd{
    font-size: 25px;
    color: black;
}
`;
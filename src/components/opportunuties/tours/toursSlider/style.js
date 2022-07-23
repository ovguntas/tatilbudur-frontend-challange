import styled from "styled-components";

export const ToursSliderWrapper = styled.div`
    .slider{
        position: relative;
        background: linear-gradient(45deg,#3f87a6,#fff);
        border-radius: 29px;
        img{
            width: 100%;
            height: 100%;
        }
        .sliderContent{
                position: absolute;
                top: 175px;
                left: 45px;
            .sliderContentHeading{
                width: 50%;
                font-size: 24px;
                color: #fff;
                font-weight: 700;
            }
            .sliderContentBody{
                .sliderContentText{
                    width: 50%;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 21px;
                    color: #fff;
                    margin-bottom: 30px;
                    
                }
                a{
                    text-decoration: none;
                    width: 135px;
                    height: 40px;
                    border-radius:590px ;
                    background-color: #fff;
                    color:#115BB9;
                    padding: 7px 14px;
                    transition: 0.2s ease-in-out;
                    font-weight: 600;
                    &:hover{
                        color: #fff;
                        background-color: #115BB9;
                    }
                }
            }
        }
    }
    .badge{
        position: absolute;
        top: 50px;
        right: 70px;
        .badgeText{
            position: absolute;
            top: 25px;
            left: 20px;
        }
    }
    .sliderBottom{
        display: flex;
        justify-content: space-around;
        margin-top:30px;
        gap: 1rem;
        .sliderBottomCard{
            flex: 1;
            display: flex;
            justify-content: flex-start;
            height: 70px;
            border-radius: 10px;
            border: 1px solid #CFD4DA;
            padding: 7px 14px;
            .sliderBottomCardImage{
                
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .sliderBottomCardText{
                flex: 1;
                font-size: 12px;
                font-weight: 600;
                color: #3F536C;
                padding-left: 5%;

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
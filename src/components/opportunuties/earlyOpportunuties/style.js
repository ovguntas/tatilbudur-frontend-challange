import styled from "styled-components";

export const EarlyOpportunutiesWrapper = styled.div`
    width: 80%;
    max-width: 1360px;
    border-radius: 13px;
    margin: 0 auto;
    margin-top: 50px;
.earlyOpportunutiesWrapperContainer{
    display:flex;
    flex-direction: column;
    .showOpportunutiesPart{
        height: 400px;
        display: flex;
        justify-content: space-between;
        .earlyOpportunutiesSlider{
            position: relative;
            .sliderImage{
                background:linear-gradient(45deg, #3f87a6,#fff);
                width: 780px;
                height: 350px;
                img{
                    opacity: 0.5;
                    width: 100%;
                    height: 100%;
                }
            }
            .sliderContent{
                width: 354px;
                height: 130px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: absolute;
                top: 150px;
                left: 55px;
                .paragraph{
                    color: #fff;
                    font-size: 30px;
                    line-height: 36px;
                }
                a{
                    width: 155px;
                    height: 40px;
                    padding: 7px 20px;
                    border-radius: 60px;
                    background-color:#FF9D00;
                    color: #fff;
                    text-decoration: none;
                    &:hover{
                        color: #FF9D00;
                        background-color: #fff;
                    }

                }
            }
        }
        .opportunityCardsContainer{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 340px;
            margin-right: 30px;
            .opportunityCard{
                width:350px;
                border-radius: 13px;
                display: flex;
                justify-content: space-between;
                .opportunityCardContent{
                    display: flex;
                    border: 1px solid #CFD4DA;
                    border-radius: 13px;
                    height: 160px;
                    .opportunityCardLeft{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        .paragraph{
                            width: 150px;
                            height:65px;
                            font-size: 16px;
                            line-height: 20px;
                            color: #3F536C;
                            font-weight: 500;
                            padding:7px;
                        }
                        a{
                            text-decoration: none;
                            width:112px;
                            height:30px;
                            background-color: #3F536C;
                            color:#fff;
                            border-radius: 60px;
                            padding: 7px 15px;
                            font-size: 12px;
                            line-height: 18px;
                        }
                    }
                    .opportunityCardRight{
                        width: 190px;
                        height: 160px;
                        img{
                            width: 100%;
                            height: 98%;
                            border-radius: 10px;
                        }
                    }
                }
            }

        }
    }
    .advantages{
        display: flex;
        justify-content: space-between;
        .adventegeCard{
            width: 380px;
            height: 100px;
            border: 1px solid #CFD4DA;
            border-radius: 13px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .adventegeCardContent{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .adventegeCardContentText{
                    width:230px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #3F536C;
                    strong{
                        font-weight: 700;
                    }
                }
                .adventegeCardContentIcon{
                    width: 45px;
                    height: 45px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    .muteText{
        width:200px;
        height: 15px;
        font-size: 10px;
        color:#3F536C;
        line-height: 15px;
        margin-left: 35px ;
        margin-top: 8px;
        margin-bottom: 15px;
        
    }
}
.specialForMemebers{
    background-color: #FFE267;
    opacity: 0.8;
    border-radius: 13px;
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    align-items: center;
    padding: 15px 20px;
    .memberIcon{
        margin-right: 0.5rem;
        width: 23px;
        height:24px;
        img{
            width:100%;
            height:100%;
        }
    }
    .specialForMemebersText{
        font-size: 14px;
        line-height: 21px;
        color:#3F536C;
        span{
            text-decoration: underline;
        }
        &:nth-child(1){
            display: flex;
            width: 255px;
            height: 20px;
            align-items: center;
            margin-left: 1rem;
        }
        &:nth-child(2){
            width: 400px;
            height: 20px;
        }
    }
    .login{
        width: 106px;
        height: 36px;
        border: 1px solid #6F7E8F4D;
        border-radius: 50px;
        text-decoration: none;
        margin-left: auto;
        margin-right: 2rem;
        border-radius: 50px;
        text-align: center;
        padding: 5px 7px;
        color:#000;
    }
}
@media (max-width:950px){
    min-height: 300px;

}
.asd{
    background-color: black;
}
#sd{
    font-size: 25px;
    color: black;
}
`;
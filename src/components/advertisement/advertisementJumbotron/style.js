import styled from "styled-components";

export const AdvertisementJumbotronWrapper = styled.div`
margin-top: 50px;
.jumbotronContainer{
    width: 80%;
    height: 230px;
    border-radius: 26px;
    background-color: #E2F2FA;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;

    .jumbotronLeft{
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .heading{
            padding-left:30px ;
            color:#3F536C;
            font-size: 20px;
            line-height: 30px;
            font-weight: 500;
        }
        .downloadLinksContainer{
            display: flex;
            justify-content: space-around;
            .downloadLink{
                cursor: pointer;
            }
        }
        
    }
    .jumbotronRight{
        flex: 1;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        .mobileAppImage{
            position: relative;
            top: -20px;
            height: 100%;

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
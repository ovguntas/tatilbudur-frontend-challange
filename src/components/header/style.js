import styled from "styled-components";

export const HeaderWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 56px;
background-color: #fff;
border: 1px solid #CFD4DA;
nav{
    width:100% ;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        width: 218px;
        height: 23px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .navMenu{
        display: flex;
        width: 20%;
       max-width: 297px;
        height: 23px;
        justify-content: inherit;
        .manuItem{
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #3F536C;
            cursor: pointer;
            .menuIcon{
                margin-left: 7px;
                img{
                    padding-bottom:3px
                }
            }
        }
        
    }
    .navbarRight{
            display: flex;
            justify-content: space-evenly;
            height:30px;
            width: 25%;
            min-width: 278px;
            .phoneButton{
                display: flex;
                width: 50%;
                max-width: 150px;
                border: 1px solid #6F7E8F4D;
                border-radius: 50px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                .phoneIcon{
                    margin-bottom: 4px;
                    width: 18px;
                    height: 15px;
                }
                .phoneNumber{
                    font-size: 13px;
                }

            }
            .login{
                min-width: 93px;
                width: 30%;
                max-width: 106px;
                border: 1px solid #6F7E8F4D;
                border-radius: 50px;
                background-color: #fff;
                &:hover{
                    background-color: #2A5AB3;
                    color: #fff;
                }
            }
        }
}

`;
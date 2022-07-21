import styled from "styled-components";

export const HeaderWrapper = styled.div`
width: 100%;
max-width: 1440;
height: 56px;
background-color: #fff;
nav{
    display: flex;
    border: 1px solid #CFD4DA;
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
        width: 297px;
        height: 23px;
        .manuItem{
            display: flex;
        }
        .navbarRight{
            height:30px;
            .phone{
                width: 150px;
            }
            .login button{
                width: 106px;
            }
        }
    }
    .navbarRight{
        display: flex;
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
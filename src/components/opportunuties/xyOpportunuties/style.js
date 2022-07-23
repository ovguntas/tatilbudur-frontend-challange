import styled from "styled-components";

export const XyOpportunutiesWrapper = styled.div`
margin: 0 auto;
margin-top: 50px;
width: 80%;
height: 460px;
display: flex;
flex-direction: column;
justify-content: space-between;
.xyOpportunutiesWrapperContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: flex-start;
    padding-left:55px ;
    background-color:#FDF2ED;
    border-radius: 26px;
    width: 100%;
    height: 100%;

    .heading{
        font-size: 24px;
        line-height: 35px;
        color: #3F536C;
        font-weight: 500;
        max-width: 250px;
    }
    .text{
        font-size: 16px;
        line-height: 25px;
        color: #3F536C;
        font-weight: 500;
        max-width: 750px;
        height: 50px;
        opacity: 50%;
    }

}
`;
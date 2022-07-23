import styled from "styled-components";

export const XyOpportunutiesCardWrapper = styled.div`
display: flex;
justify-content: space-evenly;
    .cardContainer{
        width: 200px;
        height: 150px;
        position: relative;
        .imageCardContainer{
            position: absolute;
            top: 0;
            left: 0;
            .imageCard{
                height: 100%;
                .imageCardImage{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .imageCardFooter{
                    position: absolute;
                    bottom: 15px;
                    left: 20px;
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    .imageCardFooterTextTop{
                        font-size: 14px;
                        line-height: 24px;
                        font-weight: 500;
                    }
                    .imageCardFooterTextBottom{
                        font-size: 12px;
                        line-height: 24px;
                        font-weight: 400;
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
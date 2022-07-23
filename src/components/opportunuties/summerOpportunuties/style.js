import styled from "styled-components";

export const SummerOpportunutiesWrapper = styled.div`
    width: 90%;
    background: #F6F5F8 0% 0% no-repeat padding-box;
    border-radius: 26px;
    margin: 0 auto;
    margin-top: 50px;
    .SummerOpportunutiesWrapperContainer{
        width: 90%;
        height: 570px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .heading{
            font-size: 24px;
            line-height: 35px;
            font-weight: 500;
            color: #3F536C;
            margin-bottom: 30px;
        }
        .featureFiltersContainerWrapper{
            width: 100%;
            display: flex;
            justify-content: space-between;
            a{
                text-decoration: none;
            }
            .featureFiltersContainer{
                width: 40%;
                display: flex;
                justify-content: space-between;
                .featureFilter{
                    font-size:14px;
                    font-weight: 600;
                    line-height: 21px;
                    color: #3F536C;
                }
            }
        }
        

}
`;
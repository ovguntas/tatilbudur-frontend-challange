import styled from "styled-components";

export const SearchWrapper = styled.section`
width: 80%;
border: 1px solid #CFD4DA;
border-radius: 13px;
margin: 0 auto;
margin-top: 50px;
.searchPart{
    display: flex;
    flex-direction: column;
    height: 230px;
    justify-content: center;
    gap: 1rem;
    .holidayTypes{
    display: flex;
    padding-left: 55px;
    max-width: 320px;
    width: 40%;
    text-align: center;
    .holidayType{
        display: flex;
        height: 23px;
        font-size: 16px;
        color: #3F536C;
        line-height: 25px;
        font-weight: 400;
        margin-right: 10px;
        span{
            width: 80px;
            }

        }
    }
    .filters{
    padding-left: 55px;
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width:1200px;
    height: 50px;
    .searchHotel{
        box-sizing: border-box;
        position: relative;
        width: 30%;
        max-width: 400px;
        min-width: 250px;
        input{
            height: 50px;
            padding-left: 45px;
            resize: none;
            width: 100%;
            border: 1px solid #CFD4DA;
            border-radius: 6px;
        }
        .filterIcon{
        position: absolute;
        top: 14px;
        left: 22px;
          width: 17px;
          height: 20px;
          img{
            width: 100%;
            height: 100%;
          }
        }
    }
    .searchDate{
        border: 1px solid #CFD4DA;
        border-radius: 6px;
        width: 25%;
        max-width: 280px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        .filterModal{
          padding-left: 15px;
          font-size:14px;
          line-height: 21px;
          color:#6F7E90;
        }
        .filterIcon{
            margin-left: 30px;
        }
    }
    .searchHowMany{
        border: 1px solid #CFD4DA;
        border-radius: 6px;
        width: 20%;
        max-width: 231px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .filterModal{
          padding-left: 15px;
          font-size:14px;
          line-height: 21px;
          color:#6F7E90;
        }
        .filterIcon{
            margin-left: 30px;
        }
        .modalOpaner{
            flex: 1;
            text-align: end;
            margin-right: 15px;
            padding-bottom: 3px;
        }
    }
    button{
        width: 20%;
        max-width: 180px;
        min-width: 150px;
        background-color: #2A5AB3;
        color: #fff;
        border-radius:60px;
    }

}
}

`;
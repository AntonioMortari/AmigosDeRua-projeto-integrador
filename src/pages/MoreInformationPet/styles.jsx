import styled from 'styled-components'


const ConteinerMoreInformation = styled.div`
    min-height: 100vh;
    width: 80%;

    margin: auto;
    margin-top: 20px;
    margin-bottom: 40px;

    .conteiner-button-back{
        margin-bottom: 20px;
    }

    .conteiner-image{
        width: 50%;
        height: 60%;

        @media screen and (max-width:800px){
            width: 100%;
        }
    }

    .conteiner-info{
        width: 50%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;

        @media screen and (max-width:800px){
            width: 100%;
        }
        
        .title{
            display:flex;
            align-items: center;
            justify-content: space-between;

            .name-pet{
                color: ${({theme}) => theme.COLORS.blue};
                font-size: 2rem;  
            }
        }

        .content{
            p{
                font-size: 1.3rem;
                color: #262626ae;
                display: flex;
                align-items: center;
                gap: 7px;
                font-weight: 500;
            }

            .description{
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                text-align: justify;
                font-weight: normal;
                
                span{
                    color: ${({theme}) => theme.COLORS.blue_light};
                }
            }
        }
        

        button{
            margin-top: 25px;
            align-self: end;
            &:hover{
                transform: translateY(-10%);
            }
        }
    }

`

export default ConteinerMoreInformation
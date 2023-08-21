import styled from 'styled-components'

const ConteinerHome = styled.main`
    width: 85%;
    margin: auto;

    >.conteiner-content{
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width:670px) {
            flex-direction: column;
        }

        >.conteiner-text{
            width: 50%;
            >h1{
                font-size: 2.8rem;
                margin-bottom: 12px;

                @media screen and (max-width:800px) {
                    font-size: 2.2rem;
                }

            }

            >p{
                line-height: 1.5rem;
                font-size: 1.2rem;

                >span{
                    color: ${({theme}) => theme.COLORS.orange};
                    font-weight: bold;
                }
            }

            button{
                margin-top: 35px;

                &:hover{
                    transform: translateY(-5px);
                }
            }

            @media screen and (max-width:670px) {
                margin-top: 40px;
                width: 100%;
            }
        }

        >.conteiner-image{
            display: flex;
            width: 50%;
            >img{
                width: 110%;
            }

            @media screen and (max-width:670px) {
                width: 90%;
                justify-content: center;
            }
        }
        
    }
`

export default ConteinerHome;
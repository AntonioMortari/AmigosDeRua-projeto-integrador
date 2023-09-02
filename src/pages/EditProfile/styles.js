import styled from 'styled-components'

const ConteinerProfile = styled.div`
    min-height: 100vh;

    /* opções de background */

    /*background-color:#F8E3CC; */
/* 
    background-image: linear-gradient(135deg, ${({theme}) => theme.COLORS.orange} 45% ,${({theme}) => theme.COLORS.white_200} 45% ); */

    background-image: linear-gradient(135deg, ${({theme}) => theme.COLORS.white_200} 50% ,${({theme}) => theme.COLORS.orange} 50% );

    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .conteiner-button-back{
        width: 500px;

        @media screen and (max-width:540px) {
            width: 80%;
        }

        margin-bottom: 10px;
    }

    main{
        max-width: 500px;

        @media screen and (max-width:540px) {
            width: 80%;
        }
        background-color: ${({theme }) => theme.COLORS.white_200} ;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(38, 38, 38, 0.164);
        display: flex;
        flex-direction: column;
        gap: 30px;

        .conteiner-avatar{
            display: flex;
            align-items: center;
            gap: 40px;

            h3{
                font-size: 1.6rem;
                font-weight: normal;
            }
        }

        .conteiner-info-user{
            h3{
                color: ${({theme}) => theme.COLORS.blue};
                font-weight: normal;
            }
        }

        .conteiner-action{
            display: flex;
            gap: 10px;
            justify-content: space-around;
        }

    }
`;

export default ConteinerProfile
import styled from 'styled-components'


const ConteinerMoreInformation = styled.div`
    min-height: 100vh;
    width: 80%;
    margin: auto;
    padding: 30px;
    border: 1px solid rgba(38, 38, 38, 0.075);

    .conteiner-button-back{
        padding: 25px;
    }

    .conteiner-image{
        width: 50%;

        @media screen and (max-width:800px){
            width: 100%;
        }
    }

    .conteiner-info{
        width: 50%;

        @media screen and (max-width:800px){
            width: 100%;
        }

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;

        >h2{
            color: ${({theme}) => theme.COLORS.blue};
            font-size: 2rem;
        }

        button{
            &:hover{
                transform: translateY(-10%);
            }
        }
    }
`

export default ConteinerMoreInformation
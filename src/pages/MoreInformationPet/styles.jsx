import styled from 'styled-components'


const ConteinerMoreInformation = styled.div`
    min-height: 100vh;
    width: 80%;

    margin: auto;
    margin-top: 20px;

    .conteiner-button-back{
        margin-bottom: 20px;
    }

    .conteiner-image{
        width: 50%;
        max-height: 60%;

        @media screen and (max-width:800px){
            width: 100%;
        }
    }

    .conteiner-info{
        width: 50%;
        max-height: 60%;

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

            >h2{
                color: ${({theme}) => theme.COLORS.blue};
                font-size: 2rem;  
            }

        }
        

        button{

            align-self: end;
            &:hover{
                transform: translateY(-10%);
            }
        }
    }
`

export default ConteinerMoreInformation
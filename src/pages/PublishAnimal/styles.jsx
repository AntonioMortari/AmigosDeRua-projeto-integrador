import styled from 'styled-components'

const ConteinerPublishAnimal = styled.div`
    width: 70%;
    margin: 30px auto;
    padding: 25px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.white_100};
    box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.24);

    @media screen and (max-width:800px){
        width: 90%;
    }

    h1{
        text-align: center;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.blue};
        padding-bottom: 8px;
    }

    form{
        padding:20px;
        display: flex;
        flex-direction: column;
        gap:30px;

        label{
            display: flex;
            flex-direction: column;
            color: #262626;

            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
                /* tira as setas padrão do input number */
                -webkit-appearance: none;
                appearance: none;
                margin: 0;
            }

            .alertImage{
                color: #26262686;
                font-size: .9rem;
            }
        }

        select{
            padding:10px;
            border-radius:8px;
            width: 50%;

            @media screen and (max-width:650px) {
                width:90%;
            }

            &:focus{
                outline: 1px solid ${({theme}) => theme.COLORS.orange};
            }

            option{
                color:#262626;
            }
        }
    }
`

export default ConteinerPublishAnimal
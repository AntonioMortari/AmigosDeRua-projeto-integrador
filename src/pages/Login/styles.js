import styled from 'styled-components'

const Conteiner = styled.main`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.blue};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >.conteiner-login{
        background-color: ${({ theme }) => theme.COLORS.white_100};

        max-width: 350px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.185);

        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;

        >h2{
            font-size: 2rem;
            color: #262626;
            border-bottom: 1px solid rgba(38, 38, 38, 0.13);
            padding-bottom: 8px;
        }

        >p{
            color:#26262692;

            >a{
                color: ${({theme}) => theme.COLORS.blue};
            }
        }

        >form{
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 25px;

            >button{
                margin-top: 25px;
            }
        }
         
    }
`

export default Conteiner
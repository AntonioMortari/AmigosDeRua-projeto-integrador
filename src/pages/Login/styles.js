import styled from 'styled-components'

const Conteiner = styled.main`
    min-height: 100vh;
    background-image: linear-gradient(135deg, ${({theme}) => theme.COLORS.blue} 45% ,${({theme}) => theme.COLORS.white_200} 45% );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >.main{
        margin:30px;
        background-color: ${({ theme }) => theme.COLORS.white_100};

        max-width: 400px;
        min-width: 320px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.285);

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
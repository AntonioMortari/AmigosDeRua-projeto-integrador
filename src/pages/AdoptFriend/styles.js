import styled from 'styled-components'

const ConteinerAdoptFriend = styled.div`
    min-height: 100vh;
    main{
        margin: auto;
        width: 90%;

        >h2{
            padding:20px;
            font-size: 2rem;
            font-weight: normal;
            color: ${({theme}) => theme.COLORS.blue};
        }

        .conteiner-filters{
            width: 100%;
            background-color: ${({theme}) => theme.COLORS.white_100};
            padding: 20px;
            border-radius: 8px;
            display: flex;
            align-items:center;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;

            select{
                padding:10px;
                border-radius: 8px;
                text-align: center;
                &:focus{
                    outline:2px solid ${({theme}) => theme.COLORS.orange};
                }
            }

            button{
                width:100px;
            }
        }

        .conteiner-publications{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
`

export default ConteinerAdoptFriend
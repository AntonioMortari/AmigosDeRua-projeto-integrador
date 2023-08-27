import styled from 'styled-components'

const Footer = styled.footer`
    background-color: ${({theme}) => theme.COLORS.blue};
    color: ${({theme}) => theme.COLORS.white_100};
    
    padding: 15px 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    >.links-footer{
        display: flex;
        flex-direction: column;
        gap: 20px;

        >a{
            color:${({theme}) => theme.COLORS.white_100};

            &:hover{
                text-decoration: underline;
            }
        }

        >.conteiner-social-media{
            display: flex;
            gap: 20px;
        }
    }

    >form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: clamp(200px, 320px, 350px);

        >label{
            display: flex;
            flex-direction:column;
            gap: 15px;
            color: ${({theme}) => theme.COLORS.white_200};
            

            >input{
                padding: 8px;
                border-radius: 5px;
                border: none;

                &:focus{
                    outline: 2px solid ${({theme}) => theme.COLORS.orange};
                }
            }
        }

        >button{
            padding: 6px;
            border-radius: 5px;
            width: 40%;
            border: none;
            background-color: ${({theme}) => theme.COLORS.orange};
            color: ${({theme}) => theme.COLORS.white_100};

            transition:.3s;

            &:hover{
                box-shadow: 0px 0px 6px ${({theme}) => theme.COLORS.orange};
            }
        }
    }

    @media screen and (max-width:580px) {
        flex-direction: column;
        padding: 30px 5px;
        gap: 40px;

        >.links-footer{
            width: 100%;
            align-items: center;
        }
    }
`

export default Footer
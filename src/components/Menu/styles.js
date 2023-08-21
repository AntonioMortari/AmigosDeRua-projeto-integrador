import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    >a>img{
        width: 4.5rem;
    }

    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media screen and (max-width:800px){
        justify-content: space-between;
        padding: 10px 40px;
    }

    >.burguer-button{
        background-color: transparent;
        border: none;
    }

    >nav{
        display: flex;
        align-items: center;
        gap: 25px;

        >a.active{
                background-color: ${({theme}) => theme.COLORS.blue_active};
                padding: 5px 10px;
                border-radius: 10px;
                border: 1px solid ${({theme}) => theme.COLORS.blue_light};

                transition:.3s;

                &:active{
                    transform:scale(.85);
                }

                &::before{
                    height: 0;
                }
        }

        >a{
            position: relative;

            &::before{
                content: '';
                width: 0%;
                height: 2px;
                background-color: ${({theme}) => theme.COLORS.orange};
                position: absolute;
                bottom: -5px;
                left: 0;

                transition: all.5s;
            }

            &:hover::before{
                width: 100%;
            }
        }

        @media screen and (max-width:705px){
            gap: 8px;
        }

        >button{
            margin-left: 15px;
        }
    }
`

export default Header
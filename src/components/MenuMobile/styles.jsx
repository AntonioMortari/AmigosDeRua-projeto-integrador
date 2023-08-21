import styled, {keyframes} from 'styled-components'

const entrance_animation = keyframes`
0%{transform:scaleY(0);transform-origin:100% 0;opacity:1}100%{transform:scaleY(1);transform-origin:100% 0;opacity:1}
`

const Conteiner = styled.div`
    position:fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 100;

    background-color: #0077fed1;
    backdrop-filter: blur(3px); //efeito de fundo embaçado

    animation:${entrance_animation} .3s cubic-bezier(.25,.46,.45,.94) both;

    >svg{
        color: white;
        cursor: pointer;

        position: absolute;
        top: 1rem;
        right: 1.5rem;
    }

    >a{
        width: 100%;
        text-align: center;
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.14);

        color: ${({theme}) => theme.COLORS.white_100};
        transition: .3s;

        &:hover{
            background-color: #ffffff2b;
        }
    }

    >button{
        margin-top: 30px;
    }

    >.active{
        background-color: ${({theme}) => theme.COLORS.blue};

        &:hover{
            background-color: ${({theme}) => theme.COLORS.blue};
        }
    }
`

export default Conteiner
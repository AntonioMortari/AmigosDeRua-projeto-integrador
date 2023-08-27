import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        color: #262626;
    }

    body{
        min-height: 100vh;
        color: #262626;
        background-color: ${({theme}) => theme.COLORS.white_200};

        overflow-x: hidden;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: #262626;
    }

`
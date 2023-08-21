import styled from 'styled-components'

import {Link} from 'react-router-dom'

const Button = styled.button`
    padding: 10px;
    background-color: ${({theme, color}) => color == 'orange' ? theme.COLORS.orange : theme.COLORS.blue};

    border-radius: 8px;
    border: none;

    transition: all.5s;

    &:hover{
        box-shadow: 0px 0px 5px ${({theme, color}) => color == 'orange' ? theme.COLORS.orange : theme.COLORS.blue};
    }

    >a{
        color: ${({theme}) => theme.COLORS.white_100};
        font-size: 1rem;
    }
`

function ComponentButton({to,content,color, onClick }) {
    return ( 
        <Button color={color} onClick={onClick}>
            <Link to={to}>{content}</Link>
        </Button>
     );
}

export default ComponentButton;
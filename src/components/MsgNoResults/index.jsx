import styled from 'styled-components'

const P = styled.p`
    color: ${({theme}) => theme.COLORS.blue};
    margin-top: 50px;
    text-align: center;
    font-size: 1.5rem;
`

function MsgNoResults({msg}) {
    return (  
        <P>
            {msg}
        </P>
    );
}

export default MsgNoResults;
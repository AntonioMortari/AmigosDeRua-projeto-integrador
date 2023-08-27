import styled from 'styled-components'

const ConteinerCardPet = styled.div`
    transition: all.3s;

    h4{
        font-size: 1.2rem;
    }

    p{
        color: #2626268d;
    }

    button{
        transition:.5s;
        &:hover{
            transform:translateY(-12%);
        }
    }
`

export default ConteinerCardPet
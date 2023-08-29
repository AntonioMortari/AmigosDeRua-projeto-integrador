import styled from 'styled-components'

const Conteiner = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 260px;
    height: 220px;
    text-align: center;

    background-color: ${({theme}) => theme.COLORS.white_100};
    clip-path:circle();
    padding: 45px;

    >span{
        color: ${({theme}) => theme.COLORS.blue};
        font-size: clamp(2rem, 3rem, 5rem);
    }

    >p{
        font-size: 1.3rem;
    }

    @media screen and (max-width:1000px) {
        gap: 5px;

        >span{
            font-size: 2rem;
        }

        >p{
            font-size: 1.2rem;
        }

        @media screen and (max-width:500px) {
            width: 190px;
        }
    }
`

function Number({number,description}) {
    return ( 
        <Conteiner>
            <span>{number}</span>
            <p>{description}</p>
        </Conteiner>
     );
}

export default Number;
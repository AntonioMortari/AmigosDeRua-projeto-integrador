import styled from 'styled-components'

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    width: 330px;
    height:400px;
    padding: 25px;
    padding-bottom: 30px;

    background-color: ${({theme}) => theme.COLORS.white_100};
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.034);

    transition: .4s;

    &:hover{
        background-color:rgba(38, 38, 38, 0.027);
    }

    >img{
        width: 140px;
    }

    >h4{
        text-align: center;
        font-size: 1rem;
    }

    >p{
        color: gray;
    }
`

function Card({src, title, content}) {
    return ( 
        <Conteiner>
            <img src={src} alt={`Imagem do card :${title}`} />
            <h4>{title}</h4>

            <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
        </Conteiner>
     );
}

export default Card;
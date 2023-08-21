import styled from 'styled-components'

// images
import ong1 from '../../../images/ongs/ong1.webp'
import ong2 from '../../../images/ongs/ong2.png'
import ong3 from '../../../images/ongs/ong3.png'
import ong4 from '../../../images/ongs/ong4.webp'

const ConteinerOngs = styled.div`
    margin:60px auto;

    height: 150px;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    >img{
        cursor: pointer;
        width: 80px;
        opacity: .5;
        filter: grayscale(100%);
    }

`

function OngsSection() {
    return ( 
        <ConteinerOngs>
            <img src={ong1} alt="Imagem de ONG parceira" />
            <img src={ong2} alt="Imagem de ONG parceira" />
            <img src={ong3} alt="Imagem de ONG parceira" />
            <img src={ong4} alt="Imagem de ONG parceira" />
        </ConteinerOngs>
     );
}

export default OngsSection;
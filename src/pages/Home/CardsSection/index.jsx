import styled from 'styled-components'

// images
import srcAdopt from '../../../images/icons-card-home/adopt.svg'
import srcPublish from '../../../images/icons-card-home/publish-animal.svg'
import srcHelpNgo from '../../../images/icons-card-home/donate-to-ngo.svg'

import Card from './card'

const ConteinerCards = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
`

function CardsSection() {
    return ( 
        <ConteinerCards>
            <Card src = {srcAdopt} title='Adote um amigo' content='Descubra uma variedade de pets que estão ansiosos para fazer parte da sua família. Ao adotar, você dá a eles um lar e recebe amor incondicional em troca' />

            <Card src={srcPublish} title='Divulgue animais que precisam de um lar' content='Seja uma ponte entre pets adoráveis e lares amorosos. Sua contribuição ao divulgar animais em busca de um lar faz toda a diferença.' />

            <Card src={srcHelpNgo} title='Contribuia com as ONGs' content='As ONGs desempenham um papel vital na proteção e no bem-estar dos animais. Sua contribuição ajuda a fornecer cuidados, abrigo e carinho a pets em necessidade.' />
        </ConteinerCards>
     );
}

export default CardsSection;
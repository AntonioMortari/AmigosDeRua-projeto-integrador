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
    gap: 20px;
`

function CardsSection() {
    return ( 
        <ConteinerCards>
            <Card src = {srcAdopt} title='Adote um amigo' content=' inventore atque? Modi enim cupiditate nisi, architecto excepturi mollitia soluta doloribus libero optio' />

            <Card src={srcPublish} title='Divulgue animais que precisam de um lar' content=' inventore atque? Modi enim cupiditate nisi, architecto excepturi mollitia soluta do' />

            <Card src={srcHelpNgo} title='Contribuia com as ONGs' content=' inventore atque? Modi enim cupiditate nisi, architecto excepturi mollitia soluta dolo' />
        </ConteinerCards>
     );
}

export default CardsSection;
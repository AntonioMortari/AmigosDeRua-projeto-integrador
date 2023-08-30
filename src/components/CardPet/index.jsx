import { useState} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import ConteinerCardPet from './styles'
import Button from '../../components/Button'
import {
    Card,
    CardBody,
    Image,

} from '@chakra-ui/react'
import CardPetMobile from '../CardPetMobile'

function CardPet({ publication }) {
    // pegando largura da tela
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    
    const navigate = useNavigate()

    return (
        <ConteinerCardPet>
            {windowWidth > 800 ? (
                <Card
                    maxW='xs'
                    h='sm'
                    mt='20px'
                    variant='filled'
                >
                    <CardBody
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                    >
                        <Link to={`/more-information-pet/${publication.id}`}>

                            <Image
                                src={publication.image}
                                borderRadius='lg'
                                h='190px'
                                w='250px'
                                display='block'
                                objectFit='cover'
                            />
                        </Link>
                        <h4>{publication.name}</h4>
                        <p>{publication.city}, {publication.uf}</p>

                        <Button content='Detalhes' color='blue' onClick={() => navigate(`/more-information-pet/${publication.id}`)} />

                    </CardBody>
                </Card>
            ) : (
                <CardPetMobile publication={publication} />
            )}

        </ConteinerCardPet>
    );
}

export default CardPet;
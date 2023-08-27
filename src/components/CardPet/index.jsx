import { useState } from 'react'
import {Link} from 'react-router-dom'


import ConteinerCardPet from './styles'
import Button from '../../components/Button'
import {
    Card,
    CardBody,
    Image,

} from '@chakra-ui/react'
import CardPetMobile from '../CardPetMobile'

function CardPet({publication}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize',() => setWindowWidth(window.innerWidth))


    return (
        <ConteinerCardPet>
            {windowWidth > 800 ? (
                <Link to={`/more-information-pet/${publication.id}`}>
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
                        <Image
                            src={publication.image}
                            borderRadius='lg'
                            h='200px'
                            w='250px'
                            objectFit='cover'
                        />
                        <h4>{publication.name}</h4>
                        <p>{publication.city}, {publication.uf}</p>
                        <Button content='Detalhes' color='blue' to={`/more-information-pet/${publication.id}`} />
                    </CardBody>
                </Card>
                </Link>
            ) : (
                <CardPetMobile publication={publication} />
            )}
            
        </ConteinerCardPet>
    );
}

export default CardPet;
import {Link} from 'react-router-dom'

import {
    Card,
    Image,
    Stack,
    CardBody,
    CardFooter
} from '@chakra-ui/react'

import Button from '../Button';

function CardPetMobile({ publication }) {
    return (
        <Link to={`/more-information-pet/${publication.id}`}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='filled'
                mt='40px'
            >
                <Image
                    objectFit='cover'
                    h='190px'
                    w='240px'
                    src={publication.image}
                />

                <Stack>
                    <CardBody w='220px'>
                        <h4>{publication.name}</h4>

                        <p>{publication.city}, {publication.uf}</p>
                    </CardBody>

                    <CardFooter display='flex' alignItems='center' justifyContent='space-between'>
                        <Button color='blue' content='Detalhes' to={`/more-information-pet/${publication.id}`} />
                    </CardFooter>
                </Stack>
            </Card>
        </Link>
    );
}

export default CardPetMobile;
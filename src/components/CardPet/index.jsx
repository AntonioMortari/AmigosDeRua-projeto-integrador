import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

import functions from '../../functions'
import {users} from '../../axios/config'

import ConteinerCardPet from './styles'
import ButtonFavorite from '../../components/ButtonFavorite/index.jsx';
import Button from '../../components/Button'
import {
    Card,
    CardBody,
    Image,

} from '@chakra-ui/react'
import CardPetMobile from '../CardPetMobile'

function CardPet({ publication }) {
    // pegando largura da janela
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    
    // estados
    const [isChecked, setIsChecked] = useState(false)
    const [dataUser, setDataUser] = useState(null)
    
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.isLogged)


    const handleIsChecked = (idPetFavorite) =>{

        if(!isLogged){
            // se não estiver logado, redirecione a pagina de login
            navigate('/login')
            return
        }

        setIsChecked(!isChecked)
    }


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
                                objectFit='cover'
                            />
                        </Link>
                        <h4>{publication.name}</h4>
                        <p>{publication.city}, {publication.uf}</p>

                        <ButtonFavorite onChange={() => handleIsChecked(publication.id)} isChecked={isChecked} />

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
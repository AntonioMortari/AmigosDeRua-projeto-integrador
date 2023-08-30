import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { publicationsApi, users } from '../../axios/config'
import functions from '../../functions';

import ConteinerMoreInformation from './styles.jsx'
import ButtonBack from '../../components/ButtonBack'
import Button from '../../components/Button';
import ButtonFavorite from '../../components/ButtonFavorite'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

// icons
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail as MdEmail, MdNestCamWiredStand } from 'react-icons/md'

// modal
import {
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
    Text,
    Link
} from '@chakra-ui/react'


function MoreInformationPet() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    const [dataPet, setDataPet] = useState([])

    const [dataUser, setDataUser] = useState({
        id: '',
        favorites: []
    })

    const { id } = useParams()

    // modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    const getDataPetById = async () => {
        // dados do pet clicado
        const url = `/publications/${id}`
        await publicationsApi.get(url)
            .then(response => setDataPet(response.data))
            .catch(err => console.log(err))
    }

    const getDataUser = async () => {
        // pegar dados do usuário logado
        const idUser = JSON.parse(localStorage.getItem('idUser'))
        const tempDataUser = await functions.getDataUserById(idUser)
        setDataUser(tempDataUser)
    }

    const addToFavorites = () => {
        if (!dataUser.favorites.includes(id)) {

            const newDataUser = { ...dataUser }
            newDataUser.favorites.push(id)

            attDataUser(newDataUser)
        }
    }

    const removeToFavorites = () => {
        const newDataUser = { ...dataUser }
        const index = newDataUser.favorites.indexOf(id)
        newDataUser.favorites.splice(index,1)

        attDataUser(newDataUser)
        
    }

    const attDataUser = async (newDataUser) => {
        const url = `/users/${newDataUser.id}`
        users.put(url, newDataUser)
            .then(response => console.log(response))
            .catch(err => console.log(err))

        setDataUser(newDataUser)
    }


    useEffect(() => {
        if (id) {
            getDataPetById()
            getDataUser()
        }
    }, [])

    return (
        <>
            <Menu />

            <ConteinerMoreInformation>
                <div className="conteiner-button-back">
                    <ButtonBack onClick={() => window.history.back()} txt='Voltar' />
                </div>

                <Stack gap='20px' direction={windowWidth > 800 ? 'row' : 'column'} >
                    <div className='conteiner-image'>
                        <Image
                            src={dataPet.image}
                            w='100%'
                            h='100%'
                            objectFit='cover'
                            borderRadius='8px' />
                    </div>

                    <div className="conteiner-info">
                        <div className="title">
                            <h2>{dataPet.name}</h2>


                            {dataUser.favorites.includes(id) ? (
                                <ButtonFavorite isChecked={true} onChange={removeToFavorites} />
                            ) : (
                                <ButtonFavorite isChecked={false} onChange={addToFavorites} />
                            )}
                            
                        </div>
                        <p>{dataPet.sigleUf} | {dataPet.uf} | {dataPet.city}</p>
                        <p>Espécie: {dataPet.specie}.</p>
                        <p>Porte: {dataPet.size}.</p>
                        <p>Genêro: {dataPet.sex}.</p>
                        <p>{dataPet.description}</p>

                        <Button color='orange' content='Entrar em contato' onClick={onOpen} />
                    </div>

                    {/* MODAL */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent margin='10% 20px'>
                            <ModalCloseButton />

                            <ModalHeader mt='30px'>Entre em contato com {dataPet.donor}</ModalHeader>

                            <ModalBody>

                                <Stack>
                                    <Text display='flex' alignItems='center' gap='20px'> <FiPhone size='20' fill='orange' /> {dataPet.phoneNumber} </Text>

                                    <Text display='flex' alignItems='center' gap='20px'><MdEmail size='20' fill='orange' /> {dataPet.email}</Text>
                                </Stack>

                            </ModalBody>

                            <ModalFooter display='flex' justifyContent='space-around'
                                gap='30px'>

                                <Button onClick={onClose} content='Fechar' color='blue' />

                                <Link href={`https://wa.me//19992276384?text=Olá! Tenho%20interesse%20em%20adotar%20o(a)%20${dataPet.name}`}>
                                    Entre em contato via Whatsapp <FaWhatsapp />
                                </Link>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Stack>
            </ConteinerMoreInformation>
            <Footer />

        </>
    );
}

export default MoreInformationPet;
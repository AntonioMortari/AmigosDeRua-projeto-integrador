import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { publicationsApi } from '../../axios/config'

import ConteinerMoreInformation from './styles.jsx'
import ButtonBack from '../../components/ButtonBack'
import Button from '../../components/Button';
import Footer from '../../components/Footer'

import {FiPhone } from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import {MdOutlineEmail as MdEmail} from 'react-icons/md'
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
    const [dataPet, setDataPet] = useState([])
    // modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    const { id } = useParams()

    const getDataPetById = async () => {
        const url = `/publications/${id}`
        await publicationsApi.get(url)
            .then(response => setDataPet(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (id) {
            getDataPetById()
        }
    }, [])

    return (
        <>

            <ConteinerMoreInformation>
                <div className="conteiner-button-back">
                    <ButtonBack onClick={() => window.history.back()} txt='Voltar' />
                </div>

                <Stack direction={windowWidth > 800 ? 'row' : 'column'} >
                    <div className='conteiner-image'>
                        <Image
                            src={dataPet.image}
                            w='100%'
                            h='300px'
                            objectFit='cover'
                            borderRadius='8px' />
                    </div>

                    <div className="conteiner-info">
                        <h2>{dataPet.name}</h2>

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
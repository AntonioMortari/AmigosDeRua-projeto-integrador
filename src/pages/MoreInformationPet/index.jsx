import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import dataBase from '../../axios/config'
import functions from '../../functions';

import ConteinerMoreInformation from './styles.jsx'
import ButtonBack from '../../components/ButtonBack'
import Button from '../../components/Button';
import ButtonFavorite from '../../components/ButtonFavorite'
import Loading from '../../components/Loading'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

// icons
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail as MdEmail } from 'react-icons/md'
import { HiOutlineLocationMarker as HiLocation } from 'react-icons/hi'
import { LuDog, LuCat } from 'react-icons/lu'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'

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

    const [dataPet, setDataPet] = useState(null)

    const idUser = JSON.parse(sessionStorage.getItem('idUser'))

    const [dataUser, setDataUser] = useState({
        id: '',
        favorites: [],
        publications: []
    })

    const { id } = useParams()
    const navigate = useNavigate()

    // modal
    const { isOpen, onOpen, onClose } = useDisclosure()


    const getDataPetById = async () => {
        // dados do pet clicado
        const url = `/publications/${id}`
        await dataBase.get(url)
            .then(response => setDataPet(response.data))
            .catch(err => console.log(err))

    }

    const getDataUser = async () => {
        // pegar dados do usuário logado
        const tempDataUser = await functions.getDataUserById(idUser)
        setDataUser(tempDataUser)
    }

    const remoteToPublications = async () => {
        let url = `/publications/${id}`

        await dataBase.delete(url)
            .catch(err => console.log(err))

        const newDataUser = { ...dataUser }

        // excluindo publicação pelo id
        const index = newDataUser.publications.indexOf(id)
        newDataUser.publications.splice(index, 1)

        // atualizando dados do usuário
        url = `/users/${newDataUser.id}`
        await dataBase.put(url, newDataUser)
        navigate("/profile")
    }

    const EditPublications = () => {
        navigate(`/edit-animal/${id}`)
    }

    const addToFavorites = () => {

        if (!dataUser.id) {
            navigate('/login')
            return
        }

        if (!dataUser.favorites.includes(id)) {

            const newDataUser = { ...dataUser }
            newDataUser.favorites.push(id)

            attDataUser(newDataUser)
        }
    }

    const removeToFavorites = () => {
        const newDataUser = { ...dataUser }
        const index = newDataUser.favorites.indexOf(id)
        newDataUser.favorites.splice(index, 1)

        attDataUser(newDataUser)

    }

    const attDataUser = async (newDataUser) => {
        const url = `/users/${newDataUser.id}`
        dataBase.put(url, newDataUser)
            .catch(err => console.log(err))

        setDataUser(newDataUser)
    }


    useEffect(() => {
        if (id) {
            if (idUser) {
                getDataUser()
            }
            getDataPetById()
        }
    }, [])

    return (
        <>
            <Menu />

            <ConteinerMoreInformation>
                {dataPet ? (
                    <>
                        <div className="conteiner-button-back">
                            <ButtonBack onClick={() => window.history.back()} txt='Voltar' />
                        </div>

                        <Stack gap='20px' direction={windowWidth > 800 ? 'row' : 'column'} >
                            <div className='conteiner-image'>
                                <Image
                                    src={dataPet.image}
                                    w='100%'
                                    h='90%'
                                    objectFit='cover'
                                    borderRadius='8px'
                                    onClick={onOpen} />
                            </div>

                            <div className="conteiner-info">
                                <div className="title">

                                    <h2 className='name-pet'>{dataPet.name}</h2>

                                    {dataUser.publications.includes(id) || (


                                        dataUser.favorites.includes(id) ? (
                                            <ButtonFavorite isChecked={true} onChange={removeToFavorites} />
                                        ) : (
                                            <ButtonFavorite isChecked={false} onChange={addToFavorites} />
                                        )
                                    )}

                                </div>

                                <div className="content">
                                    <p><HiLocation size='25' title='Localização' fill='#ffdd9d' />{dataPet.uf} | {dataPet.city}</p>

                                    <p>
                                        {dataPet.specie == 'Cachorro' ? (
                                            <LuDog size='25' title='Cachorro' />
                                        ) : (
                                            <LuCat size='25' title='Gato' />
                                        )}

                                        {dataPet.specie}
                                    </p>

                                    <p>
                                        {dataPet.sex == "Macho" ? (
                                            <BsGenderMale size='25' fill='blue' title='Macho' />
                                        ) : (
                                            <BsGenderFemale size='25' fill='pink' title='Fêmea' />
                                        )}

                                        {dataPet.sex}
                                    </p>

                                    <p>
                                        Porte {dataPet.size}, {dataPet.age}
                                    </p>

                                    <p className='description'>
                                        <span>Descrição</span>

                                        {dataPet.description}
                                    </p>
                                </div>



                                {dataUser.publications.includes(id) ? (
                                    <Stack direction="row" alignSelf="end">
                                        <Button content="Excluir" color="orange" onClick={remoteToPublications} />
                                        <Button content="Editar" color="blue" onClick={EditPublications} />

                                    </Stack>
                                ) : (
                                    <Button content="Entrar em contato" color="orange" onClick={onOpen} />
                                )}
                            </div>



                            {/* MODAL "Entre em contato" */}
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent margin='10% 20px'>
                                    <ModalCloseButton border='none' />

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
                    </>

                ) : (
                    <Loading />
                )}


            </ConteinerMoreInformation>
            <Footer />

        </>
    );
}

export default MoreInformationPet;
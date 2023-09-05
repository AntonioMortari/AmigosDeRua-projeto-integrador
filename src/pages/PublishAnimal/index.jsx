import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import shortid from 'shortid';

import axios from 'axios';
import dataBase from '../../axios/config';
import functions from '../../functions'

import ConteinerPublishAnimal from './styles'
import Menu from '../../components/Menu'
import Button from '../../components/Button'
import AlertError from '../../components/AlertError'
import AlertSucess from '../../components/AlertSucess'

import {
    Divider,
    Input,
    FormLabel,
    Stack,
    Textarea,
} from '@chakra-ui/react'


const initialValues = {
    name: '',
    age: '',
    uf: '',
    sigleUf: '',
    specie: '',
    sex: '',
    size: '',
    description: '',
    city: '',
    phoneNumber: '',
    image: ''
}

function PublishAnimal() {
    // largura da janeça
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    // dados do usuário
    const isLogged = useSelector(state => state.isLogged)
    const [dataUser, setDataUser] = useState([])

    const [values, setValues] = useState(initialValues)
    const [ufs, setUfs] = useState([])
    const [cities, setCities] = useState([])

    // alerta de erro
    const [showAlertError, setShowAlertError] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    // alerta de sucesso
    const [showAlertSuccess, setShowAlertSuccess] = useState(false)

    const navigate = useNavigate()

    const getUfs = async () => {
        // cria as options com todos os estados
        await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(resp => setUfs(resp.data))
            .catch(err => console.log(err))
    }

    const getCities = async (selectedState) => {
        // cria as options com todas as cidades de um estado

        if (selectedState.length == 0) {
            // se não houver estado selecionado, as options de city vão desaparecer
            setCities([])
            return
        }

        await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
            .then(resp => setCities(resp.data))
            .catch(err => console.log(err))
    }

    const handleValues = (e, idOption) => {
        // pega os valores dos inputs e options e atualiza o obj values
        setShowAlertError(false)
        setAlertMessage('')

        const { name, value } = e.target

        if (name == 'phoneNumber' && value.length >= 12) {
            // para garantir que será 12 digitos de número de telefone
            return
        }

        const newValues = { ...values }
        newValues[name] = value

        if (name == 'uf') {
            // se estiver selecionando um estado, busque as cidades desse estado selecionado com a função getCities()
            newValues.sigleUf = idOption
            getCities(idOption)
        }

        setValues(newValues)
    }


    const getDataUser = async () => {
        // pegar dados do usuário logado pelo id armazenado no sessionStorage
        const idUser = JSON.parse(sessionStorage.getItem('idUser'))
        if (idUser) {
            const tempDataUser = await functions.getDataUserById(idUser)
            setDataUser(tempDataUser)
        }
    }

    const verifyDataPet = () => {

        // verificando se cada propriedade do obj values esta vazia
        for (let key in values) {
            if (values.hasOwnProperty(key) && values[key] == '') {
                return true
            }
        }
    }

    const postAnimal = async (e) => {
        // cadastra o animal em publications e nas publicações do usuário

        e.preventDefault()

        const isIncorrect = verifyDataPet()
        if (isIncorrect) {
            // verificamos se todos os dados foram preenchidos
            showError('Preencha todos os dados corretamente!')
            return
        }

        // completamos as informações da publicação
        const copyValues = { ...values }

        copyValues.donor = dataUser.name + " " + dataUser.lastName
        copyValues.email = dataUser.email

        // gerando um id único com a biblioteca shortid
        copyValues.id = shortid.generate()
        copyValues.adopted = false

        const url = '/publications'
        await dataBase.post(url, copyValues)
            .catch(err => console.log(err))

        postAnimalInDataUser(copyValues)
    }

    const postAnimalInDataUser = async (copyValues) => {
        const newDataUser = { ...dataUser }
        newDataUser.publications.push(copyValues.id)

        const idUser = JSON.parse(sessionStorage.getItem('idUser'))
        const url = `/users/${idUser}`
        await dataBase.put(url, newDataUser)
            .catch(err => console.log(err))

        setShowAlertSuccess(true)

        setTimeout(() => {
            setShowAlertSuccess(false)
        }, 3000)

        setValues(initialValues)
        navigate('/profile')
    }

    const showError = (message) => {
        // recebe uma mensagem e mostra o erro com essa mensagem
        setShowAlertError(true)
        setAlertMessage(message)
    }


    useEffect(() => {
        if (!isLogged) {
            // se não estiver logado, não pode acessar essa página
            navigate('/login')
        }
        // se estiver logado, pegue os dados das ufs e os dados do usuário
        getUfs()
        getDataUser()
    }, [])


    return (
        <>
            <Menu />

            <ConteinerPublishAnimal>
                <h1>Divulgar Animal para Adoção</h1>
                <Divider />

                <form>
                    {/* formulário com todas as informaçoes necessárias do pet */}
                    <FormLabel>
                        Nome do Animal
                        <Input
                            focusBorderColor='blue'
                            name='name'
                            placeholder='Digite o nome do animal'
                            value={values.name}
                            onChange={handleValues}
                        />
                    </FormLabel>

                    <Stack justify='center' align='center' gap='25px' direction={windowWidth > 650 ? 'row' : 'column'}>
                        <select
                            name='specie'
                            value={values.specie}
                            onChange={handleValues}
                        >
                            <option value="">Selecione a espécie</option>
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                        <select
                            name='size'
                            value={values.size}
                            onChange={handleValues}
                        >
                            <option value="">Selecione o Porte</option>
                            <option value="Pequeno">Porte Pequeno</option>
                            <option value="Médio">Porte Médio</option>
                            <option value="Grande">Porte Grande</option>
                        </select>
                    </Stack>

                    {/*  */}

                    <Stack justify='center' align='center' gap='25px' direction={windowWidth > 650 ? 'row' : 'column'}>
                        <select
                            name='sex'
                            value={values.sex}
                            onChange={handleValues}
                        >
                            <option value="">Selecione o Gênero</option>
                            <option value="Macho">Macho</option>
                            <option value="Fêmea">Fêmea</option>
                        </select>
                        <select
                            name='age'
                            value={values.age}
                            onChange={handleValues}
                        >
                            <option value="">Selecione a Idade</option>
                            <option value="Filhote">Filhote</option>
                            <option value="Adulto">Adulto</option>
                            <option value="Idoso">Idoso</option>
                        </select>
                    </Stack>

                    <Stack justify='center' align='center' gap='25px' direction={windowWidth > 650 ? 'row' : 'column'}>
                        <select
                            name='uf'
                            value={values.uf}
                            onChange={(e) => handleValues(e, e.target.options[e.target.selectedIndex].id)}
                        >
                            <option value="">Selecione o Estado</option>
                            {ufs.map(uf => {
                                return (
                                    <option key={uf.sigla} id={uf.sigla} value={uf.nome}>{uf.nome}</option>
                                )
                            })}
                        </select>
                        <select
                            name='city'
                            value={values.city}
                            onChange={handleValues}
                        >
                            <option value="">Selecione a Cidade</option>

                            {cities.map(city => {
                                return (
                                    <option key={city.id} value={city.nome}>{city.nome}</option>
                                )
                            })}
                        </select>
                    </Stack>

                    <FormLabel>
                        Faça uma breve descrição do animal

                        <Textarea
                            focusBorderColor='blue'
                            resize='none'
                            name='description'
                            value={values.description}
                            placeholder='Você pode descrever sua personalidade, hábitos, necessidades especiais e qualquer informação relevante que possa ajudar a conectar adotantes em potencial.'
                            onChange={handleValues}
                        />
                    </FormLabel>

                    <FormLabel htmlFor="image">
                        Insira uma imagem do animal

                        <Input
                            focusBorderColor='blue'
                            name="image"
                            value={values.image}
                            onChange={handleValues}
                        />

                        <span className='alertImage'>A opção de upload não está disponível no momento. Por favor, insira um link de imagem online válido.</span>
                    </FormLabel>

                    <Divider />

                    <FormLabel>
                        Número de Celular para Contato (com DDD)
                        <Input
                            focusBorderColor='blue'
                            placeholder='Ex: 19992276384'
                            type='number'
                            name='phoneNumber'
                            value={values.phoneNumber}
                            onChange={handleValues}
                        />
                    </FormLabel>

                    {showAlertError && (
                        <AlertError messageError={alertMessage} />
                    )}

                    {showAlertSuccess && (
                        <AlertSucess txt={`${values.name} cadastrado com sucesso!`} />
                    )}

                    <Button onClick={postAnimal} color='orange' content='Divulgar' />
                </form>
            </ConteinerPublishAnimal>
        </>
    );
}

export default PublishAnimal;
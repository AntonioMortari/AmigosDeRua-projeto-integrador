import { useEffect, useState } from 'react';

import dataBase from '../../axios/config';

import { RiUserSettingsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import functions from '../../functions'
import ButtonBack from '../../components/ButtonBack';
import { Avatar } from '@chakra-ui/react'
import Loading from '../../components/Loading'

import ConteinerProfile from './styles.jsx'

import CardPet from '../../components/CardPet'


function PageProfile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLogged = useSelector(state => state.isLogged)

    const [dataUser, setDataUser] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [publicationsUser, setPublicationsUser] = useState([])

    const getPublicationById = async (id) => {
        const url = `/publications/${id}`
        const resp = await dataBase.get(url)
        return resp.data
    }

    const getPublicationsByArray = async (array) => {
        const dataPublications = await Promise.all(array.map(id => getPublicationById(id)))

        return dataPublications
    }


    const getDataUser = async () => {
        const idUser = JSON.parse(sessionStorage.getItem("idUser"))
        const tempDataUser = await functions.getDataUserById(idUser)

        const tempFavorites = await getPublicationsByArray(tempDataUser.favorites)

        const tempPublicationsUser = await getPublicationsByArray(tempDataUser.publications)

        setFavorites(tempFavorites)
        setPublicationsUser(tempPublicationsUser)
        setDataUser(tempDataUser)
    }

    useEffect(() => {
        if (!isLogged) {
            navigate('/login')
        }
        getDataUser()
    }, [])



    return (
        <>
            {dataUser ? (
                <ConteinerProfile>


                    <div className="profile-conteiner">
                        <ButtonBack txt="Voltar" onClick={() => window.history.back()} />
                        <div className='nameimg'>
                            <Avatar name={dataUser.name + dataUser.lastName} size="xl" />
                            <div className='profile'>
                                <h2 className='name'>{dataUser.name} {dataUser.lastName}</h2>
                                <p className='email'>{dataUser.email}</p>
                            </div>
                        </div>
                        <div className='description'>
                            <Link className='config' to='/edit-profile'><RiUserSettingsLine size="25" fill='#319AFB' /></Link>
                            <button className='button' onClick={() => {
                                dispatch({ type: 'LOGOUT' })
                                navigate('/login')
                            }}>Sair</button>
                        </div>
                    </div>

                    <div className='conteiner-publications'>

                        <h3>Marcados como "Tenho Interesse"</h3>
                        <div>

                            {favorites.length > 0 ? (
                                favorites.map(favorite => {
                                    return (
                                        <CardPet publication={favorite} />
                                    )
                                })
                            ) : (
                                <span className='message'>Você ainda não favoritou nenhum animal</span>
                            )}
                        </div>

                        <h3>Publicações feitas por você</h3>
                        <div>

                            {publicationsUser.length > 0 ? (
                                publicationsUser.map(publication => {
                                    return (
                                        <CardPet publication={publication} />

                                    )
                                })
                            ) : (
                                <span className='message'>Você ainda não fez nenhuma publicação, <Link to='/publish-animal'>publique já!</Link></span>
                            )}

                        </div>

                    </div>
                </ConteinerProfile>

            ) : (
                <Loading />
            )}


        </>
    );
}

export default PageProfile;
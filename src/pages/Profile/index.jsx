import { useEffect, useState } from 'react';

import dataBase from '../../axios/config';

import styled from 'styled-components'
import { RiUserSettingsLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import functions from '../../functions'
import ButtonBack from '../../components/ButtonBack';
import {  Avatar } from '@chakra-ui/react'

import ConteinerProfile from './styles.jsx'

import CardPet from '../../components/CardPet'

const ConteinerPublications = styled.div`
    width: 70%;
    margin:30px auto;

    .conteiner{
        background-color: ${({theme}) => theme.COLORS.white_100};
        padding: 20px;
        border-radius: 8px;
        h3{
            font-size: 2rem;
            color:${({theme}) => theme.COLORS.blue};
        }
    }
`


function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLogged = useSelector(state => state.isLogged)
    const [dataUser, setDataUser] = useState([])

    const [favoritesUser, setFavroritesUser] = useState([])

    const getPublicationsUser = async(id) =>{
        const url = `/publications/${id}`
        
        await dataBase.get(url)
            .then(resp =>{
                let newFavoritesUser = [...favoritesUser]
                newFavoritesUser.push(resp.data)
                setFavroritesUser(newFavoritesUser)
                console.log(newFavoritesUser)
            })
    }

    const getDataUser = async () => {
        const idUser = JSON.parse(localStorage.getItem("idUser"))
        const tempDataUser = await functions.getDataUserById(idUser)

        setDataUser(tempDataUser)

        if(tempDataUser.favorites.length == 0){
            return
        }

        tempDataUser.favorites.forEach(id =>{
            getPublicationsUser(id)
            
        })

    }
    

    useEffect(() => {
        if (!isLogged) {
            navigate('/login')
        }
        getDataUser()
    }, [])



    return (
        <>
            <ConteinerProfile>

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

            </ConteinerProfile>

            <ConteinerPublications>

                <h3>Suas Publicações</h3>

                <div className='conteiner'>

                    {favoritesUser.map(publication =>{
                        <CardPet publication={publication} />
                    })}

                </div>

            </ConteinerPublications>
        </>
    );
}

export default Profile;
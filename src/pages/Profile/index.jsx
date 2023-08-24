import { useEffect, useState } from "react";

import { users } from "../../axios/config";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {Button} from '@chakra-ui/react'


function Profile() {
    const [dataUser, setDataUser] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getDataUser = async (url) =>{
        users.get(url)
            .then(response => {
                console.log(response)
                setDataUser(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const idUser = JSON.parse(localStorage.getItem('idUser'))

        if(idUser){
            const url = `/users/${idUser}`
            getDataUser(url)
        }else{
            navigate('/login')
        }

    }, [])

    return (
        <div>
            <h1>Olá {dataUser.name}</h1>
            <Button colorScheme='red' onClick={() => {
                dispatch({type:'LOGOUT'})
                navigate('/login')
            }}>Sair</Button>
        </div>
    );
}

export default Profile;
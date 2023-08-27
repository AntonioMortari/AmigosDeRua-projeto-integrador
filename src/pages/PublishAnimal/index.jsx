import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Menu from '../../components/Menu'

function PublishAnimal() {
    const isLogged = useSelector(state => state.isLogged)

    const navigate = useNavigate()

    useEffect(() => {
        if(!isLogged){
            navigate('/login')
        }
    }, [])

    

    return ( 
        <Menu />
     );
}

export default PublishAnimal;
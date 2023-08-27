import { useEffect } from 'react';

import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLogged = useSelector(state => state.isLogged)

    useEffect(() =>{
        if(!isLogged){
            navigate('/login')
        }
    },[])

    return (
        <>
            <h1>Estamos na profile</h1>

            <Link to='/edit-profile'>Editar Perfil</Link>

            <button onClick={() =>{
                dispatch({type: 'LOGOUT'})
                navigate('/login')
            }}>Sair</button>
        </>
    );
}

export default Profile;
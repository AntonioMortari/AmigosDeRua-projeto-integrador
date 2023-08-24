import { useState } from 'react';

import Conteiner from './styles'
import Header from '../Menu/styles';

import Button from '../Button';
import {RiCloseFill} from 'react-icons/ri'
import {AiOutlineMenu} from 'react-icons/ai'

import  srcLogo from '../../images/logo.png'

import { useSelector } from 'react-redux'

import { NavLink, Link } from 'react-router-dom'

function MenuMobile() {
    const isLogged = useSelector(state => state.isLogged)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {
                isOpen ? (
                    <Conteiner>
                        <RiCloseFill size={35} onClick={() => setIsOpen(false)} />
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/adoptfriend'>Adote um amigo</NavLink>
                        <NavLink to='/publish-animal'>Divulgar animal</NavLink>
                        <NavLink to='/about'>Sobre</NavLink>
                        <NavLink to='/faq'>FAQ</NavLink>
                        <Button
                            content={isLogged ? 'Meu perfil' : 'Fazer Login'}
                            to={isLogged ? '/profile' : '/login'}
                            color='orange' />
                    </Conteiner>
                ) : (
                    <Header>

                        <Link to='/'><img src={srcLogo} alt="Logo Amigos de Rua" /></Link>


                        <button className='burguer-button' onClick={() => setIsOpen(true)}>
                            <AiOutlineMenu size={35} />
                        </button>
                    </Header>
            )
            }


        </>
    );
}

export default MenuMobile;
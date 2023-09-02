import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

import {useSelector} from 'react-redux'

import srcLogo from '../../images/logo.svg'

// components
import Header from './styles.js'
import Button from '../Button'

import MenuMobile from '../MenuMobile'



function Menu() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const isLogged = useSelector(state => state.isLogged)

    const handleResize = () =>{
        setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return ( 
        <>
            {windowWidth > 800 ? (
                // se a largura da tela maior que 800
                <Header>
                <Link to='/'><img src={srcLogo} alt="Logo Amigos de Rua" /></Link>

                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/adoptfriend'>Adote um amigo</NavLink>
                    <NavLink to='/publish-animal'>Divulgar animal</NavLink>
                    <NavLink to='/about'>Sobre</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                    <Button 
                    content={isLogged ? 'Meu Perfil' : 'Fazer Login'} 
                    to={isLogged ? '/profile' : '/login'} 
                    color='blue' />
                </nav>
            </Header>

            ) : (
                <MenuMobile />
            )}
            
        </>
     );
}

export default Menu;
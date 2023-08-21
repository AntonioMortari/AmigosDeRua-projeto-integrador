import styled from 'styled-components'

import srcNotFound from '../../images/not-found.png'
import Button from '../../components/Button';

import {useSelector} from 'react-redux'

const Conteiner = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    >img{
        width: 50%;
    }
`

function NotFound() {
    const isLogged = useSelector(state => state.isLogged)
    return ( 
        <Conteiner>
            <img src={srcNotFound} alt="Imagem de página não encontrada" />

            <Button content='Voltar para a página inicial' to={isLogged ? '/adoptfriend' : '/'} color='orange' />

        </Conteiner>
     );
}

export default NotFound;
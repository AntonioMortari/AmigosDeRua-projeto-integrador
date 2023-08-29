import { useSelector } from 'react-redux'

// images
import srcImageHome from '../../images/home.png'
// components
import ConteinerHome from './home'
import Menu from '../../components/Menu'
import Button from '../../components/Button';
import Footer from '../../components/Footer'
// sections
import CardsSection from './CardsSection';
import NumbersSection from './NumbersSection';
import OngsSection from './OngsSection/'

function Home() {
    const isLogged = useSelector(state => state.isLogged)

    return (
        <>
            <Menu />

            <ConteinerHome>

                <div className='conteiner-content'>
                    <div className='conteiner-text'>
                        <h1>Amigos de Rua</h1>

                        <p><span>Encontre</span> um companheiro para alegrar sua vida. <span>Navegue</span> por nossas opções de adoção e faça a diferença na vida de um animalzinho </p>

                        <Button
                            content={isLogged ? 'Encontre seu Amigo' : 'Cadastre-se para Adotar'}
                            to={isLogged ? '/adoptfriend' : 'sign-up'}
                            color='blue' />
                    </div>

                    <div className='conteiner-image'>
                        <img src={srcImageHome} alt="Mulher com um cachorro" />
                    </div>
                </div>

                <CardsSection />

                <NumbersSection />

                <OngsSection />

            </ConteinerHome>

            <Footer />
        </>
    );
}

export default Home;
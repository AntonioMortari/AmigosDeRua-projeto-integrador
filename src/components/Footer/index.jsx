import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa' 

import {Link} from 'react-router-dom'

import Footer from './styles'
import Button from '../Button'

function ComponentFooter() {
    return ( 
        <Footer>
            <nav className='links-footer'>
                <Link to='/adoptfriend'>Adote um amigo</Link>
                <Link to='/publish-animal'>Divulgar animal</Link>
                <Link to='/about'>Sobre</Link>
                <Link to='/faq'>FAQ</Link>

                <div className='conteiner-social-media'>
                    <a href="/" target='_blank'>
                        <FaFacebook />
                    </a>

                    <a href="/" target='_blank'>
                        <FaLinkedin />
                    </a>

                    <a href="/" target='_blank'>
                        <FaInstagram />
                    </a>
                </div>
            </nav>

            <form>
                <label htmlFor="input-feedback">
                Compartilhe sua opinião para aprimorarmos nosso site. Agradecemos por sua contribuição!
                    <input type="text" placeholder='Forneça seu feedback!' name='input-feedback' id='input-feedback' />
                </label>

                <Button onClick={(e) => e.preventDefault()} color='orange' content='Enviar'/>
            </form>
        </Footer>
     );
}

export default ComponentFooter;
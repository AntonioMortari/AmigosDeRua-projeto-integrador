import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import axios from 'axios'
import functions from '../../functions'

import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa' 
import Footer from './styles'
import Button from '../Button'
import AlertSucess from '../../components/AlertSucess'

function ComponentFooter() {
    const [value, setValue] = useState('')
    const [showAlertSucess, setShowAlertSucess] = useState(false)

    const isLogged = useSelector(state => state.isLogged)

    const onChange = (e) =>{
        setValue(e.target.value)
    }

    const sendFeedback = async(e) =>{
        e.preventDefault()

        if(value.length == 0){
            return
        }

        let dataFeedback = {}

        if(isLogged){
            const idUser = JSON.parse(sessionStorage.getItem('idUser'))
            let dataUser = await functions.getDataUserById(idUser)
            dataFeedback.name = dataUser.name 
            dataFeedback.email = dataUser.email
        }else{
            dataFeedback.name = 'anonymous'
        }

        dataFeedback.feedback = value
        
        const url = 'http://localhost:5002/feedbacks'
        axios.post(url, dataFeedback )
            .catch(err => console.log(err))


        setShowAlertSucess(true)

        setTimeout(() => {
            setShowAlertSucess(false)
        }, 5000)
       
        setValue('')
    }

    return ( 
        <Footer>
            <nav className='links-footer'>
                <Link to='/adoptfriend'>Adote um amigo</Link>
                <Link to='/publish-animal'>Divulgar animal</Link>
                <Link to='/about'>Sobre</Link>
                <Link to='/faq'>FAQ</Link>

                <div className='conteiner-social-media'>
                    <a href="/" target='_blank'>
                        <FaFacebook size='25' fill='white' />
                    </a>

                    <a href="/" target='_blank'>
                        <FaLinkedin size='25' fill='white' />
                    </a>

                    <a href="/" target='_blank'>
                        <FaInstagram size='25' fill='white' />
                    </a>
                </div>
            </nav>

            <form>
                <label htmlFor="input-feedback">
                Compartilhe sua opinião para aprimorarmos nosso site. Agradecemos por sua contribuição!
                    <input type="text" placeholder='Forneça seu feedback!' name='input-feedback' id='input-feedback' onChange={onChange} value={value} />
                </label>

                <Button onClick={sendFeedback} color='orange' content='Enviar'/>

                {showAlertSucess && (
                    <AlertSucess txt='Feedback enviado com sucesso! Obrigado por contribuir com o nosso site :)' />
                )}
            </form>
        </Footer>
     );
}

export default ComponentFooter;
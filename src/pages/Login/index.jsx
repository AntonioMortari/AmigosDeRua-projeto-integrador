import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

// Components
import Conteiner from './styles'
import Button from '../../components/Button'
import ButtonBack from '../../components/ButtonBack'
import InputLogin from '../../components/InputLogin';



const initialStates = {
    email:'',
    password:''
}

function Login() {
    const navigate = useNavigate()
    
    const [values, setValues] = useState(initialStates)

    const submitLogin = (e) =>{
        e.preventDefault()
        console.log(values.email, values.password)

        values.email.length > 0 || values.password > 0 ? navigate('/adoptfriend') : console.log('Erro...')
    }
    
    const onChange = (e) =>{
        let {name,value} = e.target
        
        let newState = {...values}
        newState[name] = value

        setValues(newState)
    }

    return (
        <Conteiner>
            <div className='conteiner-login'>
                
                <ButtonBack txt='Voltar' onClick={() => window.history.back()} />

                <h2>Login</h2>
                <p>Bem-vindo(a) novamente! Faça login para continuar</p>

                <form>
                    <InputLogin type='email' name='email' txt='Email' placeholder='Digite seu Email' onChange={onChange}/>

                    <InputLogin type='password' name='password' txt='Senha' placeholder='Digite sua senha' onChange={onChange}>
                        <p>Olá</p>
                    </InputLogin>

                    <Button content='Entrar' color='orange' onClick={submitLogin} />
                </form>

                <p>Não tem uma conta? <Link to='/sign-up'>Cadastre-se</Link></p>
            </div>
        </Conteiner>
    );
}

export default Login;
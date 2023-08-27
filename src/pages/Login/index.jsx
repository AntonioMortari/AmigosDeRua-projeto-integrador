import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

// Components
import Conteiner from './styles'
import Button from '../../components/Button'
import ButtonBack from '../../components/ButtonBack'
import InputLogin from '../../components/InputLogin';
import AlertError from '../../components/AlertError'

// functions
import functions from '../../functions'


// estados iniciais dos inputs
const initialStates = {
    email:'',
    password:''
}

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.isLogged)
    
    const [values, setValues] = useState(initialStates)
    const [showError, setShowError] = useState(false)
    const [messageError, setMessageError] = useState('')

    useEffect(() =>{
        if(isLogged){
            window.history.back()
        }
    },[])

    const handleShowError = (message) =>{
        setShowError(true)
        setMessageError(message)
    }

    const submitLogin = async(e) =>{
        e.preventDefault()

        if(values.email.length == 0 ||values.password.length == 0){
            // se algum campo estiver vazio
            handleShowError('Preencha os campos corretamente!')
            return
        }

        
        const userExist = await functions.verifyUserExist(values.email)
        if(!userExist){
            // verificando se o email existe
            handleShowError(`O email ${values.email} ainda não foi cadastrado!`)
            return
        }
        
        const dataUser = await functions.getDataUserByEmail(values.email)
        // verificando se as senhas coincidem
        if(dataUser[0].password != values.password){
            handleShowError('Senha incorreta!')
            return
        }

        dispatch({type:'LOGIN', idUser:dataUser[0].id})
        navigate('/')
    }
    
    const onChange = (e) =>{
        // faz com que o erro desapareça ao digitar no input
        setShowError(false)
        setMessageError('')

        let newValues = functions.attStateValues(e,values)
        setValues(newValues)
    }

    return (
        <Conteiner>
            <div className='main'>
                
                <ButtonBack txt='Voltar' onClick={() => navigate('/')} />

                <h2>Login</h2>
                <p>Bem-vindo(a) novamente! Faça login para continuar</p>

                <form>
                    <InputLogin type='email' name='email' txt='Email' placeholder='Digite seu Email' onChange={onChange}/>

                    <InputLogin type='password' name='password' txt='Senha' placeholder='Digite sua senha' onChange={onChange} />
                        
                    <Button content='Entrar' color='orange' onClick={submitLogin} />

                    {showError && (
                        <AlertError messageError={messageError} />
                    )}
                </form>

                <p>Não tem uma conta? <Link to='/sign-up'>Cadastre-se</Link></p>
            </div>
        </Conteiner>
    );
}

export default Login;
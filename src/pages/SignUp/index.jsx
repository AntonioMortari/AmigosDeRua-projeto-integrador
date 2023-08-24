import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import {useDispatch} from 'react-redux'

import {users} from '../../axios/config'


import Conteiner from '../Login/styles'
import Input from '../../components/InputLogin';
import Button from '../../components/Button'
import ButtonBack from '../../components/ButtonBack'
import AlertError from '../../components/AlertError'


const initialStates = {
    name:'',
    email:'',
    password:'',
    password2:''
}


function SignUp() {
    const [values, setValues] = useState(initialStates)
    const [isError, setIsError] = useState(false)
    const [messageError, setMessageError] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const showError = (message) =>{
        setIsError(true)
        setMessageError(message)
    }

    const verifyUser = async() =>{
        let dataUser;
        const url = `/users?email=${values.email}`
        await users.get(url)
            .then(response =>{
                dataUser = response.data
            })
            .catch(err => console.log(err))

        if(dataUser.length > 0){
            return true
        }

        if(dataUser.length == 0){
            return false
        }
    }

    const verifyDataUser = async(e) =>{
        e.preventDefault()

        if(
            // verifica se os campos foram preenchidos
            values.name.length < 3 ||
            values.email.length < 5 ||
            values.password.length < 2 ||
            values.password2.length < 2
        ){
            showError('Preencha os campos corretamente!')
            return
        }

        if(values.password != values.password2){
            // verifica se as senhas coincidem
            showError('As senhas não coincidem!')
            return
        }

        
        const userExist = await verifyUser() 
        if(userExist){
            // verificando se o email já esta cadastrado
            showError(`O email ${values.email} já está cadastrado!`)
            return
        }

        const url = '/users'
        await users.post(url,values)
            .catch(err => console.log(err))

        dispatch({type:'LOGIN'})
        navigate('/')

    }
    
    const onChange = (e) =>{
        // faz com que o erro desapareça
        setIsError(false)
        setMessageError('')

        let {name, value} = e.target

        let newState = {...values}
        newState[name] = value

        setValues(newState)
    }

    return ( 
        <Conteiner>
            <div className="main">
                <ButtonBack txt='Voltar' onClick={() => window.history.back()} />
                <h2>Cadastre-se</h2>
                <p>Faça seu cadastro e aproveite tudo o que o nosso site tem a oferecer!</p>

                <form>
                        <Input type='text' txt='Nome' name='name' placeholder='Digite o seu nome completo'
                        onChange={onChange}
                        />

                        <Input type='email' txt='Email' name='email' placeholder='Digite o seu melhor email' autoComplete='on' 
                        onChange={onChange}
                        />

                        <Input type='password' txt='Senha' name='password' placeholder='Digite sua senha' 
                        onChange={onChange}
                        />

                        <Input type='password' txt='Senha' name='password2' placeholder='Confirme sua senha' 
                        onChange={onChange}
                        />

                        <Button onClick={verifyDataUser} content='Completar Cadastro' color='orange' 
                        onChange={onChange}
                        />

                    {isError &&(
                        <AlertError messageError = {messageError} />
                     )}
                </form>

                <p>Já tem uma conta? <Link to='/login'>Faça Login!</Link></p>
            </div>
        </Conteiner>
     );
}

export default SignUp;
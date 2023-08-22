import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Conteiner from '../Login/styles'

import Input from '../../components/InputLogin';
import Button from '../../components/Button'
import ButtonBack from '../../components/ButtonBack'


const initialStates = {
    name:'',
    email:'',
    password:'',
    password2:''
}


function SignUp() {
    const [values, setValues] = useState(initialStates)

    const verifyDataUser = (e) =>{
        e.preventDefault()

        if(values.password != values.password2){
            alert('Erro, as senhas não coincidem')
        }else{
            console.log('Cadastrar usuário!')
        }
    }
    
    const onChange = (e) =>{
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

                </form>

                <p>Já tem uma conta? <Link to='/login'>Faça Login!</Link></p>
            </div>
        </Conteiner>
     );
}

export default SignUp;
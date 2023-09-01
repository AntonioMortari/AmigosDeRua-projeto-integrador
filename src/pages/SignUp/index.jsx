import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import dataBase from '../../axios/config'

import Conteiner from '../Login/styles'
import Input from '../../components/InputLogin';
import Button from '../../components/Button'
import ButtonBack from '../../components/ButtonBack'
import AlertError from '../../components/AlertError'
import AlertSucess from '../../components/AlertSucess'

// functions
import functions from '../../functions'

const initialStates = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
}

function SignUp() {
    const [values, setValues] = useState(initialStates)
    const [isError, setIsError] = useState(false)

    const [messageError, setMessageError] = useState('')
    const [showAlertSucess, setShowAlertSucess] = useState(false)

    const isLogged = useSelector(state => state.isLogged)

    useEffect(() => {
        if (isLogged) {
            window.history.back()
        }
    }, [])

    const showError = (message) => {
        setIsError(true)
        setMessageError(message)
    }

    const verifyDataUser = async (e) => {
        e.preventDefault()

        if (
            // verifica se os campos foram preenchidos
            values.name.length < 3 ||
            values.email.length < 5 ||
            values.password.length < 2 ||
            values.password2.length < 2
        ) {
            showError('Preencha os campos corretamente!')
            return
        }

        if (values.password != values.password2) {
            // verifica se as senhas coincidem
            showError('As senhas não coincidem!')
            return
        }

        const userExist = await functions.verifyUserExist(values.email)
        if (userExist) {
            // verificando se o email já esta cadastrado
            showError(`O email ${values.email} já está cadastrado!`)
            return
        }

        // registra o usuário na api
        const url = '/users'
        values.publications = []
        values.favorites = []
        await dataBase.post(url, values)
            .catch(err => console.log(err))

        // mostra a mensagem de sucesso por 8s e zera os inputs
        setShowAlertSucess(true)
        setValues(initialStates)

        setTimeout(() => {
            setShowAlertSucess(false)
        }, 8000);
    }

    const onChange = (e) => {
        // faz com que o erro desapareça
        setIsError(false)
        setMessageError('')

        let newValues = functions.attStateValues(e, values)
        setValues(newValues)
    }

    return (
        <Conteiner>
            <div className="main">
                <ButtonBack txt='Voltar' onClick={() => window.history.back()} />
                <h2>Cadastre-se</h2>
                <p>Faça seu cadastro e aproveite tudo o que o nosso site tem a oferecer!</p>

                <form>

                    <Input type='text' txt='Nome' name='name' placeholder='Digite o seu nome'
                        onChange={onChange}
                        value={values.name}
                    />
                    <Input type='text' txt='Sobrenome' name='lastName' placeholder='Digite o seu sobrenome'
                        onChange={onChange}
                        value={values.lastName}
                    />

                    <Input type='email' txt='Email' name='email' placeholder='Digite o seu melhor email' autoComplete='on'
                        onChange={onChange}
                        value={values.email}
                    />

                    <Input type='password' txt='Senha' name='password' placeholder='Digite sua senha'
                        onChange={onChange}
                        value={values.password}
                    />

                    <Input type='password' txt='Repita a senha' name='password2' placeholder='Confirme sua senha'
                        onChange={onChange}
                        value={values.password2}
                    />

                    <Button onClick={verifyDataUser} content='Completar Cadastro' color='orange'
                        onChange={onChange}
                    />

                    {isError && (
                        <AlertError messageError={messageError} />
                    )}

                    {showAlertSucess && (
                        <AlertSucess txt='Registro realizado com sucesso! Agora é só fazer login :)' />
                    )}
                </form>

                <p>Já tem uma conta? <Link to='/login'>Faça Login!</Link></p>
            </div>
        </Conteiner>
    );
}

export default SignUp;
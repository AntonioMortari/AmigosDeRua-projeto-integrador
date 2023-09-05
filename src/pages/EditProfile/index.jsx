import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import dataBase from '../../axios/config'

// components
import ConteinerProfile from './styles.js'
import { Avatar, Input } from "@chakra-ui/react";
import Button from "../../components/Button";
import ButtonBack from "../../components/ButtonBack";
import AlertError from '../../components/AlertError';
import AlertSucess from '../../components/AlertSucess';
import Loading from '../../components/Loading'

// functions
import functions from '../../functions';


function EditProfile() {
  const [dataUser, setDataUser] = useState(null)
  const [values, setValues] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  const [showAlertError, setShowAlertError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [showAlertSucess, setShowAlertSucess] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const attDataUser = async () => {

    // verificaçoes:
    if (
      values.name.length == 0 ||
      values.lastName.length == 0 ||
      values.email.length == 0 ||
      values.password.length == 0
    ) {
      showError('Preencha os campos corretamente!')
      return
    }

    const userExist = functions.verifyUserExist(values.email)
    if (userExist && values.email != dataUser.email) {
      // verificando se o email alterado já esta cadastrado
      showError(`O email ${values.email} já foi cadastrado!`)
      return
    }

    // ao clicar em salvar alterações
    const newDataUser = { ...values }
    setDataUser(newDataUser)

    // atualiza os dados do usuário na api
    const idUser = JSON.parse(sessionStorage.getItem('idUser'))
    const url = `/users/${idUser}`
    await dataBase.put(url, newDataUser)
      .catch(err => console.log(err))


    setIsEditing(false)
    setShowAlertSucess(true)

    setTimeout(() => {
      setShowAlertSucess(false)
    }, 5000);
  }

  const onChange = (e) => {
    setShowAlertError(false)
    let newValues = functions.attStateValues(e, values)
    setValues(newValues)
  }

  const getDataUser = async (id) => {
    // usamos uma função para pegar os dados com base no id e atualizamos os estados de dataUser e values(valores dos inputs)
    let newDataUser = await functions.getDataUserById(id)
    setDataUser(newDataUser)
    setValues(newDataUser)
  }

  useEffect(() => {
    const idUser = JSON.parse(sessionStorage.getItem('idUser'))
    if (idUser) {
      getDataUser(idUser)

    } else {
      // caso não haja id no sessionStorage, ou seja, o usuário não fez login, volta pra página de login
      navigate('/login')
    }

  }, [])

  const showError = (message) => {
    setShowAlertError(true)
    setMessageError(message)
  }

  return (
    <ConteinerProfile>
      {dataUser ? (
        <>
          <div className="conteiner-button-back">
            <ButtonBack txt="Voltar" onClick={() => window.history.back()} />
          </div>

          <main>

            <div className="conteiner-avatar">
              <Avatar size="lg" name={dataUser.name + ' ' + dataUser.lastName} />
              <h3>{dataUser.name + ' ' + dataUser.lastName}</h3>
            </div>

            <div className="conteiner-info-user">
              <h3>Dados do usuário:</h3>
              <Input
                mt='20px'
                focusBorderColor='blue'
                name='name'
                mb='20px'
                variant="filled"
                value={values.name}
                isDisabled={isEditing ? false : true}
                onChange={onChange}
              />

              <Input
                focusBorderColor='blue'
                name='lastName'
                mb='20px'
                variant="filled"
                value={values.lastName}
                isDisabled={isEditing ? false : true}
                onChange={onChange}
              />

              <Input
                mb='20px'
                focusBorderColor='blue'
                name='email'
                variant="filled" value={values.email}
                isDisabled={isEditing ? false : true}
                onChange={onChange}
              />

              <Input
                mb='20px'
                focusBorderColor='blue'
                name='password'
                type='password'
                variant="filled"
                placeholder="senha"
                value={values.password}
                isDisabled={isEditing ? false : true}
                onChange={onChange}
              />

              <div className='conteiner-action'>

                {isEditing ? (
                  // se estiver editando aparece os botões de salvar ou cancelar
                  <>
                    <Button content="Cancelar" color="blue" onClick={() => {
                      // caso o usuário clique em cancelar, os valores dos inputs voltarão a ser iguais ao que está salvo na api
                      setValues(dataUser)
                      setIsEditing(false)
                      setShowAlertError(false)
                    }} />

                    <Button content="Salvar alterações" color="blue" onClick={() => attDataUser()} />
                  </>
                ) : (
                  // se não, aparece o botão de editar
                  <Button content="Editar Perfil" color="blue" onClick={() => setIsEditing(true)} />
                )}

              </div>

              {showAlertSucess && (
                <AlertSucess txt='Dados Alterados com sucesso!' />
              )}

              {showAlertError && (
                <AlertError messageError={messageError} />
              )}



            </div>
          </main>
        </>
      ) : (
        <Loading />
      )}

    </ConteinerProfile>
  );
}

export default EditProfile;
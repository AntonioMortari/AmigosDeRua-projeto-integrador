import dataBase from "../axios/config";

const verifyUserExist = async (email) => {
    // essa função verifica se o usuário está cadastrado com base no email que recebe, e retorna true se esta cadastrado e false se não
    let dataUser;
    const url = `/users?email=${email}`
    await dataBase.get(url)
        .then(response => {
            dataUser = response.data
        })
        .catch(err => console.log(err))

    if (dataUser.length > 0) {
        return true
    }

    if (dataUser.length == 0) {
        return false
    }
}

const getDataUserById = async(id) =>{
    // essa função pega os dados do usuário com base no id
    let dataUser;
    const url = `/users/${id}`
    await dataBase.get(url)
        .then(response =>{
            dataUser = response.data
        })
        .catch(err => console.log(err))
        
    return(dataUser)
}

const getDataUserByEmail = async(email) =>{
    // essa função pega os dados do usuário com base no email
    let dataUser;
    const url = `/users?email=${email}`
    await dataBase.get(url)
        .then(response =>{
            dataUser = [...response.data]
        })
        .catch(err => console.log(err))

    return(dataUser)
}

const attStateValues = (event, values) => {
    // essa função atualiza o estado de values dos inputs.

    // recebe o evento de onChange do input e o objeto que armazena os valores deles
    // e retorna um novo objeto com os valores do inputs atualizados
    
    const { name, value } = event.target

    const newValues = { ...values }
    newValues[name] = value

    return newValues
}



export default {
    verifyUserExist,
    getDataUserById,
    getDataUserByEmail,
    attStateValues
}
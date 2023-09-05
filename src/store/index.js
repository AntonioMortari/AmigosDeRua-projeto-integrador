import { legacy_createStore as createStore } from "redux";

const initialState = {
    isLogged:JSON.parse(sessionStorage.getItem('isLogged')) || false,
    idUser:JSON.parse(sessionStorage.getItem('idUser')) || null
}

const reducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case 'LOGIN':
            newState = {...state}
            newState.isLogged = true
            sessionStorage.setItem('isLogged', JSON.stringify(newState.isLogged))
            sessionStorage.setItem('idUser', action.idUser)
            return newState
        case 'LOGOUT':
            newState = {...state}
            newState.isLogged = false
            sessionStorage.setItem('isLogged', JSON.stringify(newState.isLogged))
            sessionStorage.removeItem('idUser')
            sessionStorage.removeItem('page')
            return newState
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
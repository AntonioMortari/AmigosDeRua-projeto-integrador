import { legacy_createStore as createStore } from "redux";

const initialState = {
    isLogged:JSON.parse(localStorage.getItem('isLogged')) || false,
    idUser:JSON.parse(localStorage.getItem('idUser')) || null
}

const reducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case 'LOGIN':
            newState = {...state}
            newState.isLogged = true
            localStorage.setItem('isLogged', JSON.stringify(newState.isLogged))
            localStorage.setItem('idUser', action.idUser)
            return newState
        case 'LOGOUT':
            newState = {...state}
            newState.isLogged = false
            localStorage.setItem('isLogged', JSON.stringify(newState.isLogged))
            localStorage.removeItem('idUser')
            return newState
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
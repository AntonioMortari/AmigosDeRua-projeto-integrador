import { legacy_createStore as createStore } from "redux";

const initialState = {
    isLogged:false
}

const reducer = (state = initialState, action) =>{
    let newState;
    switch(action.type){
        case 'LOGIN':
            newState = {...state}
            newState.isLogged = true
            return newState
        case 'LOGOUT':
            newState = {...state}
            newState.isLogged = false
            return newState
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
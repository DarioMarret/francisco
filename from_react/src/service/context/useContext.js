import {createContext} from 'react'

const userContext = createContext({
    usuario: undefined,
    login: ()=>null,
    logout: ()=>null
});

export default userContext;
import swal from 'sweetalert';
import {host, stora_token} from './util/constante'

export const Registrar = async user =>{
    try {
        const url = `${host}/usuario`;
        const params ={
            method:"POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user)
        }
        const rest = await fetch(url, params)
        const result = await rest.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const Login = async user => {
    try {
      const url = `${host}/usuario/login`;
      const params ={
          method:"POST",
          headers: {
              'Content-Type':'application/json',
          },
          body: JSON.stringify(user)
      }
      const rest = await fetch(url, params)
      const usuario = await rest.json()
       if(usuario){
        console.log(usuario)
        await setToken(usuario)
        return usuario;
       }
    } catch (error) {
        swal({
            title:"Error",
            text: error.toString(),
            icon: "error",
          })
    }
};
export const setToken = async token =>{
    localStorage.setItem(`${stora_token}`,JSON.stringify(token))
}
export const getToken = async() =>{
   const token = localStorage.getItem(`${stora_token}`)
    return JSON.parse(token);
}
export const removerToken = async() =>{
    localStorage.removeItem(`${stora_token}`)
    return true;
}
export const getusuario = async() => {
    try {
      const url = `${host}/usuario`;
      const params ={
          method:"GET",
          headers: {
              'Content-Type':'application/json',
          },
      }
      const rest = await fetch(url, params)
      const usuario = await rest.json()
       if(usuario){
        console.log(usuario)
        return usuario;
       }
    } catch (error) {
        swal({
            title:"Error",
            text: error.toString(),
            icon: "error",
          })
    }
};
import { host } from './util/constante'
import { getToken } from './apiLogin'

export const getPropietario =async()=>{
    // const token = await getToken();
    try {
        const url = `${host}/registrar/propietario`;
        const params ={
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                // Authorization: `${token}`,
            }
        }
        const rest = await fetch(url, params)
        const response = await rest.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const setPropietario =async formData =>{
    // const token = await getToken();
    try {
        const url = `${host}/propietario`;
        const params ={
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                // Authorization: `${token}`,
            },
            body: JSON.stringify(formData) 
        }
        const rest = await fetch(url, params)
        const response = await rest.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}
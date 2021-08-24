import { host } from './util/constante'
import { getToken } from './apiLogin'
export const getProducto =async()=>{
    const token = await getToken();
    try {
        const url = `${host}/producto/lista`;
        const params ={
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                Authorization: `${token}`,
            }
        }
        const rest = await fetch(url, params)
        const response = await rest.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}
import { host } from './util/constante'
import { getToken } from './apiLogin'
export const RealizarPago =async( id, Total, productos, id_usuario )=>{
    console.log("Total: ",productos)
    try {
        var amount = Total * 100
        const token = await getToken();
        const url = `${host}/api/pago`;
        const params={
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
            body: JSON.stringify({id, amount, productos, id_usuario})
        }
        const rest = await fetch(url, params)
        const response = await rest.json();
        return response;
    } catch (error) {
        console.log(error);
    }

}
import {host} from './util/constante'
export const RegistrarDireccion = async (id, formData) =>{
    try {
        const url = `${host}/usuario/update/`+id;
        const params ={
            method:"POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
        }
        const rest = await fetch(url, params)
        const result = await rest.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const Consultarusuario = async id =>{
    try {
        const url = `${host}/usuario/perfil`;
        const params ={
            method:"POST",
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(id)
        }
        const rest = await fetch(url, params)
        const result = await rest.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const SubirAvatar = async (id, Img) =>{
    try {
        const url = `${host}/usuario/avatar/`+id;
        const params ={
            method:"POST",
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"imagen":Img})
        }
        const rest = await fetch(url, params)
        const result = await rest.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}
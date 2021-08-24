import { host } from './util/constante'
import { getToken } from './apiLogin'
import axios from 'axios'
import fileDownload from 'js-file-download';

export const setUsuario = async user =>{
    // const token = await getToken();
    try {
        const url = `${host}/usuario`;
        const params ={
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                // Authorization: `${token}`,
            },
            body:JSON.stringify(user)
        }
        const rest = await fetch(url, params)
        const response = await rest.json();
        return response;
    } catch (error) {
        console.log(error)
    }
}
// descargar plantilla para el registro masivo de usuario
export const getUsuario = async () =>{
    try {
       const response = await axios.get(`${host}/usuario/listar`);
       return response.data;
    } catch (error) {
        console.log(error)
    }
}
// descargar plantilla para el registro masivo de usuario
export const getPlantillaxlsx = async () =>{
    try {
       await axios.get(`${host}/plantilla`,{
            responseType: 'blob',
          }).then(res => {
            fileDownload(res.data, 'tes.xlsx');
          });
    } catch (error) {
        console.log(error)
    }
}
// evio de archivo masivo en xlsx
export const setPlantillaxlsx = async (archivo) =>{
    try {
        const form = new FormData();
        form.append("archivo", archivo)
        const response = await axios.post(`${host}/usuario/xlsx`, 
        form, {headers: { 'Content-Type': 'multipart/form-data' }})
        return response.data;    
    } catch (error) {
        console.log(error)
    }
}
// crear usuario unitario
export const setUsuarioCrear = async (user) =>{
    try {
       const response = await axios.post(`${host}/usuario/crear`, {user});
       return response.data;
    } catch (error) {
        console.log(error)
    }
}
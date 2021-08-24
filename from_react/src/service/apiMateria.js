import { host } from './util/constante'
import axios from 'axios'

export const getMateria = async () =>{
    try {
       const response = await axios.get(`${host}/materia/listar`);
       console.log(response)
       return response.data;
    } catch (error) {
        console.log(error)
    }
}
import axios from 'axios';

const baseUrl = 'http://localhost:8000/';

export const Asesores = () => {
    return axios
        .get(`${baseUrl}asesores/index`)
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}

export const Detalle_Compra = (id) => {
    return axios
        .get(`${baseUrl}detalles/` + id)
        .then(response => {
            return response;
        })
        .catch(function(error) {
            console.log(error)
        });
}
import axios from '../plugins/axios'

export function getResources() {
    return axios.get('/resources');
}

export function changeResource(id, price) {
    return axios.put(`/resources/${id}`, { price })
}
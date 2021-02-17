import axios from '../plugins/axios'

export function getCustomers() {
    return axios.get('/customers');
}

export function addCustomer(customer) {
    return axios.post('/customers', customer)
}

export function deleteCustomer(id) {
    return axios.delete(`/customers/${id}`)
}
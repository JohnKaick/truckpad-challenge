import axios from 'axios'

export const urlStorage = 'http://localhost:8000'

export function upload(data, driver_id) {
    return axios.post('http://localhost:8000/api/driver/upload/' + driver_id, data)
}

export function getAll() {
    return axios.get('http://localhost:8000/api/driver/get-all')
}

export function getOne(driver_id) {
    return axios.get(`http://localhost:8000/api/driver/get-one/${driver_id}`)
}

export function insert(data) {
    return axios.put('http://localhost:8000/api/driver/insert', {
        name: data.name,
        birth_date: data.birth_date,
        state: data.state,
        city: data.city,
        addresses_street_name: data.addresses_street_name,
        addresses_state: data.addresses_state,
        addresses_country: data.addresses_country,
        addresses_neighborhood: data.addresses_neighborhood,
        addresses_city: data.addresses_city,
        addresses_street_number: data.addresses_street_number,
        addresses_complement: data.addresses_complement,
        addresses_postal_code: data.addresses_postal_code,
        documents_expires_at_cnh: data.documents_expires_at_cnh,
        documents_country_cnh: data.documents_country_cnh,
        documents_number_cnh: data.documents_number_cnh,
        documents_doc_type_cnh: data.documents_doc_type_cnh,
        documents_category_cnh: data.documents_category_cnh,
        documents_country_cpf: data.documents_country_cpf,
        documents_number_cpf: data.documents_number_cpf,
        documents_doc_type_cpf: data.documents_doc_type_cpf,
    })
}

export function edit(data) {
    return axios.post(`http://localhost:8000/api/driver/edit/${data.driver_id}`, {
        name: data.name,
        birth_date: data.birth_date,
        state: data.state,
        city: data.city,
        addresses_street_name: data.addresses_street_name,
        addresses_state: data.addresses_state,
        addresses_country: data.addresses_country,
        addresses_neighborhood: data.addresses_neighborhood,
        addresses_city: data.addresses_city,
        addresses_street_number: data.addresses_street_number,
        addresses_complement: data.addresses_complement,
        addresses_postal_code: data.addresses_postal_code,
        documents_expires_at_cnh: data.documents_expires_at_cnh,
        documents_country_cnh: data.documents_country_cnh,
        documents_number_cnh: data.documents_number_cnh,
        documents_doc_type_cnh: data.documents_doc_type_cnh,
        documents_category_cnh: data.documents_category_cnh,
        documents_country_cpf: data.documents_country_cpf,
        documents_number_cpf: data.documents_number_cpf,
        documents_doc_type_cpf: data.documents_doc_type_cpf,
    })
}

export function active(data) {
    return axios.post(`http://localhost:8000/api/driver/status/${data._id}`, {
        active: data.active,
    })
}
import React, { Component } from 'react';
import DriverFormComponent from '../components/DriverFormComponent'
import { getOne, insert, edit, urlStorage, upload } from '../../../common/api'
import { message } from 'antd';
import NoImg from '../../../assets/imgs/not-camera.png'

class DriverFormContainer extends Component {

    state = {
        driver_id: null,
        msgError: null,
        image: null,
        file: null,
    }

    componentDidMount() {
        const { driver_id } = this.props.match.params

        if (driver_id) {
            getOne(driver_id).then(res => {
                this.setState({
                    driver_id,
                    ...res.data,
                    image_path: res.data.image_path ? `${urlStorage}/${res.data.image_path}` : null,
                })
            })
        } else {
            this.setState({
                driver_id: null,
                msgError: null,
                image: null,
                file: null,
                name: '',
                birth_date: '',
                state: '',
                city: '',
                addresses_street_name: '',
                addresses_state: '',
                addresses_country: '',
                addresses_neighborhood: '',
                addresses_city: '',
                addresses_street_number: '',
                addresses_complement: '',
                addresses_postal_code: '',
                documents_expires_at_cnh: '',
                documents_country_cnh: '',
                documents_number_cnh: '',
                documents_doc_type_cnh: '',
                documents_category_cnh: '',
                documents_country_cpf: '',
                documents_number_cpf: '',
                documents_doc_type_cpf: '',
            })
        }
    }

    onChange = (e, m) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeCpf = (e, m) => {
        this.setState({
            documents_number_cpf: e.target.value
        })
    }

    onChangeBirthDate = (date, dateString) => {
        this.setState({
            birth_date: date
        })
    }

    onChangeExpireDate = (date, dateString) => {
        this.setState({
            documents_expires_at_cnh: date
        })
    }

    onChangeImage = (e) => {
        let file = e.target.files[0]
        this.setState({
            image: URL.createObjectURL(file),
            file
        })
    }

    onReturn = () => {
        const { driver_id } = this.state
        if (driver_id) {
            this.props.history.push(`/${driver_id}/detalhes`)
        } else {
            this.props.history.push('/')
        }
    }

    onSave = () => {
        const {
            driver_id, name, birth_date, state, city, file,
            addresses_street_name, addresses_state, addresses_country, addresses_neighborhood, addresses_city, addresses_street_number, addresses_complement, addresses_postal_code,
            documents_expires_at_cnh, documents_country_cnh, documents_number_cnh, documents_doc_type_cnh, documents_category_cnh, documents_country_cpf, documents_number_cpf, documents_doc_type_cpf,
        } = this.state

        if (name === '') {
            this.setState({ msgError: 'Por favor, preencher o nome do motorista.' })
        } else if (documents_number_cpf.includes('_')) {
            this.setState({ msgError: 'Por favor, verifique o CPF.' })
        } else if (birth_date === '') {
            this.setState({ msgError: 'Por favor, selecione a data de nascimento.' })
        } else if (documents_number_cnh === '') {
            this.setState({ msgError: 'Por favor, preencher o número da CNH.' })
        } else if (documents_category_cnh === '') {
            this.setState({ msgError: 'Por favor, selecione a categoria da CNH.' })
        } else if (addresses_street_name === '') {
            this.setState({ msgError: 'Por favor, preencher o endereço completo.' })
        } else if (addresses_postal_code === '') {
            this.setState({ msgError: 'Por favor, preencher o CEP.' })
        } else if (addresses_city === '') {
            this.setState({ msgError: 'Por favor, preencher a cidade.' })
        } else if (addresses_state === '') {
            this.setState({ msgError: 'Por favor, preencher o estado.' })
        } else {
            this.setState({ msgError: null })
            if (driver_id) {
                edit({
                    driver_id,
                    name,
                    birth_date,
                    state,
                    city,
                    addresses_street_name,
                    addresses_state,
                    addresses_country,
                    addresses_neighborhood,
                    addresses_city,
                    addresses_street_number,
                    addresses_complement,
                    addresses_postal_code,
                    documents_expires_at_cnh,
                    documents_country_cnh,
                    documents_number_cnh,
                    documents_doc_type_cnh,
                    documents_category_cnh,
                    documents_country_cpf,
                    documents_number_cpf,
                    documents_doc_type_cpf,
                }).then(res => {
                    if (file) {
                        const data = new FormData()
                        data.append('file', file)
                        return upload(data, driver_id)
                    } else {
                        return null
                    }
                }).then(() => {
                    this.onReturn()
                    message.success('Motorista editado com sucesso.')
                })
            } else {
                insert({
                    driver_id,
                    name,
                    birth_date,
                    state,
                    city,
                    addresses_street_name,
                    addresses_state,
                    addresses_country,
                    addresses_neighborhood,
                    addresses_city,
                    addresses_street_number,
                    addresses_complement,
                    addresses_postal_code,
                    documents_expires_at_cnh,
                    documents_country_cnh,
                    documents_number_cnh,
                    documents_doc_type_cnh,
                    documents_category_cnh,
                    documents_country_cpf,
                    documents_number_cpf,
                    documents_doc_type_cpf,
                }).then(res => {
                    if (file) {
                        const data = new FormData()
                        data.append('file', file)
                        return upload(data, res.data)
                    } else {
                        return null
                    }
                }).then(() => {
                    this.onReturn()
                    message.success('Motorista cadastrado com sucesso.')
                })
            }
        }
    }

    img = () => {
        const { image, image_path } = this.state
        if (image) {
            return <img src={image} alt="foto do motorista" style={{ width: 240 }} />
        } else if (image_path) {
            return <img src={image_path} alt="foto do motorista" style={{ width: 240 }} />
        } else {
            return <img src={NoImg} alt="foto do motorista" style={{ width: 240 }} />
        }
    }

    render() {
        return (
            <DriverFormComponent
                {...this.state}
                {...this.props}
                onChange={this.onChange}
                onChangeCpf={this.onChangeCpf}
                onChangeBirthDate={this.onChangeBirthDate}
                onChangeExpireDate={this.onChangeExpireDate}
                onChangeImage={this.onChangeImage}
                onReturn={this.onReturn}
                onSave={this.onSave}
                img={this.img}
            />
        )
    }
}

export default DriverFormContainer
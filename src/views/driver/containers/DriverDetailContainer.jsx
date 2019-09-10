import React, { Component } from 'react';
import { getOne, active, urlStorage } from '../../../common/api'
import { message } from 'antd';

import DriverDetailComponent from '../components/DriverDetailComponent'

class DriverDetailContainer extends Component {

    state = {
        driver_id: null
    }

    componentDidMount() {
        const { driver_id } = this.props.match.params
        this.onGet(driver_id)
    }

    onGet = (driver_id) => {
        getOne(driver_id).then((res) => {
            this.setState({
                driver_id,
                ...res.data,
                image_path: res.data.image_path ? `${urlStorage}/${res.data.image_path}` : null,
            })
        })
    }

    onEdit = () => {
        const { driver_id } = this.state
        this.props.history.push(`/${driver_id}/editar`)
    }

    onReturn = () => {
        this.props.history.push('/')
    }

    onActive = () => {
        const { _id } = this.state
        active({ _id, active: true }).then(() => {
            this.onGet(_id)
            message.success('Motorista ativado com sucesso.')
        })
    }

    render() {
        return (
            <DriverDetailComponent
                {...this.state}
                {...this.props}
                onGet={this.onGet}
                onEdit={this.onEdit}
                onReturn={this.onReturn}
                onActive={this.onActive}
            />
        )
    }
}

export default DriverDetailContainer
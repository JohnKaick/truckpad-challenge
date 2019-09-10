import React, { Component } from 'react';
import { getAll } from '../../../common/api'

import DriverComponent from '../components/DriverComponent'

class DriverContainer extends Component {

    state = {
        drivers: []
    }

    componentDidMount() {
        getAll().then((res) => {
            this.setState({
                drivers: res.data
            })
        })
    }

    onInsert = () => {
        this.props.history.push('/cadastrar')
    }

    onDetail = (driver_id) => {
        this.props.history.push(`/${driver_id}/detalhes`)
    }

    render() {
        return (
            <DriverComponent
                {...this.state}
                {...this.props}
                onInsert={this.onInsert}
                onDetail={this.onDetail}
            />
        )
    }
}

export default DriverContainer
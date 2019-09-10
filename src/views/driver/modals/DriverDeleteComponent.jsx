import React from 'react'
import { Modal, Typography, message } from 'antd'
import { active } from '../../../common/api'
const { Paragraph } = Typography;

class DriverDeleteComponent extends React.Component {

    state = {
        visible: false
    }

    onOpen = () => {
        this.setState({
            visible: true,
            ...this.props.driver
        })
    }

    onClose = () => {
        this.setState({ visible: false })
    }

    onInactive = () => {
        const { _id } = this.state
        active({ _id, active: false }).then(() => {
            this.onClose()
            this.props.onGet(_id)
            message.success('Motorista desativado com sucesso.')
        })
    }

    render() {
        const { children } = this.props
        const { visible, name } = this.state
        return (
            <React.Fragment>
                {children({ open: this.onOpen })}
                <Modal
                    title="Desativar motorista"
                    visible={visible}
                    okType='danger'
                    okText='Sim'
                    cancelText='Não'
                    onOk={this.onInactive}
                    onCancel={this.onClose}
                >
                    <Typography>
                        <Paragraph>
                            Tem certeza que deseja desativar o motorista {name}?
                        </Paragraph>
                    </Typography>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DriverDeleteComponent;
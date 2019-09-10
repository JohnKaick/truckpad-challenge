import React from 'react'
import { Row, Col, Typography, Button, Tag, List, Divider } from 'antd';
import NoImg from '../../../assets/imgs/not-camera.png'

const { Title } = Typography;

const DriverComponent = ({
    drivers,
    onInsert,
    onDetail,
}) => (
        <Row type="flex" justify="center" style={{ marginTop: 10 }}>
            <Col span={12}>
                <Row>
                    <Col span={6}>
                        <Title level={3}>Motoristas</Title>
                    </Col>
                    <Col offset={14} span={4}>
                        <Button type="primary" icon="plus" onClick={onInsert}>Cadastrar</Button>
                    </Col>
                    <Divider />
                </Row>
                <Row>
                    <Col>
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={drivers}
                            renderItem={item => (
                                <List.Item
                                    key={item._id}
                                    actions={[
                                        <Button type="primary" icon="profile" onClick={() => onDetail(item._id)}>Detalhes</Button>
                                    ]}
                                    extra={
                                        <img src={item.image_path ? item.image_path : NoImg} style={{ width: 180 }} alt="foto do motorista" />
                                    }
                                >
                                    <List.Item.Meta
                                        title={
                                            <div>
                                                {!item.active && (<Tag color="#f50">Desativado</Tag>)}
                                                <b>{item.name}</b>
                                            </div>
                                        }
                                        description={
                                            <div>
                                                <p>Cidade: {item.city}</p>
                                                <p>Estado: {item.state}</p>
                                                <p>Data de nascimento: {new Date(item.birth_date).toLocaleDateString('en-GB')}</p>
                                            </div>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )


export default DriverComponent
import React from 'react'
import { Row, Col, Typography, Button, Descriptions, Divider } from 'antd';

import NoImg from '../../../assets/imgs/not-camera.png'
import DriverDeleteComponent from '../modals/DriverDeleteComponent'

const { Title } = Typography;

const DriverComponent = ({
    image_path,
    _id,
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
    active,
    onGet,
    onEdit,
    onReturn,
    onActive
}) => (
        <Row type="flex" justify="center" style={{ marginTop: 10 }}>
            <Col span={16}>
                <Row>
                    <Col span={4}>
                        <Button type="primary" icon="left" onClick={onReturn}>Voltar</Button>
                    </Col>
                    <Col span={20}>
                        <Title level={3}>Detalhes do motorista</Title>
                    </Col>
                    <Divider />
                </Row>
                <Row>
                    <Col span={8}>
                        <img src={image_path ? image_path : NoImg} style={{ width: 240 }} alt="foto do motorista" />
                    </Col>
                    <Col span={16}>
                        <Button type="primary" icon="edit" onClick={onEdit}>Editar</Button>
                        {active ? (
                            <DriverDeleteComponent onGet={onGet} driver={{ name, _id }}>
                                {({ open }) => (
                                    <Button type="danger" icon="delete" onClick={open}>Desativar</Button>
                                )}
                            </DriverDeleteComponent>
                        ) : (
                                <Button onClick={onActive}>Ativar</Button>
                            )}
                        <Descriptions title="Dados">
                            <Descriptions.Item label="Nome">{name}</Descriptions.Item>
                            {active ? (
                                <Descriptions.Item label="Status">Ativo</Descriptions.Item>
                            ) : (
                                    <Descriptions.Item label="Status">Desativado</Descriptions.Item>
                                )}
                            <Descriptions.Item label="Data de nascimento">{new Date(birth_date).toLocaleDateString('en-GB')}</Descriptions.Item>
                        </Descriptions>
                        <Descriptions title="Documentos">
                            <Descriptions.Item label="CPF">{documents_number_cpf}</Descriptions.Item>
                            <Descriptions.Item label="CNH">{documents_number_cnh}</Descriptions.Item>
                            <Descriptions.Item label="Categoria da CNH">{documents_category_cnh}</Descriptions.Item>
                            <Descriptions.Item label="Data da expiração da CNH"> {new Date(documents_expires_at_cnh).toLocaleDateString('en-GB')}</Descriptions.Item>
                        </Descriptions>
                        <Descriptions title="Endereço completo">
                            <Descriptions.Item label="Endereço">{addresses_street_name}</Descriptions.Item>
                            <Descriptions.Item label="Número">{addresses_street_number}</Descriptions.Item>
                            <Descriptions.Item label="Complemento">{addresses_complement}</Descriptions.Item>
                            <Descriptions.Item label="Bairro">{addresses_neighborhood}</Descriptions.Item>
                            <Descriptions.Item label="CEP">{addresses_postal_code}</Descriptions.Item>
                            <Descriptions.Item label="Cidade">{addresses_city}</Descriptions.Item>
                            <Descriptions.Item label="Estado">{addresses_state}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
            </Col>
        </Row>
    )


export default DriverComponent
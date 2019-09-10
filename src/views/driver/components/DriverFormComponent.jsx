import React from 'react'
import { Row, Col, Typography, Button, Form, Input, DatePicker, Alert } from 'antd';
import InputCpf from '../../../components/input/InputCpf'

const { Title } = Typography;

const DriverFormComponent = ({
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
    msgError,
    onChange,
    onChangeCpf,
    onChangeBirthDate,
    onChangeExpireDate,
    onChangeImage,
    onReturn,
    onSave,
    img,
    fileInput
}) => (
        <Row type="flex" justify="center" style={{ marginTop: 10, marginBottom: 10 }}>
            <Col span={12}>
                <Row>
                    <Col span={3}>
                        <Button type="primary" icon="left" onClick={onReturn}>Voltar</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Title level={4}>Dados pessoais</Title>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={23}>
                                    <Form.Item label="Nome:" vertical required>
                                        <Input placeholder="Digite o nome completo do motorista" name='name' value={name} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="CPF:" vertical required>
                                        <InputCpf placeholder="Digite o CPF" value={documents_number_cpf} onChange={onChangeCpf} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={11}>
                                    <Form.Item label="Data de nascimento:" vertical required>
                                        <DatePicker onChange={onChangeBirthDate} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Form.Item label="CNH:" vertical required>
                                        <Input placeholder="Digite a CNH" name='documents_number_cnh' value={documents_number_cnh} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Form.Item label="Categoria da CNH:" vertical required>
                                        <Input placeholder="Ex.: ABCD" name='documents_category_cnh' value={documents_category_cnh} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Form.Item label="Data de expiração:" vertical required>
                                        <DatePicker onChange={onChangeExpireDate} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Title level={4}>Endereço completo</Title>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={19}>
                                    <Form.Item label="Endereço:" vertical required>
                                        <Input placeholder="Digite o endereço completo" name='addresses_street_name' value={addresses_street_name} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={4}>
                                    <Form.Item label="Número:" vertical>
                                        <Input placeholder="Digite o nº" name='addresses_street_number' value={addresses_street_number} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Form.Item label="Complemento:" vertical>
                                        <Input placeholder="Digite o complemento" name='addresses_complement' value={addresses_complement} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Form.Item label="Bairro:" vertical>
                                        <Input placeholder="Digite o bairro" name='addresses_neighborhood' value={addresses_neighborhood} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={7}>
                                    <Form.Item label="CEP:" vertical required>
                                        <Input placeholder="Digite o CEP" name='addresses_postal_code' value={addresses_postal_code} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="Cidade:" vertical required>
                                        <Input placeholder="Digite a cidade" name='addresses_city' value={addresses_city} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col offset={1} span={11}>
                                    <Form.Item label="Estado:" vertical required>
                                        <Input placeholder="Digite o estado" name='addresses_state' value={addresses_state} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        {msgError && (
                                            <Alert message={msgError} type="error" />
                                        )}
                                    </div>
                                    <Button type="primary" icon="save" onClick={onSave}>Salvar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
            <Col span={4}>
                {img()}
                <div>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={onChangeImage}
                        ref={e => { fileInput = e }} />
                    <Button type="primary" icon="camera" onClick={() => fileInput.click()} block>Adicionar foto</Button>
                </div>
            </Col>
        </Row>
    )

export default DriverFormComponent
import React from 'react'
import InputMask from 'react-input-mask';
import { Input } from 'antd'

export default (props) => (
    <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange}>
        {(inputProps) => <Input placeholder={props.placeholder} {...inputProps} />}
    </InputMask>
)
import { TextInput, TextInputProps } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';

import { omitObjectAttribute } from '../../utils/index';
import { FormContext, IFormData } from '../form';
import { FieldContext } from '../field';

interface IProps extends TextInputProps {
}

const Index = (props: IProps) => {
    const { formData, setFormData } = useContext<IFormData>(FormContext);
    const { name, trigger } = useContext<IFormData>(FieldContext);
    const newProps = omitObjectAttribute(props, ['keyboardType', 'onChangeText']);
   
    const handleChangeText = (value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });
        trigger(value, name, formData, 'password');
    }

    return (
        <TextInput
            {...newProps}
            secureTextEntry
            style={[styles.commonInput, props.style]}
            onChangeText={handleChangeText}
        />
    );
}

export default Index
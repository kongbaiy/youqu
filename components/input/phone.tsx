import React, { useCallback, useContext } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

import { omitObjectAttribute } from '../../utils/index';
import { FormContext, IFormData } from '../form';
import { FieldContext } from '../field';

interface IProps extends TextInputProps {
    name?: string;
}

const Index = (props: IProps) => {
    const { formData, setFormData } = useContext<IFormData>(FormContext);
    const { name, trigger } = useContext<IFormData>(FieldContext);
    const newProps = omitObjectAttribute(props, ['keyboardType', 'maxLength', 'onChangeText']);
    
    const handleChangeText = (value: string | number) => {
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleBlur = useCallback(() => {
        trigger(formData[name], name, formData);
    }, [formData]);

    return (
        <TextInput
            {...newProps}
            keyboardType="numeric"
            returnKeyType="go"
            maxLength={11}
            style={[styles.commonInput, props.style]}
            onChangeText={handleChangeText}
            onBlur={handleBlur}
        />
    );
}

export default Index
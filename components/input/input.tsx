import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

interface IProps extends TextInputProps {
    
}

const Index = (props: IProps) => {
    return (
        <TextInput {...props} style={[styles.commonInput]} />
    )
}

export default Index
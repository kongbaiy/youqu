import { Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

import {
    CusForm,
    CusField,
    CusButtonGroup,
    CusButton,
    CusInput,
} from '../../components';
import pxToDp from '../../utils/pxToDp';
import api from '../../api';


interface IRegisterParams {
    phone: number;
    pwd: string;
    code: number;
}

const Index = () => {
    const [form, setForm] = useState<IRegisterParams | any>({});
    const rules: any = {
        phone: {
            message: '请输入手机号',
            pattern: /\d{11}/
        }
    }

    const handlePress = async () => {
       
    };
  
    return (
        <Text style={styles.title}>注册</Text>

    );
};


const styles = StyleSheet.create({
    title: {
        marginTop: pxToDp(180),
        fontSize: pxToDp(80),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    buttonGroup: {
        marginTop: pxToDp(60),
    },
});

export default Index;

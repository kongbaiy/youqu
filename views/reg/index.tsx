import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

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
        <CusForm setForm={setForm} rules={rules}>
            <Text style={styles.title}>注册</Text>
            <CusField name="phone">
                <CusInput.Phone placeholder="请输入手机号" />
            </CusField>
            <CusField name="code">
                <CusInput.Code placeholder="验证码" />
            </CusField>

            <CusButtonGroup style={styles.buttonGroup}>
                <CusButton
                    title="提交"
                    style={{ 
                        width: pxToDp(400), 
                        borderRadius: 50,
                    }}
                    onPress={handlePress}
                />
            </CusButtonGroup>
        </CusForm>
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

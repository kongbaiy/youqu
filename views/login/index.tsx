import { Text, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';

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
    const CusFormRef:any = useRef();

    const handlePress = async () => {
        CusFormRef.current?.validateFields()
        // const result = await api.getCode({
        //     phone: 13350850539,
        //     ty: 1
        // });
    };
  
    return (
        <View style={styles.container}>
            <CusForm ref={CusFormRef} setForm={setForm} >
                <Text style={styles.title}>登录</Text>
                <CusField name="phone" required>
                    <CusInput.Phone placeholder="请输入账号" />
                </CusField>
                <CusField name="pwd" required>
                    <CusInput.Password placeholder="请输入账号" />
                </CusField>
                <CusField name="code" required>
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
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginLeft: pxToDp(80),
        marginRight: pxToDp(80)

    },
    title: {
        marginTop: pxToDp(180),
        marginBottom: pxToDp(60),
        fontSize: pxToDp(80),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    buttonGroup: {
        marginTop: pxToDp(20),
    },
});

export default Index;
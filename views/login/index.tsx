import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import {
    CusForm,
    CusField,
    CusButtonGroup,
    CusButton,
    CusInput,
} from "../../components";
import pxToDp from "../../utils/pxToDp";
import api from "../../api";


interface IRegisterParams {
    phone: number;
    pwd: string;
    code: number;
}

const Index = () => {
    const [form, setForm] = useState<IRegisterParams | any>({});

    const handlePress = async () => {

        const result = await api.register({
            phone: 13350850539,
            ty: 1
        });
        console.log('results:', result);
    };

    const sendRegister = async (params: any) => {
        try {
            const result = await api.register(params);
            console.log('result:', result);
        } catch (error) {
            console.log('error:', error);
        }
    };

    return (
        <CusForm setForm={setForm}>
            <Text style={styles.title}>登录</Text>
            <CusField name="phone">
                <CusInput.Phone placeholder="请输入账号" />
            </CusField>
            <CusField name="pwd">
                <CusInput.Password placeholder="请输入账号" />
            </CusField>
            <CusField name="code">
                <CusInput.Phone placeholder="验证码" />
            </CusField>

            <CusButtonGroup style={styles.buttonGroup}>
                <CusButton
                    title="登录"
                    width={pxToDp(400)}
                    round={50}
                    onPress={handlePress}
                />
            </CusButtonGroup>
            <View></View>
        </CusForm>
    );
};


const styles = StyleSheet.create({
    title: {
        marginTop: pxToDp(180),
        fontSize: pxToDp(80),
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
    },
    buttonGroup: {
        marginTop: pxToDp(60),
    },
});

export default Index;

import { StyleSheet, Text } from 'react-native';
import React, { createContext, useContext, useState } from 'react';
import { FormContext, IFormData } from '../form';
import pxToDp from '../../utils/pxToDp';
import { phone, password } from '../../utils';

interface IRule {
    [key: string]: {
        required?: boolean;
        pattern: RegExp;
        message?: string;
        validate?: (
            value: any,
            name: string,
            data: Array<any> | Object
        ) => boolean;
    };
}

interface IFieldContext {
    name?: string;
    rule?: IRule;
    trigger?: (value: any, name: string, data: Object, type: string) => void;
}

interface IProps extends IFieldContext {
    children?: React.JSX.Element;
    required?: boolean;
}

export const FieldContext = createContext<IFieldContext>({});

const Index = (props: IProps) => {
    const { rules = {}, formData } = useContext<IFormData>(FormContext);
    const [errorVisible, setErrorVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const rule = rules[props.name as string];

    const trigger = (value: any, name: string, data: Object, type: string) => {
        if (rule) {
            if (typeof rule.validate === 'function') {
                rule.validate(value, name, data);

            } else if((value || rule.required) && !rule.pattern?.test(value)) {
                setErrorMessage(rule.message);
                setErrorVisible(true);

            } else {
                setErrorMessage('');
                setErrorVisible(false);
            }
        } else {
            if (props.required && type === 'phone' && !phone.test(value)) {
                setErrorMessage('请输入正确的手机号');
                setErrorVisible(true);

            } else if (props.required && type === 'password' && !password.test(value)) {
                setErrorMessage('密码格式不正确');
                setErrorVisible(true);

            } else if (props.required && type === 'code' && value.toString().length < 6) {
                setErrorMessage('请输入6位验证码');
                setErrorVisible(true);
                
            } else {
                setErrorMessage('');
                setErrorVisible(false);
            }
        }
    }

    return (
        <FieldContext.Provider value={{ name: props.name, trigger }}>
            {props.children}
            <Text style={[styles.error, !errorVisible && styles.hidden]}>
                {errorMessage}
            </Text>
        </FieldContext.Provider>
    );
};

const styles = StyleSheet.create({
    hidden: {
        opacity: 0
    },
    error: {
        paddingVertical: pxToDp(8),
        fontSize: pxToDp(20),
        color: 'red',
        
    }
});

export default Index;

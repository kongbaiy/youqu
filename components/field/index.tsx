import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { FormContext, IFormData } from '../form';
import { Alert } from 'react-native';


interface IRule {
    [key: string]: {
        required?: boolean;
        pattern: RegExp,
        message?: string,
        validate?: (value: any, name: string, data: Array<any> | Object) => boolean
    }
}

interface IFieldContext {
    name?: string;
    rule?: IRule,
    trigger?: (value: any, name: string, data: Object) => any
}

interface IProps extends IFieldContext {
    children?: React.JSX.Element;
}

export const FieldContext = createContext<IFieldContext>({});

const Index = (props: IProps) => {
    const { rules } = useContext<IFormData>(FormContext);
    const { pattern, message, validate, required } = rules[props.name as string] || {};
    const trigger = (value: any, name: string, data: Object) => {
        if (typeof validate === 'function') {
            validate(value, name, data);
            return;
        }
        if (value && !pattern?.test(value) || required && !pattern?.test(value)) {
            Alert.alert('提示', message);
            return;
        }
    }
    
    return (
        <FieldContext.Provider value={{ name: props.name, trigger }}>
            {props.children}
        </FieldContext.Provider>
    )
}

export default Index
import React, { ReactNode, SetStateAction, createContext, useState } from 'react';

export interface IFormData {
    [key: string]: any
}

interface IRules {
    [key: string]: {
        required?: boolean;
        pattern?: RegExp,
        message?: string,
        validate?: (value: any, name: string, data: Array<any> | Object) => boolean
    }
}

interface IProps {
    children?: ReactNode;
    setForm?: <T>(params: T) => void;
    rules?: IRules
}

export const FormContext = createContext({});

const Index = (props: IProps) => {
    const [ formData, setFormData ] = useState<IFormData>({});

    // if (typeof props.setForm === 'function') {
    //     props.setForm(formData);
    // }

    return (
        <FormContext.Provider value={{ formData, setFormData, rules: props.rules }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default Index
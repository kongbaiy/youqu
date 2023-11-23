import React, { ReactNode, SetStateAction, createContext, useState } from 'react';

export interface IFormData {
    [key: string]: any
}

interface IProps {
    children?: ReactNode;
    setForm?: React.Dispatch<SetStateAction<any>>
}

export const FormContext = createContext({});

const Index = (props: IProps) => {
    const [ formData, setFormData ] = useState<IFormData>({});

    if (typeof props.setForm === 'function') {
        props.setForm(formData);
    }
    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default Index
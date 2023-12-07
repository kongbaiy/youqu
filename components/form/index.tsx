import React, { ReactNode, createContext, useEffect, useRef, useState } from 'react';

export interface IFormData {
    [key: string]: any;
}

interface IRules {
    [key: string]: {
        required?: boolean;
        pattern?: RegExp;
        message?: string;
        validate?: (
            value: any,
            name: string,
            data: Array<any> | Object
        ) => boolean;
    };
}

interface IProps {
    children?: ReactNode;
    setForm?: <T>(params: T) => void;
    rules?: IRules;
}

export const FormContext = createContext({});

const Index = React.forwardRef((props: IProps, ref) => {
    const [formData, setFormData] = useState<IFormData>({});
    // const formChildren = React.Children.map(props.children, (child: any) => {
    //     const { props } = child;
    //     if (props.required && props.name) return props
    // });
    
    useEffect(() => {
        props.setForm?.(formData);
    }, [formData]);


    const validateFields = (callback: Function) => {
        // formChildren.map((item: any) => {
        //     const { name } = item;
        //     console.log(formData[name]);
        // });
    }

    React.useImperativeHandle(ref, () => ({
        validateFields
    }));

    return (
        <FormContext.Provider
            value={{ 
                formData, 
                setFormData, 
                rules: props.rules, 
            }}
        >
            {props.children}
        </FormContext.Provider>
    );
});

export default Index;

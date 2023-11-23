import React, { createContext } from 'react';

interface IFieldContext {
    name?: string;
}

interface IProps extends IFieldContext {
    children?: React.JSX.Element;
}

export const FieldContext = createContext<IFieldContext>({});

const Index = (props: IProps) => {
    return (
        <FieldContext.Provider value={{ name: props.name }}>
            {props.children}
        </FieldContext.Provider>
    )
}

export default Index
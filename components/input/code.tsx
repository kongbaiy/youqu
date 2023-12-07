import { View, TextInput, TextInputProps } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import styles from './styles';

import { omitObjectAttribute } from '../../utils/index';
import { FormContext, IFormData } from '../form';
import { FieldContext } from '../field';
import Button from '../button';

interface IProps extends TextInputProps {
    delay?: number
} 

let interval: any;
const defaultDelay: number = 60;

const Index = (props: IProps) => {
    const { formData, setFormData } = useContext<IFormData>(FormContext);
    const { name, trigger } = useContext<IFormData>(FieldContext);
    const newProps = omitObjectAttribute(props, ['keyboardType', 'maxLength', 'onChangeText']);
    const delay = props.delay || defaultDelay;
    let [time, setTime] = useState<number>(delay);

    useEffect(() => {
        return () => {
            clearInterval(interval);
        }
    }, []);
    
    const handlePress = () => {
        if (!interval) startInterval();
    }

    const handleChangeText = (value: string | number) => {
        setFormData({
            ...formData,
            [name]: value
        });
        trigger(value, name, formData, 'code');
    }

    
    const startInterval = () => {
        interval = setInterval(() => {
            if (time > 1) {
                time -= 1;
                setTime(time);
            } else {
                setTime(delay);
                clearInterval(interval);
                interval = null;
            }
        }, 1000);
    }
    
    return (
        <View style={styles.code}>
            <TextInput 
                {...newProps} 
                style={styles.codeInput} 
                keyboardType="numeric"
                maxLength={6} 
                onChangeText={handleChangeText}
            />
            <Button 
                title={time === delay ? '获取验证吗' : String(time + '秒')}
                style={{
                    fontSize: 14,
                    width: 100
                }} 
                onPress={handlePress}
                disabled={time < delay }
            />
        </View>
    )
}

export default Index
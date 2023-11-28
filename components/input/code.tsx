import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import styles from './styles';

import Button from '../button';

interface IProps extends TextInputProps {

} 

let interval: any;

const Index = (props: IProps) => {
   let [time, setTime] = useState(6);

    useEffect(() => {
        return () => {
            clearInterval(interval);
        }
    }, []);
    
    const handlePress = () => {
        if (!interval) startInterval();
    }
    
    const startInterval = () => {
        interval = setInterval(() => {
            if (time > 1) {
                time -= 1;
                setTime(time);
            } else {
                setTime(6);
                clearInterval(interval);
                interval = null;
            }
        }, 1000);
    }
    
    return (
        <View style={styles.code}>
            <TextInput 
                {...props} 
                style={styles.codeInput} 
                keyboardType="numeric"
                maxLength={6} 
            />
            <Button 
                title={time === 6 ? '获取验证吗' : String(time + '秒')}
                style={{
                    fontSize: 14,
                    width: 100
                }} 
                onPress={handlePress}
                disabled={time < 6 }
            />
        </View>
    )
}

export default Index
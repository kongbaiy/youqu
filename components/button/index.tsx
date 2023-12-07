import { 
    TouchableOpacity,
    TouchableOpacityProps,
    View, 
    Text, 
    StyleSheet, 
    ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';


import pxToDp from '../../utils/pxToDp';
import { pickObjectAttribute } from '../../utils/index';

interface ITouchButtonStyle {
    [key: string]: any
}

interface ITouchButtonProps extends TouchableOpacityProps {
   title: string;
   style?: ITouchButtonStyle;
   loading?: boolean;
}

function TouchButton(props: ITouchButtonProps): JSX.Element {
    const [touchableOpacityProps, setTouchableOpacityProps] = useState<any>();
    const [viewStyle, setViewStyle] = useState<any>();
    const [textStyle, setTextStyle] = useState<any>();
    
    useEffect(() => {
        setTouchableOpacityProps(
            pickObjectAttribute(
                props, 
                ['onPress', 'onPressIn', 'onPressOut', 'onLongPress', 'disabled']
            )
        );
        setViewStyle(
            pickObjectAttribute(
                props.style, 
                ['width', 'height', 'borderRadius']
            )
        );
        setTextStyle(
            pickObjectAttribute(
                props.style, 
                ['fontSize', 'fontWeight', 'color']
            )
        );
    }, [props.style]);
    
    return (
        <TouchableOpacity {...touchableOpacityProps}>
            <View style={[styles.button, viewStyle]}>
                
                {
                    props.loading ? 
                    <ActivityIndicator /> : 
                    <Text 
                        style={[styles.buttonText, textStyle]}
                    >
                        {props.title}
                    </Text>
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: pxToDp(8),
        backgroundColor: 'blue',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        color: '#fff',
        
    },
});

export default TouchButton;

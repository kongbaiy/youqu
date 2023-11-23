import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacityProps 
} from 'react-native';

import pxToDp from '../../utils/pxToDp';
import { pickObjectAttribute } from '../../utils/index';

interface ITouchButtonProps extends TouchableOpacityProps {
    title: String;
    disabled?: boolean;
    width?: number;
    height?: number;
    round?: boolean | number;
}

const getTouchButtonStyle = (
    props: Pick<ITouchButtonProps, 'width' | 'height' | 'round'>
) => {
    const { width, height, round } = props;
    const style: any = {
        width,
        height,
    };

    if (round) style.borderRadius = typeof round === 'boolean' ? 8 : round;

    return style;
};

function TouchButton(props: ITouchButtonProps): JSX.Element {
    const TouchableOpacityProps = pickObjectAttribute(
        props, 
        ['onPress', 'onPressIn', 'onPressOut', 'onLongPress', 'disabled']
    );
    
    return (
        <TouchableOpacity {...TouchableOpacityProps}>
            <View style={[styles.button, getTouchButtonStyle(props)]}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: pxToDp(8),
        paddingBottom: pxToDp(8),
        backgroundColor: 'blue',
        flexDirection: 'column',
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

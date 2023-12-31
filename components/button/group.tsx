import { StyleSheet, View } from 'react-native';
import React, { ReactComponentElement } from 'react';

interface IProps {
    children: ReactComponentElement<any>,
    style?: StyleSheet.NamedStyles<unknown>
}

const Index = (props: IProps) => (
    <View style={props.style}>
        {props.children}
    </View>
)

export default Index
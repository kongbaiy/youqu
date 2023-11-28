import { 
    StyleSheet, 
} from 'react-native';
import commontStyle from '../../../styles/common';
import pxToDp from '../../../utils/pxToDp';

const styles = StyleSheet.create({
    commonInput: {
        ...commontStyle.MarLR,
        paddingVertical: 0,
        marginTop: pxToDp(40),
        paddingLeft: pxToDp(14),
        paddingRight: pxToDp(14),
        width: pxToDp(400),
        height: pxToDp(60),
        fontSize: 14,
        fontWeight: '400',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderRadius: 8,
    },
    code: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...commontStyle.MarLR,
        marginTop: pxToDp(40),
        paddingLeft: pxToDp(14),
        width: pxToDp(400),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden'
    },
    codeInput: {
        flex: 1,
        paddingVertical: 0,
        paddingStart: 0,
        height: pxToDp(60),
        fontSize: 14,
        fontWeight: '400',
    },
});

export default styles
import { 
    StyleSheet, 
} from 'react-native';
import commontStyle from '../../../styles/common';
import pxToDp from '../../../utils/pxToDp';

const styles = StyleSheet.create({
    commonInput: {
        ...commontStyle.MarLR,
        marginTop: pxToDp(40),
        paddingLeft: pxToDp(14),
        paddingRight: pxToDp(14),
        width: pxToDp(400),
        height: pxToDp(60),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderRadius: 8
    }
});

export default styles
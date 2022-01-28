import {StyleSheet} from 'react-native';
import COLORS from '../../consts/colors';

const styleCheck = StyleSheet.create({
    topicHeading: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        marginLeft: '5%'
    },
    topicDetails: {
        backgroundColor: COLORS.light,
        marginHorizontal: '5%',
        marginTop: 10,
        height: 70,
        padding: 10,
        alignContent: 'center',
    },
    changeSave:{
        fontSize: 18,
        marginLeft: '5%',
        color: COLORS.green,
        marginTop: 20,
        marginBottom: 20
    },
    paymentDetailHeading: {
        fontSize: 25,
        color: 'black',
        marginTop: 10,
        marginLeft: '5%'
    }
})

export default styleCheck;
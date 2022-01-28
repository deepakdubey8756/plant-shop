import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";


export default StyleSheet.create({
    topNav: {
        height: 100,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:COLORS.green
    },
    signupHeader:{
        width: '40%',
        marginTop: 40
    },
    loginOption:{
        width:'30%',
        marginTop: 60
    },
    signupHeaderText: {
        color: COLORS.white,
        fontSize: 30,
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    loginOptionText: {
        color: 'black',
        fontSize: 20,
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    skipOption: {
        marginTop: 60,
        width:'30%',
    },

    skipOptionText: {
        color: COLORS.dark,
        fontSize: 20,
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    topicHeading: {
        fontSize: 20,
        color: COLORS.dark,
        marginTop: 10,
        marginLeft: '5%'
    },
    topicDetails: {
        marginHorizontal: '5%',
        marginTop: 10,
        height: 50,
        padding: 10,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.dark


    },
})
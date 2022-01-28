import {StyleSheet} from "react-native";
import COLORS from "../../consts/colors";

const styleDetails = StyleSheet.create({
    userDetails: { // backgroundColor: 'green',
        // borderBottomWidth: 2,
        // borderBottomColor: COLORS.light
    },
    userImage: {
        width: 100,
        height: 100,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginTop: 5,
        alignSelf: 'center'
    },
    topicDetail: {
        width: '40%',
        marginTop: 18,
        fontSize: 18,
        marginLeft: '5%',
        borderBottomColor: COLORS.green,
        borderBottomWidth: 0.3
    },
    userName: {
        fontSize: 20,
        marginLeft: '5%',
        marginTop: 20
    },
    editIcons: {
        alignSelf: 'center',
        marginLeft: 10
    },
    inputName: {
        marginTop: 15,
        backgroundColor: COLORS.white,
        height:50,
        marginLeft: '5%',
        borderRadius: 8,
        width:  '80%',
        borderWidth: 1,
        borderColor: COLORS.dark,
        paddingLeft: 8
    },
    changeSave:{
        fontSize: 18,
        marginLeft: '5%',
        color: COLORS.green,
        marginTop: 10,
        marginBottom: 45

    },
    userEmail: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 10,
    }


});

export default styleDetails;

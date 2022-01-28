import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

const userStyle = StyleSheet.create({
    userProfile: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: '2%',
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row'
    },
    userDetails: {
        flex: 1,
        // backgroundColor: 'green',
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: COLORS.light
    },
    userImage: {
        width: 100,
        height: 100,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginTop: 5,
        marginLeft: '4%',
        marginBottom: 6
    },
    userName: {
        marginTop: 20,
        fontSize: 25,
        marginLeft: 20
    },
    userEmail: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15
    },
    userIcons: {
        marginLeft: '5%',
        alignSelf: 'center',
        color: 'grey'
    },
    userItems: {
        fontSize: 20,
        marginLeft: '5%',
        alignSelf: 'center'
    },
    userExitContainer: {
        flex: 1.5,
        justifyContent: 'center',
    },
    userExit: {
      width: '80%',
      height: 50,
      backgroundColor: COLORS.light,
      alignSelf: 'center',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }

});

export default userStyle;
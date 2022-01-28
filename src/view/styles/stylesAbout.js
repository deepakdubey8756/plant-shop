import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

const styleAbout = StyleSheet.create({
    headingContainer: {
        marginTop: 30,
        alignSelf: 'center'
    },
    headingImage: {
        width: 100,
        height: 100,
        // backgroundColor: 'red',
        resizeMode: "cover",
        alignSelf: 'center'
    },
    headingText: {
        fontSize: 45,
        borderBottomColor: COLORS.green,
        borderBottomWidth: 3,
    },
    aboutDescri: {
        padding: 30,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light,
        fontSize: 18
    },
    versionControl: {
        borderBottomColor: COLORS.light,
        borderBottomWidth: 1,
        height: 50,
        marginLeft: '10%',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center'
    }, 


});


export default styleAbout;
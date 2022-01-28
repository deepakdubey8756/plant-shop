import React from "react";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    topNav: {
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupHeader:{
        height: 50,
        width: '40%',
    },


    loginOption:{
        height: 30,
        width:'30%',
    },
    signupHeaderText: {
        color: 'darkblue',
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
        height: 30,
        width:'30%',
    },

    skipOptionText: {
        color: 'black',
        fontSize: 20,
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    searchInput: {
        height: 50,
        width: "90%",
        backgroundColor: "#F0F0F0",
        borderRadius: 4,
        paddingLeft: 10,
        marginHorizontal: '5%',
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: '1%'
    },
    searchContainer: {
        // backgroundColor: 'red',
        marginTop: '5%'
    },
    forgPass: {
        marginTop: 20,
        marginLeft: '30%',
        color: 'black'
    }
})
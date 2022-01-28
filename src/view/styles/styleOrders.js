import React from "react";
import {StyleSheet} from 'react-native';
import COLORS  from "../../consts/colors";

const OrderList = StyleSheet.create({
    cartHeading: {
        fontSize: 30,
        alignSelf: "center",
        fontWeight: 'bold',
        marginRight: '25%',
        color: COLORS.green,
        marginBottom: 30
    },
    cartHeadingContainer: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cartContainer: {
        width: '100%',
        height: 80,
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        marginBottom: 4, 
    },
    cartImage: {
        width: 130,
        height: '100%',
        resizeMode: "contain",
        backgroundColor: COLORS.white
    },
    cartName: {
        marginLeft: '5%',
        fontSize: 20,
        fontWeight: 'bold',

    }

});
export default OrderList;
import React from "react";
import {StyleSheet} from 'react-native';
import COLORS  from "../../consts/colors";

const orderTrack = StyleSheet.create({
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
    iconCheck: {
        alignSelf: 'center',
        backgroundColor:'#32CD32',
        borderRadius: 40,
        marginRight:'10%',
    },
    orderTaken: {
        fontSize: 20
    }

});
export default orderTrack;
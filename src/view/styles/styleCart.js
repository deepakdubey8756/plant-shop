import React from "react";
import {StyleSheet} from 'react-native';
import COLORS  from "../../consts/colors";

const CartStyle = StyleSheet.create({
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
        height: 110,
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: COLORS.light,
    },
    cartImage: {
        width: 130,
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: COLORS.white,
    },
    cartName: {
        marginLeft: '10%',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: '5%'
    },
    borderBtn: {
        borderColor: COLORS.dark,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 30,
        marginTop: 15,
        marginLeft: 5
      },
      borderBtnText: {fontWeight: 'bold', fontSize: 20},
      cartPrice: {
          color: COLORS.green,
          marginTop: '5%',
          fontSize: 20,
          marginLeft: '2%'
      },
      bottomContainer: {
          height: 80,
          marginTop: 30,
          flexDirection: 'row',
          width: '100%'
      },
      totalPrice: {
        //   backgroundColor: COLORS.green,
          width: '40%',
          marginLeft: '5%',
        //   justifyContent: 'center',
          alignItems: 'center'
      },

});
export default CartStyle;
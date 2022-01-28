import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import COLORS from "../../consts/colors";
import MatComIcons from "react-native-vector-icons/MaterialCommunityIcons"
import CustomButton from "../components/customButton";

export default function Congratulation({navigation}){
    return (
        <View style={{backgroundColor: COLORS.white, height: '100%', width: '100%'}}>
            <View style={styles.borderCircle}>
                <View>
                <MatComIcons name="check" size={80} color="white" style={styles.iconCheck} />
                </View>
            </View>
            <Text style={{marginTop: 30, marginLeft: '15%', fontSize: 30}}>
                Congratulations !!!
            </Text>
            <Text style={{marginTop: 10, marginHorizontal: '15%', fontSize: 17}}>
                Your order has been taken and It will be with you as soon as possible
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> navigation.navigate('orderTrack')}
                style={{marginHorizontal: '25%'}}>
                    <CustomButton size="small" name="Track Order"/>
                </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> navigation.navigate('Home')}
                style={{marginHorizontal: '25%'}}>
                    <CustomButton size="small" name="Keep Exploring"/>
                </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    borderCircle: {
        width: 150,
        height: 150,
        backgroundColor: '#E0FFFF',
        marginTop: 110,
        marginHorizontal: '30%',
        borderRadius: 80,
        borderWidth:3,
        borderColor: '#32CD32'
    },
    iconCheck: {
        alignSelf: 'center',
        marginTop: '20%',
        backgroundColor:'#32CD32',
        borderRadius: 40
    }
})
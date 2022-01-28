import React from "react";
import {View, Text, TextInput, ScrollView, TouchableOpacity, Touchable} from 'react-native';
import COLORS from "../../consts/colors";
import styleCheck from "../styles/styleCheckout";
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from "../components/customButton";
export default function Checkout({navigation}) {
    return (
        <ScrollView style={{
            backgroundColor: COLORS.white, 
            height:"100%", 
            width:"100%"}}>
                <MatComIcons name="arrow-left" size={30} onPress={() => navigation.goBack()} style={{marginTop: 45}} />
            <Text style={styleCheck.topicHeading}>
               Delivery Adress
            </Text>
            <Text style={styleCheck.topicDetails}>
              Mau Bujurg, Badhalganj, Gorakhpur, UttarProdesh, 273402
            </Text>

            <Text style={styleCheck.topicHeading}>
               Phone Number
            </Text>
            <Text style={[styleCheck.topicDetails, {height: 40}]}>
              9987560997
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{ justifyContent: 'center', }}
                onPress={()=> navigation.navigate('userDetails')}>
                    <Text style={styleCheck.changeSave}>Change Details</Text>
                </TouchableOpacity>
            
            <Text style={styleCheck.paymentDetailHeading}>
               Payment Details
            </Text>
            <Text style={[styleCheck.topicHeading, {marginTop: 30}]}>
               Card Holder's name
            </Text>
            <TextInput style={[styleCheck.topicDetails, {borderWidth:1, borderColor: COLORS.dark, backgroundColor:COLORS.white, height: 50}]} placeholder="Enter card holder name"/>
            <Text style={[styleCheck.topicHeading, {marginTop: 30}]}>
               Card Number
            </Text>
            <TextInput
             keyboardType='numeric'
             style={[styleCheck.topicDetails, {borderWidth:1, borderColor: COLORS.dark, backgroundColor:COLORS.white, height: 50}]} placeholder="Enter card number"/>
            <View style= {{flexDirection: 'row', marginLeft: '4%'}}>
            <View>
                <Text style={[styleCheck.topicHeading]}>
                    Date
                </Text>
                <TextInput
             keyboardType='numeric'
             style={[styleCheck.topicDetails, {borderWidth:1, borderColor: COLORS.dark, backgroundColor:COLORS.white, height: 50}]} placeholder="Enter exp. Date"/>
            </View>
            <View>
                <Text style={[styleCheck.topicHeading]}>
                    CCV
                </Text>
                <TextInput
             keyboardType='numeric'
             maxLength={3}
             style={[styleCheck.topicDetails, {borderWidth:1, borderColor: COLORS.dark, backgroundColor:COLORS.white, height: 50}]} placeholder="723"/>
            </View>
            </View>
            <View style= {{flexDirection: 'row', marginLeft: '1%', marginBottom: 45}}>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> alert('Integrate payment systems first')}>
                    <CustomButton size="small" name="Continue"/>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> navigation.navigate('congratulations')}>
                    <CustomButton size="small" name="Pay On Delivery"/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
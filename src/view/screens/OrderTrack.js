import React from 'react';
import {View, Text,  Pressable, Linking, Platform, TouchableOpacity} from 'react-native';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler';
import styleTrack from '../styles/styleTrack'
import COLORS from '../../consts/colors';
import CustomButton from '../components/customButton';


const dialCall = () => {
 
    let numberFormat = '';
 
    if (Platform.OS === 'android') {
      numberFormat = 'tel:${{1234567890}}';
    }
    else {
      numberFormat = 'telprompt:${1234567890}';
    }
 
    Linking.openURL(numberFormat);
  };

export default  function OrderTrack({navigation}, productStatus){
    return (
        <View style={{height: '100%',
            width:"100%",
            backgroundColor: 'white',
            }}> 
      <ScrollView
      showsVerticalScrollIndicator={false} 
      style={{marginTop: 30}}>
            <View style={styleTrack.cartHeadingContainer}>
            <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={38} style={{marginLeft: '5%'}}/>
            </Pressable>
            <Text style={styleTrack.cartHeading}>
                Delevery Status
            </Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', marginBottom: 45}}>
                <MatComIcons name='order-bool-ascending-variant' size={38} style={{marginLeft: '5%', backgroundColor:COLORS.light, borderRadius: 30}}/>
                <Text style={styleTrack.orderTaken}>Order Taken</Text>
                <MatComIcons name="check" size={30} color="white" style={styleTrack.iconCheck} />

            </View>
            <View style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', marginBottom: 45}}>
            <MatComIcons name='truck-delivery-outline' size={38} style={{marginLeft: '5%', backgroundColor:COLORS.light, borderRadius: 30}}/>
                <Text style={styleTrack.orderTaken}>{productStatus.shipped==1?'Shipped': "Yet to shipped"}</Text>
                {productStatus.delevered==1? <MatComIcons name="check" size={30} color="white" style={styleTrack.iconCheck} />: <View style={{marginRight: '5%'}}><Text>exp. date</Text><Text style={{marginRight: '5%'}}>20, july</Text></View>}
            </View>
            <View style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', marginBottom: 45}}>
                <MatComIcons name='truck-delivery-outline' size={38} style={{marginLeft: '5%', backgroundColor:COLORS.light, borderRadius: 30}}/>
                <Text style={styleTrack.orderTaken}>{productStatus.delevered==1?'Being Delevered': "Yet to delever"}</Text>
               {productStatus.delevered==1? <MatComIcons name="check" size={30} color="white" style={styleTrack.iconCheck} />: <View style={{marginRight: '5%'}}><Text>exp. date</Text><Text style={{marginRight: '5%'}}>20, july</Text></View>}
            </View>
            <View style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', marginBottom: 45}}>
                <MatComIcons name='truck-delivery-outline' size={38} style={{marginLeft: '5%', backgroundColor:COLORS.light, borderRadius: 30}}/>
                <Text style={styleTrack.orderTaken}>{productStatus.recieved==1?'Order Recieved': "Yet to recieve"}</Text>
                {productStatus.delevered==1? <MatComIcons name="check" size={30} color="white" style={styleTrack.iconCheck} />: <View style={{marginRight: '5%'}}><Text>exp. date</Text><Text style={{marginRight: '5%'}}>20, july</Text></View>}
            </View>
            <View style={{display:'flex', flexDirection:'row' }}>
            <Text style={{marginLeft: '3%', fontSize: 20}}>
                Connect with delevery agent 
            </Text>
            <Icons name="add-call" size={40}
            style={{color: 'green', marginLeft: '5%'}}
            onPress={() => {dialCall()}}
            />
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> navigation.navigate('Home')}
                style={{marginHorizontal: '25%'}}>
                    <CustomButton size="small" name="Keep Exploring"/>
                </TouchableOpacity>
      </ScrollView>
        </View>
    )
};  
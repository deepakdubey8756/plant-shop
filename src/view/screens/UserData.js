import React from 'react';
import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import UserImage from "../../../assets/Myimage.jpg"
import styleUser from '../styles/styleUser';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
export default  function userData({navigation}){
    return (
        <View style={{
            backgroundColor: 'white', 
            height:"100%", 
            width:"100%",
            display: 'flex'}}>
                 <Icon name="arrow-back" size={30} onPress={() => navigation.goBack()} style={{marginTop: '10%'}} />
            <View style={styleUser.userProfile}>
                <Image source={UserImage} style={styleUser.userImage}/>
                <View>
                    <Text numberOfLines={1} style={styleUser.userName}>Deepak Dubey</Text>
                    <Text numberOfLines={1} style={styleUser.userEmail}>
                        dubeydeepak8756@gmail.com
                    </Text>
                </View>
            </View>
            <TouchableOpacity 
            style={[styleUser.userDetails]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('orderList')} 
            >
            <Icon name="shopping-bag" size={35} style={styleUser.userIcons} />
                <Text
                onPress={()=> navigation.navigate("orderList")}
                style={styleUser.userItems}>
                    Orders
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styleUser.userDetails}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('userDetails')} >
            <MatComIcons name="card-account-details-outline" size={35} style={styleUser.userIcons} />
                <Text style={styleUser.userItems}>
                    My Details
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styleUser.userDetails}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('helpDesk')}
            >
            <Icon name="help" size={35} style={styleUser.userIcons} />
                <Text style={styleUser.userItems}>
                    Help
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styleUser.userDetails}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('AboutUs')}>
            <MatComIcons name="alert-circle-outline" size={35} style={styleUser.userIcons} />
                <Text style={styleUser.userItems}>
                    About Us
                </Text>
            </TouchableOpacity>
                <TouchableOpacity 
                style={styleUser.userExitContainer}
                activeOpacity={0.8}
        onPress={() => alert('Are you sure? ')} >
                    <View style={styleUser.userExit}>
                        <Text style={{fontSize: 20, color: COLORS.green}}>
                            LogOut
                        </Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
};
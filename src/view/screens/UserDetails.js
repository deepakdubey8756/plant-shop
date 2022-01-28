import React from 'react';
import {View, Text, TouchableOpacity, Pressable, Image, ScrollView} from 'react-native';
import UserImage from '../../assets/potHeader.png'
import styleDetails from '../styles/styleDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import { TextInput } from 'react-native-gesture-handler';

export default  function userDetails({navigation}){
    const [userName, setUserName] = React.useState('Deepak Dubey');
    const [isEditName, setIsEditName] = React.useState(0);
    const [isEditPhone, setIsEditPhone] = React.useState(0);
    const [userNumber, setUserNumber] = React.useState('9990000003');
    const [userAdress, setUserAdress] = React.useState('Your adress');
    const [isEditAdress, setEditAdress] = React.useState(0); 
    const [isEditCity, setEditCity] = React.useState(0);
    const [isEditState, setEditState] = React.useState(0);
    const [userCity, setUserCity] = React.useState('Your city');
    const [Userstate, setUserState] = React.useState('Your State');
    const [UserPin, setUserPin] = React.useState('273402');
    const [isEditPin, setEditPin] = React.useState(0)
    
    return (
        <ScrollView style={{
            backgroundColor: 'white', 
            height:"100%", 
            width:"100%",
            display: 'flex'}}>
                 <Icon name="arrow-back" size={30} onPress={() => navigation.goBack()} style={{marginTop: '10%'}} />
                <Image source={UserImage} style={styleDetails.userImage}/>
                <Text numberOfLines={1} style={styleDetails.userEmail}>
                        dubeydeepak8756@gmail.com
                    </Text>
           <View style={styleDetails.userDetails}>
                <Text style={styleDetails.topicDetail}>
                    Name
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 8}}>
                    {isEditName==0?<>
                         <Text style={styleDetails.userName}>{userName}</Text>
                         <MatComIcons name="pencil-outline" size={20} style={styleDetails.editIcons} onPress={()=> setIsEditName(1)}/>
                         </>
                    : <>
                    <TextInput placeholder="Enter your name " style={styleDetails.inputName} 
                    onChangeText={text=> setUserName(text)}
                    defaultValue={userName}/>
                    </>
                    }   
                </View>
           </View>
           <View style={styleDetails.userDetails}>
                <Text style={styleDetails.topicDetail}>
                    Phone Number
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 8}}>
                    {isEditPhone==0?<>
                         <Text style={styleDetails.userName}>{userNumber}</Text>
                         <MatComIcons name="pencil-outline" size={20} style={styleDetails.editIcons} onPress={()=> setIsEditPhone(1)}/>
                         </>
                    : <>
                    <TextInput placeholder="Enter your phone number " 
                    style={styleDetails.inputName} 
                    keyboardType='numeric'
                    onChangeText={number=> setUserNumber(number)}
                    maxLength={10}
                    defaultValue={userNumber}/>
                    </>
                    }   
                </View>
           </View>


           <View style={styleDetails.userDetails}>
                <Text style={styleDetails.topicDetail}>
                    city
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 8}}>
                    {isEditCity==0?<>
                         <Text style={styleDetails.userName}>{userCity}</Text>
                         <MatComIcons name="pencil-outline" size={20} style={styleDetails.editIcons} onPress={()=> setEditCity(1)}/>
                         </>
                    : <>
                    <TextInput placeholder="Enter your city " 
                    style={styleDetails.inputName} 
                    onChangeText={number=> setUserCity(number)}
                    maxLength={10}
                    defaultValue={userCity}/>
                    </>
                    }   
                </View>
           </View>
           <View style={styleDetails.userDetails}>
                <Text style={styleDetails.topicDetail}>
                    State
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 8}}>
                    {isEditState==0?<>
                         <Text style={styleDetails.userName}>{Userstate}</Text>
                         <MatComIcons name="pencil-outline" size={20} style={styleDetails.editIcons} onPress={()=> setEditState(1)}/>
                         </>
                    : <>
                    <TextInput placeholder="Enter your state " 
                    style={styleDetails.inputName} 
                    onChangeText={number=> setUserState(number)}
                    maxLength={10}
                    defaultValue={Userstate}/>
                    </>
                    }   
                </View>
           </View>
           <View style={styleDetails.userDetails}>
                <Text style={styleDetails.topicDetail}>
                    pin Code
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 8}}>
                    {isEditPin==0?<>
                         <Text style={styleDetails.userName}>{UserPin}</Text>
                         <MatComIcons name="pencil-outline" size={20} style={styleDetails.editIcons} onPress={()=> setEditPin(1)}/>
                         </>
                    : <>
                    <TextInput placeholder="Enter your state " 
                    style={styleDetails.inputName} 
                    onChangeText={number=> setUserPin(number)}
                    maxLength={10}
                    keyboardType='numeric'
                    defaultValue={UserPin}/>
                    </>
                    }   
                </View>
           </View>



           <View style={styleDetails.userDetails}>
                <Text style={styleDetails.topicDetail}>
                    Adress
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 8}}>
                    {isEditAdress==0?<>
                         <Text style={styleDetails.userName}>{userAdress}</Text>
                         <MatComIcons name="pencil-outline" size={30} style={styleDetails.editIcons} onPress={()=> setEditAdress(1)}/>
                         </>
                    : <>
                    <TextInput placeholder="Enter your Adress " 
                    style={styleDetails.inputName}
                    onChangeText={number=> setUserAdress(number)}
                    defaultValue={userAdress}/>
                    </>
                    }   
                </View>
                <TouchableOpacity
                activeOpacity={0.8}
                style={{ justifyContent: 'center', }}
                onPress={()=> alert('enter the  items first')}>
                    <Text style={styleDetails.changeSave}>Save Changes</Text>
                </TouchableOpacity>
           </View>
        </ScrollView>
    )
};
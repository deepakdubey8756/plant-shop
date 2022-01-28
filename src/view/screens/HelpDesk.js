import React from "react";
import {View, Text, TouchableOpacity, ScrollView, Linking, Touchable} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../../consts/colors";
import CustomButton from "../components/customButton";
import styleHelp from "../styles/styleHelp";


export default function HelpDesk ({navigation}) {
    return (
        <ScrollView style={{height: '100%', width: '100%', backgroundColor:'white'}}>
            <View style={{marginTop: '10%'}}>
                <TouchableOpacity>
                <MatComIcons name="arrow-left" size={35}
                activeOpacity={0.7}
                onPress={()=> navigation.goBack()}/>
                </TouchableOpacity>
                <Text style={{fontSize: 25, alignSelf: 'center', marginTop:'10%'}}>How can we help you ?</Text>
                <Text style={styleHelp.queryTitle}>Title</Text>
                <TextInput placeholder='Enter your query title' style={styleHelp.titleInput}/>
                <Text style={styleHelp.queryTitle}>Query</Text>
                <TextInput placeholder='Enter your query' style={styleHelp.querySearch}/>
                <TouchableOpacity 
                activeOpacity={0.8}
                onPress={()=> alert('sending query')}
                style={{marginLeft: '10%'}}
                >
                    <CustomButton name='Submit' size='small'></CustomButton>
                </TouchableOpacity>
            </View>
            
            <Text style={{fontSize: 25, alignSelf: 'center', marginTop:'10%'}}>Frequently Asked Questions (FAQ'S)</Text>
            <View style={{marginTop: 20, marginLeft: '10%'}}>
                <View style={{ borderWidth: 1, borderColor: COLORS.light}}>
                <Text style={{fontSize: 20, borderBottomWidth: 1, borderBottomColor: COLORS.light, marginTop: '10%'}}>
                    1. Your first FAQ'S ?
                </Text>
                <Text style={{fontSize: 20, margin: 3, marginTop: '10%'}}>
                    Here will be details related to that particular FAQ's.
                </Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: COLORS.light}}>
                <Text style={{fontSize: 20, borderBottomWidth: 1, borderBottomColor: COLORS.light, marginTop: '10%'}}>
                    2. Your second FAQ'S ?
                </Text>
                <Text style={{fontSize: 20, margin: 3, marginTop: '10%'}}>
                    Here will be details related to that particular FAQ's.
                </Text>
                </View>
            </View>
                <Text style={{fontSize: 25, alignSelf: 'center', marginTop:'10%'}}>
                    Connect with us on...
                </Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
                 style={{}}
                 activeOpacity={0.7}
                 onPress={() => navigation.navigate('helpDesk')} >
                    <MatComIcons name='email-outline' size={40}/>
                </TouchableOpacity>
                <TouchableOpacity style={{}}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://www.facebook.com/')}>
                    <MatComIcons name='facebook' size={40} color='blue'/>
                </TouchableOpacity>
                <TouchableOpacity style={{}}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://www.instagram.com/')}>
                    <MatComIcons name='instagram' size={40} color='#8134AF'/>
                </TouchableOpacity>
                <TouchableOpacity style={{}}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://play.google.com/store')}>
                    <MatComIcons name='google-play' size={40} color='#3BCCFF'/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
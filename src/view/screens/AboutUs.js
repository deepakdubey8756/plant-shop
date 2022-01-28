import React from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, Linking} from 'react-native';
import COLORS from '../../consts/colors';
import styleAbout from '../styles/stylesAbout'
import plant1 from '../../../assets/plant1.jpg';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function AboutUs ({navigation}) {
    return (
        <ScrollView style={{width: '100%', height: '100%', backgroundColor:COLORS.white}}>
            <MatComIcons name="arrow-left" size={30} onPress={() => navigation.goBack()} style={{marginTop: '10%'}}/>
            <View style={styleAbout.headingContainer}>
             <Image source={plant1} style={styleAbout.headingImage}/>
             <Text style={styleAbout.headingText}>
                 plant shop
             </Text>
            </View>
            <Text style={styleAbout.aboutDescri}>
                plant shop is a plant selling plateform which sell plant to restorants and personal use.
            </Text>
                <View style={styleAbout.versionControl}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Version 1.0
                    </Text>
                </View>
                <TouchableOpacity
                 style={styleAbout.versionControl}
                 activeOpacity={0.7}
                 onPress={() => navigation.navigate('helpDesk')} >
                    <MatComIcons name='email-outline' size={20}/>
                    <Text style={{marginLeft: 5}}>Connect with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleAbout.versionControl}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://www.facebook.com/')}>
                    <MatComIcons name='facebook' size={20} color='blue'/>
                    <Text style={{marginLeft: 5, fontWeight: "bold"}}>Like us on facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleAbout.versionControl}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://www.instagram.com/')}>
                    <MatComIcons name='instagram' size={20} color='#8134AF'/>
                    <Text style={{marginLeft: 5, fontWeight: "bold"}}>Catch us on instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleAbout.versionControl}
                activeOpacity={0.7}
                onPress={() => Linking.openURL('https://play.google.com/store')}>
                    <MatComIcons name='google-play' size={20} color='#3BCCFF'/>
                    <Text style={{marginLeft: 5, fontWeight: "bold"}}>Catch us on Google play</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}
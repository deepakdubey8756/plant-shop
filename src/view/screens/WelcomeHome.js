import React from "react";
import { Text, Image,  View,  TouchableOpacity } from "react-native";
import COLORS from '../../consts/colors'
//importing static and media files....
import plant14 from '../../../assets/plant14.jpeg';

export default function Home({navigation}) {

  return (
    <View style={{
        paddingBottom: 25,
        height: '100%',
        backgroundColor: '#fff'
        
    }}>
        <Image source={plant14} style={{
            width: '100%',
            height: "50%",
            backgroundColor: '#fff',
            
        }}></Image>
        <View style={{
            height: '100%',
            backgroundColor: 'lightgrey',
            borderRadius: 30

        }}>
            <Text style={{
                fontSize: 25,
                paddingLeft: '15%',
                fontWeight: "bold",
                color: 'black',
                marginTop: '8%'
            }}>
                Welcome To Plant shop
            </Text>
            <Text style={{
                fontSize: 20,
                paddingLeft: '10%',
                color: 'black',
                marginTop: '10%'
            }}>
                We provide wide range of plants. To save our mother nature.
                Get started to explore more....
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('LoginScreen')}>
                <View style={{
                    backgroundColor: COLORS.green,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    width: '80%',
                    height: '25%',
                    marginLeft: '10%',
                    marginTop: '15%'
                }}>
                    <Text style={{ color: 'white'}}>
                        Let's Explore
                    </Text>
                </View>
            </TouchableOpacity>
            
        </View>

    </View>
  );
}
import React from "react";
import { View,  Text, Image} from "react-native";

import COLORS from "../../consts/colors";
import Logo from "../../../assets/plant5.png";
export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('WelcomeHome')
  }, 3000);
  return (
    <View style={{
      backgroundColor: COLORS.white, 
      width: '100%',
      height: '100%'
      }}>
      <Image source={Logo} style={{
        height: '30%',
        width: '50%',
        alignSelf: 'center',
        marginTop: '50%',
      }}></Image>
      <Text style={{
        fontSize: 30,
        marginLeft: '30%',
        fontWeight: "bold",
        color: COLORS.green

      }}>
        Matka Wala
      </Text>
    </View>
  )
}
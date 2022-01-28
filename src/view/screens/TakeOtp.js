import React from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { showMessage} from "react-native-flash-message";

// importing styles 
import CustomButton from "../components/customButton";
import COLORS from "../../consts/colors";
import MatComIcons from "react-native-vector-icons/MaterialCommunityIcons"
export default function TakeOtp({navigation}, userNumber){
  const [IsValidated, setIsValidated] = React.useState(1)
    return (
      <View
      showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <MatComIcons name="arrow-left" size={30} onPress={() => navigation.goBack()} style={{marginTop: 45}} />
        {IsValidated==0?
        <View>
        <Text style={{alignSelf: 'center', fontSize: 20, marginTop: '50%'}}>
          Please Enter The OTP
        </Text>
        <TextInput
             style={{
              marginHorizontal: '5%',
              marginTop: 10,
              height: 50,
              padding: 10,
              borderWidth: 1,
              backgroundColor: COLORS.white,
              borderColor: COLORS.dark
             }}
             keyboardType="numeric"
             maxLength={10}
             defaultValue={userNumber}
             placeholder="Enter the OTP"/>
              <View style= {{flexDirection: 'row', marginLeft: '1%', marginBottom: 45}}>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> alert('Integrate payment systems first')}>
                    <CustomButton size="large" name="Verify"/>
                </TouchableOpacity>
            </View>
        </View>
        :
        <>
<Text style={{alignSelf:'center', marginTop: "40%", fontSize: 20, marginHorizontal: "10%"}}>
          Your account has been successfully verfied.
          Press continue to shop
        </Text>
        <View style= {{flexDirection: 'row', marginLeft: '1%', marginBottom: 45}}>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> navigation.navigate('Home')}>
                    <CustomButton size="large" name="Continue"/>
                </TouchableOpacity>
            </View>
        </>
        }
        
      </View>
    );
  }
  
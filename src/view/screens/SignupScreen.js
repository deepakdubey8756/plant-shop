import React from "react";
import {View, Text, TextInput, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import { showMessage} from "react-native-flash-message";

// importing styles 
import styleSignup from '../styles/styleSignup';
import CustomButton from "../components/customButton";
import COLORS from "../../consts/colors";

export default function SignupScreen({navigation}){
  const [userEmail, setUserEmail] = React.useState('')
  const [isEmailValid, setEmailValid] = React.useState(0)
  const [userNumber, setUserNumber] = React.useState('')
  const [userfName, setUserfName] = React.useState('')
  const [userLname, setUserLname] = React.useState('')
  const handleEmailValidation=() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(userEmail) === false) {
      showMessage({
        message: "InValid Email",
        description: "Please input correct email formate",
        type: "danger",
        icon: "danger"
      });
  }
    else {
      setEmailValid(1)
  }
  };
  // const handleNumberValidation = () => {
  //   if(userNumber.length ==10){
  //     setPhoneValid(1);
 
  //   }
  //   else{
  //     setPhoneValid(0);
  //     showMessage({
  //       message: "InValid Number",
  //       description: "Please enter valid number. Delete void spaces if any",
  //       type: "danger",
  //       icon: "danger"
  //     });
  //   }
  // }

  const handleSingUp = () => {
    if (userNumber.length !== 10){
      showMessage({
        message: "InValid Number",
        description: "Please enter valid number. Delete void spaces if any",
        type: "danger",
        icon: "danger"
      });
    }
    else if (isEmailValid==0){
      showMessage({
        message: "InValid Email",
        description: "Please enter valid email adress",
        type: "danger",
        icon: "danger"
      });
    }
    else if(userfName.length==0 && userLname.length==0){
      showMessage({
        message: "InValid Name",
        description: "Please enter your name",
        type: "danger",
        icon: "danger"
      });
    }
    else {
      navigation.navigate('takeOtp')
    }
    }

    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={styleSignup.topNav}>
          <View style={styleSignup.skipOption}>
            <Pressable onPress={()=> navigation.navigate('Home')}>
            <Text style={styleSignup.skipOptionText}>Skip</Text>
            </Pressable>
          </View>
          <View style={styleSignup.signupHeader}>
            <Text style={styleSignup.signupHeaderText}>SignUp</Text>
          </View>
          <Pressable
          onPress={()=> navigation.navigate('signUp')}
          style={styleSignup.loginOption}>
            <Text style={styleSignup.loginOptionText}>Login</Text>
          </Pressable>
        </View>


            <Text style={[styleSignup.topicHeading]}>
               First Name
            </Text>
            <TextInput style={[styleSignup.topicDetails]} 
            onChangeText={text => setUserfName(text)}
            placeholder="Enter your first name"/>

            <Text style={[styleSignup.topicHeading]}>
               Last Name
            </Text>
            <TextInput style={[styleSignup.topicDetails]} 
            onChangeText={text => setUserLname(text)}
            placeholder="Enter your last name"/>


{/* Email Verifications */}
            <Text style={[styleSignup.topicHeading]}>
               Email
            </Text>
            <TextInput
             style={[styleSignup.topicDetails]}
             placeholder="Your Email"
             onChangeText={text=> setUserEmail(text)}
             defaultValue={userEmail}
             onSubmitEditing={()=> handleEmailValidation()}/>
{/* Phone Verifications */}
            <Text style={[styleSignup.topicHeading]}>
               Phone Number
            </Text>
            <TextInput
             style={[styleSignup.topicDetails]}
             keyboardType="numeric"
             onChangeText={number=> setUserNumber(number)}
             maxLength={10}
             defaultValue={userNumber}/>


{/* Buttons */}
            <View style= {{flexDirection: 'row', marginLeft: '1%', marginBottom: 45}}>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=> handleSingUp()}>
                    <CustomButton size="large" name="Continue"/>
                </TouchableOpacity>
            </View>

      </ScrollView>
    );
  }
  
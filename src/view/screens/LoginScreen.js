import React from "react";
import {View, Text, TextInput, Pressable} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
// importing styles 
import StyleLogin from '../styles/styleLogin';
import CustomButton from "../components/customButton";
import COLORS from "../../consts/colors";

export default function LoginScreen({navigation}){
    const edges = useSafeAreaInsets();
    return (
      <View
        style={{
          paddingTop: edges.top + 50,
          backgroundColor: COLORS.white,
          width: "100%",
          height: "100%",
        }}
      >
        <View style={StyleLogin.topNav}>
          <View style={StyleLogin.skipOption}>
            <Pressable onPress={()=> navigation.navigate('Home')}>
            <Text style={StyleLogin.skipOptionText}>Skip</Text>
            </Pressable>
          </View>
          <View style={StyleLogin.signupHeader}>
            <Text style={StyleLogin.signupHeaderText}>Login</Text>
          </View>
          <Pressable
          onPress={()=> navigation.navigate('signUp')}
          style={StyleLogin.loginOption}>
            <Text style={StyleLogin.loginOptionText}>SignUp</Text>
          </Pressable>
        </View>
         {/* this contains search icons */}
         <View style={StyleLogin.searchContainer}>
          <TextInput
            style={StyleLogin.searchInput}
            placeholder="Email"
          ></TextInput>
          <TextInput
            style={StyleLogin.searchInput}
            placeholder="Password"
          ></TextInput>
        </View>
        <View>
        <CustomButton name="login" size="large"></CustomButton>
        <Text style={StyleLogin.forgPass}>Forgot Your Password ?</Text>
        </View>
      </View>
    );
  }
  
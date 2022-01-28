import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/view/screens/HomeScreen';
import DetailsSceeen from './src/view/screens/DetailsScreen';
import {StatusBar} from 'react-native';
import COLORS from './src/consts/colors';
import SplashScreen from './src/view/screens/SplashScreen';
import WelcomeHome from './src/view/screens/WelcomeHome';
import LoginScreen from './src/view/screens/LoginScreen';
import userData from './src/view/screens/UserData';
import ShoppingCart from './src/view/screens/ShoppingCart';
import SignUp from './src/view/screens/SignupScreen';
import OrderLists from './src/view/screens/OrderLists';
import HelpDesk from './src/view/screens/HelpDesk';
import UserDetails from './src/view/screens/UserDetails';
import AboutUs from './src/view/screens/AboutUs';
import Checkout from './src/view/screens/Checkout';
import Congratulation from './src/view/screens/Congratulations';
import TrackOrder from './src/view/screens/OrderTrack'
import FlashMessage from "react-native-flash-message";
import TakeOtp from "./src/view/screens/TakeOtp"

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.green} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeHome" component={WelcomeHome} />
        <Stack.Screen name="shoppingCart" component={ShoppingCart} />
        <Stack.Screen name="userData" component={userData} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="helpDesk" component={HelpDesk} />
        <Stack.Screen name="orderList" component={OrderLists} /> 
        <Stack.Screen name="orderTrack" component={TrackOrder} /> 
        <Stack.Screen name="userDetails" component={UserDetails} />
        <Stack.Screen name="checkOut" component={Checkout} />
        <Stack.Screen name="congratulations" component={Congratulation} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} /> 
        <Stack.Screen name="signUp" component={SignUp}/>
        <Stack.Screen name="takeOtp" component={TakeOtp} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
};

export default App;
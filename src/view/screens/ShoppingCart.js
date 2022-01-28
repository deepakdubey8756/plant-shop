import React from 'react';
import {View, Text, TouchableOpacity, Pressable, FlatList, Image, Touchable} from 'react-native';
import styleCart from '../styles/styleCart'
import AntDesign from 'react-native-vector-icons/AntDesign'
import cartProd from '../../consts/cartProd';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../components/customButton';
import plant2 from "../../../assets/plant1.jpg"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';

export default  function ShoppingCart({navigation}){
    const Card = ({product}) => {
        return (
                <View style={styleCart.cartContainer}>
                  <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', product)}>
                    <Image source={plant2} style={styleCart.cartImage}></Image>
                    </TouchableOpacity>
                    <View>
                    <Text numberOfLines={1} style={styleCart.cartName}>
                        Plant Alora
                    </Text>
                    <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 15
                }}>
               {product.quantity} combos
              </Text>
              <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>

            </View>
            <View style={{flexDirection: 'row'}}>
            <FontAwesome name='rupee' size={20} style={{marginLeft: 10, marginTop: 6, color: COLORS.green}}/>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.green}}>
             {product.price}
            </Text>
            </View>
            </View>
                    </View>
                </View>
        );
      };
    return (
        <View style={{height: '100%',
            width:"100%",
            backgroundColor: 'white',
            }}> 
      <ScrollView
      showsVerticalScrollIndicator={false} 
      style={{marginTop: 30}}>
            <View style={styleCart.cartHeadingContainer}>
            <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={38} style={{marginLeft: '5%'}}/>
            </Pressable>
            <Text style={styleCart.cartHeading}>
                My Cart
            </Text>
            </View>
      {cartProd.map((item) => (
                  <Card product={item} />
                ))}
      <View style={styleCart.bottomContainer}>
          <View style={styleCart.totalPrice}>
            <Text style={{fontSize: 20}}>
              Total Price
            </Text>
            <Text style={{marginTop: 5, fontSize: 30}}>
            <View style={{flexDirection: 'row'}}>
            <FontAwesome name='rupee' size={20} style={{marginLeft: 10, marginTop: 6, color: COLORS.green}}/>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.green}}>
             600
            </Text>
            </View>
            </Text>
            </View>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('checkOut')}>
              <CustomButton size='small' name='Checkout'/>
            </TouchableOpacity>
      </View>
      </ScrollView>
        </View>
    )
};
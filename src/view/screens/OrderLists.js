import React from 'react';
import {View, Text, TouchableOpacity, Pressable, FlatList, Image, Touchable} from 'react-native';
import styleOrder from '../styles/styleOrders'
import AntDesign from 'react-native-vector-icons/AntDesign'
import cartProd from '../../consts/cartProd';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../components/customButton';
import plant1 from '../../../assets/plant1.jpg';
export default  function orderList({navigation}){
    const Card = ({product}) => {
        return (
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('orderTrack')}>
                <View style={styleOrder.cartContainer}>
                    <Image source={plant1} style={styleOrder.cartImage}></Image>
                    <View>
                    <Text numberOfLines={1} style={styleOrder.cartName}>
                        {product.name}
                    </Text>
                   <View style={{display: 'flex', flexDirection: 'row'}}>
                   <Text style={{alignSelf: 'center', fontSize: 18, marginLeft:'5%'}}>
                        {product.quantity} Combos
                    </Text>
                {product.isDelevered==true? <>
                    <Text style={{alignSelf: 'center', fontSize: 15, marginLeft:'10%', color: 'green'}}>
                        Dlevered
                    </Text>
                </>:
                <>
                <Text style={{alignSelf: 'center', fontSize: 15, marginLeft:'7%', color:'red'}}>
                        Yet to delever
                </Text>
                </>}
                   </View>
                    </View>
                </View>
                    </TouchableOpacity>
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
            <View style={styleOrder.cartHeadingContainer}>
            <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={38} style={{marginLeft: '5%'}}/>
            </Pressable>
            <Text style={styleOrder.cartHeading}>
                My orders
            </Text>
            </View>
      {cartProd.map((item) => (
                  <Card product={item} />
                ))}
      </ScrollView>
        </View>
    )
};  
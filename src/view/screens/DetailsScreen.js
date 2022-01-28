import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import COLORS from '../../consts/colors';
import plant4 from '../../../assets/plant4.jpg';
import {showMessage} from "react-native-flash-message";

// importing slider
const DetailsScreen = ({navigation, route}) => {
  const product = route.params;
  const [prodQuant, setProdQuant] = useState(1)
  const [isValid, setIsValid] = useState(1)

  function handleNav(){
    if (isValid==0){
      navigation.navigate('LoginScreen')
    }
    else{
        navigation.navigate('shoppingCart')
      
    }
  }
  function HandleQuant(parameter){
        if (parameter == 0){
          if(prodQuant < 2){
            showMessage({
              message: "Lowest quantity",
              description: "Item is aleaready at least",
              type: "warning",
              icon: "warning"
            });
          }
          else{
              setProdQuant(prodQuant-1)
          }
        }
        else{
          setProdQuant(prodQuant+1)
        }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} onPress={()=> handleNav()} />
      </View>
      <View style={style.imageContainer}>
        <Image source={plant4} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{product['prodName']}</Text>
          <View style={style.priceTag}>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <FontAwesome name='rupee' size={20} style={{marginLeft: 3, marginTop: 2}}/>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {product['price']}
            </Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {product['aboutProd']}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text onPress={() => HandleQuant(0)}
                style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                {prodQuant}
              </Text>
              <View style={style.borderBtn}>
                <Text onPress={()=> HandleQuant(1)}
                 style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                onPress={()=>handleNav()}
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Add to cart
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.65,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
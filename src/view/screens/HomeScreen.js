// Importing important stuffs
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  ScrollView
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../consts/colors';
import category from '../../consts/category';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import plant1 from "../../../assets/plant1.jpg"
import products from '../../consts/product';

// finding dimensions
const width = Dimensions.get('window').width / 2 - 30;


// main homeScreen functions
const HomeScreen = ({navigation}) => {

const [catergoryIndex, setCategoryIndex] = React.useState(0);


function handleCatItems(index, item){
  setCategoryIndex(index)
}


  // constant to return each category

  const CategoryList = () => {
    return (
      <ScrollView
      horizontal={true}
      contentContainerStyle={style.categoryContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
        {category.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => handleCatItems(index, item)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({product}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', product)}>
        <View style={style.card}>
          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant1}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 9}}>
            {product['prodName']}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 2,
            }}>
            <View style={{flexDirection: 'row'}}>
            <FontAwesome name='rupee' size={20} style={{marginLeft: 3, marginTop: 2}}/>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {product['price']}
            </Text>
            </View>

            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
               onPress={()=> alert('server is  currently down')}
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 30, color: COLORS.green, fontWeight: 'bold'}}>
            Plant Shop
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate('shoppingCart')}>
        <Icon name="shopping-cart" size={28} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('userData')} >
        <MatComIcons name="account-circle-outline" size={38}/>
        </Pressable>
      </View>
      <View style={{marginTop:10, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginHorizontal: 10}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
       <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={products}
        renderItem={({item}) => {
              return  <Card product={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    marginTop: 10,
    marginBottom: 10,
    height: 40

  },
  categoryText: {fontSize: 18, color: 'grey', fontWeight: 'bold', marginLeft: 15},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderColor: COLORS.green,
  },
  card: {
    height: 180,
    backgroundColor: COLORS.white,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth:1,
    borderColor: COLORS.green
  },
  header: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:COLORS.dark,
    borderWidth:1
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;

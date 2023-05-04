import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Home = ({}) => {
  const items = useSelector(state => state.post);
  const navigation = useNavigation();
  return (
    <ScrollView nestedScrollEnabled>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '800',
            color: 'blue',
            marginTop: 10,
            marginLeft: 20,
          }}>
          OLX Clone
        </Text>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 30,
            borderWidth: 1,
            borderRadius: 10,
            width: '90%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{width: '85%', marginLeft: 10}}
            placeholder="Search Item Here"
          />
          <Image
            source={require('../images/search.png')}
            style={{width: 24, height: 24}}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            color: 'black',
            fontWeight: '600',
            marginTop: 40,
          }}>
          What are you looking for?
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            numColumns={3}
            data={[
              {title: 'Cars', icon: require('../images/car.png')},
              {title: 'Bikes', icon: require('../images/bike.png')},
              {title: 'Laptops', icon: require('../images/laptop.png')},
              {title: 'Mobiles', icon: require('../images/phone.png')},
              {title: 'House', icon: require('../images/house.png')},
              {title: 'Zameen', icon: require('../images/zameen.png')},
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('window').width / 3,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'silver',
                    margin: 2,
                  }}
                  onPress={() => {
                    navigation.navigate('Itemsbycategory', {
                      category: item.title,
                    });
                  }}>
                  <Image source={item.icon} style={{height: 80, width: 80}} />
                  <Text style={{marginTop: 0, fontSize: 16, fontWeight: '600'}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: 'black',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Posted By Others
        </Text>
        <FlatList
          data={items.data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 100,
                  backgroundColor: 'white',
                  marginTop: 5,
                  alignSelf: 'center',
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 80, width: 80, marginLeft: 20}}
                />
                <View
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: '600', marginLeft: 10}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 18, fontWeight: '600', marginLeft: 10}}>
                    {item.desc}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      marginLeft: 10,
                      color: 'green',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

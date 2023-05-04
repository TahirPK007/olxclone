import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const Itemsbycategory = () => {
  const [itemslist, setitemslist] = useState([]);
  const items = useSelector(state => state.post);
  const route = useRoute();
  useEffect(() => {
    let tempdata = items.data;
    let temp = [];
    tempdata.map(item => {
      if (item.category == route.params.category) {
        temp.push(item);
      }
    });
    setitemslist(temp);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Items by cateogry</Text>
      </View>
      <View>
        <FlatList
          data={itemslist}
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
    </View>
  );
};

export default Itemsbycategory;

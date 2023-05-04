import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const Search = () => {
  const [text, settext] = useState('');
  const items = useSelector(state => state.post);
  const [itemslist, setitemslist] = useState(items.data);

  const filterlist = txt => {
    let templist = items.data;
    let temp = templist.filter(item => {
      return item.name.toLowerCase().match(txt.toLowerCase());
    });
    setitemslist(temp);
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <TextInput
          placeholder="enter to search"
          value={text}
          onChangeText={txt => {
            settext(txt);
            filterlist(txt);
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>search</Text>
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

export default Search;

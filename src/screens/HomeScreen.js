import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Add from '../tabs/Add';
import Wishlist from '../tabs/Wishlist';
import User from '../tabs/User';

const HomeScreen = () => {
  const [selectedtab, setselectedtab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedtab == 0 ? (
        <Home />
      ) : selectedtab == 1 ? (
        <Search />
      ) : selectedtab == 2 ? (
        <Add
          onPost={() => {
            setselectedtab(0);
          }}
        />
      ) : selectedtab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View style={styles.bottomtabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedtab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: selectedtab == 0 ? 'blue' : 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedtab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: selectedtab == 1 ? 'blue' : 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedtab(2);
          }}>
          <Image
            source={require('../images/add.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: selectedtab == 2 ? 'blue' : 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedtab(3);
          }}>
          <Image
            source={require('../images/wishlist.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: selectedtab == 3 ? 'blue' : 'black',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedtab(4);
          }}>
          <Image
            source={require('../images/user.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: selectedtab == 4 ? 'blue' : 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomtabs: {
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

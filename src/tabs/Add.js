import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addPost} from '../redux/postSlice';

const Add = ({onPost}) => {
  const [photo, setphoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 197543,
        height: 1280,
        type: 'image/jpeg',
        uri: '',
        width: 980,
      },
    ],
  });
  const [price, setprice] = useState('');
  const [name, setname] = useState('');
  const [desc, setdesc] = useState('');
  const [selectedcategory, setselectedcategory] = useState(0);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        opencamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const opencamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setphoto(result);
    }
  };

  const dispatch = useDispatch();
  const additem = () => {
    dispatch(
      addPost({
        name: name,
        price: price,
        desc: desc,
        image: photo.assets[0].uri,
        category:
          selectedcategory == 0
            ? 'car'
            : selectedcategory == 1
            ? 'bike'
            : 'laptop',
      }),
    );
    onPost();
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, color: 'black'}}>Add Item</Text>
        </View>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 200,
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={() => {
            requestCameraPermission();
          }}>
          {photo.assets[0].uri == '' ? (
            <Image
              source={require('../images/placeholder.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ) : (
            <Image
              source={{uri: photo.assets[0].uri}}
              style={{width: '100%', height: '100%'}}
            />
          )}
        </TouchableOpacity>
        <TextInput
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 50,
            paddingLeft: 20,
          }}
          placeholder="Enter Name"
          value={name}
          onChangeText={txt => setname(txt)}
        />
        <TextInput
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: 20,
          }}
          placeholder="Enter Description"
          value={desc}
          onChangeText={txt => setdesc(txt)}
        />
        <TextInput
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: 20,
          }}
          placeholder="Enter Price"
          keyboardType="number-pad"
          value={price}
          onChangeText={txt => setprice(txt)}
        />
        <Text
          style={{color: 'black', marginLeft: 20, marginTop: 20, fontSize: 20}}>
          Category
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: 20,
            justifyContent: 'center',
            borderColor: selectedcategory == 0 ? 'blue' : 'black',
          }}
          onPress={() => {
            setselectedcategory(0);
          }}>
          <Text>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: 20,
            justifyContent: 'center',
            borderColor: selectedcategory == 1 ? 'blue' : 'black',
          }}
          onPress={() => {
            setselectedcategory(1);
          }}>
          <Text>Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            paddingLeft: 20,
            justifyContent: 'center',
            borderColor: selectedcategory == 2 ? 'blue' : 'black',
          }}
          onPress={() => {
            setselectedcategory(2);
          }}>
          <Text>Laptop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 55,
            alignSelf: 'center',
            marginTop: 50,
            borderRadius: 10,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 100,
          }}
          onPress={() => {
            additem();
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Post Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;

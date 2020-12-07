import React, { useState } from 'react';
import { Button, TextInput, Text, View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import {firebase}  from '../firebase/config';
import { LogBox } from 'react-native';
import { Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const postsRef = firebase.firestore().collection('posts');

LogBox.ignoreLogs(['Setting a timer']);

function optionsForm({route}) {
  let { checkedArray } = route.params;

  const navigation = useNavigation();
  const [location, setLocation] = useState("");
  const [theme, setTheme] = useState("");
  const [attendees, setAttendees] = useState(0);
  const [date, setDate] = useState('Sun, 19 - Dec - 2020');
  const [specialRequest, setSpecialRequest] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    date = (date.toString()).split(' ', 4)
    console.log(date[0], date[2], date[1], date[3]);
    setDate(`${date[0]}, ${date[2]} - ${date[1]} - ${date[3]}`);
    hideDatePicker();
  };
  const uploadToFirebase = (blob) => {

    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref();
      storageRef
        .child(`posts/${title}.jpg`)
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then((snapshot) => {
          blob.close();
          resolve(storageRef.child(`posts/${title}.jpg`).getDownloadURL());
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  const updateHandler = () => {
    uriToBlob(image)
      .then((blob) => uploadToFirebase(blob))
      .then((url) => {
        postsRef
          .add({
            url,
            title,
          })
          // .then(() => navigation.goBack())
          .catch((error) => console.error('Error While Updating', error));
      });
  };
  const [image, setImage] = useState('https://via.placeholder.com/150');
  const [title, setTitle] = useState('image printer on cake');
	
const uriToBlob = (uri) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			// return the blob
			resolve(xhr.response);
		};

		xhr.onerror = function () {
			// something went wrong
			reject(new Error('uriToBlob failed'));
		};
		// this helps us get a blob
		xhr.responseType = 'blob';
		xhr.open('GET', uri, true);

		xhr.send(null);
	});
};
	const imageHandler = async () => {
		if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!!!!!!!!');
			}
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			});
	
	
			if (!result.cancelled) {
				setImage(result.uri);
		
			}
		}
	};

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Invalid input",
      "There are empty fields",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (

    <View>
      <Icon
        name='map-marker'
        size={24}
        color='grey'
      />
      <TextInput
        placeholder='Party Location'
        onChangeText={text => setLocation(text)}

      />
      <Icon
        name='birthday-cake'
        size={24}
        color='grey'
      />
      <TextInput
        placeholder='Party Theme'
        onChangeText={text => setTheme(text)}

      />
      <Icon
        name='users'
        size={24}
        color='grey'
      />
      <TextInput
        required
        onChangeText={text => setAttendees(text)}
        placeholder='Number of attendees'

      />

      <Icon
        name='calendar-o'
        size={24}
        color='grey'
      />
      <Text>
        {date}
      </Text>
      <Button title="Book a Day" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Icon
        name='comment'
        size={24}
        color='grey'
      />
      <TextInput
        placeholder='Special Requests'
        onChangeText={text => setSpecialRequest(text)}

      />
      <TouchableOpacity onPress={imageHandler}>
        <Text>Upload an Image To print on cake</Text>
        <Image style={styles1.item} source={{ uri: image }} />
      </TouchableOpacity>

      <Button title='Submit' onPress={() => {
        if (attendees && location && theme) {
          updateHandler()
          navigation.navigate('FinalPage',{
            location,
            theme,
            attendees,
            specialRequest,
            date,
            image,
            checkedArray
          })
        }
        else {
          createTwoButtonAlert();
        }
      }}
      />

    </View>

  );
}

const styles1 = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginHorizontal: 16
	},
	item: {
		width: 50,
		height: 50
	},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: '100%',
    marginTop: 20,
  },
});

export default optionsForm;
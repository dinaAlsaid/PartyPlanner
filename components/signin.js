import React, { useState } from 'react';
import { Button, TextInput, View ,Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


function signin(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

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
      <TextInput
        textContentType='emailAddress'
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType='email-address'
        required />

      <TextInput
        textContentType='password'
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType='default'
        secureTextEntry />

      <Button title='Sign in' onPress={() => {
        console.log(email, password)
        if (email && password) {
          navigation.navigate('PartyOptions')
        } else {
          createTwoButtonAlert();
        }
      }}
      />

    </View>
  );
}

export default signin;
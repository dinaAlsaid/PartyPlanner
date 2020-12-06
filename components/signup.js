import React, { useState } from 'react';
import { TextInput, View , Button, Alert} from 'react-native';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

function signUp(props) {
  const [name ,setName]=useState('');
  const [password, setPassword]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
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
        textContentType='name'
        placeholder='Name' 
        autoCapitalize={'none'} 
        onChangeText={text=> setName(text)} 
        autoCorrect={false} 
        keyboardType='default' />
      <TextInput
        textContentType='password'
        placeholder='Password' 
        autoCapitalize={'none'} 
        onChangeText={password=> setPassword(password)} 
        autoCorrect={false} 
        keyboardType='default' 
        secureTextEntry />

      <TextInput
        textContentType='telephoneNumber'
        placeholder='Phone number' 
        autoCapitalize={'none'} 
        onChangeText={text=> setPhone(text)} 
        autoCorrect={false} 
        keyboardType='number-pad' />

      <TextInput
        textContentType='emailAddress'
        placeholder='Email' 
        autoCapitalize={'none'}  
        onChangeText={text=> setEmail(text)}
        autoCorrect={false} 
        keyboardType='email-address' />

      <Button title='Sign up' onPress={() => {
        console.log(email, password)
        if (name&&password&&phone&&email) {
          navigation.navigate('PartyOptions')
        } else {
          createTwoButtonAlert();
        }
      }}
      />

    </View>
  );
}

export default signUp;
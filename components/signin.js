import React, { useState } from 'react';
import { Button, TextInput, View ,Alert, ImageBackground,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
const image = { uri: "https://i.pinimg.com/564x/33/7c/3b/337c3be72f3877ef7f35f4fd5328f301.jpg" };


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

      <Button title='Sign in' color='#93e4d0' onPress={() => {
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
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,

  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",  
  },
});
export default signin;